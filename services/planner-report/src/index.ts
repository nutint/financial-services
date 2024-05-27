import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.json('Hello from Planner Report!');
});
app.get('/data', (req, res) => {
  res.status(200).json({ data: 'Some data' }); // Ensure this matches the expected response
});

app.listen(port, () => {
  console.log(`Service Planner Report listening at http://localhost:${port}`);
});

