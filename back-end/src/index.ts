import express, { Application } from 'express';
import { PORT, NODE_ENV } from './config/variables';
import rootRoutes from './routes/rootRoutes';

const app: Application = express();

require('./services/passport');

app.use('/', rootRoutes);

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
  });
}

export default app;
