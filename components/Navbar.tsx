'use client'

import { navbarLinks } from '@/constants/navbarLinks'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { HiMenuAlt4 } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  // ✅ Close mobile menu if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target)
      ) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-stone-200'>
      <div className='container mx-auto flex items-center justify-between py-6 px-4 md:px-0'>
        <Logo className='max-w-[180px]' href='/' />

        {/* Desktop + mid screen Links */}
        <div className='hidden lg:flex gap-4 overflow-x-auto whitespace-nowrap max-w-full thin-scrollbar'>
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
            ref={burgerRef}
            className='cursor-pointer'
            onClick={toggleMenu}
            aria-label='Toggle Menu'
          >
            <HiMenuAlt4 className='text-stone-950 text-3xl' />
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='lg:hidden bg-white overflow-hidden pb-4'
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
