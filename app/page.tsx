import Features from '@/components/landing-sections/Features'
import Hero from '@/components/landing-sections/Hero'
import Head from 'next/head'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <>
      <Head>
        <title>Convert Like A Pro | Home</title>
        <meta
          name='description'
          content='Welcome to Convert Like A Pro, your smart all-in-one unit and currency converter.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='container mx-auto'>
        <Hero />
        <Features />
      </main>
    </>
  )
}
