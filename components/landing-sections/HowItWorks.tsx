'use client'

import { AiOutlineColumnWidth, AiOutlineHeart } from 'react-icons/ai'
import { FaMoneyBillWave, FaPercentage } from 'react-icons/fa'

export default function HowItWorks() {
  const tools = [
    {
      title: 'Unit Converter',
      desc: 'Convert between length, mass, temperature, time, area, volume, speed, and energy — all in one place.',
      icon: <AiOutlineColumnWidth className='text-6xl text-stone-700' />,
      link: '/convert/length',
    },
    {
      title: 'Currency Converter',
      desc: 'Instantly convert currencies with live exchange rates for accurate conversions every time.',
      icon: <FaMoneyBillWave className='text-6xl text-stone-700' />,
      link: '/convert-currency',
    },
    {
      title: 'Percentage Calculator',
      desc: 'Quickly calculate percentage increases, discounts, or find what percentage one number is of another.',
      icon: <FaPercentage className='text-6xl text-stone-700' />,
      link: '/percentage-calculator',
    },
    {
      title: 'BMI Calculator',
      desc: 'Check if your weight is healthy for your height and get an estimate of daily calories.',
      icon: <AiOutlineHeart className='text-6xl text-stone-700' />,
      link: '/bmi-calculator',
    },
  ]

  return (
    <section className='py-20'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900'>
        🚀 How It Works
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            className='bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300'
          >
            <div className='w-full h-32 flex items-center justify-center mb-2'>
              {tool.icon}
            </div>
            <h3 className='text-xl font-bold mb-2 text-stone-900'>
              {tool.title}
            </h3>
            <p className='text-stone-600 text-sm'>{tool.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
