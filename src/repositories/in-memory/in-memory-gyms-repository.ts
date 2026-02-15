import { Prisma, type Gym } from "@generated/prisma/client";
import type { FindManyNearbyParams, GymsRepository } from "../gyms-repository";
import type { GymCreateInput } from "@generated/prisma/models";
import { randomUUID } from "node:crypto";
import { getDistanceBetweenCoordinates } from "@/utils/get-distance-between-coordinates";

class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = [];

  async findById (id: string) {
    const gym = this.items.find(gym => gym.id === id);
    return gym || null;
  }

  async create (data: GymCreateInput) {
    const gym = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description ?? null, // Prisma não aceita undefined, então usamos null
      phone: data.phone ?? null, // Prisma não aceita undefined, então usamos null
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
      created_at: new Date(),
    };

    this.items.push(gym);
    return gym;
  }

  async searchMany(query: string, page: number) {
    return this.items.filter(gym => gym.title.includes(query))
      .slice((page - 1) * 20, page * 20);
  }

  async findManyNearby(params: FindManyNearbyParams, page: number) {
    return this.items.filter(gym => {
      const distance = getDistanceBetweenCoordinates(
        { latitude: params.latitude, longitude: params.longitude },
        { latitude: gym.latitude.toNumber(), longitude: gym.longitude.toNumber() },
      );

      return distance < 10; // 10 kilometers
    }).slice((page - 1) * 20, page * 20);
  }
}

export { InMemoryGymsRepository };