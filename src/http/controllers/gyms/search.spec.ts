import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';

describe('Search Gym Controller (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to search for gyms by title', async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'Gym 1',
      description: 'Gym 1 description',
      phone: '1234567890',
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'Gym 2',
      description: 'Gym 2 description',
      phone: '1234567890',
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    const searchGymsResponse = await request(app.server).get('/gyms/search').set('Authorization', `Bearer ${token}`).query({
      query: 'Gym 1',
      page: 1,
    }).send();

    expect(searchGymsResponse.statusCode).toEqual(200);
    expect(searchGymsResponse.body.gyms).toHaveLength(1);
    expect(searchGymsResponse.body.gyms).toEqual([
      expect.objectContaining({ title: 'Gym 1' }),
    ]);
  });
});
