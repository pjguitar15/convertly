import React from 'react'

interface PrimaryButtonProps {
  text: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className='capitalize bg-white text-gray-900 mx-auto py-2 px-7 rounded font-bold text-lg cursor-pointer'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
