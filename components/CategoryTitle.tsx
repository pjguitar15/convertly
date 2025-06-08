'use client'

import React from 'react'

interface Props {
  category: string
}

const categoryTitles: Record<string, string> = {
  length: '🔁 Convert Length Like a Pro',
  mass: '⚖️ Weigh In with Quick Conversion',
  temperature: '🌡️ Hot or Cold? Instantly Convert',
  time: '⏱️ Time Travel, Sorta',
  area: '📐 Area Math? Covered.',
  volume: '🧪 Measure the Volume Effortlessly',
  speed: '🏃 Speed Conversions, Fast & Easy',
  energy: '⚡ Power Up Your Unit Game',
}

const CategoryTitle: React.FC<Props> = ({ category }) => {
  return (
    <h1 className='text-4xl font-bold mb-8 text-center'>
      {categoryTitles[category] || '🧮 Convert Units'}
    </h1>
  )
}

export default CategoryTitle
