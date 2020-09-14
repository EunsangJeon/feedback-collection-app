import express, { Application } from 'express';
import passport from 'passport';
import { Strategy as googleStrategy } from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './config/keys';
import { PORT } from './config/variables';

const app: Application = express();

passport.use(
  new googleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'auth/google/callback',
    },
    (accessToken: string) => {
      console.log(accessToken);
    }
  )
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

export default app;
