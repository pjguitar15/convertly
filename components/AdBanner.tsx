'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>
  }
}

export default function AdBanner() {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdsbyGoogle push error:', e)
    }
  }, [])

  return (
    <ins
      className='adsbygoogle border'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-9043024218213352'
      data-ad-slot='4299293888'
      data-ad-format='auto'
      data-full-width-responsive='true'
    />
  )
}
