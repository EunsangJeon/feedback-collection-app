import { VerifyCallback } from 'passport-google-oauth20';

export default interface GoogleAuthAddUser {
  (googleId: string, done: VerifyCallback): Promise<void>;
}
