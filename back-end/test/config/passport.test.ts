/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import mongoose from 'mongoose';
import request from 'supertest';
import { TEST_MONGODB_URL } from '../../src/config/keys';
import app from '../../src/app';

mongoose.connect(TEST_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('addUser function', () => {
  let { googleAuthAddUser } = require('../../src/index');
  googleAuthAddUser = jest.fn();

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('get /auth/google/callback should redirect', async () => {
    await request(app).get('/auth/google/').send();
    expect(googleAuthAddUser).toHaveBeenCalledTimes(0);
  });
});
