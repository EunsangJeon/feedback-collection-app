import mongoose from 'mongoose';
import { VerifyCallback } from 'passport-google-oauth20';

const User = mongoose.model('users');

function addUser(googleId: string, done: VerifyCallback): void {
  User.findOne({ googleId }).then((existingUser) => {
    if (existingUser) {
      done(undefined, existingUser, 'existing');
    } else {
      new User({ googleId }).save().then((newUser) => {
        done(undefined, newUser, 'new');
      });
    }
  });
}

export default addUser;
