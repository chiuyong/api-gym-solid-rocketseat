import type { User } from "@generated/prisma/client";
import type { UsersRepository } from "../users-repository";
import type { Prisma } from "@generated/prisma/client";
import { randomUUID } from "node:crypto";

class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    };
    this.items.push(user);
    return user;
  }

  async findByEmail(email: string) {
    const user = this.items.find(user => user.email === email);
    return user || null;
  }

   async findById (userId: string): Promise<User | null> {
    const user = this.items.find(user => user.id === userId);
    return user || null;
  }
}

export { InMemoryUsersRepository };