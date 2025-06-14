import CenterItems from '@/components/CenterItems'
import ContactPage from '@/components/contact/ContactPage'
import React from 'react'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate a delay
  return (
    <CenterItems>
      <ContactPage />
    </CenterItems>
  )
}
