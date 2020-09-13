import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: any = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send({ hi: 'there' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

export default app;
