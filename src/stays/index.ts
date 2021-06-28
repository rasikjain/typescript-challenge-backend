import express from 'express';
import { getDB } from '../db';
import { stayListingReq } from './interface';

const router = express.Router();

router.post('/', async (req, res) => {
  const maxRecordsPerPage = parseInt(process.env.MAX_RECORDS_PER_PAGE);

  let queryParams = req.body as stayListingReq;

  //Initialize pagination. Default to page 1 if value is not supplied
  let page = queryParams.page >= 1 ? queryParams.page : 1;

  //Re-use database connection.
  const db = await getDB();
  const col = db.collection('listingsAndReviews');

  //Implement pagination and fetch records from mongodb
  const results = await col
    .find({})
    .limit(maxRecordsPerPage)
    .skip(maxRecordsPerPage * (page - 1));

  let data = await results.toArray();
  res.json({ data: data, currentPage: page, count: data.length });
});

export default router;
