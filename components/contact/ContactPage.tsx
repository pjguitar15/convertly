'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import PageTransition from '../PageTransition'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false) // 👈 NEW STATE

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/submit-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      if (res.ok) {
        toast.success('✅ Thank you! I’ll get back to you soon. 🚀')
        setName('')
        setEmail('')
        setMessage('')
        setSubmitted(true) // 👈 PREVENT FUTURE SUBMISSIONS
      } else {
        const data = await res.json()
        toast.error(`❌ Error: ${data.error || 'Something went wrong.'}`)
      }
    } catch (err) {
      console.error(err)
      toast.error('❌ Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='w-full px-6 py-12 lg:px-20 lg:py-24 bg-white'>
      <PageTransition>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* LEFT: Info */}
          <div className='space-y-6'>
            <span className='inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider'>
              Let’s Connect
            </span>
            <h1 className='text-4xl md:text-5xl font-bold text-stone-900 mb-4'>
              Get in Touch
            </h1>
            <p className='text-stone-700 leading-relaxed'>
              Hi there! 👋 I’m Phil, the creator behind Convert Like A Pro. I
              love hearing from users, fellow developers, and curious minds.
            </p>
            <p className='text-stone-700 leading-relaxed'>
              Got a cool idea, feedback, or spotted something quirky? 💭 Don’t
              be shy — your thoughts help me make this tool even better.
            </p>
            <p className='text-stone-700 leading-relaxed'>
              🚀 <strong>Need a custom web app?</strong> Let’s talk! I’m open to
              helping you design, code, and deploy your next big project.
            </p>
            <p className='text-stone-700 leading-relaxed'>
              Prefer direct email? Reach me anytime at{' '}
              <a
                href='mailto:philcobsuzuki@gmail.com'
                className='underline text-stone-800 hover:text-stone-900'
              >
                philcobsuzuki@gmail.com
              </a>
              .
            </p>
            <p className='text-stone-700 leading-relaxed'>
              Thanks for being here — you make this project better. 🌟
            </p>
          </div>

          {/* RIGHT: Form */}
          <div className='space-y-6'>
            <div className='text-left'>
              <h2 className='text-2xl font-bold text-stone-900 mb-2'>
                ✍️ Drop me a message
              </h2>
              <p className='text-stone-600 text-sm'>
                I’d love to hear from you — let’s make something great together.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-4 text-left'
            >
              <input
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
                required
                disabled={submitted} // 👈 DISABLE FIELD AFTER SUBMIT
              />
              <input
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
                required
                disabled={submitted} // 👈 DISABLE FIELD AFTER SUBMIT
              />
              <textarea
                placeholder='Tell me what’s on your mind. Questions, feedback, or a project idea? ✏️'
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
                required
                disabled={submitted} // 👈 DISABLE FIELD AFTER SUBMIT
              />
              <button
                type='submit'
                disabled={loading || submitted} // 👈 ALSO DISABLE BUTTON
                className='bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded transition w-fit disabled:opacity-50'
              >
                {loading
                  ? 'Sending...'
                  : submitted
                  ? 'Submitted'
                  : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}
