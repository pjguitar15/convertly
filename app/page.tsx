import CenterItems from '@/components/CenterItems'
import Hero from '@/components/Hero'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <CenterItems className='container mx-auto'>
      <Hero />
    </CenterItems>
  )
}
