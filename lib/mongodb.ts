import { MongoClient } from 'mongodb'

// ✅ Use server-only env variable
const uri = process.env.MONGO_DB_STRING
const dbName = process.env.MONGO_DB_NAME

if (!uri) {
  throw new Error(
    '❌ MONGO_DB_STRING is missing. Please set it in your Vercel project settings.',
  )
}

if (!dbName) {
  throw new Error(
    '❌ MONGO_DB_NAME is missing. Please set it in your Vercel project settings.',
  )
}

// ✅ Attach to globalThis to reuse connection in dev
const globalWithMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'production') {
  // In production, always create a new client
  client = new MongoClient(uri)
  clientPromise = client.connect()
} else {
  // In dev, reuse promise to avoid creating many clients during hot reloads
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
}

export default clientPromise
