'use client'

import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className='py-20 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-stone-900'>
        Ready to Convert Like A Pro?
      </h2>
      <p className='text-stone-600 mb-8'>
        Start using all tools free — no sign-up needed.
      </p>
      <Link
        href='/convert/length'
        className='inline-block bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 px-8 rounded transition'
      >
        Get Started Now
      </Link>
    </section>
  )
}
