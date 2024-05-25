import express, { Request, Response } from 'express';

const app = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Planner!');
});

app.listen(port, () => {
  console.log(`service Planner listening at http://localhost:${port}`);
});
