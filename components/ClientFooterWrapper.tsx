'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ClientFooterWrapper() {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin')

  if (isAdminRoute) return null

  return <Footer />
}
