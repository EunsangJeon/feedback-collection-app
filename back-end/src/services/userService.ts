import { VerifyCallback } from 'passport-google-oauth20';
import userModel from '../models/userModel';
import ListUserService from './interfaces/ListUserService';

const googleAuthAddUser = (User: typeof userModel) => async (
  googleId: string,
  done: VerifyCallback
) => {
  let user = await User.findOne({ googleId });

  if (user) {
    return done(undefined, user, 'existing');
  }

  user = await new User({ googleId }).save();
  return done(undefined, user, 'new');
};

export default (User: typeof userModel): ListUserService => ({
  googleAuthAddUser: googleAuthAddUser(User),
});
