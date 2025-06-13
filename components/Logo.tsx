'use client'

import Link from 'next/link'
import { AiFillSliders } from 'react-icons/ai'
import React from 'react'

interface LogoProps {
  href: string
}

const Logo: React.FC<LogoProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className='flex items-center gap-2 text-stone-950 hover:opacity-90 transition hover:scale-120 px-4 lg:py-3 rounded'
      aria-label='Convert Like a Pro Homepage'
    >
      <AiFillSliders className='text-4xl xl:text-3xl text-stone-900' />
      <span className='text-lg font-semibold tracking-wide hidden sm:inline-block lg:hidden xl:inline-block'>
        CONVERT LIKE A PRO
      </span>
    </Link>
  )
}

export default Logo
