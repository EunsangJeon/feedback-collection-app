import request from 'supertest';
import app from '../../src/app';

describe('authRoutes.ts', () => {
  it('get /api/current-user should redirect', async () => {
    const result = await request(app).get('/auth/google').send();
    expect(result.status).toBe(302);
  });
});
