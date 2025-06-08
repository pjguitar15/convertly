'use client'
import { useUnits } from '@/context/UnitContext'
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

interface UnitInputProps {
  inputValue: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectValue: string
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>
  className?: string
}

const UnitInput: React.FC<UnitInputProps> = ({
  inputValue,
  onInputChange,
  selectValue,
  onSelectChange,
  inputProps = {},
  selectProps = {},
  className = '',
}) => {
  const { category, categories, setFromUnit, setToUnit } = useUnits()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, '')
    const dotCount = (numericValue.match(/\./g) || []).length
    const cleaned =
      dotCount > 1
        ? numericValue.slice(0, numericValue.lastIndexOf('.'))
        : numericValue
    onInputChange({ ...e, target: { ...e.target, value: cleaned } })
  }

  React.useEffect(() => {
    const units = categories[category]
    setFromUnit(units[0])
    setToUnit(units[1] || units[0])
  }, [category])

  return (
    <div className='relative w-full'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter value'
        className='w-full bg-white px-4 pr-32 py-3 rounded-lg shadow'
        {...inputProps}
      />
      <select
        value={selectValue}
        onChange={onSelectChange}
        className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 pr-6 py-2 bg-gray-200 text-sm text-gray-800 rounded shadow outline-0 cursor-pointer capitalize appearance-none ${className}`}
        {...selectProps}
      >
        {categories[category].map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>
      <div className='pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs'>
        <AiOutlineDown />
      </div>
    </div>
  )
}

export default UnitInput
