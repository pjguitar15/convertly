'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json()
    if (data.success) {
      localStorage.setItem('isAdmin', 'true')
      toast.success('Logged in!')
      router.push('/admin/protected/contact-responses')
    } else {
      toast.error(data.error || 'Login failed')
    }
    setLoading(false)
  }

  return (
    <main className='flex items-center justify-center min-h-screen bg-white px-6 py-12'>
      <div className='max-w-md w-full bg-stone-100 p-8 rounded shadow'>
        <h1 className='text-2xl font-bold mb-6 text-stone-900'>Admin Login</h1>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Username'
            className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type='password'
            placeholder='Password'
            className='p-3 rounded outline-none bg-stone-200 text-stone-900 w-full text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type='submit'
            className='bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded transition disabled:opacity-50'
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}
