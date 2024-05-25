// services/service2/src/index.ts

import express, { Request, Response } from 'express';

const app = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Planner!');
});

app.listen(port, () => {
  console.log(`Service 2 listening at http://localhost:${port}`);
});

