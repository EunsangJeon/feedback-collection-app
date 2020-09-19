/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import mongoose from 'mongoose';
import { TEST_MONGODB_URL } from '../../src/config/keys';
import googleStrategyVerify from '../../src/config/googleStrategyVerify';
import User from '../../src/models/userModel';

mongoose.connect(TEST_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('addUser function', () => {
  let { googleAuthAddUser } = require('../../src/services/userService');
  googleAuthAddUser = jest.fn();

  beforeAll(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('get /auth/google/callback should redirect', async () => {
    await googleStrategyVerify(
      'test-access-token',
      'test-refreshing-token',
      {
        profileUrl: 'test',
        _raw: 'test',
        _json: 'test',
        provider: 'test',
        id: 'test',
        displayName: 'test',
      },
      () => {
        return null;
      }
    );
    expect(googleAuthAddUser).toHaveBeenCalledTimes(0);
  });
});
