'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import HeaderImage from '@/public/header.png'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Hero = () => {
  const envs = {
    ADSENSE_PID: process.env.NEXT_PUBLIC_ADSENSE_PID,
    MONGO_DB_STRING: process.env.NEXT_PUBLIC_MONGO_DB_STRING,
    MONGO_DB_NAME: process.env.NEXT_PUBLIC_MONGO_DB_NAME,
    NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    ADMIN_USER: process.env.NEXT_PUBLIC_ADMIN_USER,
    ADMIN_PASS: process.env.NEXT_PUBLIC_ADMIN_PASS,
  }
  useEffect(() => {
    console.log('Environment Variables:')
    console.log('Check all ENVs', envs)
  }, [])
  return (
    <section className='relative text-stone-950 overflow-hidden w-full container mx-auto flex flex-col py-36'>
      <div className='relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4'>
            Convert Like a Pro
          </h1>
          <p className='text-lg text-stone-500 max-w-xl'>
            Your all-in-one tool for converting units—whether it is length,
            mass, temperature, or even currency. Precision meets simplicity with
            our lightning-fast converter.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row gap-4'>
            <Link
              href='/convert/length'
              className='inline-block bg-stone-800 text-stone-200 font-semibold px-6 py-3 rounded-md text-lg shadow hover:bg-stone-700 transition'
            >
              Start Converting
            </Link>
            <Link
              href='#features'
              className='border border-white bg-white px-6 py-3 rounded-md text-lg hover:text-gray-900 transition shadow flex items-center gap-2'
            >
              See Features <AiOutlineArrowRight />
            </Link>
          </div>
        </div>

        <div className='hidden lg:block'>
          <Image
            width={700}
            height={700}
            src={HeaderImage}
            alt='conversion illustration'
            className='w-full h-auto'
          />
        </div>
      </div>
      Test
      <pre
        style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}
      >
        <code>{JSON.stringify(envs, null, 2)}</code>
      </pre>
    </section>
  )
}

export default Hero
