import express, { Application } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import rootRoutes from './routes/rootRoutes';
import googleStrategyVerify from './config/googleStrategyVerify';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './config/keys';

const app: Application = express();

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
app.use(passport.initialize());

app.use('/', rootRoutes);

export default app;
