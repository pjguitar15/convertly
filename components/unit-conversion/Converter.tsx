'use client'
import { useEffect } from 'react'
import { useUnits } from '@/context/UnitContext'
import { convert } from '@/lib/conversion'
import UnitInput from './UnitInput'
import Link from 'next/link'
import { formatUnit } from '@/helpers/formatUnit'

export default function Converter() {
  const {
    category,
    fromUnit,
    toUnit,
    setFromUnit,
    setToUnit,
    inputA,
    setInputA,
    inputB,
    setInputB,
  } = useUnits()

  useEffect(() => {
    const val = parseFloat(inputA)
    if (!isNaN(val)) {
      const res = convert(category, fromUnit, toUnit, val)
      setInputB(res.toString())
    } else {
      setInputB('')
    }
  }, [inputA, setInputB, inputB, fromUnit, toUnit, category])

  return (
    <div className='flex flex-col min-h-full'>
      {/* Top (input) section with flexible growth */}
      <div className='flex flex-col gap-4 mb-4 flex-grow'>
        <UnitInput
          inputValue={inputA}
          onInputChange={(e) => setInputA(e.target.value)}
          selectValue={fromUnit}
          onSelectChange={(e) => setFromUnit(e.target.value)}
        />

        <UnitInput
          inputValue={inputB}
          onInputChange={(e) => {
            const val = parseFloat(e.target.value)
            if (!isNaN(val)) {
              const res = convert(category, toUnit, fromUnit, val)
              setInputA(res.toString())
            }
            setInputB(e.target.value)
          }}
          selectValue={toUnit}
          onSelectChange={(e) => setToUnit(e.target.value)}
        />
        <p className='w-full p-3 rounded text-sm text-stone-400'>
          <strong>Conversion:</strong> 1 {formatUnit(fromUnit, 1)} ={' '}
          {convert(category, fromUnit, toUnit, 1)}{' '}
          {formatUnit(toUnit, convert(category, fromUnit, toUnit, 1))}
        </p>
      </div>

      <Link
        href='/conversion-formulas'
        className='text-stone-400 hover:underline mt-2 block underline w-full p-3 rounded text-sm'
      >
        Want to learn more about how this conversion works? View formulas →
      </Link>
    </div>
  )
}
