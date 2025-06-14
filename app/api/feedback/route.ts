import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(req: Request) {
  console.log('[API: feedback] Incoming request')

  try {
    const body = await req.json()
    console.log('[API: feedback] Parsed JSON:', body)

    const { name, email, message } = body

    if (!name) throw new Error('Missing name in request body')
    if (!email) throw new Error('Missing email in request body')
    if (!message) throw new Error('Missing message in request body')

    console.log('[API: feedback] All required fields are present')

    console.log('[API: feedback] Connecting to MongoDB...')
    const client = await clientPromise

    console.log('[API: feedback] Connected to MongoDB')

    const dbName = process.env.MONGO_DB_NAME
    if (!dbName) throw new Error('MONGO_DB_NAME is not defined in env')

    console.log('[API: feedback] Using database:', dbName)
    const db = client.db(dbName)

    const collection = db.collection('feedback')
    console.log('[API: feedback] Using collection: feedback')

    const insertResult = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    console.log('[API: feedback] Insert result:', insertResult)

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
