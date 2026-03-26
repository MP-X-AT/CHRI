import { notFound } from 'next/navigation'
import { getContent } from '@/lib/get-content'
import { isLocale } from '@/lib/i18n'
import HomeHero from '@/components/home/home-hero'
import HomeMidStage from '@/components/home/home-mid-stage'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getContent(locale)

  return (
    <>
      <HomeHero
        locale={locale}
        content={content.home.hero}
        email={content.site.email}
      />
      <HomeMidStage content={content.home.midStage} />
    </>
  )
}
