import type { SiteContent } from '@/lib/types'

export const enContent: SiteContent = {
  locale: 'en',
  meta: {
    title: 'Christine Pichlhöfer',
    description:
      'Gender-sensitive psychotherapy, counselling, supervision and coaching in Vienna.',
  },
  site: {
    brandName: 'Christine Pichlhöfer',
    brandSubtitle: 'Psychotherapy · Psychodrama',
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
    copyright: '© Christine Pichlhöfer',
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

  "home": {
    "hero": {
      "kicker": "Psychotherapy in Vienna",
      "title": "Space for clarity, growth and new perspectives.",
      "displayTitle": {
        "before": "Psychotherapy with",
        "highlight": "professional depth",
        "after": "and personal presence."
      },
      "text": "Here you will find information about my therapeutic approach, professional focus areas, and background in psychotherapy, psychodrama, group dynamics and supervision.",
      "primaryCta": "Get in touch by email",
      "secondaryCta": "View approach",
      "infoItems": [
        "Psychodrama, group dynamics and supervision",
        "For colleagues, trainees and clients",
        "Therapy available in German and English"
      ],
      "imageAlt": "Practice room"
    },
    "midStage": {
      "eyebrow": "Professional focus",
      "title": "Psychotherapy, psychodrama, group dynamics and supervision in a distinct and lively form.",
      "highlights": [
        {
          "title": "Psychotherapy",
          "text": "A space for reflection, growth and professional guidance."
        },
        {
          "title": "Psychodrama",
          "text": "Experiential work with depth, movement and changing perspectives."
        },
        {
          "title": "Supervision",
          "text": "For colleagues, institutions and professional contexts."
        }
      ],
      "sideNote": "Therapy available in German and English.",
      "bottomLeft": "For clients, trainees, professional colleagues and institutions.",
      "bottomRight": "In Vienna · with personal presence and professional clarity."
    },
    "servicesPreview": {
      "eyebrow": "Services",
      "title": "Psychotherapy, counselling, supervision and coaching",
      "intro": "A calm setting for personal, professional and social concerns.",
      "items": [
        {
          "title": "Psychotherapy",
          "text": "Support during challenging phases of life as well as with psychological and psychosomatic concerns."
        },
        {
          "title": "Counselling",
          "text": "Support with orientation, decision-making and personal concerns."
        },
        {
          "title": "Supervision & Coaching",
          "text": "A reflective space for professionals and people in responsible professional roles."
        }
      ]
    },
    "approachPreview": {
      "title": "Approach",
      "text": "The focus is on meeting at eye level, a resource-oriented approach and the possibility of developing new perspectives and new ways of acting.",
      "cta": "More about the approach"
    },
    "experiencePreview": {
      "title": "Experience",
      "text": "Many years of experience in psychosocial work with people in a wide range of life situations – nationally and internationally.",
      "cta": "More about experience"
    },
    "publicationsPreview": {
      "title": "Publications",
      "text": "A selection of professional contributions, talks and publications.",
      "cta": "View all publications"
    },
    "contactPreview": {
      "title": "Contact",
      "text": "For appointments or questions, I look forward to hearing from you by email or phone.",
      "cta": "Get in touch"
    }
  },
  "angebot": {
    "eyebrow": "Services",
    "title": "Gender-sensitive psychotherapy, counselling, supervision and coaching",
    "heroTitle": "Space for clarification, relief and new possibilities for action.",
    "intro": "I offer gender-sensitive psychotherapy, counselling, supervision and coaching for a range of concerns and challenges, including the following.",
    "items": [
      {
        "id": "life-crises",
        "label": "Life crises"
      },
      {
        "id": "anxiety",
        "label": "Anxiety disorders / panic attacks"
      },
      {
        "id": "relationships",
        "label": "Relationships with other people"
      },
      {
        "id": "burnout-depression",
        "label": "Burnout / depression"
      },
      {
        "id": "psychosomatic",
        "label": "Psychosomatic complaints"
      },
      {
        "id": "addiction",
        "label": "Dependency / addiction"
      },
      {
        "id": "trauma",
        "label": "Trauma-related disorders"
      },
      {
        "id": "growing-up",
        "label": "Challenges around growing up"
      },
      {
        "id": "workplace",
        "label": "Difficulties at work"
      },
      {
        "id": "supervision-coaching",
        "label": "Supervision, counselling and coaching"
      },
      {
        "id": "prevention",
        "label": "Addiction prevention"
      },
      {
        "id": "motivational-interviewing",
        "label": "Motivational Interviewing"
      }
    ],
    "panels": [
      {
        "eyebrow": "Personal strain",
        "title": "When inner tension, exhaustion or crises become overwhelming.",
        "text": "Psychotherapy can help when symptoms, overload or difficult phases of life begin to narrow everyday life and new orientation is needed.",
        "itemIds": [
          "life-crises",
          "anxiety",
          "burnout-depression",
          "psychosomatic",
          "addiction",
          "trauma",
          "growing-up"
        ],
        "warm": true
      },
      {
        "eyebrow": "Relationships and work",
        "title": "When collaboration, relationships or role questions need room.",
        "text": "Counselling, supervision and coaching offer a clear setting to look at conflicts, dynamics and development opportunities in a differentiated way.",
        "itemIds": [
          "relationships",
          "workplace",
          "supervision-coaching",
          "prevention",
          "motivational-interviewing"
        ],
        "warm": false
      }
    ],
    "settingTitle": "Setting",
    "settingText": "German, English",
    "noteTitle": "Note",
    "refundText": "Partial reimbursement through public health insurance may be possible.",
    "closingText": "The focus is not only on individual topics, but on the respective life situation, personal resources and the question of what can become helpful, sustainable and understandable in the shared process."
  },
  "arbeitsweise": {
    "eyebrow": "Approach",
    "title": "Working together at eye level",
    "intro": "The focus is on each person’s life situation, personal resources and the possibility of developing new ways of acting.",
    "stats": [
      {
        "value": "60+",
        "label": "Countries and family roots present in the resonance space of this work"
      },
      {
        "value": "1",
        "label": "Attitude with room for dignity, encounter and development"
      },
      {
        "value": "100%",
        "label": "Human-centred, appreciative and non-polarising"
      }
    ],
    "imageAlt": "Abstract representation of diversity, encounter and connectedness",
    "imageKicker": "Psychodrama",
    "imageTitle": "Encounter in motion",
    "badges": [
      {
        "eyebrow": "Attitude",
        "text": "Encounter before judgement"
      },
      {
        "eyebrow": "Focus",
        "text": "Resonance, perspective, development"
      }
    ],
    "psychodramaQuote": "“Psychodrama is the method that explores the truth of the soul through action.”",
    "psychodramaAuthor": "J. L. Moreno",
    "psychodramaTitle": "Psychodrama",
    "psychodramaText": "My psychotherapeutic training is based on psychodrama, a therapeutic method recognised under Austrian psychotherapy law. Based on role theory, psychodrama was developed in the 1930s by the physician and philosopher Jakob Levy Moreno.",
    "psychodramaDetails": [
      "Psychodrama sees the roots of emotional imbalance in the fact that, in certain situations, suitable strategies for action are missing or cannot be used appropriately.",
      "The aim in therapy is to use enactment, constellations, symbolic work and conversation to unlock creative potential and make thoughts and feelings tangible.",
      "Through engaging with old and new roles, perspectives can be broadened or changed and new solutions can emerge."
    ],
    "methodInfo": "Psychotherapy is a treatment method for healing or alleviating disturbances in emotional life, social relationships, behaviour or certain bodily functions. Therapeutic progress may include not only a reduction in symptoms, but also changes in experience, thinking and feeling, expressed in greater self-acceptance, joy in life and social competence.",
    "externalLinkLabel": "Learn more about psychodrama on the website of the Austrian Psychodrama Section",
    "globe": {
      "eyebrow": "Resonance space",
      "title": "Connected with many parts of the world",
      "intro": "Biographies, family roots and personal life paths connected with many parts of the world and visible in the resonance space of my work.",
      "interactionHintTouch": "Tap a point to explore proximity and connections within the resonance space.",
      "interactionHintHover": "Move your cursor over a point to explore proximity and connections within the resonance space.",
      "activeFocusLabel": "In focus",
      "activeFocusText": "Each point stands for life stories, relationships and contexts that shape the therapeutic resonance space.",
      "closeButton": "Close focus",
      "capsules": [
        "Biographies",
        "Family histories",
        "Migration",
        "Multilingualism",
        "Relationship",
        "Resonance"
      ],
      "countryLabels": {
        "austria": "Austria",
        "norway": "Norway",
        "serbia": "Serbia",
        "italy": "Italy",
        "poland": "Poland",
        "philippines": "Philippines",
        "turkey": "Turkey",
        "france": "France",
        "syria": "Syria",
        "nigeria": "Nigeria",
        "canada": "Canada",
        "egypt": "Egypt",
        "colombia": "Colombia",
        "iraq": "Iraq",
        "spain": "Spain",
        "finland": "Finland",
        "dr-congo": "DR Congo",
        "bosnia": "Bosnia and Herzegovina",
        "mexico": "Mexico",
        "greece": "Greece",
        "ukraine": "Ukraine",
        "pakistan": "Pakistan",
        "belgium": "Belgium",
        "venezuela": "Venezuela",
        "sweden": "Sweden",
        "kenya": "Kenya",
        "slovakia": "Slovakia",
        "croatia": "Croatia",
        "china": "China",
        "ireland": "Ireland",
        "slovenia": "Slovenia",
        "afghanistan": "Afghanistan",
        "romania": "Romania",
        "estonia": "Estonia",
        "lebanon": "Lebanon",
        "portugal": "Portugal",
        "hungary": "Hungary",
        "dominican-republic": "Dominican Republic",
        "russia": "Russia",
        "netherlands": "Netherlands",
        "ghana": "Ghana",
        "bulgaria": "Bulgaria",
        "usa": "USA",
        "iran": "Iran",
        "luxembourg": "Luxembourg",
        "india": "India",
        "united-kingdom": "United Kingdom",
        "israel": "Israel",
        "vietnam": "Vietnam",
        "switzerland": "Switzerland",
        "cote-divoire": "Côte d’Ivoire",
        "argentina": "Argentina",
        "north-macedonia": "North Macedonia",
        "senegal": "Senegal",
        "germany": "Germany",
        "georgia": "Georgia",
        "palestine": "Palestine",
        "thailand": "Thailand",
        "tunisia": "Tunisia"
      }
    }
  },
  "erfahrungen": {
    "eyebrow": "Experience",
    "title": "Many years of experience in psychosocial support and psychotherapy",
    "intro": "I began providing professional psychosocial support in 1990. Since 2003, I have also been working as a psychotherapist in private practice in Vienna.",
    "items": [
      "Support for children, adolescents and their families facing serious difficulties, New York, USA",
      "Training in systemic family therapy, Children's Village, New York, USA",
      "Verein Wiener Jugendzentren, working with children and adolescents",
      "Advanced training in women-specific counselling, Centre for Applied Psychology and Women's Research, Vienna/Cologne",
      "Addiction work with people who use substances, are dependent or at risk of addiction, as well as with their relatives; many years in a leadership role",
      "Workplace counselling for employees of the EPA, Vienna",
      "Certified trainer in Motivational Interviewing, Centre for Motivation & Change (A, I, NL)",
      "Lectures, workshops and seminars nationally and internationally"
    ],
    "qualificationsTitle": "Qualifications and teaching",
    "qualifications": [
      "Psychotherapist",
      "Qualified social worker",
      "Teaching at the Psychodrama Section of ÖAGG",
      "Lecturer at Danube University Krems",
      "Speaker for Fachstelle NÖ and SDW Vienna"
    ]
  },
  "publikationen": {
    "eyebrow": "Publications",
    "title": "Selected publications and contributions",
    "intro": "A selection of publications on psychodrama, body work, trauma, gender roles, prevention and social participation. These contributions connect professional reflection, practical experience and a sensitive perspective on relationship, development and social reality.",
    "items": [
      {
        "featured": true,
        "title": "Body politics – an exercise in body relationship",
        "subtitle": "Journal of Psychodrama and Sociometry · 2023",
        "year": "2023",
        "href": "https://link.springer.com/epdf/10.1007/s11620-023-00721-z?sharing_token=vEQWvODRtKrDLnGWfcsWove4RwlQNchNByi7wbcMAY7_2VLMbbcxVEsDvFX8B5146HDaKlmaiTVnx7X0Q_Mo_ejJYL0H1Ovtp_Ko4hP3ZHnTuPl2qTmBJRb9gR04BGyMpHMMHY3MXpIZ_t5Ry2PKdMhEjh-Dvp3pkwb3kCIBfuo%3D",
        "summary": "This publication shows how an exercise focused on the relationship to one’s own body can open a sensitive path into body-related topics. It centres on perception, body awareness and psychodramatic work with girls and women in individual and group settings.",
        "tags": [
          "Body work",
          "Psychodrama",
          "Relationship",
          "Prevention"
        ],
        "ctaLabel": "Open publication"
      },
      {
        "title": "Virtual sociodrama: Building collective creative resilience in the liminality of Covid-19 pandemic",
        "subtitle": "Journal of Psychodrama and Sociometry · 2022",
        "year": "2022",
        "href": "https://link.springer.com/article/10.1007/s11620-022-00693-6",
        "summary": "This article explores how virtual sociodrama can strengthen collective creativity and resilience in times of social uncertainty. It focuses on transitional experiences during the pandemic and on processing social and emotional strain together.",
        "tags": [
          "Sociodrama",
          "Covid-19",
          "Resilience",
          "Group"
        ],
        "ctaLabel": "Open publication"
      },
      {
        "title": "Intercultural competence in working with traumatised people with refugee experience",
        "subtitle": "Journal of Psychodrama and Sociometry · 2021",
        "year": "2021",
        "href": "https://link.springer.com/epdf/10.1007/s11620-021-00627-8?sharing_token=OB0Vv6wyZ-36VZ1rMDJv_fe4RwlQNchNByi7wbcMAY7boqzoBWQCg9GGPERUnYcehh8aIEYfhoMnf4viB-qX_O4LYBj7YwJUeK_QrqJ1MtE02CXK0mJrqd7MFbJJUfLhi4yHTffQPume9g4Dyd-raWXM1VlhOk-pZ0JRPx2sC40%3D",
        "summary": "This contribution addresses the question of which intercultural competencies are needed in psychotherapeutic and psychosocial work with traumatised people who have refugee experience. It highlights sensitivity to life realities, contextual understanding and sustainable relationship building.",
        "tags": [
          "Trauma",
          "Refugee experience",
          "Interculturality",
          "Psychotherapy"
        ],
        "ctaLabel": "Open publication"
      },
      {
        "title": "When am I right? Prevention of eating disorders. When am I appropriate?",
        "subtitle": "Journal of Psychodrama and Sociometry · 2018",
        "year": "2018",
        "href": "https://link.springer.com/article/10.1007/s11620-018-0464-7",
        "summary": "This publication addresses the prevention of eating disorders at the intersection of self-image, body perception and social norms. It opens a reflective space around the question of when young people experience themselves as right, fitting or appropriate.",
        "tags": [
          "Eating disorders",
          "Prevention",
          "Youth",
          "Body image"
        ],
        "ctaLabel": "Open publication"
      },
      {
        "title": "Development of gender roles in adolescence",
        "subtitle": "Journal of Psychodrama and Sociometry · 2016",
        "year": "2016",
        "href": "https://link.springer.com/article/10.1007/s11620-016-0352-y?wt_mc=Internal.Event.1.SEM.ArticleAuthorAssignedToIssue",
        "summary": "This article focuses on the development of gender roles in adolescence and their relevance for identity, self-understanding and social orientation. It looks at developmental processes shaped by belonging, norms and individual unfolding.",
        "tags": [
          "Youth",
          "Gender roles",
          "Identity",
          "Development"
        ],
        "ctaLabel": "Open publication"
      },
      {
        "title": "Shouldn’t the world become better?",
        "subtitle": "Digital media, emancipatory potential and marginalisation · STIMME · 2019",
        "year": "2019",
        "href": "https://stimme.minderheiten.at/wordpress/wp-content/uploads/sites/3/2019/05/stimme98_web_s08-09.pdf",
        "summary": "This publication reflects on the ambivalence of digital media between emancipatory potential and new forms of marginalisation. It asks how social participation, visibility and mechanisms of exclusion interact in digital spaces.",
        "tags": [
          "Digital media",
          "Marginalisation",
          "Participation",
          "Society"
        ],
        "ctaLabel": "Open PDF"
      },
      {
        "title": "Dynamics in the relationship of co-dependent and person with dependent personality disorder",
        "subtitle": "Springer",
        "year": "",
        "href": "https://link.springer.com/chapter/10.1007/978-3-531-19779-1_8#page-1",
        "summary": "This contribution examines relationship dynamics between co-dependent individuals and people with dependent personality disorder. It focuses on recurring patterns of attachment, responsibility, neediness and boundaries in strained relational systems.",
        "tags": [
          "Relationship dynamics",
          "Co-dependency",
          "Personality disorder",
          "Psychodynamics"
        ],
        "ctaLabel": "Open publication"
      }
    ],
    "emptyText": "Publications will be added soon.",
    "featuredLabel": "Featured publication",
    "featuredInfo": "A curated entry point into one of the key thematic areas with direct access to the publication.",
    "openLabelDefault": "Open publication"
  },
  "kontakt": {
    "eyebrow": "Contact",
    "title": "Get in touch",
    "text": "For appointments or questions, I would be pleased to hear from you by email or phone.",
    "name": "DSAin Christine Pichlhöfer, MSc",
    "roles": [
      "Psychotherapist",
      "Qualified social worker",
      "Teaching at the Psychodrama Section of ÖAGG",
      "Lecturer at Danube University Krems",
      "Speaker for Fachstelle NÖ and SDW Vienna"
    ],
    "practiceLabel": "Practice",
    "practice": "Praxisgemeinschaft Marokkanergasse",
    "addressLabel": "Address",
    "address": [
      "Marokkanergasse 19/3",
      "1030 Vienna"
    ],
    "phoneLabel": "Phone",
    "phone": "0699 / 110 144 83",
    "emailLabel": "Email",
    "email": "psychodrama@pichlhoefer.eu"
  },
  "impressum": {
    "eyebrow": "Imprint",
    "title": "Imprint",
    "sections": [
      {
        "title": "Media owner and responsible for the content",
        "body": [
          "DSAin Christine Pichlhöfer, MSc",
          "Praxisgemeinschaft Marokkanergasse",
          "Marokkanergasse 19/3",
          "1030 Vienna",
          "Phone: 0699 / 110 144 83",
          "Email: psychodrama@pichlhoefer.eu"
        ]
      },
      {
        "title": "Professional title",
        "body": [
          "Psychotherapist, qualified social worker"
        ]
      },
      {
        "title": "Liability for content",
        "body": [
          "All content on this website has been created with great care. However, no liability is assumed for the accuracy, completeness or timeliness of the content."
        ]
      },
      {
        "title": "Liability for links",
        "body": [
          "This website contains links to external third-party websites over whose content there is no control. Therefore, no responsibility is assumed for such external content. The respective providers or operators of the linked pages are always responsible for their content."
        ]
      },
      {
        "title": "Copyright",
        "body": [
          "The content and works created by the site operator on this website are subject to copyright. Reproduction, editing, distribution and any kind of use beyond the limits of copyright law require the written consent of the respective author or rights holder."
        ]
      }
    ]
  },
  "privacy": {
    "eyebrow": "Privacy",
    "title": "Privacy Policy",
    "sections": [
      {
        "title": "Responsible party",
        "body": [
          "DSAin Christine Pichlhöfer, MSc is responsible for the processing of personal data on this website."
        ]
      },
      {
        "title": "Collection and processing of data",
        "body": [
          "Personal data is processed only to the extent necessary to provide this website and to handle enquiries made by email or phone."
        ]
      },
      {
        "title": "Contact requests",
        "body": [
          "If you contact us by email or phone, the information you provide will be stored for the purpose of processing your enquiry and in case of follow-up questions. This data will not be shared without your consent."
        ]
      },
      {
        "title": "Server log files",
        "body": [
          "When visiting this website, the hosting provider may automatically collect and store information in so-called server log files. This may include IP address, date and time of access, browser type and operating system."
        ]
      },
      {
        "title": "Your rights",
        "body": [
          "You generally have the right to access, rectification, erasure, restriction, data portability, withdrawal of consent and objection. If you believe that the processing of your data violates data protection law, you may lodge a complaint with the competent supervisory authority."
        ]
      },
      {
        "title": "Privacy contact",
        "body": [
          "If you have any questions regarding privacy, please contact psychodrama@pichlhoefer.eu."
        ]
      }
    ]
  },
"footer": {
  "imprint": "Imprint",
  "privacy": "Privacy",
  "kicker": "Christine Pichlhöfer",
  "description": "Psychotherapy in Vienna.",
  "contactLabel": "Contact",
  "legalLabel": "Legal",
  "developerLabel": "Design & development"
}
}