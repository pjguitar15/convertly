'use client'

import Image from 'next/image'
import React from 'react'
import HeaderImage from '@/public/header.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative py-16 text-white overflow-hidden w-full'>
      <div className='relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4'>
            Convert Like a Pro
          </h1>
          <p className='text-lg text-gray-300 max-w-xl'>
            Your all-in-one tool for converting units—whether it is length,
            mass, temperature, or even currency (coming soon!). Precision meets
            simplicity with our lightning-fast converter.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row gap-4'>
            <Link
              href='/convert/length'
              className='inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md text-lg shadow hover:bg-gray-200 transition'
            >
              Start Converting
            </Link>
            <Link
              href='#features'
              className='inline-block border border-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-gray-900 transition'
            >
              See Features
            </Link>
          </div>

          <div className='mt-10'>
            <p className='text-sm uppercase tracking-widest text-gray-400 mb-2'>
              Upcoming
            </p>
            <div className='inline-flex items-center gap-2 bg-gray-800 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium'>
              💱 Currency Converter — Coming Soon
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className='hidden lg:block'>
          {/* <Image
            width={700}
            height={700}
            src='https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png'
            alt='conversion illustration'
            className='w-full h-auto'
          /> */}
          <Image
            width={700}
            height={700}
            src={HeaderImage}
            alt='conversion illustration'
            className='w-full h-auto'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
