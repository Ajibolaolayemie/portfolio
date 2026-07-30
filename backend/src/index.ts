import express from 'express';
import cors from 'cors';
import { samplePrices } from './data.js';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

app.get('/api/prices', (req, res) => {
  res.json({ updated: new Date().toISOString(), items: samplePrices });
});

app.listen(port, () => {
  console.log(`Food price tracker API running on http://localhost:${port}`);
});
