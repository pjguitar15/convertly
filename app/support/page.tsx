import CenterItems from '@/components/CenterItems'
import StillInProgress from '@/components/StillInProgress'
import React from 'react'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <CenterItems>
      <StillInProgress
        icon={<span className='text-yellow-500'>🚧</span>}
        title='Support Page'
        description='This page is still in progress. We are working hard to bring you the best support experience.'
        buttonText='Convert Units Instead'
        navigateTo='/'
      />
    </CenterItems>
  )
}
