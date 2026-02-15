import request from 'supertest';
import { app } from '@/app';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Register Controller (E2E)', () => {
  beforeEach(async () => {
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be able to register a new user', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    });

    expect(response.status).toEqual(201);
  });
});
