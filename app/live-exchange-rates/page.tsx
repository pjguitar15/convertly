import CenterItems from '@/components/CenterItems'
import StillInProgress from '@/components/StillInProgress'
import React from 'react'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <CenterItems>
      <StillInProgress
        icon={<span className='text-yellow-500'>🚧</span>}
        title='Live Exchange Rate Page'
        description='We’re currently building this feature to provide accurate and real-time currency conversions. Stay tuned — it’s coming soon!'
        buttonText='Convert Units Instead'
        navigateTo='/'
      />
    </CenterItems>
  )
}
