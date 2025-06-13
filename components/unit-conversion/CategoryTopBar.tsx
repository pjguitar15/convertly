'use client'
import { useUnits } from '@/context/UnitContext'

export default function CategoryTopBar() {
  const { category, setCategory } = useUnits()
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

  return (
    <div className='flex flex-wrap gap-2 p-2 overflow-x-auto'>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat as typeof category)}
          className={`px-4 py-2 rounded-full text-sm capitalize whitespace-nowrap transition-colors duration-200 border ${
            category === cat
              ? 'bg-gray-800 text-white border-gray-800'
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
