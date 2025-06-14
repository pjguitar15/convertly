import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { visitorId } = await req.json()

    if (!visitorId) {
      throw new Error('Missing visitorId')
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || ''
    const userAgent = req.headers.get('user-agent') || ''

    const client = await clientPromise
    const db = client.db(process.env.NEXT_PUBLIC_MONGO_DB_NAME)

    await db.collection('visitors').updateOne(
      { visitorId },
      {
        $set: {
          ip,
          userAgent,
          lastVisited: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true },
    )

    return NextResponse.json({ message: 'Visitor tracked' })
  } catch (err) {
    console.error('[API: track-visitor]', err)
    if (err instanceof Error && err.message.startsWith('Missing')) {
      return NextResponse.json({ error: err.message }, { status: 400 })
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
