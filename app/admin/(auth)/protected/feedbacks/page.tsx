import FeedbackResponses from '@/components/admin/FeedbackResponses'
import { getDb } from '@/lib/mongodb'
import { Feedback } from '@/types/FeedbackResponse'

export default async function FeedbacksPage() {
  let feedbacks: Feedback[] = []

  try {
    const db = await getDb()
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

  return <FeedbackResponses title='Feedbacks' data={feedbacks} />
}
