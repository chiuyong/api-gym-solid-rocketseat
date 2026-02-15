import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Refresh Token (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to refresh token', async () => {
    // Criar um usuário
    await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    });

    // Autenticar o usuário
    const authResponse = await request(app.server).post('/sessions').send({
      email: 'john.doe@example.com',
      password: '123456',
    });

    const cookies = authResponse.get('Set-Cookie');

    const response = await request(app.server)
    .patch('/token/refresh')
    .set('Cookie', cookies || [])
    .send();

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ token: expect.any(String) });
    expect(response.get('Set-Cookie')).toEqual([expect.stringContaining('refreshToken=')]);
  });
});
