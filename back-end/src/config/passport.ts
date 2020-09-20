import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { Document } from 'mongoose';
import googleStrategyVerify from '../services/googleStrategyVerify';
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  COOKIE_SESSION_KEY,
} from './keys';
import User from '../models/userModel';

passport.serializeUser<Document, string>((user, done) => {
  console.log(`passport serialized user with id: ${user.id}`);
  done(null, user.id);
});

passport.deserializeUser<Document, string>((id, done) => {
  console.log(`passport deserialized with id: ${id}`);
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
  new JwtStrategy(
    {
      jwtFromRequest: (req) => {
        let token;
        if (req && req.cookies) {
          token = req.cookies.jwt;
        }
        return token;
      },
      secretOrKey: COOKIE_SESSION_KEY,
    },
    (payload, done) => {
      console.log('jwt auth was called');
    }
  )
);

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
