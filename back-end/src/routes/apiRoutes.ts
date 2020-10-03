/* eslint-disable @typescript-eslint/no-var-requires */
import { Router } from 'express';
import passport from 'passport';

import { STRIPE_SECRET_KEY } from '../config/keys';

const stripe = require('stripe')(STRIPE_SECRET_KEY);

const router = Router();

router
  .get(
    '/current-user',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.send(req.user);
    }
  )
  .post(
    '/stripe',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      console.log(req.body);
    }
  );

export default router;
