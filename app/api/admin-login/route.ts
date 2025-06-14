import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { username, password } = await req.json()
  const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER
  const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return NextResponse.json({ success: true })
  }
  return NextResponse.json(
    { success: false, error: 'Invalid credentials' },
    { status: 401 },
  )
}
