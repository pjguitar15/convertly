import CenterItems from '@/components/CenterItems'
import StillInProgress from '@/components/StillInProgress'
import React from 'react'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <CenterItems>
      <StillInProgress
        icon={'🚧'}
        title='Conversion Formula Coming Soon'
        description='Soon you’ll be able to learn how to convert units with conversion formula.'
        buttonText='Convert Units Instead'
        navigateTo='/convert/length'
      />
    </CenterItems>
  )
}
