'use client'

import React, { ReactNode } from 'react'
import CenterItems from './CenterItems'
import Link from 'next/link'

type StillInProgressProps = {
  icon?: ReactNode
  title?: string
  description?: string
  buttonText?: string
  navigateTo: string
}

const StillInProgress: React.FC<StillInProgressProps> = ({
  icon,
  title,
  description,
  buttonText,
  navigateTo,
}) => {
  return (
    <CenterItems>
      <div className='flex flex-col items-center justify-center text-center lg:min-w-lgshadow-xl rounded-2xl p-10 gap-4'>
        <div className='text-6xl animate-pulse'>{icon}</div>
        <div className='flex flex-col items-center gap-1'>
          <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>
          <p className='text-gray-500 text-base md:text-lg max-w-[500px]'>
            {description}
          </p>
        </div>
        <Link href={navigateTo}>
          <button className='mt-4 px-6 py-3 bg-stone-900 text-gray-100 text-md font-medium rounded-lg shadow hover:bg-gray-700 transition-colors cursor-pointer'>
            {buttonText}
          </button>
        </Link>
      </div>
    </CenterItems>
  )
}

export default StillInProgress
