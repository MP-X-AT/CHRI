import Link from 'next/link'
import type { Locale } from '@/lib/types'

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <Link
      href={locale === 'de' ? '/en' : '/de'}
      className="text-sm tracking-[0.04em] text-[var(--foreground)] transition hover:text-[var(--accent)]"
    >
      {locale === 'de' ? 'EN' : 'DE'}
    </Link>
  )
}