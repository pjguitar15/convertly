import './globals.css'
import { Inter } from 'next/font/google'
import { UnitProvider } from '@/context/UnitContext'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
          <div>
            <Navbar />
            <div className='bg-stone-200'>{children}</div>
            <Footer />
          </div>
        </UnitProvider>
      </body>
    </html>
  )
}
