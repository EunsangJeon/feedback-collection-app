import mongoose, { Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema);
