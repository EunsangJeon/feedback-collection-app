<<<<<<< HEAD
import { Router } from 'express';
import passport from 'passport';

=======
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

import { Router, Response, Request } from 'express';
import passport from 'passport';

import Survey from '../models/surveyModel';

interface SurveyRequest extends Request {
  user?: any;
}

>>>>>>> 0b50e68766aa3652a61ce5b8217e984b1dbd3fe3
const router = Router();

router.post(
  '/create',
  passport.authenticate('jwt', {
    session: false,
  }),
<<<<<<< HEAD
  (req, res) => {
=======
  (req: SurveyRequest, res: Response) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map((email: string) => ({ email })),
      _user: req.user._id,
      dateSent: Date.now(),
    });
>>>>>>> 0b50e68766aa3652a61ce5b8217e984b1dbd3fe3
    res.send(req.user);
  }
);

export default router;
