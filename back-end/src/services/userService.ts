import { VerifyCallback } from 'passport-google-oauth20';
import userModel from '../models/userModel';
import ListUserService from './interfaces/ListUserService';

const googleAuthAddUser = (User: typeof userModel) => async (
  googleId: string,
  done: VerifyCallback
) => {
  let user = await User.findOne({ googleId });

  if (user) {
    done(undefined, user, 'existing');
  } else {
    user = await new User({ googleId }).save();
    done(undefined, user, 'new');
  }
};

export default (User: typeof userModel): ListUserService => ({
  googleAuthAddUser: googleAuthAddUser(User),
});
