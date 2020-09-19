import GoogleAuthAddUser from 'services/interfaces/GoogleAuthAddUser';
import User from './models/userModel';
import userService from './services/userService';

export const { googleAuthAddUser, addUser } = userService(User);
