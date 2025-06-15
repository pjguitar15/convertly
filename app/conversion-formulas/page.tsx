import CenterItems from '@/components/CenterItems'
import MainConversionFormulasPage from '@/components/conversion-formulas/MainConversionFormulasPage'
import PageInfo from '@/components/PageInfo'
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
          href: '/convert/currency',
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

export async function generateMetadata() {
  return {
    title:
      'Conversion Formulas – Length, Weight, Temperature & More | Convert Like A Pro',
    description:
      'Explore clear and accurate unit conversion formulas for length, weight, temperature, volume, and more. Perfect for students, engineers, and everyday use.',
    keywords: [
      'conversion formulas',
      'unit conversion formulas',
      'length formula',
      'weight conversion formula',
      'temperature conversion equation',
      'metric to imperial formulas',
      'how to convert units',
    ],
    openGraph: {
      title: 'Conversion Formulas – Understand How Units Convert',
      description:
        'Learn the math behind common unit conversions. Browse formulas for length, weight, temperature, and more.',
      url: 'https://convertlikeapro.com/conversion-formulas',
      siteName: 'Convert Like A Pro',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Conversion Formulas for Every Unit | Convert Like A Pro',
      description:
        'Master unit conversions with our easy-to-understand formulas. Great for learning, teaching, and solving real-world problems.',
    },
  }
}

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <>
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
