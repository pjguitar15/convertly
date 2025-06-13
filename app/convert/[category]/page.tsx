import { categories } from '@/constants/categories'
import CenterItems from '@/components/CenterItems'
import MainConversionPage from '@/components/unit-conversion/MainConversionPage'
import PageError from '@/components/PageError'
import PageInfo from '@/components/PageInfo'
import AdBanner from '@/components/AdBanner'

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
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${capitalizedCategory} Unit Converter – Convert ${category} instantly`,
    description: `Convert ${category} units quickly and accurately. Use our free ${category} converter to get real-time results for all your ${category} conversion needs.`,
    keywords: [
      `${category} converter`,
      `convert ${category} units`,
      `${category} unit conversion`,
      `online ${category} calculator`,
      `${category} to imperial`,
      `${category} to metric`,
    ],
    openGraph: {
      title: `${capitalizedCategory} Unit Converter – Convert ${category} instantly`,
      description: `Free ${category} converter for fast and reliable unit conversions. Try it now.`,
      url: `https://convertlikeapro.com/convert/${category}`,
      siteName: 'Convert Like A Pro',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capitalizedCategory} Unit Converter – Fast & Free`,
      description: `Easily convert ${category} units online. Accurate and instant.`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { category } = await params
  const isValid = Object.keys(categories).includes(category)

  return (
    <>
      <CenterItems className='flex flex-col justify-center items-center'>
        {isValid ? <MainConversionPage /> : <PageError category={category} />}
      </CenterItems>
      <div className='bg-white py-12'>
        <div className='container mx-auto'>
          <AdBanner />
        </div>
      </div>
      <PageInfo
        title={categoryPageInfo.title}
        bullets={categoryPageInfo.bullets}
      />
    </>
  )
}
