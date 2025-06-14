'use client'

import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded-lg relative shadow-lg w-full max-w-fit'
      >
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-stone-500 hover:text-stone-800 text-2xl cursor-pointer'
        >
          <AiOutlineClose />
        </button>
        <div className='p-6'>{children}</div>
      </div>
    </div>
  )
}
