export type Locale = 'de' | 'en'

export type NavItem = {
  label: string
  href: string
}

export type PreviewCardItem = {
  title: string
  text: string
}

export type PublicationItem = {
  title: string
  subtitle?: string
  year?: string
  href?: string
}

export type SiteContent = {
  locale: Locale

  meta: {
    title: string
    description: string
  }

  nav: NavItem[]

  home: {
    hero: {
      kicker: string
      title: string
      text: string
      primaryCta: string
      secondaryCta: string
    }

    servicesPreview: {
      eyebrow: string
      title: string
      intro: string
      items: PreviewCardItem[]
    }

    approachPreview: {
      title: string
      text: string
      cta: string
    }

    experiencePreview: {
      title: string
      text: string
      cta: string
    }

    publicationsPreview: {
      title: string
      text: string
      cta: string
    }

    contactPreview: {
      title: string
      text: string
      cta: string
    }
  }

  angebot: {
    eyebrow: string
    title: string
    intro: string
    items: string[]
    settingTitle: string
    settingText: string
    refundText: string
  }

  arbeitsweise: {
    eyebrow: string
    title: string
    intro: string
    psychodramaQuote: string
    psychodramaAuthor: string
    psychodramaTitle: string
    psychodramaText: string
    psychodramaDetails: string[]
    methodInfo: string
    externalLinkLabel: string
  }

  erfahrungen: {
    eyebrow: string
    title: string
    intro: string
    items: string[]
    qualificationsTitle: string
    qualifications: string[]
  }

  publikationen: {
    eyebrow: string
    title: string
    intro: string
    items: PublicationItem[]
  }

  kontakt: {
    eyebrow: string
    title: string
    text: string
    name: string
    roles: string[]
    practiceLabel: string
    practice: string
    addressLabel: string
    address: string[]
    phoneLabel: string
    phone: string
    emailLabel: string
    email: string
  }

  footer: {
    imprint: string
    privacy: string
  }
}