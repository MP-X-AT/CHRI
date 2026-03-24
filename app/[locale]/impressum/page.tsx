// app/[locale]/impressum/page.tsx
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'de') notFound()

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Impressum
          </p>

          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            Impressum
          </h1>

          <div className="mt-10 space-y-8 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <div>
              <h2 className="text-lg font-medium">Medieninhaberin und Verantwortliche</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                DSAin Christine Pichlhöfer, MSc
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Praxisadresse</h2>
              <div className="mt-3 leading-8 text-[var(--muted-foreground)]">
                <p>Praxisgemeinschaft Marokkanergasse</p>
                <p>Marokkanergasse 19/3</p>
                <p>1030 Wien</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium">Kontakt</h2>
              <div className="mt-3 space-y-2 leading-8 text-[var(--muted-foreground)]">
                <p>
                  Telefon:{' '}
                  <a
                    href="tel:+4369911014483"
                    className="text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    0699 / 110 144 83
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:psychodrama@pichlhoefer.eu"
                    className="text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    psychodrama@pichlhoefer.eu
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium">Berufsbezeichnung</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Psychotherapeutin, diplomierte Sozialarbeiterin
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Haftung für Inhalte</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Alle Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch
                keine Haftung übernommen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Haftung für Links</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte
                kein Einfluss besteht. Für diese fremden Inhalte wird daher keine Gewähr
                übernommen. Für die Inhalte der verlinkten Seiten sind stets die jeweiligen
                Anbieter:innen oder Betreiber:innen verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Urheberrecht</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser
                Website unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen
                Urheberin beziehungsweise Rechteinhaberin.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}