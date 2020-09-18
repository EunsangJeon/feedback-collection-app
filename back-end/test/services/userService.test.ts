import mongoose from 'mongoose';
import { TEST_MONGODB_URL } from '../../src/config/keys';
import User from '../../src/models/userModel';

mongoose.connect(TEST_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('addUser function', () => {
  beforeAll(async () => {
    await User.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('has a module', () => {
    expect(User).toBeDefined();
  });

  it('addUser function', async () => {
    function callback(
      err?: string | Error | undefined,
      user?: any,
      info?: any
    ): void {
      //
    }
  });
});
