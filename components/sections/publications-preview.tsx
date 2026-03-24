import Link from 'next/link'
import Container from '@/components/ui/container'
import type { Locale } from '@/lib/i18n'

export default function PublicationsPreview({
  locale,
  content,
}: {
  locale: Locale
  content: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; subtitle?: string; year?: string }[]
  }
}) {
  return (
    <section id="publikationen" className="py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              {content.eyebrow}
            </p>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
              {content.intro}
            </p>
          </div>

          <Link
            href={`/${locale}/publikationen`}
            className="text-sm font-medium text-[var(--accent)]"
          >
            {locale === 'de' ? 'Alle Publikationen ansehen' : 'View all publications'}
          </Link>
        </div>

        <div className="mt-10">
          {content.items.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-black/10 p-8 text-[var(--muted-foreground)]">
              {locale === 'de'
                ? 'Publikationen werden in Kürze ergänzt.'
                : 'Publications will be added soon.'}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}