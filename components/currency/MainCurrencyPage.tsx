'use client'

import { currencies } from '@/constants/currencies'
import React, { useEffect, useState } from 'react'
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter'
import ReactCountryFlag from 'react-country-flag'
import { MdAttachMoney } from 'react-icons/md'
import { HiSwitchHorizontal } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

function getCountryCode(currencyCode: string): string {
  return currencyCode.slice(0, 2)
}

export default function MainCurrencyPage() {
  const [amount, setAmount] = useState<string>('')
  const [fromCurrency, setFromCurrency] = useState<string>('PHP')
  const [toCurrency, setToCurrency] = useState<string>('USD')

  const { convertedAmount, loading, error } = useCurrencyConverter(
    fromCurrency,
    toCurrency,
    amount ? Number(amount) : null,
  )

  useEffect(() => {
    const savedFrom = localStorage.getItem('fromCurrency')
    const savedTo = localStorage.getItem('toCurrency')
    const savedAmount = localStorage.getItem('amount')
    if (savedFrom) setFromCurrency(savedFrom)
    if (savedTo) setToCurrency(savedTo)
    if (savedAmount) setAmount(savedAmount)
  }, [])

  const handleSwitchCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <>
      {/* ✅ Loader Bar Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className='loader-bar'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* ✅ Main Card with fade-in */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='bg-white border border-stone-100 shadow rounded-xl p-14 mx-auto'
      >
        <h1 className='text-2xl lg:text-3xl font-bold mb-8 text-center flex justify-center items-center gap-2 text-stone-900'>
          <MdAttachMoney className='text-5xl md:text-3xl' />
          <span className='hidden md:inline-block'>Convert Currency</span>
        </h1>

        <div className='flex flex-col gap-3'>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='number'
            className='p-2 rounded outline-0 text-center text-xl bg-stone-200 text-stone-900 w-full py-4 px-4'
            placeholder='Enter amount'
          />

          <div className='flex flex-col md:flex-row gap-3 items-center'>
            <select
              onChange={(e) => setFromCurrency(e.target.value)}
              value={fromCurrency}
              className='outline-0 border-0 bg-stone-200 px-4 text-stone-900 w-full rounded py-4'
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
            </select>

            {/* Switch Button */}
            <button
              onClick={handleSwitchCurrencies}
              className='p-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition cursor-pointer'
              aria-label='Switch currencies'
            >
              <HiSwitchHorizontal className='text-2xl' />
            </button>

            <select
              onChange={(e) => setToCurrency(e.target.value)}
              value={toCurrency}
              className='outline-0 border-0 bg-stone-200 px-4 text-stone-900 w-full rounded py-4'
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
            </select>
          </div>

          <hr className='mt-4 border border-stone-200' />

          {/* ✅ Animated Result */}
          <div className='mt-6 text-center text-xl md:text-2xl text-stone-900'>
            {/* {loading && <p>Converting...</p>} */}
            {error && <p className='text-red-500'>{error}</p>}

            <AnimatePresence>
              {convertedAmount !== null && !loading && !error && (
                <motion.p
                  key='result'
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className='flex items-center justify-center gap-2'
                >
                  <ReactCountryFlag
                    countryCode={getCountryCode(fromCurrency)}
                    svg
                    style={{ fontSize: '1.5em' }}
                  />
                  {Number(amount).toLocaleString()} {fromCurrency} ={' '}
                  <strong>
                    {convertedAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{' '}
                    {toCurrency}
                  </strong>
                  <ReactCountryFlag
                    countryCode={getCountryCode(toCurrency)}
                    svg
                    style={{ fontSize: '1.5em' }}
                  />
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <p className='text-sm text-stone-500 mt-2 text-center'>
            Exchange rates are updated regularly based on the latest data from
            reliable financial sources.
          </p>
        </div>
      </motion.main>
    </>
  )
}
