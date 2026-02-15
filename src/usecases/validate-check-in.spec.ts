import { expect, it, describe, beforeEach, afterEach, vi } from 'vitest';
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { ValidateCheckInUseCase } from './validate-check-in';
import { ResourceNotFoundError } from './errors/resource-not-found';
import { LateCheckInValidationError } from './errors/late-check-in-validation-error';

// Unity Test
let checkInsRepository: InMemoryCheckInsRepository;
let sut: ValidateCheckInUseCase;

// TDD - Test Driven Development
// 1. Write the test first and make it fail (Red)
// 2. Write the code to pass the test and make it pass (Green)
// 3. Refactor the code (Refactor)
// 4. Repeat

// Pensar nos cenários de teste o mais detalhadamente possível

describe("Validate CheckIn Use Case", () => {
  
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository();
    sut = new ValidateCheckInUseCase(checkInsRepository);

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });


  it("should be able to validate a check-in", async () => {    
    const checkIn = await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-1',
    });

    const { checkIn: validatedCheckIn } = await sut.execute({ checkInId: checkIn.id });

    expect(validatedCheckIn.id).toEqual(checkIn.id);
    expect(validatedCheckIn.user_id).toEqual(checkIn.user_id);
    expect(validatedCheckIn.gym_id).toEqual(checkIn.gym_id);
    expect(validatedCheckIn.validated_at).not.toBeNull();
    expect(validatedCheckIn.validated_at).toEqual(expect.any(Date));
  });

  it("should not be able to validate a non existing check-in", async () => {
    await expect(async () => 
      sut.execute({ checkInId: 'non-existing-check-in' })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });

  it("should not be able to validate a check-in after 20 minutes of its creation", async () => {
    vi.setSystemTime(new Date(2026, 0, 1, 10, 0, 0));

    const checkIn = await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-1',
    });

    const TWENTY_ONE_MINUTES_IN_MS = 21 * 60 * 1000; // 1000ms = 1s

    vi.advanceTimersByTime(TWENTY_ONE_MINUTES_IN_MS);

    await expect(async () => 
      sut.execute({ checkInId: checkIn.id })
    ).rejects.toBeInstanceOf(LateCheckInValidationError);
  });
});