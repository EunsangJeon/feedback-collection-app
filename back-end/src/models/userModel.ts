import mongoose, { Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  googleId: String,
});

export default mongoose.model('users', userSchema);
