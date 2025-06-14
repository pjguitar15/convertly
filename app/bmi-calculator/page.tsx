import BMICalculator from '@/components/bmi-calculator/BMICalculator'
import CenterItems from '@/components/CenterItems'
import PageInfo from '@/components/PageInfo'

const bmiPageInfo = {
  title: 'What can you do on this page?',
  bullets: [
    'Calculate your Body Mass Index (BMI) instantly.',
    'Check if your weight is within a healthy range for your height.',
    'Simple, private, and works directly in your browser.',
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
            ' for accurate measurement conversions like length, mass, and temperature.',
        },
        {
          label: 'Currency converter',
          href: '/convert/currency',
          description: ' for real-time currency exchange conversions.',
        },
        {
          label: 'Percentage calculator',
          href: '/percentage-calculator',
          description: ' for quick percentage calculations.',
        },
      ],
    },
    'No signup needed — fast and secure.',
  ],
}

export const metadata = {
  title: 'BMI Calculator – Calculate Your Body Mass Index',
  description:
    'Free BMI calculator to find out if your weight is healthy. Fast, private, and easy to use.',
  keywords: [
    'BMI calculator',
    'Body Mass Index calculator',
    'healthy weight calculator',
    'check BMI online',
  ],
  openGraph: {
    title: 'BMI Calculator – Free & Instant',
    description:
      'Check your BMI and see if your weight is healthy. No signup, works offline.',
    url: 'https://convertlikeapro.com/bmi-calculator',
    siteName: 'Convert Like A Pro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator – Fast & Free',
    description:
      'Instantly calculate your Body Mass Index. Simple, secure, and easy.',
  },
}

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <>
      <CenterItems className='flex flex-col justify-center items-center'>
        <BMICalculator />
      </CenterItems>
      <PageInfo title={bmiPageInfo.title} bullets={bmiPageInfo.bullets} />
    </>
  )
}
