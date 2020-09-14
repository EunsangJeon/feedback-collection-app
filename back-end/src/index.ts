import express, { Application } from 'express';
import passport from 'passport';
import { Strategy as googleStrategy } from 'passport-google-oauth20';

const app: Application = express();
const PORT: any = process.env.PORT;

passport.use(new googleStrategy());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

export default app;
