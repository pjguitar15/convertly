'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function ClientNavbarWrapper() {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin')

  if (isAdminRoute) return null

  return <Navbar />
}
