import Hero from '@/components/landing-sections/Hero'
import Features from '@/components/landing-sections/Features'
import HowItWorks from '@/components/landing-sections/HowItWorks'
import Testimonials from '@/components/landing-sections/Testimonials'
import CallToAction from '@/components/landing-sections/CallToAction'

export async function generateMetadata() {
  return {
    title: 'Convert Like A Pro – Free Unit & Currency Converter Tool',
    description:
      'Convert units, currencies, percentages and BMI instantly with our all-in-one conversion tool. Fast, accurate, and easy to use.',
    keywords: [
      'unit converter',
      'currency converter',
      'percentage calculator',
      'BMI calculator',
      'online conversion tool',
      'convert length weight volume',
      'convert USD to EUR',
      'measurement converter',
      'instant conversion calculator',
    ],
    openGraph: {
      title: 'Convert Like A Pro – Smart Conversion Suite',
      description:
        'Convert anything in seconds: units, currency, percentages, BMI and more. Free, accurate, and lightning-fast.',
      url: 'https://convertlikeapro.com',
      siteName: 'Convert Like A Pro',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Convert Like A Pro – Free Online Converter',
      description:
        'One tool to convert all your units, currencies, percentages, and BMI. Super fast and always free.',
    },
  }
}

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  

  return (
    <main className='container mx-auto px-4 md:px-0'>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
