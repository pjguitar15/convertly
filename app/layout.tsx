import './globals.css'
import { Inter } from 'next/font/google'
import { UnitProvider } from '@/context/UnitContext'
import type { Metadata } from 'next'
import AdSense from '@/components/Adsense'
import { Toaster } from 'react-hot-toast'
import { TrackVisitor } from '@/components/TrackVisitor'
import ClientNavbarWrapper from '@/components/ClientNavbarWrapper'
import ClientFooterWrapper from '@/components/ClientFooterWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convert Like A Pro',
  description:
    'Convert units and currencies instantly with our all-in-one conversion tool. From length and weight to money and temperature – fast, accurate, and easy to use.',
  keywords: [
    'unit converter',
    'currency converter',
    'online conversion tool',
    'convert length weight volume',
    'convert USD to EUR',
    'measurement converter',
    'instant conversion calculator',
  ],
  openGraph: {
    title: 'Convert Like A Pro – Smart Unit & Currency Converter',
    description:
      'Convert anything in seconds: length, temperature, currency, and more. Free, accurate, and lightning-fast.',
    url: 'https://convertlikeapro.com',
    siteName: 'Convert Like A Pro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Like A Pro – Free Online Converter',
    description:
      'Use one tool to convert all your units and currencies. Super fast and always free.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <AdSense pId={`ca-pub-${process.env.ADSENSE_PID}`} />
      </head>
      <body className={`${inter.className} `}>
        <TrackVisitor />
        <UnitProvider>
          <div>
            <ClientNavbarWrapper />
            <div className='bg-stone-200'>{children}</div>
            <Toaster position='top-right' />
            <ClientFooterWrapper />
          </div>
        </UnitProvider>
      </body>
    </html>
  )
}
