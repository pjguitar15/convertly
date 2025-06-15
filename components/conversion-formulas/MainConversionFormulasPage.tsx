'use client'

import { conversionFormulas } from '@/constants/formulas'
import { useState, useMemo } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import AdBanner from '../AdBanner'

export default function ConversionFormulasPage() {
  const [query, setQuery] = useState('')

  const filteredFormulas = useMemo(() => {
    const lowerQuery = query.toLowerCase()
    return conversionFormulas.filter(
      (item) =>
        item.keywords.some((k) => k.toLowerCase().includes(lowerQuery)) ||
        item.title.toLowerCase().includes(lowerQuery),
    )
  }, [query])

  const showSuggestions = query.trim() === ''

  return (
    <main className='p-6 w-full'>
      <h1 className='text-3xl font-bold text-stone-900 mb-6 text-start'>
        Conversion Formulas
      </h1>
      <div className='relative mb-8 flex items-center lg:max-w-2/4'>
        <AiOutlineSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 text-xl' />
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search: e.g., meters to feet, celsius to fahrenheit'
          className='w-full pl-12 pr-24 py-4 bg-white rounded-lg border border-stone-300 text-stone-800 placeholder:text-stone-400'
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className='absolute right-4 text-sm underline text-stone-500 hover:text-stone-700 cursor-pointer'
          >
            Clear
          </button>
        )}
      </div>

      {showSuggestions && (
        <div className='mb-6'>
          <h2 className='text-xl font-semibold text-stone-700 mb-3'>
            Popular Conversions
          </h2>
          <div className='flex gap-3 overflow-x-auto pb-1 thin-scrollbar'>
            {conversionFormulas.slice(0, 10).map((formula) => (
              <span
                onClick={() => setQuery(formula.title)}
                key={formula.id}
                className='whitespace-nowrap px-4 py-2 rounded-full bg-stone-300 text-stone-800 text-sm font-medium shrink-0 cursor-pointer transition mb-3 capitalize hover:bg-stone-400'
              >
                {formula.title}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex flex-col gap-4 flex-grow lg:w-4/5'>
          {filteredFormulas.map((formula) => (
            <div
              key={formula.id}
              className='flex flex-col gap-6 p-8 bg-stone-100 rounded shadow'
            >
              {/* Left (Formula Info) */}
              <div className='lg:w-auto flex flex-col'>
                <h3 className='text-lg font-semibold text-stone-800 mb-3 capitalize'>
                  {formula.title}
                </h3>
                <p className='text-stone-600 flex flex-col gap-2 md:items-center md:flex-row self-start'>
                  <span className='text-sm'>Formula: </span>
                  <span className='bg-stone-900 text-stone-100 px-3 py-2 rounded text-sm font-semibold'>
                    {formula.formula}
                  </span>
                </p>
              </div>

              <hr className='border-stone-300' />

              {/* Right (Example + Note) */}
              <div className='lg:w-auto text-sm space-y-2 text-stone-600 mt-6 lg:mt-0'>
                {formula.example && (
                  <p>
                    <span className='font-semibold text-stone-700'>
                      Example:
                    </span>{' '}
                    {formula.example}
                  </p>
                )}
                {formula.note && (
                  <p>
                    <span className='font-semibold text-stone-700'>Note:</span>{' '}
                    {formula.note}
                  </p>
                )}
              </div>
            </div>
          ))}

          {filteredFormulas.length === 0 && !showSuggestions && (
            <p className='text-stone-500'>No matching conversion found.</p>
          )}
        </div>
        <div className='lg:w-1/5 flex flex-col gap-5 bg-white p-4 self-start sticky top-0'>
          <AdBanner />
        </div>
      </div>
    </main>
  )
}
