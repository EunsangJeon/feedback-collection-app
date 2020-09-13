import request from 'supertest';
import app from '../src/index';

describe('Test index.ts', () => {
  it('get / should return {hi: there}', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.body.hi).toBe('there');
  });
});
