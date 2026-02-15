import type { CheckIn } from "@generated/prisma/client";
import type { Prisma } from "@generated/prisma/client";
import type { CheckInsRepository } from "../check-ins-repository";
import { randomUUID } from "node:crypto";
import dayjs from "dayjs";

class InMemoryCheckInsRepository implements CheckInsRepository {
  validate (checkInId: string): Promise<CheckIn> {
    throw new Error("Method not implemented.");
  }
  public items: CheckIn[] = [];

  async create (data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn: CheckIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      created_at: new Date(),
    };

    this.items.push(checkIn);
    return checkIn;
  }

  async findByUserIdOnDate(userId: string, date: Date) {
    const startOfTheDay = dayjs(date).startOf('date');
    const endOfTheDay = dayjs(date).endOf('date');

    const checkinOnSameDate = this.items.find(checkIn => {
      const checkInDate = dayjs(checkIn.created_at);
      const isOnSameDate = checkInDate.isAfter(startOfTheDay) && checkInDate.isBefore(endOfTheDay);
      return checkIn.user_id === userId && isOnSameDate;
    });
    return checkinOnSameDate || null;
  }

  async findManyByUserId(userId: string, page: number) {
    return this.items.filter(checkIn => checkIn.user_id === userId)
      .slice((page - 1) * 20, page * 20);
  }

  async countByUserId(userId: string) {
    return this.items.filter(checkIn => checkIn.user_id === userId).length;
  }

  async findById(checkInId: string) {
    return this.items.find(checkIn => checkIn.id === checkInId) || null;
  }

  async save(checkIn: CheckIn) {
    const checkInIndex = this.items.findIndex(item => item.id === checkIn.id);
    if (checkInIndex >= 0) {
      this.items[checkInIndex] = checkIn;
    }
    
    return checkIn;
  }
}

export { InMemoryCheckInsRepository };