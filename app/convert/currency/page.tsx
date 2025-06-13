import CenterItems from '@/components/CenterItems'
import MainCurrencyPage from '@/components/MainCurrencyPage'
import PageInfo from '@/components/PageInfo'
import Head from 'next/head'
import React from 'react'

const currencyPageInfo = {
  title: 'What can you do on this page?',
  bullets: [
    'Easily convert between world currencies using up-to-date exchange rates from reliable financial sources.',
    'Whether you are traveling, shopping online internationally, or managing business transactions, this page helps you get accurate conversions in real time.',
    'Simply enter the amount, choose your source and target currencies, and let the converter do the rest—no manual calculations needed.',
    'You can also view live exchange trends and switch to crypto or fiat pairs effortlessly.',
    {
      text: 'Looking for more tools?',
      subLinks: [
        {
          label: 'Conversion formulas',
          href: '/conversion-formulas',
          description: ' to understand the math behind conversions.',
        },
        {
          label: 'Unit converters',
          href: '/convert/length',
          description:
            ' for physical measurements like length, mass, and temperature.',
        },
        {
          label: 'Live exchange rates',
          href: '/live-exchange-rates',
          description: ' to see real-time currency movement.',
        },
      ],
    },
    'Currency data is refreshed regularly, and conversions are fast, secure, and private. No account required.',
    'Works seamlessly on mobile, desktop, or offline with cached rates (when supported).',
  ],
}

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <>
      <Head>
        <title>Currency Converter | Convert Like A Pro</title>
        <meta
          name='description'
          content='Get real-time exchange rates and convert any currency globally with Convert Like A Pro.'
        />
      </Head>
      <CenterItems className='flex flex-col'>
        <MainCurrencyPage />
      </CenterItems>
      <PageInfo
        title={currencyPageInfo.title}
        bullets={currencyPageInfo.bullets}
      />
    </>
  )
}
