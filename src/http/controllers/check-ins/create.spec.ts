import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';
import { prisma } from '@/lib/prisma';

describe('Create Check-In Controller (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to create a new check-in', async () => {
    const { token } = await createAndAuthenticateUser(app);

    // Cria um gym para teste (Outra forma de criar um gym)
    const gym = await prisma.gym.create({
      data: {
        title: 'Gym 1',
        description: 'Gym 1 description',
        phone: '1234567890',
        latitude: -27.2092052,
        longitude: -49.6401091,
      },
    });

    const createCheckInResponse = await request(app.server).post(`/gyms/${gym.id}/check-ins`).set('Authorization', `Bearer ${token}`).send({
      latitude: -27.2092052,
      longitude: -49.6401091,
    });
    
    expect(createCheckInResponse.statusCode).toEqual(201);
  });
});
