import Features from '@/components/landing-sections/Features'
import Hero from '@/components/landing-sections/Hero'

export async function generateMetadata() {
  return {
    title: 'Convert Like A Pro – Free Unit & Currency Converter Tool',
    description:
      'Convert units and currencies instantly with our all-in-one conversion tool. From length and weight to money and temperature – fast, accurate, and easy to use.',
    keywords: [
      'unit converter',
      'currency converter',
      'online conversion tool',
      'convert length weight volume',
      'convert USD to EUR',
      'measurement converter',
      'instant conversion calculator',
    ],
    openGraph: {
      title: 'Convert Like A Pro – Smart Unit & Currency Converter',
      description:
        'Convert anything in seconds: length, temperature, currency, and more. Free, accurate, and lightning-fast.',
      url: 'https://convertlikeapro.com',
      siteName: 'Convert Like A Pro',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Convert Like A Pro – Free Online Converter',
      description:
        'Use one tool to convert all your units and currencies. Super fast and always free.',
    },
  }
}

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay

  return (
    <>
      <main className='container mx-auto'>
        <Hero />
        <Features />
      </main>
    </>
  )
}
