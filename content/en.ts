import type { SiteContent } from '@/lib/types'

export const enContent: SiteContent = {
  locale: 'en',

  meta: {
    title: 'Christine Pichlhöfer',
    description:
      'Gender-sensitive psychotherapy, counselling, supervision and coaching in Vienna.',
  },

  nav: [
    { label: 'Home', href: '' },
    { label: 'Services', href: 'services' },
    { label: 'Approach', href: 'approach' },
    { label: 'Experience', href: 'experience' },
    { label: 'Publications', href: 'publications' },
    { label: 'Contact', href: 'contact' },
  ],

  home: {
    hero: {
      kicker: 'Psychotherapy in Vienna',
      title: 'Space for clarity, growth and new perspectives.',
      text:
        'Many people cope with difficult challenges and life crises on their own. However, there are phases in life when professional support can be helpful or necessary. In such times, I am here for you.',
      primaryCta: 'Request an appointment by email',
      secondaryCta: 'View services',
    },

    servicesPreview: {
      eyebrow: 'Services',
      title: 'Psychotherapy, counselling, supervision and coaching',
      intro:
        'A calm setting for personal, professional and social concerns.',
      items: [
        {
          title: 'Psychotherapy',
          text:
            'Support during challenging phases of life as well as with psychological and psychosomatic concerns.',
        },
        {
          title: 'Counselling',
          text:
            'Support with orientation, decision-making and personal concerns.',
        },
        {
          title: 'Supervision & Coaching',
          text:
            'A reflective space for professionals and people in responsible professional roles.',
        },
      ],
    },

    approachPreview: {
      title: 'Approach',
      text:
        'The focus is on meeting at eye level, a resource-oriented approach and the possibility of developing new perspectives and new ways of acting.',
      cta: 'More about the approach',
    },

    experiencePreview: {
      title: 'Experience',
      text:
        'Many years of experience in psychosocial work with people in a wide range of life situations – nationally and internationally.',
      cta: 'More about experience',
    },

    publicationsPreview: {
      title: 'Publications',
      text:
        'A selection of professional contributions, talks and publications.',
      cta: 'View all publications',
    },

    contactPreview: {
      title: 'Contact',
      text:
        'For appointments or questions, I look forward to hearing from you by email or phone.',
      cta: 'Get in touch',
    },
  },

  angebot: {
    eyebrow: 'Services',
    title:
      'Gender-sensitive psychotherapy, counselling, supervision and coaching',
    intro:
      'I offer gender-sensitive psychotherapy, counselling, supervision and coaching for a range of concerns and challenges, including the following.',
    items: [
      'Life crises',
      'Anxiety disorders / panic attacks',
      'Relationships with other people',
      'Burnout / depression',
      'Psychosomatic complaints',
      'Dependency / addiction',
      'Trauma-related disorders',
      'Challenges around growing up',
      'Difficulties at work',
      'Supervision, counselling and coaching',
      'Addiction prevention',
      'Motivational Interviewing',
    ],
    settingTitle: 'Setting',
    settingText: 'German, English',
    refundText:
      'Partial reimbursement through public health insurance may be possible.',
  },

  arbeitsweise: {
    eyebrow: 'Approach',
    title: 'Working together at eye level',
    intro:
      'The focus is on each person’s life situation, personal resources and the possibility of developing new ways of acting.',
    psychodramaQuote:
      '"Psychodrama is the method that explores the truth of the soul through action."',
    psychodramaAuthor: 'J. L. Moreno',
    psychodramaTitle: 'Psychodrama',
    psychodramaText:
      'My psychotherapeutic training is based on psychodrama, a therapeutic method recognised under Austrian psychotherapy law. Based on role theory, psychodrama was developed in the 1930s by the physician and philosopher Jakob Levy Moreno.',
    psychodramaDetails: [
      'Psychodrama sees the roots of emotional imbalance in the fact that, in certain situations, suitable strategies for action are missing or cannot be used appropriately.',
      'The aim in therapy is to use enactment, constellations, symbolic work and conversation to unlock creative potential and make thoughts and feelings tangible.',
      'Through engaging with old and new roles, perspectives can be broadened or changed and new solutions can emerge.',
    ],
    methodInfo:
      'Psychotherapy is a treatment method for healing or alleviating disturbances in emotional life, social relationships, behaviour or certain bodily functions. Therapeutic progress may include not only a reduction in symptoms, but also changes in experience, thinking and feeling, expressed in greater self-acceptance, joy in life and social competence.',
    externalLinkLabel:
      'Learn more about psychodrama on the website of the Austrian Psychodrama Section',
  },

  erfahrungen: {
    eyebrow: 'Experience',
    title:
      'Many years of experience in psychosocial support and psychotherapy',
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
    qualificationsTitle: 'Qualifications and teaching',
    qualifications: [
      'Psychotherapist',
      'Qualified social worker',
      'Teaching at the Psychodrama Section of ÖAGG',
      'Lecturer at Danube University Krems',
      'Speaker for Fachstelle NÖ and SDW Vienna',
    ],
  },

  publikationen: {
    eyebrow: 'Publications',
    title: 'Texts and contributions',
    intro:
      'A selection of publications, talks and professional contributions.',
    items: [],
  },

  kontakt: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    text:
      'For appointments or questions, I would be pleased to hear from you by email or phone.',
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

  footer: {
    imprint: 'Imprint',
    privacy: 'Privacy',
  },
}