import CenterItems from '@/components/CenterItems'
import SupportPage from '@/components/support/SupportPage'
import React from 'react'

export default async function Page() {
  // Simulate a slight delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return (
    <CenterItems className='flex flex-col justify-center items-center text-center mx-auto p-8'>
      <SupportPage />
    </CenterItems>
  )
}
