import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { defaultLocale, isLocale, locales, type Locale } from '@/lib/i18n'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const safeLocale = isLocale(locale) ? locale : defaultLocale
  const content = getContent(safeLocale)

  return {
    title: content.meta.title,
    description: content.meta.description,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!isLocale(locale)) notFound()

  const content = getContent(locale)

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header locale={locale} nav={content.nav} />
      <main>{children}</main>
      <Footer locale={locale} footer={content.footer} />
    </div>
  )
}