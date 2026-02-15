import { expect, it, describe, beforeEach } from 'vitest';
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { FetchUserCheckInsHistoryUseCase } from './fetch-user-check-ins-history';
import { GetUserMetricsUseCase } from './get-user-metrics';

// Unity Test
let checkInsRepository: InMemoryCheckInsRepository;
let sut: GetUserMetricsUseCase;

// TDD - Test Driven Development
// 1. Write the test first and make it fail (Red)
// 2. Write the code to pass the test and make it pass (Green)
// 3. Refactor the code (Refactor)
// 4. Repeat

// Pensar nos cenários de teste o mais detalhadamente possível

describe("Get User Metrics Use Case", () => {
  
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository();
    sut = new GetUserMetricsUseCase(checkInsRepository);   
  });

  it("should be able to get check ins count from metrics", async () => {
    await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-1',
    });

    await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-2',
    });

    const { checkInsCount } = await sut.execute({
      userId: 'user-1',
    });

    expect(checkInsCount).toEqual(2);
  });
});