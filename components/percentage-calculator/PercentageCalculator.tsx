'use client'

import { useState } from 'react'
import { AiOutlinePercentage } from 'react-icons/ai'
import PageTransition from '../PageTransition'

export default function PercentageCalculator() {
  // ✅ Store as strings to match input type
  const [base, setBase] = useState<string>('100')
  const [percent, setPercent] = useState<string>('5')
  const [result, setResult] = useState<string | null>(null)

  // ✅ Safely convert when needed
  const handleCalculate = () => {
    const baseNumber = Number(base)
    const percentNumber = Number(percent)
    if (isNaN(baseNumber) || isNaN(percentNumber)) {
      setResult('Please enter valid numbers.')
      return
    }
    setResult(
      `${percentNumber}% of ${baseNumber} is ${
        (baseNumber * percentNumber) / 100
      }`,
    )
  }

  const handleIncrease = () => {
    const baseNumber = Number(base)
    const percentNumber = Number(percent)
    if (isNaN(baseNumber) || isNaN(percentNumber)) {
      setResult('Please enter valid numbers.')
      return
    }
    const increased = baseNumber + (baseNumber * percentNumber) / 100
    setResult(`${baseNumber} increased by ${percentNumber}% is ${increased}`)
  }

  const handleDecrease = () => {
    const baseNumber = Number(base)
    const percentNumber = Number(percent)
    if (isNaN(baseNumber) || isNaN(percentNumber)) {
      setResult('Please enter valid numbers.')
      return
    }
    const decreased = baseNumber - (baseNumber * percentNumber) / 100
    setResult(`${baseNumber} decreased by ${percentNumber}% is ${decreased}`)
  }

  return (
    <main className='bg-white border border-stone-100 shadow rounded-xl p-8 md:p-18 mx-auto w-full max-w-3xl'>
      <PageTransition>
        <h1 className='text-2xl lg:text-3xl font-bold mb-8 text-center flex justify-center items-center gap-2 text-stone-900'>
          <AiOutlinePercentage className='text-5xl md:text-3xl' />
          Percentage Calculator
        </h1>

        <div className='flex flex-col gap-4'>
          <div>
            <label className='block mb-1 text-stone-700 font-medium'>
              Base number:
            </label>
            <input
              value={base}
              onChange={(e) => setBase(e.target.value)}
              type='number'
              placeholder='Enter the base number'
              className='p-3 rounded outline-none text-center text-lg bg-stone-200 text-stone-900 w-full'
            />
          </div>

          <div>
            <label className='block mb-1 text-stone-700 font-medium'>
              Percentage (%):
            </label>
            <input
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
              type='number'
              placeholder='Enter the percentage'
              className='p-3 rounded outline-none text-center text-lg bg-stone-200 text-stone-900 w-full'
            />
          </div>

          <div className='flex flex-col md:flex-row gap-3'>
            <button
              onClick={handleCalculate}
              className='bg-stone-800 hover:bg-stone-900 text-white rounded p-3 w-full'
            >
              Calculate {percent || '...'}% of {base || '...'}
            </button>
            <button
              onClick={handleIncrease}
              className='bg-stone-700 hover:bg-stone-800 text-white rounded p-3 w-full'
            >
              Increase {base || '...'} by {percent || '...'}%
            </button>
            <button
              onClick={handleDecrease}
              className='bg-stone-700 hover:bg-stone-800 text-white rounded p-3 w-full'
            >
              Decrease {base || '...'} by {percent || '...'}%
            </button>
          </div>

          <p className='mt-6 text-center text-xl text-stone-900 font-semibold'>
            {result ?? 'Click a button above to calculate.'}
          </p>
        </div>
      </PageTransition>
    </main>
  )
}
