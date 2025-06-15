'use client'

import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='bg-white rounded-lg relative shadow-lg w-full max-w-fit'
        >
          <button
            onClick={onClose}
            className='absolute top-3 right-3 text-stone-500 hover:text-stone-800 text-2xl cursor-pointer'
          >
            <AiOutlineClose />
          </button>
          <div className='p-6'>{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
