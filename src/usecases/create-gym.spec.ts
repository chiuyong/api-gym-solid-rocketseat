import { expect, test, it, describe, beforeEach } from 'vitest';
import { RegisterUseCase } from './register';
import { compare } from 'bcryptjs';
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { CreateGymUseCase } from './create-gym';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { Prisma } from '@generated/prisma/client';

// Unity Test
let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase; // System Under Test

describe("Create Gym Use Case", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });

  it("should be able to create a new gym", async () => {
    const { gym } = await sut.execute({
      title: 'Gym 1',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    expect(gym.id).toEqual(expect.any(String));
    expect(gym.title).toBe('Gym 1');
    expect(gym.description).toBeNull();
    expect(gym.phone).toBeNull();
    expect(gym.latitude).toEqual(expect.any(Prisma.Decimal));
    expect(gym.longitude).toEqual(expect.any(Prisma.Decimal));
    expect(gym.created_at).toEqual(expect.any(Date));
  });
  
});