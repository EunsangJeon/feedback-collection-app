import express, { Application } from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import rootRoutes from './routes/rootRoutes';

require('./config/passport');

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use('/', rootRoutes);

export default app;
