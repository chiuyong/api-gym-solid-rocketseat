import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Authenticate Controller (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to authenticate', async () => {
    // Criar um usuário
    await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    });

    // Autenticar o usuário
    const response = await request(app.server).post('/sessions').send({
      email: 'john.doe@example.com',
      password: '123456',
    });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ token: expect.any(String) });
  });
});
