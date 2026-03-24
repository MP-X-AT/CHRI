// components/sections/preview-block.tsx
import Link from 'next/link'
import Container from '@/components/ui/container'
import type { Locale } from '@/lib/types'

export default function PreviewBlock({
  locale,
  title,
  text,
  href,
  cta,
}: {
  locale: Locale
  title: string
  text: string
  href: string
  cta: string
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-light">{title}</h2>
          <p className="mt-4 text-[var(--muted-foreground)]">{text}</p>

          <Link
            href={`/${locale}/${href}`}
            className="mt-6 inline-block text-sm font-medium text-[var(--accent)]"
          >
            {cta} →
          </Link>
        </div>
      </Container>
    </section>
  )
}