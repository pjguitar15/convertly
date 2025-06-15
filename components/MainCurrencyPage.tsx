'use client'

import { currencies } from '@/constants/currencies'
import React, { useEffect, useState } from 'react'
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter'
import ReactCountryFlag from 'react-country-flag'
import { MdAttachMoney } from 'react-icons/md'

function getCountryCode(currencyCode: string): string {
  // ISO 3166-1 alpha-2
  return currencyCode.slice(0, 2)
}

export default function MainCurrencyPage() {
  const [amount, setAmount] = useState<string>('') // ✅ string state
  const [fromCurrency, setFromCurrency] = useState<string>('USD')
  const [toCurrency, setToCurrency] = useState<string>('PHP')

  // ✅ cast to number for the hook, or null if empty
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
    if (savedAmount) setAmount(savedAmount) // ✅ no Number() here
  }, [])

  return (
    <>
      {loading && <div className='loader-bar' />}
      <main className='bg-white border border-stone-100 shadow rounded-xl p-14 mx-auto'>
        <h1 className='text-2xl lg:text-3xl font-bold mb-8 text-center flex justify-center items-center gap-2 text-stone-900'>
          <MdAttachMoney className='text-5xl md:text-3xl' />
          <span className='hidden md:inline-block'>Convert Currency</span>
        </h1>

        <div className='flex flex-col gap-3'>
          <input
            value={amount} // ✅ string
            onChange={(e) => setAmount(e.target.value)} // ✅ store as string
            type='number'
            className='p-2 rounded outline-0 text-center text-xl bg-stone-200 text-stone-900 w-full py-4 px-4'
            placeholder='Enter amount'
          />

          <div className='flex flex-col md:flex-row gap-3'>
            {[
              { value: fromCurrency, setter: setFromCurrency },
              { value: toCurrency, setter: setToCurrency },
            ].map(({ value, setter }, idx) => (
              <select
                key={idx}
                onChange={(e) => setter(e.target.value)}
                value={value}
                className='outline-0 border-0 bg-stone-200 px-4 text-stone-900 w-full rounded py-4'
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
            ))}
          </div>

          <hr className='mt-4 border border-stone-200' />
          <div className='mt-6 text-center text-xl md:text-2xl text-stone-900'>
            {loading && <p>Converting...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            {convertedAmount !== null && !loading && !error && (
              <p className='flex items-center justify-center gap-2'>
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
              </p>
            )}
          </div>
          <p className='text-sm text-stone-500 mt-2 text-center'>
            Exchange rates are updated regularly based on the latest data from
            reliable financial sources.
          </p>
        </div>
      </main>
    </>
  )
}
