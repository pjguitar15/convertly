'use client'

import Link from 'next/link'
import { AiOutlineInteraction } from 'react-icons/ai'
import React from 'react'

interface LogoProps {
  href: string
}

const Logo: React.FC<LogoProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className='flex items-center gap-2 text-white hover:opacity-90 transition hover:bg-gray-900 px-4 py-3 rounded'
      aria-label='Convert Like a Pro Homepage'
    >
      <AiOutlineInteraction className='text-3xl' />
      <span className='text-lg font-semibold tracking-wide'>
        CONVERT LIKE A PRO
      </span>
    </Link>
  )
}

export default Logo
