import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Nav from '@/components/landing/NavBar'
import Footer from '@/components/landing/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Achura',
  //TODO: Add description
  description: 'This is a creative description.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
