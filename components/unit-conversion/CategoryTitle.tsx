'use client'

import React from 'react'
import {
  AiOutlineColumnWidth, // Length
  AiOutlineHeatMap, // Temperature
  AiOutlineClockCircle, // Time
  AiOutlineBorder, // Area
  AiOutlineContainer, // Volume
  AiOutlineDashboard, // Speed
  AiOutlineThunderbolt, // Energy
  AiOutlineDeploymentUnit, // Fallback
} from 'react-icons/ai'
import { MdScale } from 'react-icons/md'

interface Props {
  category: string
}

const categoryTitles: Record<string, string> = {
  length: 'Convert Length Like a Pro',
  mass: 'Weigh In with Quick Conversion',
  temperature: 'Hot or Cold? Instantly Convert',
  time: 'Time Travel, Sorta',
  area: 'Area Math? Covered.',
  volume: 'Measure the Volume Effortlessly',
  speed: 'Speed Conversions, Fast & Easy',
  energy: 'Power Up Your Unit Game',
}

const categoryIcons: Record<string, React.ReactNode> = {
  length: (
    <AiOutlineColumnWidth className='text-5xl lg:text-4xl text-stone-700' />
  ),
  mass: <MdScale className='text-5xl lg:text-4xl text-stone-700' />,
  temperature: (
    <AiOutlineHeatMap className='text-5xl lg:text-4xl text-stone-700' />
  ),
  time: (
    <AiOutlineClockCircle className='text-5xl lg:text-4xl text-stone-700' />
  ),
  area: <AiOutlineBorder className='text-5xl lg:text-4xl text-stone-700' />,
  volume: (
    <AiOutlineContainer className='text-5xl lg:text-4xl text-stone-700' />
  ),
  speed: <AiOutlineDashboard className='text-5xl lg:text-4xl text-stone-700' />,
  energy: (
    <AiOutlineThunderbolt className='text-5xl lg:text-4xl text-stone-700' />
  ),
}

const CategoryTitle: React.FC<Props> = ({ category }) => {
  const icon = categoryIcons[category] || (
    <AiOutlineDeploymentUnit className='text-3xl text-stone-700' />
  )
  const title = categoryTitles[category] || 'Convert Units'

  return (
    <div className='flex flex-col md:flex-row lg:gap-3'>
      <h1 className='flex items-center justify-center font-bold mb-8 text-stone-900'>
        {icon}
      </h1>
      <h1 className='flex items-center justify-center gap-3 text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-stone-900'>
        {title}
      </h1>
    </div>
  )
}

export default CategoryTitle
