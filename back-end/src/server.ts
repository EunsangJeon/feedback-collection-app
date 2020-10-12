import mongoose from 'mongoose';
import app from './app';
import { PORT } from './config/variables';
import { MONGODB_URL } from './config/keys';

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Server is connected to MongoDB'))
  .catch((err) => console.error(err));

mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
