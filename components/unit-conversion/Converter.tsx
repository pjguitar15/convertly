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
      <div className='hidden lg:block bg-stone-200 w-full p-6 rounded text-sm text-stone-700'>
        <h3 className='font-semibold text-stone-800 mb-2'>Conversion Info</h3>
        <hr className='border-stone-300 my-4' />
        <p>
          <strong>From:</strong> {fromUnit}
        </p>
        <p>
          <strong>To:</strong> {toUnit}
        </p>
        <p>
          <strong>Example:</strong> 1 {fromUnit} ={' '}
          {convert(category, fromUnit, toUnit, 1)} {toUnit}
        </p>
      </div>
    </div>
  )
}
