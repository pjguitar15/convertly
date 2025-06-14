'use client'

import { Visitor } from "@/types/VisitorResponse"

type VisitorsResponsesProps = {
  title: string
  data: Visitor[]
}

export default function VisitorsResponses({
  title,
  data,
}: VisitorsResponsesProps) {
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

                {/* Visitor ID */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    Visitor ID
                  </label>
                  <div className='w-full bg-stone-200 text-stone-800 rounded px-3 py-2 font-mono break-all'>
                    {item.visitorId}
                  </div>
                </div>

                {/* IP */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    IP
                  </label>
                  <div className='w-full bg-stone-200 text-stone-700 rounded px-3 py-2'>
                    {item.ip}
                  </div>
                </div>

                {/* User Agent */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    User Agent
                  </label>
                  <div className='w-full bg-stone-200 text-stone-700 rounded px-3 py-2 break-all'>
                    {item.userAgent}
                  </div>
                </div>

                {/* Last Visited */}
                <div>
                  <label className='block text-xs text-stone-500 mb-1'>
                    Last Visited
                  </label>
                  <div className='w-full bg-stone-200 text-stone-600 rounded px-3 py-2'>
                    {new Date(item.lastVisited).toLocaleString()}
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
