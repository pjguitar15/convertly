'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

// ✅ Import icons
import {
  AiOutlineMail,
  AiOutlineComment,
  AiOutlineUser,
  AiOutlineLogout,
} from 'react-icons/ai'

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

  // ✅ Add icons to links
  const links = [
    {
      href: '/admin/protected/contact-responses',
      label: 'Contact Responses',
      icon: <AiOutlineMail className='text-lg' />,
    },
    {
      href: '/admin/protected/feedbacks',
      label: 'Feedbacks',
      icon: <AiOutlineComment className='text-lg' />,
    },
    {
      href: '/admin/protected/visitors',
      label: 'Visitors',
      icon: <AiOutlineUser className='text-lg' />,
    },
  ]

  if (!authorized) {
    return null // Or <div>Loading...</div>
  }

  return (
    <div className='flex min-h-screen'>
      <aside className='fixed top-0 left-0 h-full w-64 bg-stone-800 text-white p-6 flex flex-col gap-4'>
        <h2 className='text-xl font-bold mb-6'>Admin Panel</h2>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 px-2 py-1 rounded transition ${
              pathname === link.href
                ? 'bg-stone-700 font-semibold'
                : 'hover:underline'
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className='mt-auto flex items-center gap-2 text-red-300 hover:underline'
        >
          <AiOutlineLogout className='text-lg' />
          Logout
        </button>
      </aside>

      <main className='flex-1 p-8 bg-stone-200 ml-64'>{children}</main>
    </div>
  )
}
