import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Document } from 'mongoose';
import googleStrategyVerify from '../services/googleStrategyVerify';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './keys';
import User from '../models/userModel';

passport.serializeUser<Document, string>((user, done) => {
  done(null, user.id);
});

passport.deserializeUser<Document | undefined, string>((id, done) => {
  User.findById(id)
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(new Error('Found user but failed to deserialize user'), undefined);
      }
    })
    .catch((err) => done(err, undefined));
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
