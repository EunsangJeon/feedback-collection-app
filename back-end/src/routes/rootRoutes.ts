import { Router, Request, Response } from 'express';
import authRoutes from './authRoutes';
import apiRoutes from './apiRoutes';
import surveyRoutes from './surveyRoutes';

const router = Router();

router
  .get('/', (req: Request, res: Response) => {
    res.send({
      name: 'feedback-collection-app',
      author: 'eunsang-jeon',
    });
  })
  .use('/auth', authRoutes)
  .use('/api', apiRoutes)
  .use('/survey', surveyRoutes);

export default router;
