import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'ChatX',
  description: 'Your workspace is ready. Experience real-time messaging with the most secure platform designed for professionals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} font-display bg-background-dark text-white overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}