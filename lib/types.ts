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
  summary?: string
  tags?: string[]
  featured?: boolean
  ctaLabel?: string
}

export type ServiceItem = {
  id: string
  label: string
}

export type PanelGroup = {
  eyebrow: string
  title: string
  text: string
  itemIds: string[]
  warm?: boolean
}

export type GlobeContent = {
  eyebrow: string
  title: string
  intro: string
  interactionHintTouch: string
  interactionHintHover: string
  activeFocusLabel: string
  activeFocusText: string
  closeButton: string
  capsules: string[]
  countryLabels: Record<string, string>
}

export type SiteContent = {
  locale: Locale

  meta: {
    title: string
    description: string
  }

  site: {
    brandName: string
    brandSubtitle: string
    email: string
    phone: string
    phoneHref: string
    practice: string
    address: string[]
    linkedinLabel: string
    linkedinHref: string
    developerName: string
    developerHref: string
    copyright: string
  }

  header: {
    openMenuLabel: string
    closeMenuLabel: string
  }

  nav: NavItem[]

  home: {
    hero: {
      kicker: string
      title: string
      displayTitle: {
        before: string
        highlight: string
        after: string
      }
      text: string
      primaryCta: string
      secondaryCta: string
      infoItems: string[]
      imageAlt: string
    }
    midStage: {
      eyebrow: string
      title: string
      highlights: PreviewCardItem[]
      sideNote: string
      bottomLeft: string
      bottomRight: string
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
    heroTitle: string
    intro: string
    items: ServiceItem[]
    panels: PanelGroup[]
    settingTitle: string
    settingText: string
    noteTitle: string
    refundText: string
    closingText: string
  }

  arbeitsweise: {
    eyebrow: string
    title: string
    intro: string
    stats: { value: string; label: string }[]
    imageAlt: string
    imageKicker: string
    imageTitle: string
    badges: { eyebrow: string; text: string }[]
    psychodramaQuote: string
    psychodramaAuthor: string
    psychodramaTitle: string
    psychodramaText: string
    psychodramaDetails: string[]
    methodInfo: string
    externalLinkLabel: string
    globe: GlobeContent
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
    emptyText: string
    featuredLabel: string
    featuredInfo: string
    openLabelDefault: string
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

  impressum: {
    eyebrow: string
    title: string
    sections: {
      title: string
      body: string[]
    }[]
  }

  privacy: {
    eyebrow: string
    title: string
    sections: {
      title: string
      body: string[]
    }[]
  }

 footer: {
  imprint: string
  privacy: string
  kicker: string
  description: string
  contactLabel: string
  legalLabel: string
  developerLabel: string
}
}
