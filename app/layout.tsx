import Navigation from '@/components/Navigation'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import './globals.css'

export const metadata: Metadata = { title: 'Trello App' }

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className='flex'>
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
