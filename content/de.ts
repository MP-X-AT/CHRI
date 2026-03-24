import type { SiteContent } from '@/lib/types'

export const deContent: SiteContent = {
  locale: 'de',

  meta: {
    title: 'Christine Pichlhöfer',
    description:
      'Geschlechtersensible Psychotherapie, Beratung, Supervision und Coaching in Wien.',
  },

  nav: [
    { label: 'Home', href: '' },
    { label: 'Angebot', href: 'angebot' },
    { label: 'Arbeitsweise', href: 'arbeitsweise' },
    { label: 'Erfahrungen', href: 'erfahrungen' },
    { label: 'Publikationen', href: 'publikationen' },
    { label: 'Kontakt', href: 'kontakt' },
  ],

  home: {
    hero: {
      kicker: 'Psychotherapie in Wien',
      title: 'Raum für Klärung, Entwicklung und neue Perspektiven.',
      text:
        'Viele Menschen bewältigen schwierige Herausforderungen und Lebenskrisen eigenständig. Es gibt jedoch Phasen, in denen professionelle Unterstützung hilfreich oder notwendig sein kann. In solchen Zeiten begleite ich Sie gerne.',
      primaryCta: 'Termin per E-Mail anfragen',
      secondaryCta: 'Angebot ansehen',
    },

    servicesPreview: {
      eyebrow: 'Angebot',
      title: 'Psychotherapie, Beratung, Supervision und Coaching',
      intro:
        'Ein ruhiger Rahmen für persönliche, berufliche und soziale Fragestellungen.',
      items: [
        {
          title: 'Psychotherapie',
          text:
            'Begleitung in belastenden Lebensphasen sowie bei psychischen und psychosomatischen Beschwerden.',
        },
        {
          title: 'Beratung',
          text:
            'Unterstützung bei Orientierung, Entscheidungen und persönlichen Fragestellungen.',
        },
        {
          title: 'Supervision & Coaching',
          text:
            'Reflexionsraum für Fachpersonen und Menschen in verantwortungsvollen beruflichen Rollen.',
        },
      ],
    },

    approachPreview: {
      title: 'Arbeitsweise',
      text:
        'Im Mittelpunkt stehen die Begegnung auf Augenhöhe, ein ressourcenorientierter Zugang und die Möglichkeit, neue Perspektiven und Handlungsspielräume zu entwickeln.',
      cta: 'Mehr zur Arbeitsweise',
    },

    experiencePreview: {
      title: 'Erfahrungen',
      text:
        'Langjährige Erfahrung in der psychosozialen Arbeit mit Menschen in unterschiedlichen Lebenssituationen – national und international.',
      cta: 'Mehr zu Erfahrungen',
    },

    publicationsPreview: {
      title: 'Publikationen',
      text:
        'Eine Auswahl an fachlichen Beiträgen, Vorträgen und Veröffentlichungen.',
      cta: 'Alle Publikationen ansehen',
    },

    contactPreview: {
      title: 'Kontakt',
      text:
        'Für Terminvereinbarungen oder Fragen freue ich mich über eine Kontaktaufnahme per E-Mail oder Telefon.',
      cta: 'Kontakt aufnehmen',
    },
  },

  angebot: {
    eyebrow: 'Angebot',
    title:
      'Geschlechtersensible Psychotherapie, Beratung, Supervision und Coaching',
    intro:
      'Ich biete geschlechtersensible Psychotherapie, Beratung, Supervision und Coaching unter anderem bei folgenden Themen und Belastungen an.',
    items: [
      'Lebenskrisen',
      'Angsterkrankungen / Panikattacken',
      'Beziehungen zu anderen Menschen',
      'Burnout / Depression',
      'Psychosomatische Beschwerden',
      'Abhängigkeit / Sucht',
      'Traumafolgeerkrankungen',
      'Probleme rund ums Erwachsenwerden',
      'Schwierigkeiten am Arbeitsplatz',
      'Supervision, Beratung und Coaching',
      'Suchtprävention',
      'Motivational Interviewing',
    ],
    settingTitle: 'Setting',
    settingText: 'Deutsch, Englisch',
    refundText:
      'Eine teilweise Rückverrechnung mit der Krankenkasse ist möglich.',
  },

  arbeitsweise: {
    eyebrow: 'Arbeitsweise',
    title: 'Begegnung auf Augenhöhe',
    intro:
      'Im Mittelpunkt stehen die jeweilige Lebenssituation, persönliche Ressourcen und die Möglichkeit, neue Handlungsspielräume zu entwickeln.',
    psychodramaQuote:
      '„Psychodrama ist die Methode, welche die Wahrheit der Seele durch Handeln ergründet.“',
    psychodramaAuthor: 'J. L. Moreno',
    psychodramaTitle: 'Psychodrama',
    psychodramaText:
      'Meiner psychotherapeutischen Ausbildung liegt das Psychodrama, eine nach österreichischem Psychotherapiegesetz anerkannte Therapiemethode, zugrunde. Ausgehend von der Rollentheorie wurde das Psychodrama bereits in den 1930er Jahren vom Arzt und Philosophen Jakob Levy Moreno entwickelt.',
    psychodramaDetails: [
      'Das Psychodrama sieht die Wurzeln von seelischem Ungleichgewicht darin, dass in bestimmten Situationen entsprechende Handlungsstrategien fehlen oder nicht adäquat eingesetzt werden können.',
      'Ziel in der Therapie ist es, über szenische Darstellung, Aufstellung, Symbolarbeit und Gespräch kreatives Potenzial freizusetzen und Gedanken und Gefühle erlebbar zu machen.',
      'Durch die Auseinandersetzung mit alten und neuen Rollen werden Sichtweisen erweitert beziehungsweise verändert und so Lösungen gefunden.',
    ],
    methodInfo:
      'Psychotherapie ist ein Behandlungsverfahren zur Heilung oder Linderung von Störungen im seelischen Bereich, in sozialen Beziehungen, im Verhalten oder auch in bestimmten Körperfunktionen. Als Therapieerfolg kann neben einem Verschwinden der Symptomatik eine Veränderung des Erlebens, Denkens und Fühlens eintreten, wie sie sich in größerer Selbstannahme, Lebensfreude und sozialer Kompetenz ausdrücken kann.',
    externalLinkLabel:
      'Mehr über Psychodrama auf der Website der österreichischen Psychodrama Sektion',
  },

  erfahrungen: {
    eyebrow: 'Erfahrungen',
    title:
      'Langjährige Erfahrung in der psychosozialen Unterstützung und Psychotherapie',
    intro:
      'Bereits 1990 begann ich mit professioneller psychosozialer Unterstützung von Menschen. Seit 2003 arbeite ich zusätzlich als Psychotherapeutin in freier Praxis in Wien.',
    items: [
      'Begleitung von problembelasteten Kindern, Jugendlichen und deren Familien, New York, USA',
      "Training in systemischer Familientherapie, Children's Village, New York, USA",
      'Verein Wiener Jugendzentren, Arbeit mit Kindern und Jugendlichen',
      'Vertiefung frauenspezifischer Beratung, Zentrum für angewandte Psychologie und Frauenforschung, Wien/Köln',
      'Suchtarbeit mit konsumierenden, abhängigen und suchtgefährdeten Menschen sowie deren Angehörigen, langjährige Einrichtungsleitung',
      'Betriebliche Beratung für MitarbeiterInnen des EPA, Wien',
      'Zertifizierte Trainerin für Motivational Interviewing, Centre for Motivation & Change (A, I, NL)',
      'Vorträge, Workshops und Seminare national und international',
    ],
    qualificationsTitle: 'Qualifikationen und Lehre',
    qualifications: [
      'Psychotherapeutin',
      'Diplomierte Sozialarbeiterin',
      'Lehrtätigkeit in der Fachsektion Psychodrama im ÖAGG',
      'Lehrbeauftragte an der Donau-Universität Krems',
      'Referentin der Fachstelle NÖ und der SDW Wien',
    ],
  },

  publikationen: {
    eyebrow: 'Publikationen',
    title: 'Texte und Beiträge',
    intro:
      'Eine Auswahl an Veröffentlichungen, Vorträgen und fachlichen Beiträgen.',
    items: [],
  },

  kontakt: {
    eyebrow: 'Kontakt',
    title: 'Kontakt aufnehmen',
    text:
      'Für Terminvereinbarungen oder Fragen freue ich mich über eine Nachricht per E-Mail oder einen Anruf.',
    name: 'DSAin Christine Pichlhöfer, MSc',
    roles: [
      'Psychotherapeutin',
      'Diplomierte Sozialarbeiterin',
      'Lehrtätigkeit in der Fachsektion Psychodrama im ÖAGG',
      'Lehrbeauftragte an der Donau-Universität Krems',
      'Referentin der Fachstelle NÖ und der SDW Wien',
    ],
    practiceLabel: 'Praxisgemeinschaft',
    practice: 'Praxisgemeinschaft Marokkanergasse',
    addressLabel: 'Adresse',
    address: ['Marokkanergasse 19/3', '1030 Wien'],
    phoneLabel: 'Telefon',
    phone: '0699 / 110 144 83',
    emailLabel: 'E-Mail',
    email: 'psychodrama@pichlhoefer.eu',
  },

  footer: {
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },
}