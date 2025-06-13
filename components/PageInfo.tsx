import Link from 'next/link'
import React from 'react'

type SubLink = {
  label: string
  href: string
  description?: string
}

type PageInfoProps = {
  title: string
  bullets: (string | { text: string; subLinks?: SubLink[] })[]
}

const PageInfo = ({ title, bullets }: PageInfoProps) => {
  return (
    <div className='w-full bg-white py-12'>
      <div className='container mx-auto'>
        <h3 className='text-lg font-semibold text-stone-800 mb-4'>{title}</h3>
        <ul className='list-disc list-inside text-stone-600 text-sm space-y-3'>
          {bullets.map((item, idx) => {
            if (typeof item === 'string') {
              return <li key={idx}>{item}</li>
            }

            return (
              <li key={idx}>
                {item.text}
                {item.subLinks && (
                  <ul className='list-disc list-inside ml-5 mt-2 space-y-2'>
                    {item.subLinks.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className='underline text-stone-700 hover:text-stone-900'
                        >
                          {link.label}
                        </Link>
                        {link.description && <> {link.description}</>}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PageInfo
