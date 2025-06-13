import CenterItems from '@/components/CenterItems'
import MainConversionFormulasPage from '@/components/conversion-formulas/MainConversionFormulasPage'
import PageInfo from '@/components/PageInfo'
import Head from 'next/head'
import React from 'react'

const conversionFormulasPageInfo = {
  title: 'What can you do on this page?',
  bullets: [
    'Explore a library of essential unit conversion formulas for everyday, academic, and professional use.',
    'Search for specific formulas by keyword, category, or common use cases like "meters to feet" or "celsius to fahrenheit".',
    'Get clear, readable examples alongside each formula to help you apply them with confidence.',
    'Perfect for students, teachers, engineers, and anyone who needs to understand how conversions work under the hood.',
    {
      text: 'Need to actually perform conversions?',
      subLinks: [
        {
          label: 'Unit converters',
          href: '/convert/length',
          description:
            ' for real-time conversions across physical measurements.',
        },
        {
          label: 'Currency converter',
          href: '/convert-currency',
          description: ' to handle global currency exchange with ease.',
        },
        {
          label: 'Live exchange rates',
          href: '/live-exchange-rates',
          description: ' to see market movement in real time.',
        },
      ],
    },
    'Each formula is validated and structured for readability, so you can trust the math behind your conversions.',
    'This tool works across devices and is optimized for both quick lookup and deep understanding.',
  ],
}

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <>
      <Head>
        <title>Conversion Formulas | Convert Like A Pro</title>
        <meta
          name='description'
          content='Browse conversion formulas for length, mass, temperature, volume, and more.'
        />
      </Head>
      <CenterItems>
        <MainConversionFormulasPage />
      </CenterItems>
      <PageInfo
        title={conversionFormulasPageInfo.title}
        bullets={conversionFormulasPageInfo.bullets}
      />
    </>
  )
}
