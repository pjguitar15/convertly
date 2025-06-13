import { categories } from '@/constants/categories'
import CenterItems from '@/components/CenterItems'
import MainConversionPage from '@/components/unit-conversion/MainConversionPage'
import PageError from '@/components/PageError'
import PageInfo from '@/components/PageInfo'
import Head from 'next/head'

type Props = {
  params: Promise<{ category: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const categoryPageInfo = {
  title: 'What can you do on this page?',
  bullets: [
    'Instantly convert values from one unit to another with high accuracy. Our formulas are updated and tested regularly.',
    'Useful for students, travelers, scientists, cooks, and professionals who work with international units.',
    'This page supports a specific category like length, mass, or volume. Just input your value and convert easily.',
    'No need to use the top menu—scroll to switch between categories quickly.',
    {
      text: 'Need more than just unit conversion? You can also:',
      subLinks: [
        {
          label: 'Convert currencies',
          href: '/convert/currency',
          description: ' using live exchange rates.',
        },
        {
          label: 'conversion formula library',
          href: '/conversion-formulas',
          description: '.',
        },
        {
          label: 'live exchange rates',
          href: '/live-exchange-rates',
          description: ' for global currencies and crypto.',
        },
      ],
    },
    'This platform is built for speed, privacy, and accessibility—no account required.',
    'All processing is done locally in your browser. Mobile- and offline-friendly.',
  ],
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
    <>
      <Head>
        <title>Convert Units | Convert Like A Pro</title>
        <meta
          name='description'
          content="Convert length, weight, temperature, area, and more in seconds with Convert Like A Pro's unit converter."
        />
      </Head>
      <CenterItems className='flex flex-col justify-center items-center'>
        {isValid ? <MainConversionPage /> : <PageError category={category} />}
      </CenterItems>
      <PageInfo
        title={categoryPageInfo.title}
        bullets={categoryPageInfo.bullets}
      />
    </>
  )
}
