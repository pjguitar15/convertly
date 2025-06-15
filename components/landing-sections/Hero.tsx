'use client'

import Image from 'next/image'
import React from 'react'
import HeaderImage from '@/public/header.png'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import PageTransition from '../PageTransition'

const Hero = () => {
  return (
    <section className='relative text-stone-950 overflow-hidden w-full container mx-auto flex flex-col py-36'>
      <PageTransition>
        <div className='relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center'>
          {/* ✅ Image comes first on mobile */}
          <div className='order-1 lg:order-2'>
            <Image
              width={700}
              height={700}
              src={HeaderImage}
              alt='conversion illustration'
              className='w-full h-auto md:w-3/4 mx-auto lg:w-full'
            />
          </div>

          <div className='order-2 lg:order-1 text-center sm:text-start'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4'>
              Your all-in-one <br />conversion hub
            </h1>
            <p className='text-lg text-stone-500 max-w-xl'>
              Convert anything — units, currencies, percentages, BMI — instantly
              and accurately, all in one place.
            </p>

            <div className='mt-8 flex flex-col sm:flex-row gap-4'>
              <Link
                href='/convert/length'
                className='inline-block bg-stone-800 text-stone-200 font-semibold px-6 py-3 rounded-md text-lg shadow hover:bg-stone-700 transition self-center'
              >
                Start Converting
              </Link>
              <Link
                href='#features'
                className='border border-white bg-white px-6 py-3 rounded-md text-lg hover:text-gray-900 transition shadow flex items-center gap-2 self-center'
              >
                See Features <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    </section>
  )
}

export default Hero
