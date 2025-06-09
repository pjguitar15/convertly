import { navbarLinks } from '@/constants/navbarLinks'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex items-center py-6 gap-9'>
        <Logo href='/' />
        <div>
          {navbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className='text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
