import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get(
  '/current-user',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.user);
    res.send(req.user);
  }
);

export default router;
