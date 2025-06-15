'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logoImage from '@/public/logo.png'

interface LogoProps {
  href: string
  className?: string
}

const Logo: React.FC<LogoProps> = ({ href, className }) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-stone-950 hover:opacity-90 transition px-4 lg:py-3 rounded ${className}`}
      aria-label='Convert Like a Pro Homepage'
    >
      <Image
        src={logoImage}
        width={200}
        height={200}
        alt='convert like a pro'
      />
    </Link>
  )
}

export default Logo
