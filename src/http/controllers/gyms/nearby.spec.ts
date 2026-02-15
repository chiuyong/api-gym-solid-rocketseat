import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';

describe('Nearby Gym Controller (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to list nearby gyms', async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'Near Gym',
      description: 'Near Gym description',
      phone: '1234567890',
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'Far Gym',
      description: 'Far Gym description',
      phone: '1234567890',
      latitude: -27.0610928,
      longitude: -49.5229501,
    });

    const nearbyGymsResponse = await request(app.server).get('/gyms/nearby').set('Authorization', `Bearer ${token}`).query({
      latitude: -27.0610928,
      longitude: -49.5229501,
      page: 1,
    }).send();

    expect(nearbyGymsResponse.statusCode).toEqual(200);
    expect(nearbyGymsResponse.body.gyms).toHaveLength(1);
    expect(nearbyGymsResponse.body.gyms).toEqual([
      expect.objectContaining({ title: 'Far Gym' }),
    ]);
  });
});
