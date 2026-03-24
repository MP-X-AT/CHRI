// app/[locale]/services/page.tsx
import { notFound } from 'next/navigation'
import { deContent } from '@/content/de'
import { enContent } from '@/content/en'
import { isLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import Container from '@/components/ui/container'

function getContent(locale: Locale) {
  return locale === 'de' ? deContent : enContent
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'en') notFound()

  const content = getContent(locale)

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {content.angebot.eyebrow}
          </p>

          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            {content.angebot.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {content.angebot.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.angebot.items.map((item) => (
            <article
              key={item}
              className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="leading-7 text-[var(--foreground)]">{item}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              {content.angebot.settingTitle}
            </p>
            <p className="mt-4 text-xl font-medium">{content.angebot.settingText}</p>
          </div>

          <div className="rounded-[2rem] border border-[rgba(220,108,36,0.14)] bg-[rgba(220,108,36,0.08)] p-8 shadow-sm">
            <p className="leading-8 text-[var(--foreground)]">
              {content.angebot.refundText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}