import './globals.css'
import { Inter } from 'next/font/google'
import { UnitProvider } from '@/context/UnitContext'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convertly',
  description: 'Modern unit converter app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} `}>
        <UnitProvider>
          <div className='bg-gray-800'>
            <Navbar />
            <div className='bg-dark-800'>{children}</div>
          </div>
        </UnitProvider>
      </body>
    </html>
  )
}
