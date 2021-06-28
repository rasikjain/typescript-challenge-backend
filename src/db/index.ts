import { Db, MongoClient } from 'mongodb';

let _db: Db;

//Connect to the mongodb during startup of application
export async function connect() {
  const dbString = process.env.MONGO_URL as string;

  const client = new MongoClient(dbString, {
    useUnifiedTopology: true,
  });
  const connection = await client.connect();
  _db = connection.db('sample_airbnb');
}

//Return the existing connection.
export const getDB = async () => {
  return _db;
};
