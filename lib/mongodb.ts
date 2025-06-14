import { MongoClient, Db } from 'mongodb'

const uri = process.env.MONGO_DB_STRING!
if (!uri) throw new Error('Please define MONGO_DB_STRING in .env.local')

let mongoClient: MongoClient

const globalWithMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient
}

if (process.env.NODE_ENV === 'production') {
  mongoClient = new MongoClient(uri)
} else {
  if (!globalWithMongo.mongoClient) {
    globalWithMongo.mongoClient = new MongoClient(uri)
  }
  mongoClient = globalWithMongo.mongoClient
}

// ✅ Modern helper to get a database instance
export async function getDb(): Promise<Db> {
  await mongoClient.connect() // safe, idempotent in v4+
  return mongoClient.db(process.env.MONGO_DB_NAME)
}

export default mongoClient
