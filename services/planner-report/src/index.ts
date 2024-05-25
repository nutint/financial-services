import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Planner Report!');
});

app.listen(port, () => {
  console.log(`Service Planner Report listening at http://localhost:${port}`);
});

