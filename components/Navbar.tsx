'use client'

import { navbarLinks } from '@/constants/navbarLinks'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { HiMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-stone-200'>
      <div className='container mx-auto flex items-center justify-between py-6 px-4 md:px-0'>
        <Logo href='/' />

        {/* Desktop Links */}
        <div className='hidden lg:flex gap-4 overflow-x-auto whitespace-nowrap max-w-full'>
          {navbarLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-stone-950 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isActive && 'bg-stone-300'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Burger */}
        <div className='lg:hidden'>
          <button
            className='cursor-pointer'
            onClick={toggleMenu}
            aria-label='Toggle Menu'
          >
            <HiMenuAlt4 className='text-stone-950 text-3xl' />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='lg:hidden bg-white pb-4'>
          {navbarLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-stone-900 w-full text-left px-7 py-4 transition-colors duration-200 ${
                  isActive ? 'bg-stone-300' : 'hover:bg-stone-300'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Navbar
