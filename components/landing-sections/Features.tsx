'use client'

import React from 'react'
import Link from 'next/link'
import {
  AiOutlineThunderbolt,
  AiOutlineBulb,
  AiOutlineMobile,
  AiOutlineSafetyCertificate,
} from 'react-icons/ai'
import { FaRegMap } from 'react-icons/fa'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

const Features = () => {
  return (
    <section className='relative overflow-hidden w-full'>
      <div id='features' className='bg-stone-50 py-16 px-6 sm:px-12'>
        <h2 className='text-3xl font-bold text-center mb-12 text-stone-900'>
          Why Choose This Converter?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='bg-white shadow-md p-6 rounded-lg text-center'>
            <AiOutlineThunderbolt className='text-4xl text-green-600 mx-auto mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Lightning Fast</h3>
            <p className='text-stone-600'>
              Get your conversions instantly. No delays, no waiting.
            </p>
          </div>
          <div className='bg-white shadow-md p-6 rounded-lg text-center'>
            <AiOutlineBulb className='text-4xl text-yellow-500 mx-auto mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Smart Suggestions</h3>
            <p className='text-stone-600'>
              Search any formula and we’ll help you find it — fast and easy.
            </p>
          </div>
          <div className='bg-white shadow-md p-6 rounded-lg text-center'>
            <AiOutlineMobile className='text-4xl text-blue-500 mx-auto mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Mobile Friendly</h3>
            <p className='text-stone-600'>
              Designed to work beautifully on phones, tablets, and desktops.
            </p>
          </div>
        </div>

        {/* ADDITIONAL FEATURE CARDS */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16'>
          <div className='shadow-md p-6 rounded-lg bg-stone-900 flex flex-col items-center text-center py-12'>
            <AiOutlineSafetyCertificate className='text-stone-100 w-8 h-8 mb-4' />
            <h3 className='text-xl font-semibold mb-2 text-stone-100'>
              Accurate & Verified
            </h3>
            <p className='text-stone-400 text-sm'>
              All conversion formulas and rates are based on verified standards
              and real-time data — so you can convert with confidence.
            </p>
          </div>

          <div className='shadow-md p-6 rounded-lg bg-stone-900 flex flex-col items-center text-center py-12'>
            <FaRegMap className='text-stone-100 w-8 h-8 mb-4' />
            <h3 className='text-xl font-semibold mb-2 text-stone-100'>
              Formula Discovery
            </h3>
            <p className='text-stone-400 text-sm'>
              Search and explore hundreds of unit formulas in one place. It is
              your built-in cheat sheet for quick learning or reference.
            </p>
          </div>

          <div className='shadow-md p-6 rounded-lg bg-stone-900 flex flex-col items-center text-center py-12'>
            <MdOutlineDashboardCustomize className='text-stone-100 w-8 h-8 mb-4' />
            <h3 className='text-xl font-semibold mb-2 text-stone-100'>
              Custom UI for Conversion
            </h3>
            <p className='text-stone-400 text-sm'>
              Built from the ground up to prioritize fast input, clear results,
              and zero distractions. Just convert — no clutter, no ads in your
              face.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION LINKS */}
        <div className='mt-20 text-center'>
          <p className='text-stone-600 mb-4'>Explore conversion categories:</p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href='/convert/length'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Length
            </Link>
            <Link
              href='/convert/temperature'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Temperature
            </Link>
            <Link
              href='/convert/mass'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Weight
            </Link>
            <Link
              href='/convert/area'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Area
            </Link>
            <Link
              href='/convert/time'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Time
            </Link>
            <Link
              href='/convert/speed'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Speed
            </Link>
            <Link
              href='/convert/volume'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Volume
            </Link>
            <Link
              href='/convert-currency'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Currency
            </Link>
            <Link
              href='/percentage-calculator'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              Percentage
            </Link>
            <Link
              href='/bmi-calculator'
              className='px-4 py-2 bg-stone-800 text-white rounded-full text-sm'
            >
              BMI
            </Link>
            <Link
              href='/conversion-formulas'
              className='px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm'
            >
              Browse All Formulas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
