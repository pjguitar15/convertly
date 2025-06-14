'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (isAdmin === 'true') {
      setAuthorized(true)
    } else {
      // Smooth redirect with slight delay
      setTimeout(() => {
        router.push('/admin/login')
      }, 100)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isAdmin')
    router.push('/admin/login')
  }

  const links = [
    { href: '/admin/protected/contact-responses', label: 'Contact Responses' },
    { href: '/admin/protected/feedbacks', label: 'Feedbacks' },
    { href: '/admin/protected/visitors', label: 'Visitors' },
  ]

  if (!authorized) {
    // Block sidebar & main while checking auth
    return null // or return <div>Loading...</div>
  }

  return (
    <div className='flex min-h-screen'>
      <aside className='w-64 bg-stone-800 text-white p-6 flex flex-col gap-4'>
        <h2 className='text-xl font-bold mb-6'>Admin Panel</h2>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-2 py-1 rounded transition ${
              pathname === link.href
                ? 'bg-stone-700 font-semibold'
                : 'hover:underline'
            }`}
          >
            {link.label}
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className='mt-auto text-red-300 hover:underline'
        >
          Logout
        </button>
      </aside>

      <main className='flex-1 p-8 bg-stone-200'>{children}</main>
    </div>
  )
}
