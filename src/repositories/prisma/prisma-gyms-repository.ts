import { Prisma, type Gym } from "@generated/prisma/client";
import type { GymCreateInput } from "@generated/prisma/models";
import type { FindManyNearbyParams, GymsRepository } from "../gyms-repository";
import { prisma, schema } from "@/lib/prisma";

export class PrismaGymsRepository implements GymsRepository {
  async findById (id: string) {
    const gym = await prisma.gym.findUnique({
      where: { id },
    });
    return gym || null;
  }
  async create (data: GymCreateInput) {
    const gym = await prisma.gym.create({
      data,
    });
    return gym;
  }
  async searchMany (query: string, page: number) {
    const gyms = await prisma.gym.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      skip: (page - 1) * 20,
      take: 20,
    });
    return gyms || [];
  }
  async findManyNearby ({ latitude, longitude }: FindManyNearbyParams, page: number) {
    const gyms = await prisma.$queryRaw<Gym[]>`
    
    SELECT * FROM ${Prisma.raw(`"${schema}"."gyms"`)}
    WHERE ( 6371 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * sin( radians( latitude ) ) ) ) <= 10
    `;
    return gyms;
  }
}