import { getDb } from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { visitorId } = body

    if (!visitorId) {
      return NextResponse.json({ error: 'Missing visitorId.' }, { status: 400 })
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || ''
    const userAgent = req.headers.get('user-agent') || ''

    const db = await getDb()

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
  } catch (error) {
    console.error('[API: track-visitor]', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
