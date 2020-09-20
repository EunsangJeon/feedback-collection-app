import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { COOKIE_SESSION_KEY } from '../config/keys';

const router = Router();

router
  .get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  )
  .get('/google/callback', passport.authenticate('google'), (req, res) => {
    console.log(`callback: ${req.user}`);
    const { user } = req;
    const token = jwt.sign(
      {
        data: user,
      },
      COOKIE_SESSION_KEY,
      { expiresIn: '5m' }
    ); // expiry in seconds
    console.log(`generated token: ${token}`);
    res.cookie('jwt', token);
    res.redirect('/');
  });

export default router;
