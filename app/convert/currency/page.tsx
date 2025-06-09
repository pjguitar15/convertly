import CenterItems from '@/components/CenterItems'
import StillInProgress from '@/components/StillInProgress'
import React from 'react'

const CurrencyPage = () => {
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

export default CurrencyPage
