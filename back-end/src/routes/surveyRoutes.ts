import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post(
  '/create',
  passport.authenticate('jwt', {
    session: false,
  }),
  (req, res) => {
    res.send(req.user);
  }
);

export default router;
