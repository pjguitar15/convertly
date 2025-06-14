import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name) throw new Error('Missing name')
    if (!email) throw new Error('Missing email')
    if (!message) throw new Error('Missing message')

    const client = await clientPromise
    const db = client.db(process.env.NEXT_PUBLIC_MONGO_DB_NAME)

    await db.collection('contact-responses').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API: submit-response]', err)
    if (err instanceof Error && err.message.startsWith('Missing')) {
      return NextResponse.json({ error: err.message }, { status: 400 })
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
