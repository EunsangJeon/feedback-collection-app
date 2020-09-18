import User from './models/userModel';
import userService from './services/userService';

const UserService = userService(User);

export default UserService.googleAuthAddUser;
