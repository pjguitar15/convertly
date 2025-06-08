import { navbarLinks } from '@/constants/navbarLinks'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto py-3'>
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
  )
}

export default Navbar
