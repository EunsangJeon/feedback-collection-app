/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JWTStrategy } from 'passport-jwt';
import googleStrategyVerify from '../services/googleStrategyVerify';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from './keys';

passport.serializeUser((user: any, done) => {
  done(null, user.id);
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

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: (req) => {
        return req.cookies.jwt;
      },
      secretOrKey: JWT_SECRET,
    },
    (payload, done) => {
      return done(null, payload.data);
    }
  )
);
