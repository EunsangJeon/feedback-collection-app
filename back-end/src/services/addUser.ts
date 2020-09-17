import mongoose from 'mongoose';

const User = mongoose.model('users');

function addUser(googleId: string): void {
  new User({ googleId }).save();
}

export default addUser;
