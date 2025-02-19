import * as dotenv from 'dotenv';

import { connect } from './db/index';
import express from 'express';
import Stays from './stays';
import Reviews from './reviews';

const executeMain = async () => {
  dotenv.config();

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/stays', Stays);
  app.use('/reviews', Reviews);

  await connect();

  app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
  });
};

executeMain().catch((error) => {
  console.log(error, 'error');
});
