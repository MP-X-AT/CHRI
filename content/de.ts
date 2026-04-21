import type { SiteContent } from '@/lib/types'

type ExtendedSiteContent = SiteContent & {
  arbeitsweise: SiteContent['arbeitsweise'] & {
    markersEyebrow: string
    markersLead: string
    stats: Array<
      {
        label: string
      } & Partial<{
        value: string
      }>
    >
    globe: SiteContent['arbeitsweise']['globe'] & {
      defaultFocusLabel: string
      defaultFocusText: string
    }
  }
  footer: SiteContent['footer'] & {
    cookieNotice: string
  }
}

export const deContent: ExtendedSiteContent = {
  locale: 'de',
  meta: {
    title: 'Christine Pichlhöfer, MSc',
    description:
      'Geschlechtersensible Psychotherapie, Beratung, Supervision und Coaching in Wien.',
  },
  site: {
    brandName: 'Christine Pichlhöfer, MSc',
    brandSubtitle: 'Psychotherapeutin in Wien',
    email: 'psychodrama@pichlhoefer.eu',
    phone: '0699 / 110 144 83',
    phoneHref: '+4369911014483',
    practice: 'Praxisgemeinschaft Marokkanergasse',
    address: ['Marokkanergasse 19/3', '1030 Wien'],
    linkedinLabel: 'LinkedIn',
    linkedinHref:
      'https://at.linkedin.com/in/christine-pichlh%C3%B6fer-87a94bb0',
    developerName: 'mp-x.at',
    developerHref: 'https://mp-x.at',
    copyright: '© Christine Pichlhöfer, MSc',
  },
  header: {
    openMenuLabel: 'Menü öffnen',
    closeMenuLabel: 'Menü schließen',
  },
  nav: [
    {
      label: 'Home',
      href: '',
    },
    {
      label: 'Angebot',
      href: 'angebot',
    },
    {
      label: 'Arbeitsweise',
      href: 'arbeitsweise',
    },
    {
      label: 'Erfahrungen',
      href: 'erfahrungen',
    },
    {
      label: 'Publikationen',
      href: 'publikationen',
    },
    {
      label: 'Kontakt',
      href: 'kontakt',
    },
  ],
  home: {
    hero: {
      kicker: 'Psychotherapie in Wien',
      title: 'Raum für Klärung, Entwicklung und neue Perspektiven.',
      displayTitle: {
        before: 'Geschlechtersensible Psychotherapie',
        highlight: 'Supervision und Coaching',
        after: 'In der Methode Psychodrama, Humanistisches Cluster',
      },
      text: '',
      primaryCta: 'Per E-Mail Kontakt aufnehmen',
      secondaryCta: 'Zur Arbeitsweise',
      infoItems: [],
      imageAlt: 'Praxisraum',
    },
    midStage: {
      eyebrow: 'Fachliche Schwerpunkte',
      title:
        'Psychotherapie, Psychodrama, Gruppendynamik und Supervision in einer eigenständigen, lebendigen Form.',
      highlights: [
        {
          title: 'Psychotherapie',
          text: 'Ein Rahmen für Reflexion, Entwicklung und professionelle Begleitung.',
        },
        {
          title: 'Psychodrama',
          text: 'Erfahrungsorientiertes Arbeiten mit Tiefe, Bewegung und Perspektivenwechsel.',
        },
        {
          title: 'Supervision',
          text: 'Für Fachkolleg:innen, Institutionen und berufliche Kontexte.',
        },
      ],
      sideNote: 'Therapie auf Deutsch und Englisch möglich.',
      bottomLeft:
        'Für Klient:innen, Schüler:innen, Fachkolleg:innen und Institutionen.',
      bottomRight: 'In Wien · mit persönlicher Präsenz und fachlicher Klarheit.',
    },
    servicesPreview: {
      eyebrow: 'Angebot',
      title: 'Psychotherapie, Beratung, Supervision und Coaching',
      intro:
        'Ein ruhiger Rahmen für persönliche, berufliche und soziale Fragestellungen.',
      items: [
        {
          title: 'Psychotherapie',
          text: 'Begleitung in belastenden Lebensphasen sowie bei psychischen und psychosomatischen Beschwerden.',
        },
        {
          title: 'Beratung',
          text: 'Unterstützung bei Orientierung, Entscheidungen und persönlichen Fragestellungen.',
        },
        {
          title: 'Supervision & Coaching',
          text: 'Reflexionsraum für Fachpersonen und Menschen in verantwortungsvollen beruflichen Rollen.',
        },
      ],
    },
    approachPreview: {
      title: 'Arbeitsweise',
      text: 'Im Mittelpunkt stehen die Begegnung auf Augenhöhe, ein ressourcenorientierter Zugang und die Möglichkeit, neue Perspektiven und Handlungsspielräume zu entwickeln.',
      cta: 'Mehr zur Arbeitsweise',
    },
    experiencePreview: {
      title: 'Erfahrungen',
      text: 'Langjährige Erfahrung in der psychosozialen Arbeit mit Menschen in unterschiedlichen Lebenssituationen – national und international.',
      cta: 'Mehr zu Erfahrungen',
    },
    publicationsPreview: {
      title: 'Publikationen',
      text: 'Eine Auswahl an Fachbeiträgen, Vorträgen und Veröffentlichungen.',
      cta: 'Alle Publikationen ansehen',
    },
    contactPreview: {
      title: 'Kontakt',
      text: 'Für Terminvereinbarungen oder Fragen freue ich mich über eine Kontaktaufnahme per E-Mail oder Telefon.',
      cta: 'Kontakt aufnehmen',
    },
  },
  angebot: {
    eyebrow: 'Angebot',
    title: 'Geschlechtersensible Psychotherapie, Beratung, Supervision und Coaching',
    heroTitle: 'Raum für Klärung, Entlastung und neue Handlungsmöglichkeiten.',
    intro:
      'Ich biete geschlechtersensible Psychotherapie, Beratung, Supervision und Coaching unter anderem bei folgenden Themen und Belastungen an.',
    items: [
      {
        id: 'life-crises',
        label: 'Lebenskrisen',
      },
      {
        id: 'anxiety',
        label: 'Angsterkrankungen / Panikattacken',
      },
      {
        id: 'relationships',
        label: 'Beziehungen zu anderen Menschen',
      },
      {
        id: 'burnout-depression',
        label: 'Burnout / Depression',
      },
      {
        id: 'psychosomatic',
        label: 'Psychosomatische Beschwerden',
      },
      {
        id: 'addiction',
        label: 'Abhängigkeit / Sucht',
      },
      {
        id: 'trauma',
        label: 'Traumafolgeerkrankungen',
      },
      {
        id: 'growing-up',
        label: 'Probleme rund ums Erwachsenwerden',
      },
      {
        id: 'workplace',
        label: 'Schwierigkeiten am Arbeitsplatz',
      },
      {
        id: 'supervision-coaching',
        label: 'Supervision, Beratung und Coaching',
      },
      {
        id: 'prevention',
        label: 'Suchtprävention',
      },
      {
        id: 'motivational-interviewing',
        label: 'Motivational Interviewing',
      },
    ],
    panels: [
      {
        eyebrow: 'Persönliche Belastungen',
        title: 'Wenn innere Anspannung, Erschöpfung oder Krisen belasten.',
        text: 'Psychotherapie kann unterstützen, wenn Symptome, Überforderung oder belastende Lebensphasen den Alltag einengen.',
        itemIds: [
          'life-crises',
          'anxiety',
          'burnout-depression',
          'psychosomatic',
          'addiction',
          'trauma',
          'growing-up',
        ],
        warm: true,
      },
      {
        eyebrow: 'Beziehungen und Beruf',
        title:
          'Wenn Zusammenarbeit, Beziehungen oder Rollenfragen Raum brauchen.',
        text: 'Beratung, Supervision und Coaching schaffen einen klaren Rahmen, um Konflikte, Dynamiken und Entwicklungsmöglichkeiten differenziert zu betrachten.',
        itemIds: [
          'relationships',
          'workplace',
          'supervision-coaching',
          'prevention',
          'motivational-interviewing',
        ],
        warm: false,
      },
    ],
    settingTitle: 'Setting',
    settingText: 'Deutsch, Englisch',
    noteTitle: 'Hinweis',
    refundText: 'Eine teilweise Rückverrechnung mit der Krankenkasse ist möglich.',
    closingText:
      'Nicht nur einzelne Themen stehen im Mittelpunkt, sondern die jeweilige Lebenssituation, persönliche Ressourcen und die Frage, was im gemeinsamen Prozess hilfreich, tragfähig und verständlich werden kann.',
  },
  arbeitsweise: {
    markersEyebrow: 'Haltung',
    markersLead:
      'Eine Arbeitsweise, die Resonanz, Würde und menschliche Vielfalt nicht als Kennzahl versteht, sondern als gelebten Raum.',
    eyebrow: 'Arbeitsweise',
    title: 'Begegnung auf Augenhöhe',
    intro:
      'Im Mittelpunkt stehen die jeweilige Lebenssituation, persönliche Ressourcen und die Möglichkeit, neue Handlungsspielräume zu entwickeln.',
    stats: [
      {
        value: '',
        label:
          'Lebensgeschichten, familiäre Wurzeln und kulturelle Kontexte, die in die gemeinsame Arbeit einfließen',
      },
      {
        value: '',
        label:
          'Ein gemeinsamer Raum, in dem Begegnung, Würde und Entwicklung möglich werden',
      },
      {
        value: '',
        label:
          'Menschenzentriert, differenziert und frei von vereinfachenden Zuschreibungen',
      },
    ],
    imageAlt:
      'Abstrakte Darstellung von Vielfalt, Begegnung und Verbundenheit',
    imageKicker: 'Psychodrama',
    imageTitle: 'Begegnung in Bewegung',
    badges: [
      {
        eyebrow: 'Haltung',
        text: 'Begegnung vor Bewertung',
      },
      {
        eyebrow: 'Fokus',
        text: 'Resonanz, Perspektive, Entwicklung',
      },
    ],
    psychodramaQuote:
      '„Psychodrama ist die Methode, welche die Wahrheit der Seele durch Handeln ergründet.“',
    psychodramaAuthor: 'J. L. Moreno',
    psychodramaTitle: 'Psychodrama',
    psychodramaText:
      'Meiner psychotherapeutischen Ausbildung liegt das Psychodrama zugrunde, eine nach dem österreichischen Psychotherapiegesetz anerkannte Therapiemethode. Ausgehend von der Rollentheorie wurde das Psychodrama bereits in den 1930er Jahren vom Arzt und Philosophen Jakob Levy Moreno entwickelt.',
    psychodramaDetails: [
      'Das Psychodrama sieht die Wurzeln seelischen Ungleichgewichts darin, dass in bestimmten Situationen entsprechende Handlungsstrategien fehlen oder nicht adäquat eingesetzt werden können.',
      'Ziel in der Therapie ist es, über szenische Darstellung, Aufstellung, Symbolarbeit und Gespräch kreatives Potenzial freizusetzen und Gedanken und Gefühle erlebbar zu machen.',
      'Durch die Auseinandersetzung mit alten und neuen Rollen werden Sichtweisen erweitert beziehungsweise verändert und so Lösungen gefunden.',
    ],
    methodInfo:
      'Psychotherapie ist ein Behandlungsverfahren zur Heilung oder Linderung von Störungen im seelischen Bereich, in sozialen Beziehungen, im Verhalten oder auch in bestimmten Körperfunktionen.',
    externalLinkLabel:
      'Mehr über Psychodrama auf der Website der österreichischen Psychodrama-Sektion',
    globe: {
      eyebrow: 'Resonanzraum',
      title: 'Verbunden mit vielen Teilen der Welt',
      intro:
        'Die Arbeit ist geprägt von unterschiedlichen Lebenswegen, familiären Hintergründen und kulturellen Bezügen, die im therapeutischen Prozess mitwirken.',
      interactionHintTouch:
        'Durch Berührung lassen sich Verbindungen und Nähe im Resonanzraum erkunden.',
      interactionHintHover:
        'Durch Bewegung über die Punkte werden Verbindungen und Nähe im Resonanzraum sichtbar.',
      defaultFocusLabel: 'Resonanzraum',
      defaultFocusText:
        'Jeder Punkt steht für Lebensgeschichten, Beziehungen und Kontexte, die den therapeutischen Raum mitprägen und erweitern.',
      activeFocusLabel: 'Im Fokus',
      activeFocusText:
        'Jeder Punkt steht für Lebensgeschichten, Beziehungen und Kontexte, die den therapeutischen Raum mitprägen und erweitern.',
      closeButton: 'Fokus schließen',
      showAllButton: 'Alle Länder ansehen',
      showFeaturedButton: 'Auswahl reduzieren',
      capsules: [
        'Biografische Erfahrungen',
        'Familiäre Prägungen',
        'Migration und Herkunft',
        'Mehrsprachige Lebenswelten',
        'Beziehungskontexte',
        'Resonanzräume',
      ],
      countryLabels: {
        austria: 'Österreich',
        norway: 'Norwegen',
        serbia: 'Serbien',
        italy: 'Italien',
        poland: 'Polen',
        philippines: 'Philippinen',
        turkey: 'Türkei',
        france: 'Frankreich',
        syria: 'Syrien',
        nigeria: 'Nigeria',
        canada: 'Kanada',
        egypt: 'Ägypten',
        colombia: 'Kolumbien',
        iraq: 'Irak',
        spain: 'Spanien',
        finland: 'Finnland',
        'dr-congo': 'DR Kongo',
        bosnia: 'Bosnien',
        mexico: 'Mexiko',
        greece: 'Griechenland',
        ukraine: 'Ukraine',
        pakistan: 'Pakistan',
        belgium: 'Belgien',
        venezuela: 'Venezuela',
        sweden: 'Schweden',
        kenya: 'Kenia',
        slovakia: 'Slowakei',
        croatia: 'Kroatien',
        china: 'VR China',
        ireland: 'Irland',
        slovenia: 'Slowenien',
        afghanistan: 'Afghanistan',
        romania: 'Rumänien',
        estonia: 'Estland',
        lebanon: 'Libanon',
        portugal: 'Portugal',
        hungary: 'Ungarn',
        'dominican-republic': 'Dominikanische Republik',
        russia: 'Russland',
        netherlands: 'Niederlande',
        ghana: 'Ghana',
        bulgaria: 'Bulgarien',
        usa: 'USA',
        iran: 'Iran',
        luxembourg: 'Luxemburg',
        india: 'Indien',
        'united-kingdom': 'Großbritannien',
        israel: 'Israel',
        vietnam: 'Vietnam',
        switzerland: 'Schweiz',
        'cote-divoire': 'Elfenbeinküste',
        argentina: 'Argentinien',
        'north-macedonia': 'Nordmazedonien',
        senegal: 'Senegal',
        germany: 'Deutschland',
        georgia: 'Georgien',
        palestine: 'Palästina',
        thailand: 'Thailand',
        tunisia: 'Tunesien',
      },
    },
  },
  erfahrungen: {
    eyebrow: 'Erfahrungen',
    title: 'Erfahrungen',
    intro:
      'Bereits 1990 begann ich mit professioneller psychosozialer Unterstützung von Menschen. Seit 2003 arbeite ich zusätzlich als Psychotherapeutin in freier Praxis in Wien.',
    items: [
      'Begleitung von Kindern, Jugendlichen und deren Familien in belastenden Lebenssituationen, New York, USA',
      'Training in systemischer Familientherapie, Children’s Village, New York, USA',
      'Verein Wiener Jugendzentren, Arbeit mit Kindern und Jugendlichen',
      'Vertiefung frauenspezifischer Beratung, Zentrum für angewandte Psychologie und Frauenforschung, Wien/Köln',
      'Suchtarbeit mit konsumierenden, abhängigen und suchtgefährdeten Menschen sowie deren Angehörigen, langjährige Einrichtungsleitung',
      'Betriebliche Beratung für Mitarbeitende des EPA, Wien',
      'Zertifizierte Trainerin für Motivational Interviewing, Centre for Motivation & Change (A, I, NL)',
      'Vorträge, Workshops und Seminare national und international',
    ],
    qualificationsTitle: 'Berufliche Rollen',
    qualifications: [
      'Psychotherapeutin, geschlechter- und kultursensibel',
      'Lehrtherapeutin und Lehrsupervision (auch für den Kinder- und Jugendbereich)',
      'Diplomierte Sozialarbeiterin',
      'Lehrbeauftragte an der Donau-Universität Krems',
      'Referentin der Fachstelle NÖ',
      'Referentin im Propädeutikum',
      'Trainerin für Motivational Interviewing',
      'Vortragende national und international (A, D, NL, USA, UA, EST)',
    ],
  },
  publikationen: {
    eyebrow: 'Publikationen',
    title: 'Fachbeiträge und Veröffentlichungen',
    intro:
      'Ausgewählte Publikationen zu Psychodrama, Körperarbeit, Trauma, Geschlechterrollen, Prävention und gesellschaftlicher Teilhabe. Die Beiträge verbinden fachliche Reflexion, praktische Erfahrung und einen sensiblen Blick auf Beziehung, Entwicklung und soziale Wirklichkeit.',
    items: [
      {
        featured: false,
        title: 'Körperpolitik – eine Körperbeziehungsübung',
        subtitle: 'Zeitschrift für Psychodrama und Soziometrie · 2023',
        year: '2023',
        href: 'https://link.springer.com/epdf/10.1007/s11620-023-00721-z?sharing_token=vEQWvODRtKrDLnGWfcsWove4RwlQNchNByi7wbcMAY7_2VLMbbcxVEsDvFX8B5146HDaKlmaiTVnx7X0Q_Mo_ejJYL0H1Ovtp_Ko4hP3ZHnTuPl2qTmBJRb9gR04BGyMpHMMHY3MXpIZ_t5Ry2PKdMhEjh-Dvp3pkwb3kCIBfuo%3D',
        summary:
          'Die Publikation zeigt, wie über eine Körperbeziehungsübung ein sensibler Zugang zu körperbezogenen Themen eröffnet werden kann. Im Mittelpunkt stehen Wahrnehmung, Beziehung zum eigenen Körper und die psychodramatische Arbeit mit Mädchen und Frauen im Einzel- und Gruppensetting.',
        tags: ['Körperarbeit', 'Psychodrama', 'Beziehung', 'Prävention'],
        ctaLabel: 'Publikation öffnen',
      },
      {
        title:
          'Virtual sociodrama: Building collective creative resilience in the liminality of Covid-19 pandemic',
        subtitle: 'Journal of Psychodrama and Sociometry · 2022',
        year: '2022',
        href: 'https://link.springer.com/article/10.1007/s11620-022-00693-6',
        summary:
          'Der Beitrag beleuchtet, wie virtuelles Soziodrama in einer Phase gesellschaftlicher Unsicherheit kollektive Kreativität und Resilienz stärken kann. Im Fokus stehen Übergangserfahrungen während der Pandemie sowie das gemeinsame Bearbeiten sozialer und emotionaler Belastungen.',
        tags: ['Soziodrama', 'Covid-19', 'Resilienz', 'Gruppe'],
        ctaLabel: 'Publikation öffnen',
      },
      {
        featured: true,
        title:
          'Interkulturelle Kompetenz in der Arbeit mit traumatisierten Menschen mit Fluchterfahrung',
        subtitle: 'Zeitschrift für Psychodrama und Soziometrie · 2021',
        year: '2021',
        href: 'https://link.springer.com/epdf/10.1007/s11620-021-00627-8?sharing_token=OB0Vv6wyZ-36VZ1rMDJv_fe4RwlQNchNByi7wbcMAY7boqzoBWQCg9GGPERUnYcehh8aIEYfhoMnf4viB-qX_O4LYBj7YwJUeK_QrqJ1MtE02CXK0mJrqd7MFbJJUfLhi4yHTffQPume9g4Dyd-raWXM1VlhOk-pZ0JRPx2sC40%3D',
        summary:
          'Dieser Beitrag widmet sich der Frage, welche interkulturellen Kompetenzen in der psychotherapeutischen und psychosozialen Arbeit mit traumatisierten Menschen mit Fluchterfahrung erforderlich sind. Im Zentrum stehen Sensibilität für Lebensrealitäten, Kontextwissen und tragfähige Beziehungsgestaltung.',
        tags: ['Trauma', 'Flucht', 'Interkulturalität', 'Psychotherapie'],
        ctaLabel: 'Publikation öffnen',
      },
      {
        title:
          'Wann bin ich richtig? Prävention von Essstörungen. Wann bin ich angemessen?',
        subtitle: 'Zeitschrift für Psychodrama und Soziometrie · 2018',
        year: '2018',
        href: 'https://link.springer.com/article/10.1007/s11620-018-0464-7',
        summary:
          'Die Publikation thematisiert Prävention von Essstörungen im Spannungsfeld von Selbstbild, Körperwahrnehmung und gesellschaftlichen Normen. Sie öffnet einen Reflexionsraum für die Frage, wann Jugendliche sich als richtig, passend oder angemessen erleben.',
        tags: ['Essstörungen', 'Prävention', 'Jugendliche', 'Körperbild'],
        ctaLabel: 'Publikation öffnen',
      },
      {
        title: 'Geschlechtsrollenentwicklung Jugendlicher',
        subtitle:
          'Entwicklung der Geschlechterrolle im Jugendalter · Zeitschrift für Psychodrama und Soziometrie · 2016',
        year: '2016',
        href: 'https://link.springer.com/article/10.1007/s11620-016-0352-y?wt_mc=Internal.Event.1.SEM.ArticleAuthorAssignedToIssue',
        summary:
          'Der Beitrag beschäftigt sich mit der Entwicklung von Geschlechterrollen im Jugendalter und deren Bedeutung für Identität, Selbstverständnis und soziale Orientierung. Betrachtet werden Entwicklungsprozesse im Spannungsfeld von Zugehörigkeit, Normen und individueller Entfaltung.',
        tags: ['Jugend', 'Geschlechterrollen', 'Identität', 'Entwicklung'],
        ctaLabel: 'Publikation öffnen',
      },
      {
        title: 'Sollte die Welt nicht besser werden?',
        subtitle:
          'Digitale Medien, emanzipatorisches Potential und Marginalisierung · STIMME · 2019',
        year: '2019',
        href: 'https://stimme.minderheiten.at/wordpress/wp-content/uploads/sites/3/2019/05/stimme98_web_s08-09.pdf',
        summary:
          'Die Publikation reflektiert die Ambivalenz digitaler Medien zwischen emanzipatorischem Potential und neuen Formen von Marginalisierung. Sie fragt danach, wie soziale Teilhabe, Sichtbarkeit und Ausschlussmechanismen in digitalen Räumen zusammenwirken.',
        tags: ['Digitale Medien', 'Marginalisierung', 'Teilhabe', 'Gesellschaft'],
        ctaLabel: 'Publikation öffnen',
      },
      {
        title:
          'Dynamik in der Beziehung von Co-Abhängigen und abhängigen Persönlichkeitsstörungen',
        subtitle: 'Springer',
        year: '',
        href: 'https://link.springer.com/chapter/10.1007/978-3-531-19779-1_8#page-1',
        summary:
          'Dieser Beitrag untersucht Beziehungsdynamiken zwischen ko-abhängigen Personen und Menschen mit abhängiger Persönlichkeitsstörung. Im Fokus stehen wiederkehrende Muster von Bindung, Verantwortung, Bedürftigkeit und Abgrenzung in belasteten Beziehungssystemen.',
        tags: [
          'Beziehungsdynamik',
          'Co-Abhängigkeit',
          'Persönlichkeitsstörung',
          'Psychodynamik',
        ],
        ctaLabel: 'Publikation öffnen',
      },
    ],
    emptyText: 'Publikationen werden in Kürze ergänzt.',
    featuredLabel: 'Hervorgehobene Publikation',
    featuredInfo:
      'Ein kuratierter Einblick in einen fachlichen Schwerpunkt mit direktem Zugang zur Publikation.',
    openLabelDefault: 'Publikation öffnen',
  },
  kontakt: {
    eyebrow: 'Kontakt',
    title: 'Kontakt aufnehmen',
    text: 'Für Terminvereinbarungen oder Fragen freue ich mich über eine Kontaktaufnahme per E-Mail oder Telefon.',
    name: 'DSAin Christine Pichlhöfer, MSc',
    roles: [
      'Psychotherapeutin',
      'Diplomierte Sozialarbeiterin',
      'Lehrtätigkeit in der Fachsektion Psychodrama im ÖAGG',
      'Lehrbeauftragte an der Donau-Universität Krems',
      'Referentin der Fachstelle NÖ und der SDW Wien',
    ],
    practiceLabel: 'Praxis',
    practice: 'Praxisgemeinschaft Marokkanergasse',
    addressLabel: 'Adresse',
    address: ['Marokkanergasse 19/3', '1030 Wien'],
    phoneLabel: 'Telefon',
    phone: '0699 / 110 144 83',
    emailLabel: 'E-Mail',
    email: 'psychodrama@pichlhoefer.eu',
  },
  impressum: {
    eyebrow: 'Impressum',
    title: 'Impressum',
    sections: [
      {
        title: 'Medieninhaberin und verantwortlich für den Inhalt',
        body: [
          'DSAin Christine Pichlhöfer, MSc',
          'Praxisgemeinschaft Marokkanergasse',
          'Marokkanergasse 19/3',
          '1030 Wien',
          'Telefon: 0699 / 110 144 83',
          'E-Mail: psychodrama@pichlhoefer.eu',
        ],
      },
      {
        title: 'Berufsbezeichnung',
        body: ['Psychotherapeutin, Diplomierte Sozialarbeiterin'],
      },
      {
        title: 'Cookies',
        body: [
          'Diese Website verwendet keine Cookies zu Analyse- oder Trackingzwecken.',
        ],
      },
      {
        title: 'Haftung für Inhalte',
        body: [
          'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.',
        ],
      },
      
      {
        title: 'Urheberrecht',
        body: [
          'Die Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der jeweiligen Rechteinhaber:innen.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Datenschutz',
    title: 'Datenschutzerklärung',
    sections: [
      {
        title: 'Verantwortliche',
        body: [
          'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist DSAin Christine Pichlhöfer, MSc, Marokkanergasse 19/3, 1030 Wien, E-Mail: psychodrama@pichlhoefer.eu.',
        ],
      },
      {
        title: 'Erhebung und Verarbeitung von Daten',
        body: [
          'Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung dieser Website sowie zur Bearbeitung von Anfragen erforderlich ist.',
          'Diese Website verwendet keine Cookies zu Analyse- oder Trackingzwecken.',
        ],
      },
      {
        title: 'Kontaktaufnahme',
        body: [
          'Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert.',
          'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.',
          'Ihre Daten werden gelöscht, sobald sie für die Erreichung des Zwecks nicht mehr erforderlich sind.',
        ],
      },
      {
        title: 'Hosting und Server-Logfiles',
        body: [
          'Diese Website wird bei einem externen Hosting-Anbieter betrieben. Im Rahmen des Betriebs werden automatisch Informationen in sogenannten Server-Logfiles erhoben und gespeichert.',
          'Dies betrifft insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und Betriebssystem.',
          'Die Verarbeitung erfolgt zur Gewährleistung der technischen Sicherheit und Stabilität der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
        ],
      },
      {
        title: 'Ihre Rechte',
        body: [
          'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.',
          'Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren.',
        ],
      },
      {
        title: 'Kontakt zum Datenschutz',
        body: [
          'Bei Fragen zum Datenschutz wenden Sie sich bitte an psychodrama@pichlhoefer.eu.',
        ],
      },
    ],
  },
  footer: {
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    cookieNotice:
      'Diese Website verwendet keine Cookies zu Analyse- oder Trackingzwecken.',
    kicker: 'Christine Pichlhöfer, MSc',
    description: 'Psychotherapie in Wien.',
    contactLabel: 'Kontakt',
    legalLabel: 'Rechtliches',
    developerLabel: 'Design & Entwicklung',
  },
}
