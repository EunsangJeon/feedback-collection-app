import { VerifyCallback } from 'passport-google-oauth20';
import userModel from '../models/userModel';

const googleAuthAddUser = (User: typeof userModel) => async (
  googleId: string,
  done: VerifyCallback
) => {
  let user;
  try {
    user = await User.findOne({ googleId });
  } catch (err) {
    console.error(err);
  }
  if (user) {
    done(undefined, user, 'existing');
  } else {
    try {
      user = await new User({ googleId }).save();
      done(undefined, user, 'new');
    } catch (err) {
      console.error(err);
    }
  }
};

interface listUserService {
  googleAuthAddUser: CallableFunction;
}

function userService(User: typeof userModel): listUserService {
  return {
    googleAuthAddUser: googleAuthAddUser(User),
  };
}

export default userService;
