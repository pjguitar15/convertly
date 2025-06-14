import { MongoClient } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGO_DB_STRING!
if (!uri)
  throw new Error('Please define MONGO_DB_STRING in your environment variables')

const globalWithMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient
}

let client: MongoClient

if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
  // ✅ In production, always create a new client — serverless best practice
  client = new MongoClient(uri)
} else {
  // ✅ In dev, use globalThis to reuse the client across hot reloads
  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri)
  }
  client = globalWithMongo._mongoClient
}

export default client
