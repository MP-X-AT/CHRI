import Container from '@/components/ui/container'

export default function Contact({
  content,
}: {
  content: {
    eyebrow: string
    title: string
    text: string
    emailLabel: string
    email: string
    locationLabel: string
    location: string
  }
}) {
  return (
    <section id="kontakt" className="py-24">
      <Container>
        <div className="max-w-3xl rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {content.eyebrow}
          </p>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {content.text}
          </p>

          <div className="mt-8 space-y-4 text-base">
            <p>
              <span className="font-medium">{content.emailLabel}: </span>
              <a
                href={`mailto:${content.email}`}
                className="text-[var(--accent)] underline-offset-4 hover:underline"
              >
                {content.email}
              </a>
            </p>
            <p>
              <span className="font-medium">{content.locationLabel}: </span>
              {content.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}