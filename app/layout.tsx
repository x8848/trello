import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { title: 'Trello App' }

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex'>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
