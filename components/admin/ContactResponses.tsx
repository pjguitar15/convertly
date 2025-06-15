'use client'

import { useState, useMemo } from 'react'
import { ContactResponse } from '@/types/ContactResponse'

type AdminDataViewerProps = {
  title: string
  data: ContactResponse[]
}

export default function AdminDataViewer({ title, data }: AdminDataViewerProps) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
    })
  }, [data, sortOrder])

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <div className='max-w-5xl mx-auto'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-3xl font-bold text-stone-900'>{title}</h1>
        <button
          onClick={toggleSortOrder}
          className='px-4 py-2 text-sm text-stone-900'
        >
          Sort by Created At:{' '}
          <span className='inline-block ml-1 px-2 py-0.5 rounded bg-white text-stone-800 font-medium text-xs border border-stone-400 cursor-pointer'>
            {sortOrder === 'asc' ? 'Oldest First' : 'Newest First'}
          </span>
        </button>
      </div>

      {sortedData.length === 0 ? (
        <p className='text-stone-600'>No data found.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {sortedData.map((item) => (
            <div
              key={item._id}
              className='bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:shadow-md transition'
            >
              <div className='space-y-4'>
                {/* ID */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    ID
                  </label>
                  <div className='w-full text-xs font-mono bg-stone-200 text-stone-700 rounded px-3 py-2 break-all'>
                    {item._id}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    Name
                  </label>
                  <div className='w-full bg-stone-200 text-stone-800 rounded px-3 py-2'>
                    {item.name}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    Email
                  </label>
                  <div className='w-full bg-stone-200 text-stone-700 rounded px-3 py-2'>
                    {item.email}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    Message
                  </label>
                  <div className='w-full bg-stone-200 text-stone-700 rounded px-3 py-2 whitespace-pre-line break-words'>
                    {item.message}
                  </div>
                </div>

                {/* Created At */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    Created At
                  </label>
                  <div className='w-full bg-stone-200 text-stone-600 rounded px-3 py-2'>
                    {new Date(item.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
