import CenterItems from '@/components/CenterItems'
import PageInfo from '@/components/PageInfo'
import PercentageCalculator from '@/components/percentage-calculator/PercentageCalculator'

const percentagePageInfo = {
  title: 'What can you do on this page?',
  bullets: [
    'Easily calculate percentages for discounts, tips, or any value.',
    'Find what percentage one number is of another.',
    'Increase or decrease a number by a specific percentage.',
    'Great for shopping, school, or financial planning.',
    {
      text: 'Looking for more tools?',
      subLinks: [
        {
          label: 'Conversion formula library',
          href: '/conversion-formulas',
          description: ' to learn the math behind different conversions.',
        },
        {
          label: 'Unit converters',
          href: '/convert/length',
          description:
            ' for measurements like length, mass, temperature, and more.',
        },
        {
          label: 'Currency converter',
          href: '/convert/currency',
          description: ' for live currency exchange conversions.',
        },
        {
          label: 'BMI calculator',
          href: '/bmi-calculator',
          description:
            ' to check your body mass index and healthy weight range.',
        },
      ],
    },
    'No account needed — everything runs locally in your browser.',
  ],
}

export const metadata = {
  title: 'Percentage Calculator – Calculate Percent Increase, Decrease & More',
  description:
    'Free percentage calculator for quick percent increase, decrease, and percentage of a number. Fast, accurate, and works offline.',
  keywords: [
    'percentage calculator',
    'percent increase',
    'percent decrease',
    'what is x percent of y',
    'percent of number calculator',
  ],
  openGraph: {
    title: 'Percentage Calculator – Free & Instant',
    description:
      'Quickly calculate percent increase, decrease, or what percentage a number is of another. Fast and simple.',
    url: 'https://convertlikeapro.com/percentage-calculator',
    siteName: 'Convert Like A Pro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percentage Calculator – Fast & Free',
    description:
      'Calculate percent values instantly. No signup, works offline.',
  },
}

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <>
      <CenterItems className='flex flex-col justify-center items-center'>
        <PercentageCalculator />
      </CenterItems>
      <PageInfo
        title={percentagePageInfo.title}
        bullets={percentagePageInfo.bullets}
      />
    </>
  )
}
