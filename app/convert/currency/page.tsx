import AdBanner from '@/components/AdBanner'
import CenterItems from '@/components/CenterItems'
import MainCurrencyPage from '@/components/MainCurrencyPage'
import PageInfo from '@/components/PageInfo'
import React from 'react'

const currencyPageInfo = {
  title: 'What can you do on this page?',
  bullets: [
    'Easily convert between world currencies using up-to-date exchange rates from reliable financial sources.',
    'Whether you are traveling, shopping online internationally, or managing business transactions, this page helps you get accurate conversions in real time.',
    'Simply enter the amount, choose your source and target currencies, and let the converter do the rest—no manual calculations needed.',
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
          label: 'Percentage calculator',
          href: '/percentage-calculator',
          description: ' for quick percentage increase, decrease, and more.',
        },
        {
          label: 'BMI calculator',
          href: '/bmi-calculator',
          description:
            ' to check your body mass index and healthy weight range.',
        },
      ],
    },
    'Currency data is refreshed regularly, and conversions are fast, secure, and private. No account required.',
    'Works seamlessly on mobile, desktop, or offline with cached rates (when supported).',
  ],
}

export async function generateMetadata() {
  return {
    title: 'Currency Converter – Convert Money Instantly | Convert Like A Pro',
    description:
      'Use our free currency converter to convert money between 150+ currencies in real-time. Get the latest exchange rates and convert USD, EUR, GBP, PHP, and more instantly.',
    keywords: [
      'currency converter',
      'money conversion tool',
      'convert USD to EUR',
      'live exchange rates',
      'currency exchange calculator',
      'convert money online',
      'foreign exchange tool',
    ],
    openGraph: {
      title: 'Currency Converter – Convert Money Instantly',
      description:
        'Fast and accurate currency conversions for over 150 currencies. Get real-time exchange rates and convert now.',
      url: 'https://convertlikeapro.com/convert-currency',
      siteName: 'Convert Like A Pro',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free Currency Converter | Convert Like A Pro',
      description:
        'Convert any currency in seconds using live exchange rates. Free and easy to use.',
    },
  }
}

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <>
      <CenterItems className='flex flex-col'>
        <MainCurrencyPage />
      </CenterItems>
      <div className='bg-white py-12'>
        <div className='container mx-auto'>
          <AdBanner />
        </div>
      </div>
      <PageInfo
        title={currencyPageInfo.title}
        bullets={currencyPageInfo.bullets}
      />
    </>
  )
}
