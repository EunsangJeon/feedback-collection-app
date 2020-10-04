/* eslint-disable @typescript-eslint/no-var-requires */
import { Router } from 'express';
import passport from 'passport';
import { STRIPE_SECRET_KEY } from '../config/keys';

const stripe = require('stripe')(STRIPE_SECRET_KEY);

const router = Router();

router
  .get(
    '/current-user',
    passport.authenticate('jwt', {
      session: false,
    }),
    (req, res) => {
      res.send(req.user);
    }
  )
  .post(
    '/stripe',
    passport.authenticate('jwt', {
      session: false,
    }),
    async (req, res) => {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id,
      });

      console.log(charge);
    }
  );

export default router;
