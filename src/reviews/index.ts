//todo
import express from 'express';
import { getDB } from '../db';

const router = express.Router();

router.post('/:id', async (req, res) => {
  const maxRecordsPerPage = parseInt(process.env.MAX_RECORDS_PER_PAGE);
  const id: number = +req.params.id;

  //Re-use database connection.
  const db = await getDB();
  const col = db.collection('listingsAndReviews');

  //Implement  fetch records from mongodb
  const projection = { reviews: 0 };
  const results = await col.findOne({ _id: id.toString() });

  let data = await results;
  res.json({ data: data.reviews });
});

export default router;
