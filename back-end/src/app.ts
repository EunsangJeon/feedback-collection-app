import express, { Application } from 'express';
import passport from 'passport';
import rootRoutes from './routes/rootRoutes';

const app: Application = express();

app.use(passport.initialize());
require('./config/passport');

app.use('/', rootRoutes);

export default app;
