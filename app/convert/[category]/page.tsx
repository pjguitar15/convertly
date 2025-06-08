import React from 'react'
import MainConversionPage from '@/components/MainConversionPage'
import CenterItems from '@/components/CenterItems'
import PageError from '@/components/PageError'
import { categories } from '@/constants/categories'

type Props = {
  params: { category: string }
}

const page = ({ params }: Props) => {
  const { category } = params
  const isValid = Object.keys(categories).includes(category)

  return (
    <CenterItems>
      {isValid ? <MainConversionPage /> : <PageError category={category} />}
    </CenterItems>
  )
}

export default page
