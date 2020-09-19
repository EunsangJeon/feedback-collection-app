import User from './models/userModel';
import userService from './services/userService';

// eslint-disable-next-line import/prefer-default-export
export const { googleAuthAddUser } = userService(User);
