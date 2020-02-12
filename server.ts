import express from 'express';
import path from 'path';
import { apiRouter } from './routes/api/apiRouter';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.use('/api', apiRouter);

app.get('/customers', (_req, res) =>
  res.sendFile(path.join(`${__dirname}/public/customers.html`)),
);

app.listen(port);

console.log(`✨ Express started at http://localhost:${port}`);
