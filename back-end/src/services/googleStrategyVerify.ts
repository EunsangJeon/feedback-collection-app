import { Profile, VerifyCallback } from 'passport-google-oauth20';
import { googleAuthAddUser } from '../index';

export default async function googleStrategyVerify(
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
): Promise<void> {
  await googleAuthAddUser(profile.id, done);
}
