import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import googleStrategyVerify from '../services/googleStrategyVerify';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './keys';

passport.serializeUser((user, done) => {
  console.log(`passport serialized: ${user}`);
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  console.log(`passport deserialized: ${obj}`);
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    googleStrategyVerify
  )
);
