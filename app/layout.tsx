import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Christine Pichlhöfer',
  description: 'Psychotherapie, Beratung, Supervision und Coaching in Wien.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}