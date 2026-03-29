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

export const enContent: ExtendedSiteContent = {
  locale: 'en',
  meta: {
    title: 'Christine Pichlhöfer, MSc',
    description:
      'Gender-sensitive psychotherapy, counselling, supervision and coaching in Vienna.',
  },
  site: {
    brandName: 'Christine Pichlhöfer, MSc',
    brandSubtitle: 'Psychotherapist in Vienna',
    email: 'psychodrama@pichlhoefer.eu',
    phone: '0699 / 110 144 83',
    phoneHref: '+4369911014483',
    practice: 'Praxisgemeinschaft Marokkanergasse',
    address: ['Marokkanergasse 19/3', '1030 Vienna'],
    linkedinLabel: 'LinkedIn',
    linkedinHref:
      'https://at.linkedin.com/in/christine-pichlh%C3%B6fer-87a94bb0',
    developerName: 'mp-x.at',
    developerHref: 'https://mp-x.at',
    copyright: '© Christine Pichlhöfer, MSc',
  },
  header: {
    openMenuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
  },
  nav: [
    {
      label: 'Home',
      href: '',
    },
    {
      label: 'Services',
      href: 'angebot',
    },
    {
      label: 'Approach',
      href: 'arbeitsweise',
    },
    {
      label: 'Experience',
      href: 'erfahrungen',
    },
    {
      label: 'Publications',
      href: 'publikationen',
    },
    {
      label: 'Contact',
      href: 'kontakt',
    },
  ],
  home: {
    hero: {
      kicker: 'Psychotherapy in Vienna',
      title: 'Space for clarity, growth and new perspectives.',
      displayTitle: {
        before: 'Gender-sensitive psychotherapy',
        highlight: 'Supervision and coaching',
        after: 'Within the psychodrama method, Humanistic Cluster',
      },
      text: '',
      primaryCta: 'Get in touch by email',
      secondaryCta: 'View approach',
      infoItems: [],
      imageAlt: 'Practice room',
    },
    midStage: {
      eyebrow: 'Professional focus',
      title:
        'Psychotherapy, psychodrama, group dynamics and supervision in a distinct and lively form.',
      highlights: [
        {
          title: 'Psychotherapy',
          text: 'A space for reflection, growth and professional guidance.',
        },
        {
          title: 'Psychodrama',
          text: 'Experiential work with depth, movement and changing perspectives.',
        },
        {
          title: 'Supervision',
          text: 'For colleagues, institutions and professional contexts.',
        },
      ],
      sideNote: 'Therapy available in German and English.',
      bottomLeft:
        'For clients, trainees, professional colleagues and institutions.',
      bottomRight: 'In Vienna · with personal presence and professional clarity.',
    },
    servicesPreview: {
      eyebrow: 'Services',
      title: 'Psychotherapy, counselling, supervision and coaching',
      intro: 'A calm setting for personal, professional and social concerns.',
      items: [
        {
          title: 'Psychotherapy',
          text: 'Support during challenging phases of life as well as with psychological and psychosomatic concerns.',
        },
        {
          title: 'Counselling',
          text: 'Support with orientation, decision-making and personal concerns.',
        },
        {
          title: 'Supervision & Coaching',
          text: 'A reflective space for professionals and people in responsible professional roles.',
        },
      ],
    },
    approachPreview: {
      title: 'Approach',
      text: 'The focus is on meeting at eye level, a resource-oriented approach and the possibility of developing new perspectives and new ways of acting.',
      cta: 'More about the approach',
    },
    experiencePreview: {
      title: 'Experience',
      text: 'Many years of experience in psychosocial work with people in a wide range of life situations – nationally and internationally.',
      cta: 'More about experience',
    },
    publicationsPreview: {
      title: 'Publications',
      text: 'A selection of professional contributions, talks and publications.',
      cta: 'View all publications',
    },
    contactPreview: {
      title: 'Contact',
      text: 'For appointments or questions, I look forward to hearing from you by email or phone.',
      cta: 'Get in touch',
    },
  },
  angebot: {
    eyebrow: 'Services',
    title: 'Gender-sensitive psychotherapy, counselling, supervision and coaching',
    heroTitle: 'Space for clarification, relief and new possibilities for action.',
    intro:
      'I offer gender-sensitive psychotherapy, counselling, supervision and coaching for a range of concerns and challenges, including the following.',
    items: [
      {
        id: 'life-crises',
        label: 'Life crises',
      },
      {
        id: 'anxiety',
        label: 'Anxiety disorders / panic attacks',
      },
      {
        id: 'relationships',
        label: 'Relationships with other people',
      },
      {
        id: 'burnout-depression',
        label: 'Burnout / depression',
      },
      {
        id: 'psychosomatic',
        label: 'Psychosomatic complaints',
      },
      {
        id: 'addiction',
        label: 'Dependency / addiction',
      },
      {
        id: 'trauma',
        label: 'Trauma-related disorders',
      },
      {
        id: 'growing-up',
        label: 'Challenges around growing up',
      },
      {
        id: 'workplace',
        label: 'Difficulties at work',
      },
      {
        id: 'supervision-coaching',
        label: 'Supervision, counselling and coaching',
      },
      {
        id: 'prevention',
        label: 'Addiction prevention',
      },
      {
        id: 'motivational-interviewing',
        label: 'Motivational Interviewing',
      },
    ],
    panels: [
      {
        eyebrow: 'Personal strain',
        title:
          'When inner tension, exhaustion or crises become overwhelming.',
        text: 'Psychotherapy can help when symptoms, overwhelm or difficult phases of life begin to narrow everyday life.',
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
        eyebrow: 'Relationships and work',
        title:
          'When collaboration, relationships or role questions need room.',
        text: 'Counselling, supervision and coaching offer a clear setting to look at conflicts, dynamics and development opportunities in a differentiated way.',
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
    settingText: 'German, English',
    noteTitle: 'Note',
    refundText:
      'Partial reimbursement through public health insurance may be possible.',
    closingText:
      'The focus is not only on individual topics, but on the respective life situation, personal resources and the question of what can become helpful, sustainable and understandable in the shared process.',
  },
  arbeitsweise: {
    markersEyebrow: 'Approach',
    markersLead:
      'A way of working that understands resonance, dignity and human diversity not as metrics, but as a lived space.',
    eyebrow: 'Approach',
    title: 'Working together at eye level',
    intro:
      'The focus is on each person’s life situation, personal resources and the possibility of developing new ways of acting.',
    stats: [
      {
        value: '',
        label:
          'Life stories, family backgrounds and cultural contexts that shape the shared work',
      },
      {
        value: '',
        label:
          'A shared space where encounter, dignity and development can emerge',
      },
      {
        value: '',
        label:
          'Human-centred, nuanced and free from simplifying assumptions',
      },
    ],
    imageAlt:
      'Abstract representation of diversity, encounter and connectedness',
    imageKicker: 'Psychodrama',
    imageTitle: 'Encounter in motion',
    badges: [
      {
        eyebrow: 'Attitude',
        text: 'Encounter before judgement',
      },
      {
        eyebrow: 'Focus',
        text: 'Resonance, perspective, development',
      },
    ],
    psychodramaQuote:
      '“Psychodrama is the method that explores the truth of the soul through action.”',
    psychodramaAuthor: 'J. L. Moreno',
    psychodramaTitle: 'Psychodrama',
    psychodramaText:
      'My psychotherapeutic training is based on psychodrama, a therapeutic method recognised under Austrian psychotherapy law.',
    psychodramaDetails: [
      'Psychodrama sees the roots of emotional imbalance in the fact that, in certain situations, suitable strategies for action are missing or cannot be used appropriately.',
      'The aim in therapy is to use enactment, constellations, symbolic work and conversation to unlock creative potential and make thoughts and feelings tangible.',
      'Through engaging with old and new roles, perspectives can be broadened or changed and new solutions can emerge.',
    ],
    methodInfo:
      'Psychotherapy is a treatment method for alleviating disturbances in emotional life, social relationships and behaviour.',
    externalLinkLabel:
      'Learn more about psychodrama on the website of the Austrian Psychodrama Section',
    globe: {
      eyebrow: 'Resonance space',
      title: 'Connected with many parts of the world',
      intro:
        'The work is shaped by diverse life paths, family backgrounds and cultural contexts that become part of the therapeutic process.',
      interactionHintTouch:
        'Touch a point to explore connections and proximity within the resonance space.',
      interactionHintHover:
        'Move across the points to reveal connections and proximity within the resonance space.',
      defaultFocusLabel: 'Resonance space',
      defaultFocusText:
        'Each point represents life stories, relationships and contexts that shape and expand the therapeutic space.',
      activeFocusLabel: 'In focus',
      activeFocusText:
        'Each point represents life stories, relationships and contexts that shape and expand the therapeutic space.',
      closeButton: 'Close focus',
      capsules: [
        'Biographical experience',
        'Family backgrounds',
        'Migration and origin',
        'Multilingual life contexts',
        'Relational dynamics',
        'Resonance spaces',
      ],
      countryLabels: {
        austria: 'Austria',
        norway: 'Norway',
        serbia: 'Serbia',
        italy: 'Italy',
        poland: 'Poland',
        philippines: 'Philippines',
        turkey: 'Turkey',
        france: 'France',
        syria: 'Syria',
        nigeria: 'Nigeria',
        canada: 'Canada',
        egypt: 'Egypt',
        colombia: 'Colombia',
        iraq: 'Iraq',
        spain: 'Spain',
        finland: 'Finland',
        'dr-congo': 'DR Congo',
        bosnia: 'Bosnia and Herzegovina',
        mexico: 'Mexico',
        greece: 'Greece',
        ukraine: 'Ukraine',
        pakistan: 'Pakistan',
        belgium: 'Belgium',
        venezuela: 'Venezuela',
        sweden: 'Sweden',
        kenya: 'Kenya',
        slovakia: 'Slovakia',
        croatia: 'Croatia',
        china: 'China',
        ireland: 'Ireland',
        slovenia: 'Slovenia',
        afghanistan: 'Afghanistan',
        romania: 'Romania',
        estonia: 'Estonia',
        lebanon: 'Lebanon',
        portugal: 'Portugal',
        hungary: 'Hungary',
        'dominican-republic': 'Dominican Republic',
        russia: 'Russia',
        netherlands: 'Netherlands',
        ghana: 'Ghana',
        bulgaria: 'Bulgaria',
        usa: 'USA',
        iran: 'Iran',
        luxembourg: 'Luxembourg',
        india: 'India',
        'united-kingdom': 'United Kingdom',
        israel: 'Israel',
        vietnam: 'Vietnam',
        switzerland: 'Switzerland',
        'cote-divoire': 'Côte d’Ivoire',
        argentina: 'Argentina',
        'north-macedonia': 'North Macedonia',
        senegal: 'Senegal',
        germany: 'Germany',
        georgia: 'Georgia',
        palestine: 'Palestine',
        thailand: 'Thailand',
        tunisia: 'Tunisia',
      },
    },
  },
  erfahrungen: {
    eyebrow: 'Experience',
    title: 'Experience',
    intro:
      'I began providing professional psychosocial support in 1990. Since 2003, I have also been working as a psychotherapist in private practice in Vienna.',
    items: [
      'Support for children, adolescents and their families facing serious difficulties, New York, USA',
      "Training in systemic family therapy, Children's Village, New York, USA",
      'Verein Wiener Jugendzentren, working with children and adolescents',
      "Advanced training in women-specific counselling, Centre for Applied Psychology and Women's Research, Vienna/Cologne",
      'Addiction work with people who use substances, are dependent or at risk of addiction, as well as with their relatives; many years in a leadership role',
      'Workplace counselling for employees of the EPA, Vienna',
      'Certified trainer in Motivational Interviewing, Centre for Motivation & Change (A, I, NL)',
      'Lectures, workshops and seminars nationally and internationally',
    ],
    qualificationsTitle: 'Professional roles',
    qualifications: [
      'Psychotherapist, gender- and culture-sensitive',
      'Training therapist and training supervision (also in the field of child and adolescent work)',
      'Qualified social worker',
      'Lecturer at Danube University Krems',
      'Speaker for Fachstelle NÖ',
      'Speaker in the psychotherapy propaedeutic programme',
      'Trainer in Motivational Interviewing',
      'Lecturer nationally and internationally (AT, DE, NL, USA, UA, EST)',
    ],
  },
  publikationen: {
    eyebrow: 'Publications',
    title: 'Selected publications and contributions',
    intro:
      'A selection of publications on psychodrama, body work, trauma, gender roles, prevention and social participation. These contributions connect professional reflection, practical experience and a sensitive perspective on relationship, development and social reality.',
    items: [
      {
        featured: false,
        title: 'Body politics – an exercise in body relationship',
        subtitle: 'Journal of Psychodrama and Sociometry · 2023',
        year: '2023',
        href: 'https://link.springer.com/epdf/10.1007/s11620-023-00721-z?sharing_token=vEQWvODRtKrDLnGWfcsWove4RwlQNchNByi7wbcMAY7_2VLMbbcxVEsDvFX8B5146HDaKlmaiTVnx7X0Q_Mo_ejJYL0H1Ovtp_Ko4hP3ZHnTuPl2qTmBJRb9gR04BGyMpHMMHY3MXpIZ_t5Ry2PKdMhEjh-Dvp3pkwb3kCIBfuo%3D',
        summary:
          'This publication shows how an exercise focused on the relationship to one’s own body can open a sensitive path into body-related topics. It centres on perception, body awareness and psychodramatic work with girls and women in individual and group settings.',
        tags: ['Body work', 'Psychodrama', 'Relationship', 'Prevention'],
        ctaLabel: 'Open publication',
      },
      {
        title:
          'Virtual sociodrama: Building collective creative resilience in the liminality of Covid-19 pandemic',
        subtitle: 'Journal of Psychodrama and Sociometry · 2022',
        year: '2022',
        href: 'https://link.springer.com/article/10.1007/s11620-022-00693-6',
        summary:
          'This article explores how virtual sociodrama can strengthen collective creativity and resilience in times of social uncertainty. It focuses on transitional experiences during the pandemic and on processing social and emotional strain together.',
        tags: ['Sociodrama', 'Covid-19', 'Resilience', 'Group'],
        ctaLabel: 'Open publication',
      },
      {
        featured: true,
        title:
          'Intercultural competence in working with traumatised people with refugee experience',
        subtitle: 'Journal of Psychodrama and Sociometry · 2021',
        year: '2021',
        href: 'https://link.springer.com/epdf/10.1007/s11620-021-00627-8?sharing_token=OB0Vv6wyZ-36VZ1rMDJv_fe4RwlQNchNByi7wbcMAY7boqzoBWQCg9GGPERUnYcehh8aIEYfhoMnf4viB-qX_O4LYBj7YwJUeK_QrqJ1MtE02CXK0mJrqd7MFbJJUfLhi4yHTffQPume9g4Dyd-raWXM1VlhOk-pZ0JRPx2sC40%3D',
        summary:
          'This contribution addresses the question of which intercultural competencies are needed in psychotherapeutic and psychosocial work with traumatised people who have refugee experience. It highlights sensitivity to life realities, contextual understanding and sustainable relationship building.',
        tags: [
          'Trauma',
          'Refugee experience',
          'Interculturality',
          'Psychotherapy',
        ],
        ctaLabel: 'Open publication',
      },
      {
        title:
          'When am I right? Prevention of eating disorders. When am I appropriate?',
        subtitle: 'Journal of Psychodrama and Sociometry · 2018',
        year: '2018',
        href: 'https://link.springer.com/article/10.1007/s11620-018-0464-7',
        summary:
          'This publication addresses the prevention of eating disorders at the intersection of self-image, body perception and social norms. It opens a reflective space around the question of when young people experience themselves as right, fitting or appropriate.',
        tags: ['Eating disorders', 'Prevention', 'Youth', 'Body image'],
        ctaLabel: 'Open publication',
      },
      {
        title: 'Development of gender roles in adolescence',
        subtitle: 'Journal of Psychodrama and Sociometry · 2016',
        year: '2016',
        href: 'https://link.springer.com/article/10.1007/s11620-016-0352-y?wt_mc=Internal.Event.1.SEM.ArticleAuthorAssignedToIssue',
        summary:
          'This article focuses on the development of gender roles in adolescence and their relevance for identity, self-understanding and social orientation. It looks at developmental processes shaped by belonging, norms and individual unfolding.',
        tags: ['Youth', 'Gender roles', 'Identity', 'Development'],
        ctaLabel: 'Open publication',
      },
      {
        title: 'Shouldn’t the world become better?',
        subtitle:
          'Digital media, emancipatory potential and marginalisation · STIMME · 2019',
        year: '2019',
        href: 'https://stimme.minderheiten.at/wordpress/wp-content/uploads/sites/3/2019/05/stimme98_web_s08-09.pdf',
        summary:
          'This publication reflects on the ambivalence of digital media between emancipatory potential and new forms of marginalisation. It asks how social participation, visibility and mechanisms of exclusion interact in digital spaces.',
        tags: ['Digital media', 'Marginalisation', 'Participation', 'Society'],
        ctaLabel: 'Open publication',
      },
      {
        title:
          'Dynamics in the relationship of co-dependent and person with dependent personality disorder',
        subtitle: 'Springer',
        year: '',
        href: 'https://link.springer.com/chapter/10.1007/978-3-531-19779-1_8#page-1',
        summary:
          'This contribution examines relationship dynamics between co-dependent individuals and people with dependent personality disorder. It focuses on recurring patterns of attachment, responsibility, neediness and boundaries in strained relational systems.',
        tags: [
          'Relationship dynamics',
          'Co-dependency',
          'Personality disorder',
          'Psychodynamics',
        ],
        ctaLabel: 'Open publication',
      },
    ],
    emptyText: 'Publications will be added soon.',
    featuredLabel: 'Featured publication',
    featuredInfo:
      'A curated entry point into one of the key thematic areas with direct access to the publication.',
    openLabelDefault: 'Open publication',
  },
  kontakt: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    text: 'For appointments or questions, I would be pleased to hear from you by email or phone.',
    name: 'DSAin Christine Pichlhöfer, MSc',
    roles: [
      'Psychotherapist',
      'Qualified social worker',
      'Teaching at the Psychodrama Section of ÖAGG',
      'Lecturer at Danube University Krems',
      'Speaker for Fachstelle NÖ and SDW Vienna',
    ],
    practiceLabel: 'Practice',
    practice: 'Praxisgemeinschaft Marokkanergasse',
    addressLabel: 'Address',
    address: ['Marokkanergasse 19/3', '1030 Vienna'],
    phoneLabel: 'Phone',
    phone: '0699 / 110 144 83',
    emailLabel: 'Email',
    email: 'psychodrama@pichlhoefer.eu',
  },
  impressum: {
    eyebrow: 'Imprint',
    title: 'Imprint',
    sections: [
      {
        title: 'Media owner and responsible for content',
        body: [
          'DSAin Christine Pichlhöfer, MSc',
          'Praxisgemeinschaft Marokkanergasse',
          'Marokkanergasse 19/3',
          '1030 Vienna',
          'Phone: 0699 / 110 144 83',
          'Email: psychodrama@pichlhoefer.eu',
        ],
      },
      {
        title: 'Professional title',
        body: ['Psychotherapist, qualified social worker'],
      },
      {
        title: 'Cookies',
        body: [
          'This website does not use cookies for analytics or tracking purposes.',
        ],
      },
      {
        title: 'Liability for content',
        body: [
          'The content of this website has been created with the greatest care. However, no guarantee is given for the accuracy, completeness or timeliness of the content.',
        ],
      },
      
      {
        title: 'Copyright',
        body: [
          'The content and works on this website are subject to copyright. Any use beyond the limits of copyright law requires prior written consent of the respective rights holders.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Privacy Policy',
    sections: [
      {
        title: 'Controller',
        body: [
          'The controller responsible for the processing of personal data on this website is DSAin Christine Pichlhöfer, MSc, Marokkanergasse 19/3, 1030 Vienna, email: psychodrama@pichlhoefer.eu.',
        ],
      },
      {
        title: 'Collection and Processing of Data',
        body: [
          'Personal data is only processed to the extent necessary to provide this website and to handle inquiries.',
          'This website does not use cookies for analytics or tracking purposes.',
        ],
      },
      {
        title: 'Contact',
        body: [
          'If you contact us by email or telephone, the data you provide will be stored for the purpose of processing your request and for possible follow-up questions.',
          'The processing is based on Art. 6(1)(b) GDPR.',
          'Your data will be deleted as soon as it is no longer required for the purpose for which it was collected.',
        ],
      },
      {
        title: 'Hosting and Server Log Files',
        body: [
          'This website is hosted by an external service provider. As part of operating the website, information is automatically collected and stored in server log files.',
          'This includes in particular IP address, date and time of access, browser type and operating system.',
          'The processing is carried out to ensure the technical security and stability of the website based on Art. 6(1)(f) GDPR.',
        ],
      },
      {
        title: 'Your Rights',
        body: [
          'You have the right to access, rectification, erasure, restriction of processing, data portability and to object to the processing of your personal data.',
          'If you believe that the processing of your data violates data protection law, you can lodge a complaint with the competent supervisory authority.',
        ],
      },
      {
        title: 'Data Protection Contact',
        body: [
          'If you have any questions regarding data protection, please contact psychodrama@pichlhoefer.eu.',
        ],
      },
    ],
  },
  footer: {
    imprint: 'Imprint',
    privacy: 'Privacy',
    cookieNotice:
      'This website does not use cookies for analytics or tracking purposes.',
    kicker: 'Christine Pichlhöfer, MSc',
    description: 'Psychotherapy in Vienna.',
    contactLabel: 'Contact',
    legalLabel: 'Legal',
    developerLabel: 'Design & development',
  },
}
