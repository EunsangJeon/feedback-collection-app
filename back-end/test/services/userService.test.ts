import mongoose from 'mongoose';
import ListUserService from '../../src/services/interfaces/ListUserService';
import { TEST_MONGODB_URL } from '../../src/config/keys';
import User from '../../src/models/userModel';
import userService from '../../src/services/userService';

mongoose.connect(TEST_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('addUser function', () => {
  let UserService: ListUserService;

  beforeAll(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('has a module', () => {
    expect(User).toBeDefined();
  });

  it('injects model "User" to userService', async () => {
    UserService = userService(User);
    expect(UserService).toBeDefined();
  });

  it('add new user using googeAuthAddUser', async () => {
    await UserService.googleAuthAddUser(
      'test_user',
      (err?: string | Error | undefined, user?: typeof User, info?: string) => {
        expect(info).toBe('new');
      }
    );
  });

  it('add duplicate user using googeAuthAddUser', async () => {
    await UserService.googleAuthAddUser(
      'test_user',
      (err?: string | Error | undefined, user?: typeof User, info?: string) => {
        expect(info).toBe('existing');
      }
    );
  });
});
