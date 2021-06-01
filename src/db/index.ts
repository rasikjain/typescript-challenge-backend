import { MongoClient, Db } from "mongodb";

const dbString = process.env.MONGO_URL;

export async function connect() {
  const client = new MongoClient(dbString, {
    useUnifiedTopology: true,
  });
  const connection = await client.connect();
  return <Db>connection.db("sample_airbnb");
}
