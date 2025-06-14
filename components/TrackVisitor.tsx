'use client'

import { useEffect } from 'react'

export function TrackVisitor() {
  useEffect(() => {
    // Check if a visitor ID already exists in localStorage
    let visitorId = localStorage.getItem('visitorId')
    if (!visitorId) {
      visitorId = crypto.randomUUID()
      localStorage.setItem('visitorId', visitorId)
    }

    // Send a POST request to log or update the visitor
    fetch('/api/track-visitor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorId,
      }),
    }).catch(console.error)
  }, [])

  return null
}
