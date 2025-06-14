import VisitorsResponses from '@/components/admin/VisitorsResponses'
import { getDb } from '@/lib/mongodb'
import { Visitor } from '@/types/VisitorResponse'

export default async function VisitorsPage() {
  let visitors: Visitor[] = []

  try {
    const db = await getDb()
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

  return <VisitorsResponses title='Visitors' data={visitors} />
}
