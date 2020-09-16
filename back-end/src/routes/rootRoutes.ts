import { Router, Request, Response } from 'express';
import authRoutes from './authRoutes';

const router = Router();

router
  .get('/', (req: Request, res: Response) => {
    res.send({
      name: 'feedback-collection-app',
      author: 'eunsang-jeon',
    });
  })
  .use('/auth', authRoutes);

export default router;
