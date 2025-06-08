'use client'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchIcon: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...props
}) => {
  return (
    <div className='relative'>
      <AiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      <input
        type='text'
        className={`pl-10 pr-4 py-3 w-full rounded bg-white text-gray-800 shadow ${className}`}
        {...props}
      />
    </div>
  )
}

export default SearchIcon
