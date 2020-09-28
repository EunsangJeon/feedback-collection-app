import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JWTStrategy } from 'passport-jwt';
import { Document } from 'mongoose';
import googleStrategyVerify from '../services/googleStrategyVerify';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from './keys';
import User from '../models/userModel';

passport.serializeUser<Document, string>((user, done) => {
  done(null, user.id);
});

passport.deserializeUser<Document, string>((id, done) => {
  User.findById(id)
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(new Error('passport deserializeUser could not get user'));
      }
    })
    .catch((err) => {
      done(err);
    });
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
