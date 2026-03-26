import './globals.css'
import type { Metadata } from 'next'
import { defaultLocale } from '@/lib/i18n'
import { getContent } from '@/lib/get-content'

const defaultContent = getContent(defaultLocale)

export const metadata: Metadata = {
  title: defaultContent.meta.title,
  description: defaultContent.meta.description,
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