'use client'

import { ContactResponse } from '@/types/ContactResponse'

type AdminDataViewerProps = {
  title: string
  data: ContactResponse[]
}

export default function AdminDataViewer({ title, data }: AdminDataViewerProps) {
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8 text-stone-900'>{title}</h1>

      {data.length === 0 ? (
        <p className='text-stone-600'>No data found.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data.map((item) => (
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
                  <div className='w-full bg-stone-200 text-stone-700 rounded px-3 py-2 whitespace-pre-line'>
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
