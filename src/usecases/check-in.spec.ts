import { expect, it, describe, beforeEach, afterEach, vi } from 'vitest';
import { CheckInUseCase } from './check-in';
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { ResourceNotFoundError } from './errors/resource-not-found';
import { Prisma } from '@generated/prisma/client';
import { MaxDistanceError } from './errors/max-distance-error';
import { MaxNumberOfCheckInsError } from './errors/max-number-of-check-ins-error';

// Unity Test
let checkInsRepository: InMemoryCheckInsRepository;
let gymsRepository: InMemoryGymsRepository;
let sut: CheckInUseCase;

// TDD - Test Driven Development
// 1. Write the test first and make it fail (Red)
// 2. Write the code to pass the test and make it pass (Green)
// 3. Refactor the code (Refactor)
// 4. Repeat

// Pensar nos cenários de teste o mais detalhadamente possível

describe("CheckIn Use Case", () => {
  
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository();
    gymsRepository = new InMemoryGymsRepository();
    sut = new CheckInUseCase(checkInsRepository, gymsRepository);

    await gymsRepository.create({
      id: 'gym-1',
      title: 'Gym 1',
      description: '',
      phone: '',
      latitude: -27.2092052,
      longitude: -49.6401091,
      created_at: new Date(),
    });

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });


  it("should be able to check in", async () => {    
    const { checkIn } = await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    expect(checkIn.id).toEqual(expect.any(String));
    expect(checkIn.user_id).toEqual('user-1');
    expect(checkIn.gym_id).toEqual('gym-1');
    expect(checkIn.validated_at).toEqual(null);
    expect(checkIn.created_at).toEqual(expect.any(Date));
  });

  it("should not be able to check in on distant gym", async () => {
    gymsRepository.items.push({
      id: 'gym-2',
      title: 'Gym 2',
      description: 'Gym 2 description',
      phone: '1234567890',
      latitude: new Prisma.Decimal(0),
      longitude: new Prisma.Decimal(0),
      created_at: new Date(),
    });

    await expect(async () => 
      sut.execute({
        userId: 'user-1',
        gymId: 'gym-2',
        userLatitude: -27.2092052,
        userLongitude: -49.6401091,
      })
    ).rejects.toBeInstanceOf(MaxDistanceError);
  });

  it("should not be able to check in on a non existing gym", async () => {    
    await expect(async () => 
      sut.execute({
        userId: 'user-1',
        gymId: 'non-existing-gym',
        userLatitude: 0,
        userLongitude: 0,
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2026, 0, 1, 10, 0, 0));

    await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    await expect(async () => 
      sut.execute({
        userId: 'user-1',
        gymId: 'gym-1',
        userLatitude: -27.2092052,
        userLongitude: -49.6401091,
      })
    ).rejects.toBeInstanceOf(MaxNumberOfCheckInsError);
  });

  it('should be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0));

    await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0));

    const { checkIn } = await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1', 
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    expect(checkIn.id).toEqual(checkIn.id);
    expect(checkIn.user_id).toEqual('user-1');
    expect(checkIn.gym_id).toEqual('gym-1');
    expect(checkIn.validated_at).toEqual(null);
    expect(checkIn.created_at).toEqual(checkIn.created_at);
  });
});