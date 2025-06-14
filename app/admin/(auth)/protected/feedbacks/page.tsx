import FeedbackResponses from '@/components/admin/FeedbackResponses'
import AdminGuard from '@/components/AdminGuard'
import clientPromise from '@/lib/mongodb'
import { Feedback } from '@/types/FeedbackResponse'

export default async function FeedbacksPage() {
  let feedbacks: Feedback[] = []

  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGO_DB_NAME)

    const raw = await db.collection('feedback').find().toArray()

    feedbacks = raw.map((doc) => ({
      _id: doc._id.toString(),
      name: doc.name,
      email: doc.email,
      message: doc.message,
      createdAt: doc.createdAt?.toISOString(),
    }))
  } catch (error) {
    console.error('[Feedbacks] Failed to load:', error)
  }

  return (
    <AdminGuard>
      <FeedbackResponses title='Feedbacks' data={feedbacks} />
    </AdminGuard>
  )
}
