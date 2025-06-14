import VisitorsResponses from '@/components/admin/VisitorsResponses'
import AdminGuard from '@/components/AdminGuard'
import clientPromise from '@/lib/mongodb'
import { Visitor } from '@/types/VisitorResponse'

export default async function VisitorsPage() {
  let visitors: Visitor[] = []

  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGO_DB_NAME)

    const raw = await db.collection('visitors').find().toArray()

    visitors = raw.map((doc) => ({
      _id: doc._id.toString(),
      visitorId: doc.visitorId,
      ip: doc.ip,
      userAgent: doc.userAgent,
      lastVisited: doc.lastVisited?.toISOString(),
      createdAt: doc.createdAt?.toISOString(),
    }))
  } catch (error) {
    console.error('[Visitors] Failed to load:', error)
  }

  return (
    <AdminGuard>
      <VisitorsResponses title='Visitors' data={visitors} />
    </AdminGuard>
  )
}
