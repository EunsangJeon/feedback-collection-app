import http from 'http';
import app from './app';
import { PORT } from './config/variables';

http.createServer(app).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
