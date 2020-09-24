import request from 'supertest';
import app from '../../src/app';

describe('authRoutes.ts', () => {
  it('get /auth/google should redirect', async () => {
    const result = await request(app).get('/auth/google').send();
    expect(result.status).toBe(302);
  });
  it('get /auth/google/callback should redirect', async () => {
    const result = await request(app).get('/auth/google/callback').send();
    expect(result.status).toBe(302);
  });
  it('get /auth/google/fail should success', async () => {
    const result = await request(app).get('/auth/google/fail').send();
    expect(result.status).toBe(200);
  });
  it('get /auth/google/logout should success', async () => {
    const result = await request(app).get('/auth/google/logout').send();
    expect(result.status).toBe(200);
  });
});
