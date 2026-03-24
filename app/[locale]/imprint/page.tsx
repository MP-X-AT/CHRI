// app/[locale]/imprint/page.tsx
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale !== 'en') notFound()

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Imprint
          </p>

          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            Imprint
          </h1>

          <div className="mt-10 space-y-8 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <div>
              <h2 className="text-lg font-medium">Publisher and responsible party</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                DSAin Christine Pichlhöfer, MSc
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Practice address</h2>
              <div className="mt-3 leading-8 text-[var(--muted-foreground)]">
                <p>Praxisgemeinschaft Marokkanergasse</p>
                <p>Marokkanergasse 19/3</p>
                <p>1030 Vienna</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium">Contact</h2>
              <div className="mt-3 space-y-2 leading-8 text-[var(--muted-foreground)]">
                <p>
                  Phone:{' '}
                  <a
                    href="tel:+4369911014483"
                    className="text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    0699 / 110 144 83
                  </a>
                </p>
                <p>
                  Email:{' '}
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
              <h2 className="text-lg font-medium">Professional title</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Psychotherapist, qualified social worker
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Liability for content</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                All content on this website has been created with great care. However, no
                liability is assumed for the accuracy, completeness or timeliness of the
                content.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Liability for links</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                This website contains links to external third-party websites over whose
                content there is no control. Therefore, no responsibility is assumed for
                such external content. The respective providers or operators of the linked
                pages are always responsible for their content.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Copyright</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                The content and works created by the site operator on this website are
                subject to copyright. Reproduction, editing, distribution and any kind of
                use beyond the limits of copyright law require the written consent of the
                respective author or rights holder.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}