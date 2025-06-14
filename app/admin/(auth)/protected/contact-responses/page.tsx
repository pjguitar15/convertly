import clientPromise from '@/lib/mongodb'
import type { ContactResponse } from '@/types/ContactResponse'
import AdminDataViewer from '../../../../../components/admin/ContactResponses'
import AdminGuard from '@/components/AdminGuard'

export default async function ContactResponsesPage() {
  let responses: ContactResponse[] = []

  try {
    const client = await clientPromise
    const db = client.db(process.env.NEXT_PUBLIC_MONGO_DB_NAME)

    const raw = await db.collection('contact-responses').find().toArray()

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

  return (
    <AdminGuard>
      <AdminDataViewer title='Contact Responses' data={responses} />
    </AdminGuard>
  )
}
