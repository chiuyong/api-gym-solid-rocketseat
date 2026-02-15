import { expect, it, describe, beforeEach } from 'vitest';
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { FetchUserCheckInsHistoryUseCase } from './fetch-user-check-ins-history';

// Unity Test
let checkInsRepository: InMemoryCheckInsRepository;
let sut: FetchUserCheckInsHistoryUseCase;

// TDD - Test Driven Development
// 1. Write the test first and make it fail (Red)
// 2. Write the code to pass the test and make it pass (Green)
// 3. Refactor the code (Refactor)
// 4. Repeat

// Pensar nos cenários de teste o mais detalhadamente possível

describe("Fetch User Check Ins History Use Case", () => {
  
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository();
    sut = new FetchUserCheckInsHistoryUseCase(checkInsRepository);   
  });

  it("should be able to fetch user check ins history", async () => {
     await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-1',
    });

    await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-2',
    });

    const { checkIns } = await sut.execute({
      userId: 'user-1',
      page: 1,
    });

    expect(checkIns).toHaveLength(2);
    expect(checkIns).toEqual([
      expect.objectContaining({
        gym_id: 'gym-1',
      }),
      expect.objectContaining({
        gym_id: 'gym-2',
      }),
    ])
  });

  it("should be able to fetch paginated user check ins history", async () => {
    for (let i = 1; i <= 22; i++) {
      await checkInsRepository.create({
        user_id: 'user-1',
        gym_id: `gym-${i}`,
      });
    }

    const { checkIns } = await sut.execute({
      userId: 'user-1',
      page: 2,
    });

    expect(checkIns).toHaveLength(2);
    expect(checkIns).toEqual([
      expect.objectContaining({
        gym_id: 'gym-21',
      }),
      expect.objectContaining({
        gym_id: 'gym-22',
      }),
    ])
  });
});