'use client'
import { useEffect } from 'react'
import { useUnits } from '@/context/UnitContext'
import { convert } from '@/lib/conversion'
import UnitInput from './UnitInput'

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
    console.log('val', val)
    console.log()
    if (!isNaN(val)) {
      const res = convert(category, fromUnit, toUnit, val)
      console.log('check params', { category, fromUnit, toUnit, val })
      console.log('res for inputB', res)
      setInputB(res.toString())
    } else {
      console.log('Invalid inputA value:', inputA)
      setInputB('')
    }

    const test = convert('mass', 'meters', 'miles', 1)
    console.log('TESTTT', test)
  }, [inputA, setInputB, inputB, fromUnit, toUnit, category])

  return (
    <div className='lg:min-w-[700px] flex flex-col gap-4'>
      <div className='flex flex-col gap-4 mb-4'>
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
      </div>
    </div>
  )
}
