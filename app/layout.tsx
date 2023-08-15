import { Navbar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blogs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div
          style={{

          }}
          className={`
            flex
            justify-center
            m-10
          `}
        >
          <Image
            src="/logo.png"
            width={200}
            height={100}
            alt='Logo'
          />
        </div>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
