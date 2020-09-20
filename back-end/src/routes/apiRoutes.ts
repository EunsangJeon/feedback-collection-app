import { Router } from 'express';

const router = Router();

router.get('/current-user', (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

export default router;
