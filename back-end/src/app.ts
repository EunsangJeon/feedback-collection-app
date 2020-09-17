import express, { Application } from 'express';
import rootRoutes from './routes/rootRoutes';

require('./models/User');
require('./services/passport');

const app: Application = express();
app.use('/', rootRoutes);

export default app;
