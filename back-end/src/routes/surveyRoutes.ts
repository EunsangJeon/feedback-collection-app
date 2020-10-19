/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Router, Response, Request } from 'express';
import passport from 'passport';

import Survey from '../models/surveyModel';

interface SurveyRequest extends Request {
  user?: any;
}

const router = Router();

router.post(
  '/create',
  passport.authenticate('jwt', {
    session: false,
  }),
  (req: SurveyRequest, res: Response) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(',')
        .map((email: string) => ({ email: email.trim() })),
      _user: req.user._id,
      dateSent: Date.now(),
    });
    res.send(req.user);
  }
);

export default router;
