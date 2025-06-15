'use client'

import Converter from '@/components/unit-conversion/Converter'
import CategorySidebar from '@/components/unit-conversion/CategorySidebar'
import CategoryTopBar from '@/components/unit-conversion/CategoryTopBar'
import { useUnits } from '@/context/UnitContext'
import CategoryTitle from '@/components/unit-conversion/CategoryTitle'
import PageTransition from '../PageTransition'

export default function Home() {
  const { category } = useUnits()
  return (
    <div className='p-12 bg-white rounded-xl border border-stone-200 shadow mx-auto max-w-7xl'>
      <PageTransition>
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
      </PageTransition>
    </div>
  )
}
