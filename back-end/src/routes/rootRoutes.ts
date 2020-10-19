import { Router, Request, Response } from 'express';
import authRoutes from './authRoutes';
import apiRoutes from './apiRoutes';

const router = Router();

router
  .get('/', (req: Request, res: Response) => {
    res.send({
      name: 'feedback-collection-app',
      author: 'eunsang-jeon',
    });
  })
  .use('/auth', authRoutes)
  .use('/api', apiRoutes);

export default router;
