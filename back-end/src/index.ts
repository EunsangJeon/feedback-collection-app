import http from 'http';
import mongoose from 'mongoose';
import app from './app';
import { PORT } from './config/variables';
import { MONGODB_URL } from './config/keys';

mongoose.connect(MONGODB_URL);
http.createServer(app).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
