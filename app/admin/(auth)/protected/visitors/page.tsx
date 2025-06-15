import VisitorsResponses from '@/components/admin/VisitorsResponses'
import AdminGuard from '@/components/AdminGuard'
import clientPromise from '@/lib/mongodb'
import { Visitor } from '@/types/VisitorResponse'

export const dynamic = 'force-dynamic'

export default async function VisitorsPage() {
  let visitors: Visitor[] = []

  try {
    const client = await clientPromise
    const db = client.db(process.env.NEXT_PUBLIC_MONGO_DB_NAME)

    // ✅ Get only the LATEST record per distinct IP
    const raw = await db
      .collection('visitors')
      .aggregate([
        // Sort newest first
        { $sort: { lastVisited: -1 } },
        // Group by IP, take the first doc
        {
          $group: {
            _id: '$ip',
            doc: { $first: '$$ROOT' },
          },
        },
        // Replace root to keep the doc shape
        { $replaceRoot: { newRoot: '$doc' } },
        // Optional: sort again if you want
        { $sort: { lastVisited: -1 } },
      ])
      .toArray()

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
