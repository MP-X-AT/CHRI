// app/[locale]/privacy/page.tsx
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import Container from '@/components/ui/container'

export default async function PrivacyPage({
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
            Privacy
          </p>

          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <div className="mt-10 space-y-8 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
            <div>
              <h2 className="text-lg font-medium">Responsible party</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                DSAin Christine Pichlhöfer, MSc is responsible for the processing of
                personal data on this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Collection and processing of data</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                Personal data is processed only to the extent necessary to provide this
                website and to handle enquiries made by email or phone.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Contact requests</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                If you contact us by email or phone, the information you provide will be
                stored for the purpose of processing your enquiry and in case of follow-up
                questions. This data will not be shared without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Server log files</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                When visiting this website, the hosting provider may automatically collect
                and store information in so-called server log files. This may include IP
                address, date and time of access, browser type and operating system.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Your rights</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                You generally have the right to access, rectification, erasure, restriction,
                data portability, withdrawal of consent and objection. If you believe that
                the processing of your data violates data protection law, you may lodge a
                complaint with the competent supervisory authority.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Privacy contact</h2>
              <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                If you have any questions regarding privacy, please contact{' '}
                <a
                  href="mailto:psychodrama@pichlhoefer.eu"
                  className="text-[var(--foreground)] transition hover:text-[var(--accent)]"
                >
                  psychodrama@pichlhoefer.eu
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}