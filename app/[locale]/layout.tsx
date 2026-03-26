import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { defaultLocale, isLocale, locales } from '@/lib/i18n'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
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

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)

  return (
    <>
      <Script id="set-document-lang" strategy="beforeInteractive">
        {`
          document.documentElement.lang = '${locale}';
          document.documentElement.setAttribute('dir', 'ltr');
        `}
      </Script>

      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Header
          locale={locale}
          nav={content.nav}
          site={content.site}
          labels={content.header}
        />
        <main>{children}</main>
        <Footer locale={locale} footer={content.footer} site={content.site} />
      </div>
    </>
  )
}