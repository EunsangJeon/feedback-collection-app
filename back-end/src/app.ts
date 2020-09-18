import express, { Application } from 'express';
import rootRoutes from './routes/rootRoutes';

require('./config/passport');

const app: Application = express();
app.use('/', rootRoutes);

export default app;
