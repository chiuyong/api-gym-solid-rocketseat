import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';

describe('Create Gym Controller (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to create a new gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    const createGymResponse = await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'Gym 1',
      description: 'Gym 1 description',
      phone: '1234567890',
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    expect(createGymResponse.statusCode).toEqual(201);
  });
});
