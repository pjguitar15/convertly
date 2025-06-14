import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const db = await getDb()

    await db.collection('feedback').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API: feedback]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
