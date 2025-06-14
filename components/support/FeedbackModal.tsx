'use client'

import { useState } from 'react'
import Modal from '../Modal'
import toast from 'react-hot-toast'

type Props = {
  onClose: () => void
  onSubmitted: () => void // 👈 add callback to inform parent
}

export default function FeedbackModal({ onClose, onSubmitted }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        toast.success('✅ Thank you for your feedback!')
        setName('')
        setEmail('')
        setMessage('')
        onSubmitted() // 👈 inform parent that it's submitted
        onClose()
      } else {
        const data = await res.json()
        toast.error(`❌ ${data.error || 'Something went wrong.'}`)
      }
    } catch (err) {
      console.error(err)
      toast.error('❌ Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal onClose={onClose}>
      <div className='w-full lg:min-w-2xl'>
        <h2 className='text-2xl font-bold mb-6 text-stone-900 text-left'>
          💌 Give Feedback
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type='email'
            placeholder='Your Email'
            className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <textarea
            placeholder='Share your thoughts, suggestions, or just say hi!'
            rows={4}
            className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type='submit'
            className='bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded transition cursor-pointer disabled:opacity-50'
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </Modal>
  )
}
