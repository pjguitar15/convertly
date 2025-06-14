import { getDb } from '@/lib/mongodb'
import type { ContactResponse } from '@/types/ContactResponse'
import AdminDataViewer from '../../../../../components/admin/ContactResponses'

export default async function ContactResponsesPage() {
  let responses: ContactResponse[] = []

  try {
    const db = await getDb()
    const raw = await db.collection('contact-responses').find().toArray()

    // Safely map _id & createdAt to strings:
    responses = raw.map((doc) => ({
      _id: doc._id.toString(),
      name: doc.name,
      email: doc.email,
      message: doc.message,
      type: doc.type,
      createdAt: doc.createdAt?.toISOString(),
    }))
  } catch (error) {
    console.error('[Contact Responses] Failed to load:', error)
  }

  return <AdminDataViewer title='Contact Responses' data={responses} />
}
