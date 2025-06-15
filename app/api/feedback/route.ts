import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    if (!name) throw new Error('Missing name in request body')
    if (!email) throw new Error('Missing email in request body')
    if (!message) throw new Error('Missing message in request body')

    const client = await clientPromise

    const dbName = process.env.NEXT_PUBLIC_MONGO_DB_NAME

    const db = client.db(dbName)

    const collection = db.collection('feedback')

    const insertResult = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      insertedId: insertResult.insertedId,
    })
  } catch (err) {
    console.error('[API: feedback] ❌ Error:', err)

    if (err instanceof Error && err.message.startsWith('Missing')) {
      return NextResponse.json({ error: err.message }, { status: 400 })
    }

    if (err instanceof Error && err.message.includes('MONGO_DB_NAME')) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}
