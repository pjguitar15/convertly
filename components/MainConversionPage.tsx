'use client'

import Converter from '@/components/Converter'
import CategorySidebar from '@/components/CategorySidebar'
import CategoryTopBar from '@/components/CategoryTopBar'
import { useUnits } from '@/context/UnitContext'
import CategoryTitle from '@/components/CategoryTitle'

export default function Home() {
  const { category } = useUnits()
  return (
    <div className='p-12 bg-[#e9e7e7] rounded-xl'>
      <CategoryTitle category={category} />

      <div className='block lg:hidden mb-4'>
        <CategoryTopBar />
      </div>

      <div className='lg:flex gap-4'>
        <div className='hidden lg:block'>
          <CategorySidebar />
        </div>
        <Converter />
      </div>
    </div>
  )
}
