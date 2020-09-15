import express, { Application, Request, Response } from 'express';
import passport from 'passport';
import {
  Profile,
  Strategy as GoogleStrategy,
  VerifyCallback,
} from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './config/keys';
import { PORT } from './config/variables';

const app: Application = express();

const googleStrategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback
  ) => {
    console.log(`accessToken: ${accessToken}`);
  }
);

passport.use(googleStrategy);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'service on' });
});

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

export default app;
