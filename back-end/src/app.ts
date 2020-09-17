import express, { Application } from 'express';
import rootRoutes from './routes/rootRoutes';

const app: Application = express();

require('./services/passport');

app.use('/', rootRoutes);

export default app;
