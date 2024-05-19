import express, { Express, Response } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_res, res: Response) => {
  res.json([]);
});

export default app;
