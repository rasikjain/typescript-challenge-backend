import express from 'express';
import { connect, getDB } from '../db';

const router = express.Router();

router.post('/', async (req, res) => {
  //Re-use database connection.
  const db = await getDB();
  const col = db.collection('listingsAndReviews');

  const results = await col.find({}, { limit: 10 });

  res.json(await results.toArray());
});

export default router;
