'use client'

import { useUnits } from '@/context/UnitContext'
import { useRouter } from 'next/navigation'
import { JSX } from 'react'
import {
  AiOutlineControl,
  AiOutlineCrown,
  AiOutlineExperiment,
  AiOutlineKubernetes,
  AiOutlinePython,
  AiOutlineSignature,
  AiOutlineSlack,
  AiOutlineTaobao,
  AiOutlineDeploymentUnit,
} from 'react-icons/ai'

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

  const categoryIcons: Record<string, JSX.Element> = {
    length: <AiOutlineControl className='text-lg' />,
    mass: <AiOutlineCrown className='text-lg' />,
    temperature: <AiOutlineExperiment className='text-lg' />,
    time: <AiOutlineKubernetes className='text-lg' />,
    area: <AiOutlinePython className='text-lg' />,
    volume: <AiOutlineSignature className='text-lg' />,
    speed: <AiOutlineSlack className='text-lg' />,
    energy: <AiOutlineTaobao className='text-lg' />,
  }

  const handleLinkClick = (cat: string) => {
    setCategory(cat as typeof category)
    router.push(`/convert/${cat}`)
  }

  return (
    <aside className='w-64 bg-stone-200 text-stone-600 rounded-xl'>
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => handleLinkClick(cat)}
          className={`w-full text-left px-5 py-4 flex items-center gap-3 first:rounded-t-xl last:rounded-b-xl transition-colors duration-200 cursor-pointer ${
            category === cat
              ? 'bg-stone-300 text-stone-900 font-semibold'
              : 'hover:bg-stone-300 hover:text-stone-900'
          }`}
        >
          {categoryIcons[cat] || (
            <AiOutlineDeploymentUnit className='text-lg' />
          )}
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </aside>
  )
}
