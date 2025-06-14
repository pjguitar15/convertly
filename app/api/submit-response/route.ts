import { NextResponse } from 'next/server'
import mongoClient from '@/lib/mongodb'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const dbName = process.env.MONGO_DB_NAME!
    const db = mongoClient.db(dbName)

    await db.collection('contact-responses').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
