import CenterItems from '@/components/CenterItems'
import StillInProgress from '@/components/StillInProgress'
import React from 'react'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <CenterItems>
      <StillInProgress
        icon={'🚧'}
        title='Currency Conversion Coming Soon'
        description='Soon you’ll be able to convert between your favorite currencies with live exchange rates.'
        buttonText='Convert Units Instead'
        navigateTo='/convert/length'
      />
    </CenterItems>
  )
}
