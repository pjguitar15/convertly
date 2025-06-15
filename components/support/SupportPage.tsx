'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai' // ✅ ICON
import DonateModal from './DonateModal'
import FeedbackModal from './FeedbackModal'
import PageTransition from '../PageTransition'

export default function SupportPage() {
  const [showDonate, setShowDonate] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  return (
    <div className='mx-auto p-8 text-center w-full'>
      <PageTransition>
        <h1 className='text-3xl md:text-4xl font-bold mb-4 text-stone-900'>
          Support Convert Like A Pro
        </h1>

        <p className='mb-4 text-stone-700'>
          Hi! I’m Phil, a software engineer passionate about building simple,
          fast, and privacy-friendly web apps for you.
        </p>

        <p className='mb-4 text-stone-700'>
          If you find this tool useful, please consider supporting it. Every bit
          helps keep it free and up-to-date.
        </p>

        <p className='mb-6 text-stone-700'>
          You can help by donating, sharing it with friends, or giving your
          valuable feedback to make it even better.
        </p>

        <div className='flex flex-col md:flex-row gap-4 justify-center mb-6'>
          <button
            onClick={() => setShowDonate(true)}
            className='bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded transition cursor-pointer'
          >
            Donate
          </button>

          <button
            onClick={() => {
              if (!feedbackSubmitted) setShowFeedback(true)
            }}
            className={`bg-stone-700 hover:bg-stone-800 text-white font-bold py-3 px-6 rounded transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
            disabled={feedbackSubmitted}
          >
            {feedbackSubmitted ? (
              <span className='flex items-center gap-2'>
                <AiOutlineCheck className='text-xl' /> Feedback Submitted
              </span>
            ) : (
              'Give Feedback'
            )}
          </button>
        </div>

        <p className='text-stone-700'>
          Have questions or want to reach me directly?{' '}
          <Link
            href='/contact'
            className='text-stone-800 underline hover:text-stone-900 font-medium'
          >
            Contact me here →
          </Link>
        </p>

        <p className='mt-6 text-stone-500 text-sm'>
          Thank you for supporting independent developers like me. Your kindness
          keeps this project alive and improving!
        </p>

        {showDonate && <DonateModal onClose={() => setShowDonate(false)} />}
        {showFeedback && (
          <FeedbackModal
            onClose={() => setShowFeedback(false)}
            onSubmitted={() => setFeedbackSubmitted(true)}
          />
        )}
      </PageTransition>
    </div>
  )
}
