'use client'

import Modal from '../Modal'
import GCashQR from '../../public/gcash-qr.png'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  onClose: () => void
}

export default function DonateModal({ onClose }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('5363 4701 7819 5991')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Modal onClose={onClose}>
      {/* GCash-like header */}
      <div className='bg-blue-600 rounded-t-lg p-4 text-center text-white'>
        <h2 className='text-2xl font-bold'>GCash</h2>
      </div>

      {/* Content Card */}
      <div className='bg-white rounded-b-lg p-6 text-center shadow-lg -mt-1'>
        <Image
          src={GCashQR}
          alt='GCash QR Code'
          className='mx-auto mb-4 w-48 h-48 object-contain border'
          width={200}
          height={200}
        />
        <p className='text-xs text-stone-500 mb-4'>
          Scan QR using your GCash app.
        </p>

        <hr className='my-10 border-stone-300' />

        {/* Bank Info */}
        <div className='text-left text-sm text-stone-700'>
          <p className='font-semibold text-stone-800 mb-2'>
            Or donate via bank transfer:
          </p>
          <p>
            <strong>Bank Name:</strong> BPI
          </p>
          <p>
            <strong>Account Name:</strong> Philcob Josol
          </p>
          <p className='flex items-center gap-2'>
            <strong>Account Number:</strong> 5363 4701 7819 5991
            <button
              onClick={handleCopy}
              className='ml-2 px-2 py-1 text-xs bg-stone-200 rounded hover:bg-stone-300 transition'
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </p>
          <p className='mt-2 text-xs text-stone-500'>
            For donations only. Please contact me for large transfers.
          </p>
        </div>
      </div>
    </Modal>
  )
}
