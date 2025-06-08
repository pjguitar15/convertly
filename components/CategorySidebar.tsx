'use client'
import { useUnits } from '@/context/UnitContext'
import { useRouter } from 'next/navigation'

export default function CategorySidebar() {
  const { category, setCategory } = useUnits()
  const router = useRouter()
  const categories: string[] = [
    'length',
    'mass',
    'temperature',
    'time',
    'area',
    'volume',
    'speed',
    'energy',
  ]

  const handleLinkClick = (cat: string) => {
    setCategory(cat as typeof category)
    router.push(`/convert/${cat}`)
  }

  return (
    <aside className='w-64 bg-gray-800 text-white rounded-xl'>
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => handleLinkClick(cat)}
          className={`w-full text-left px-5 py-4 first:rounded-t-xl last:rounded-b-xl transition-colors duration-200 cursor-pointer ${
            category === cat
              ? 'bg-gray-600 text-white font-semibold'
              : 'hover:bg-gray-700'
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </aside>
  )
}
