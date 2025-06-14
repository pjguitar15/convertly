'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (isAdmin === 'true') {
      setAuthorized(true)
    } else {
      // Small timeout for smooth redirect, optional
      setTimeout(() => {
        router.push('/admin/login')
      }, 100)
    }
  }, [router])

  // While checking, render nothing (or a spinner)
  if (!authorized) {
    return null // or <div>Loading...</div>
  }

  return <>{children}</>
}
