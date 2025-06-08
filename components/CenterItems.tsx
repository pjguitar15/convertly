import React, { ReactNode } from 'react'

interface CenterItemsProps {
  children: ReactNode
  className?: string
}

const CenterItems = ({ children, className }: CenterItemsProps) => {
  return (
    <div className={`flex justify-center items-center min-h-screen p-4 ${className || ''}`}>
      {children}
    </div>
  )
}

export default CenterItems
