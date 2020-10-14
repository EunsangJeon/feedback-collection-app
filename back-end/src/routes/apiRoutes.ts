/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

import { Request, Response, Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { STRIPE_SECRET_KEY, JWT_SECRET } from '../config/keys';
import User from '../models/userModel';
import surveyRoutes from './surveyRoutes';

const stripe = require('stripe')(STRIPE_SECRET_KEY);

const router = Router();

interface StripeRequest extends Request {
  user?: any;
  body: any;
}

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
    async (req: StripeRequest, res: Response) => {
      await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id,
      });

      const { user } = req;

      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        {
          $set: { credits: user.credits + 5 },
        },
        { new: true }
      );

      const token = jwt.sign(
        {
          data: updatedUser,
        },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.cookie('jwt', token).send(updatedUser);
    }
  )
  .use('/survey', surveyRoutes);

export default router;
