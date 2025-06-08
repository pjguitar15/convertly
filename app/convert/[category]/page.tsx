import { categories } from '@/constants/categories'
import CenterItems from '@/components/CenterItems'
import MainConversionPage from '@/components/MainConversionPage'
import PageError from '@/components/PageError'

type Props = {
  params: Promise<{ category: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params
  return {
    title: `Convert ${category} | Convertly`,
  }
}

export default async function Page({ params }: Props) {
  const { category } = await params
  const isValid = Object.keys(categories).includes(category)

  return (
    <CenterItems>
      {isValid ? <MainConversionPage /> : <PageError category={category} />}
    </CenterItems>
  )
}
