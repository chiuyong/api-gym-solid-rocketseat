import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';

describe('Profile Controller (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to get user profile', async () => {
    const { token } = await createAndAuthenticateUser(app);
    const profileResponse = await request(app.server).get('/me').set('Authorization', `Bearer ${token}`).send();

    expect(profileResponse.statusCode).toEqual(200);
    expect(profileResponse.body.user).toEqual(expect.objectContaining({
      email: 'john.doe@example.com',
    }));
  });
});
