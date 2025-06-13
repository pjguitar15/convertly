import React, { ReactNode } from 'react'

interface CenterItemsProps {
  children: ReactNode
  className?: string
}

const CenterItems = ({ children, className }: CenterItemsProps) => {
  return (
    <div
      className={`flex justify-center items-start pb-24 pt-24 lg:pt-38 container mx-auto ${
        className || ''
      }`}
    >
      {children}
    </div>
  )
}

export default CenterItems
