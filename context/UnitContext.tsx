'use client'

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { usePathname } from 'next/navigation'
import { categories, Category } from '@/constants/categories'

type UnitContextType = {
  category: Category
  setCategory: (c: Category) => void
  fromUnit: string
  setFromUnit: (u: string) => void
  toUnit: string
  setToUnit: (u: string) => void
  inputA: string
  setInputA: (v: string) => void
  inputB: string
  setInputB: (v: string) => void
  categories: Record<Category, string[]>
}

const UnitContext = createContext<UnitContextType | null>(null)

export function UnitProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isValid = Object.keys(categories).includes(pathname)
  const initialCategory = isValid
    ? (pathname.split('/')[2] as Category) || 'length'
    : 'length'

  const [category, setCategory] = useState<Category>(initialCategory)
  const [fromUnit, setFromUnit] = useState(categories[initialCategory][0])
  const [toUnit, setToUnit] = useState(categories[initialCategory][1])
  const [inputA, setInputA] = useState('')
  const [inputB, setInputB] = useState('')

  // Update units whenever the path changes
  useEffect(() => {
    const pathCat = pathname.split('/')[2] as Category
    if (pathCat && categories[pathCat]) {
      setCategory(pathCat)
      setFromUnit(categories[pathCat][0])
      setToUnit(categories[pathCat][1])
    }
  }, [pathname])

  return (
    <UnitContext.Provider
      value={{
        category,
        setCategory,
        fromUnit,
        setFromUnit,
        toUnit,
        setToUnit,
        inputA,
        setInputA,
        inputB,
        setInputB,
        categories,
      }}
    >
      {children}
    </UnitContext.Provider>
  )
}

export function useUnits() {
  const context = useContext(UnitContext)
  if (!context) throw new Error('useUnits must be used within a UnitProvider')
  return context
}
