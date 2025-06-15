'use client'

import Modal from '../Modal'
import GCashQR from '../../public/gcash-qr.png'
import BMCQR from '../../public/bmc_qr.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type Props = {
  onClose: () => void
}

export default function DonateModal({ onClose }: Props) {
  const [country, setCountry] = useState('')

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => setCountry(data.country_code))
      .catch(() => setCountry('PH'))
  }, [])

  return (
    <Modal onClose={onClose}>
      {/* Header: GCash if PH */}
      <div className='bg-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-t-lg p-5 text-center text-stone-900 shadow-sm'>
        <h2 className='text-2xl font-bold tracking-wide'>Support My Work</h2>
        <p className='text-sm text-stone-800 mt-1'>
          Your donation keeps this project alive ☕
        </p>
      </div>
      <div
        className={`bg-white ${
          country === 'PH' ? 'rounded-b-lg' : 'rounded-lg'
        } p-6 text-center shadow-lg flex flex-col lg:flex-row gap-8 ${
          country === 'PH' ? '-mt-1' : ''
        }`}
      >
        {/* GCash block (PH only) */}
        {country === 'PH' && (
          <div className='flex flex-col items-center max-w-48'>
            <Image
              src={GCashQR}
              alt='GCash QR Code'
              className='mx-auto mb-4 w-48 h-48 object-contain border'
              width={200}
              height={200}
            />
            <p className='text-xs text-stone-500 mb-2'>Copy my number:</p>

            <button
              onClick={() => {
                navigator.clipboard.writeText('09970832389') // your GCash number
                alert('GCash number copied!')
              }}
              className='inline-block text-sm px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition'
            >
              Copy GCash Number
            </button>
          </div>
        )}

        {/* Vertical Divider */}
        {country === 'PH' && (
          <div className='hidden lg:block w-px bg-stone-300'></div>
        )}

        {/* Buy Me a Coffee block (always visible) */}
        <div className='flex-1'>
          <Image
            src={BMCQR}
            alt='Buy Me a Coffee QR Code'
            className='mx-auto mb-4 w-48 h-48 object-contain border'
            width={200}
            height={200}
          />
          <p className='text-xs text-stone-500 mb-2'>Or tap below:</p>
          <a
            href='https://www.buymeacoffee.com/philcobsuzuki'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-sm px-6 py-3 bg-yellow-400 text-stone-900 font-semibold rounded-full hover:bg-yellow-500 transition'
          >
            Visit Buy Me a Coffee
          </a>
        </div>
      </div>
    </Modal>
  )
}
