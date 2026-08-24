/**
 * Oriolus Scientific - Homepage Content Store
 * Premium, concise, SEO-aware and layout-balanced content.
 */

export const homeContent = {
  // Hero Slider
  heroSlider: {
    slides: [
      {
        id: 1,
        image: '/images/slides/1.jpg',
        subtitle: 'Yoga & Naturopathy Research Center',
        title: 'Where Ancient Science Meets\nModern Medical Wellness',
        desc: 'Oriolus Scientific integrates Yoga Therapy, Naturopathy, Ayurveda and Acupuncture into personalised wellness programs designed around individual needs.',
        btnText1: 'Explore Therapies',
        btnLink1: '/therapies/yoga/therapeutic',
        btnText2: 'Book Consultation',
        btnLink2: '/contact',
        alignment: 'left'
      },
      {
        id: 2,
        image: '/images/slides/2.jpg',
        subtitle: 'Personalised Integrative Wellness',
        title: 'Traditional Healing.\nThoughtfully Personalised.',
        desc: 'Experience structured natural wellness through therapeutic movement, lifestyle care, Ayurvedic therapies and carefully guided integrative practices.',
        btnText1: 'Our Approach',
        btnLink1: '/about',
        btnText2: 'Meet Dr. Vijay',
        btnLink2: '/about/meet-dr-vijay',
        alignment: 'left'
      },
      {
        id: 3,
        image: '/images/slides/3.jpg',
        subtitle: 'Four Disciplines. One Wellness Journey.',
        title: 'Restore Balance.\nRebuild Wellbeing.',
        desc: 'From mobility and stress support to metabolic wellness and rejuvenation, our programs bring multiple natural disciplines together with personalised guidance.',
        btnText1: 'View Programs',
        btnLink1: '/programs/wellness-retreat',
        btnText2: 'Make Appointment',
        btnLink2: '/contact',
        alignment: 'left'
      }
    ]
  },

  // Welcome Snapshot Area
  // Welcome Snapshot Area
  welcomeArea: {
    eyebrow: 'About Oriolus Scientific',
    title: 'Personalised Wellness, Thoughtfully Delivered',
    leadText: 'Bringing traditional wellness knowledge together with structured, personalised care.',
    image: '/images/resources/welcome.jpg',
    imageAlt: 'Oriolus Scientific Yoga and Naturopathy Center',
    mission: {
      title: 'Our Mission',
      desc: 'To make responsible, personalised and structured natural wellness accessible through Yoga Therapy, Naturopathy, Ayurveda, Acupuncture and practical lifestyle guidance.'
    },
    vision: {
      title: 'Our Vision',
      desc: 'To build Oriolus Scientific into a trusted center for integrative wellness, therapeutic practice, education and meaningful long-term wellbeing.'
    },
    cta: {
      btnText: 'Explore Our Therapies',
      btnLink: '/procedures',
      adviceLabel: 'Need Guidance?',
      callBtnText: 'Speak With Our Team',
      callPhone: 'tel:+919845012345'
    }
  },

  // Lead Practitioner (Dr. Vijay) Section
  leadPractitioner: {
    eyebrow: 'LEAD PRACTITIONER',
    title: 'Guided by Experience.\nPersonalised for You.',
    doctorName: 'Dr. Vijay',
    doctorRole: 'Lead Practitioner — Personalised Integrative Wellness',
    bio: 'Dr. Vijay leads the therapeutic approach at Oriolus Scientific, bringing together Yoga Therapy, Naturopathy and integrative wellness practices with a strong focus on personalised care and individual wellbeing.',
    areasOfFocusTitle: 'AREAS OF FOCUS',
    focusAreas: [
      { id: 1, title: 'Therapeutic Yoga', icon: 'lotus' },
      { id: 2, title: 'Naturopathy', icon: 'leaf' },
      { id: 3, title: 'Pain Management', icon: 'spine' },
      { id: 4, title: 'Lifestyle Wellness', icon: 'yoga' }
    ],
    threeCheckpoints: [
      {
        title: 'Whole-Person Understanding',
        desc: 'Lifestyle, movement, comfort and wellness goals are considered together.'
      },
      {
        title: 'Personalised Therapy Planning',
        desc: 'Suitable therapies are selected according to individual needs.'
      },
      {
        title: 'Continued Wellness Guidance',
        desc: 'Progress and lifestyle practices can be reviewed over time.'
      }
    ],
    quote: 'Every individual is different. Understanding the individual before choosing the therapy.',
    image: '/images/team/1.jpg',
    imageAlt: 'Dr. Vijay - Lead Practitioner at Oriolus Scientific',
    btn1Text: 'Meet Dr. Vijay',
    btn1Link: '/about/meet-dr-vijay',
    btn2Text: 'Book a Consultation',
    btn2Link: '/contact'
  },

  // Clinical Trust & Accreditation Strip
  clinicalTrustStrip: {
    eyebrow: 'ORIOLUS SCIENTIFIC AT A GLANCE',
    title: 'Rooted in Nature. Guided by Personalised Care.',
    subtitle: 'Every wellness program at Oriolus Scientific integrates established traditional disciplines with structured, individualised support.',
    pillars: [
      {
        id: 1,
        badge: '4',
        subtitle: 'Integrated Disciplines',
        desc: 'Yoga Therapy, Naturopathy, Ayurveda & Acupuncture brought together in one center.',
        icon: 'mortar'
      },
      {
        id: 2,
        badge: '15+',
        subtitle: 'Therapeutic Services',
        desc: 'Focused natural wellness services tailored across four traditional healing disciplines.',
        icon: 'scroll'
      },
      {
        id: 3,
        badge: '4',
        subtitle: 'Structured Programs',
        desc: 'Personalised multidisciplinary pathways designed for focused lifestyle wellness goals.',
        icon: 'temple'
      },
      {
        id: 4,
        badge: '1',
        subtitle: 'Integrated Approach',
        desc: 'Individual needs, comfort, and lifestyle remain at the center of every wellness journey.',
        icon: 'waterleaf'
      }
    ]
  },

  // Procedures Overview List (4 Core Disciplines)
  proceduresList: {
    eyebrow: 'Integrated Wellness Disciplines',
    title: 'Explore Our Therapies',
    items: [
      {
        id: 1,
        title: 'Yoga Therapy',
        icon: 'flaticon-hands',
        image: '/images/procedures/1.png',
        link: '/therapies/yoga/therapeutic',
        desc: 'Personalised therapeutic movement, breathing and posture practices for mobility, alignment and balance.'
      },
      {
        id: 2,
        title: 'Naturopathy',
        icon: 'flaticon-medical',
        image: '/images/procedures/2.png',
        link: '/therapies/naturopathy/detoxification',
        desc: 'Natural wellness through hydrotherapy, therapeutic nutrition, detox support and lifestyle restoration.'
      },
      {
        id: 3,
        title: 'Ayurveda',
        icon: 'flaticon-people',
        image: '/images/procedures/3.png',
        link: '/therapies/ayurveda/panchakarma',
        desc: 'Classical Panchakarma, Abhyanga, Shirodhara and rejuvenative therapies personalised to individual needs.'
      },
      {
        id: 4,
        title: 'Acupuncture',
        icon: 'flaticon-relax',
        image: '/images/procedures/4.png',
        link: '/therapies/acupuncture/pain-management',
        desc: 'Targeted acupuncture protocols supporting musculoskeletal comfort, relaxation and integrative wellness.'
      }
    ]
  },

  // Quick Appointment Section
  quickAppointment: {
    title: 'Book Your Consultation',
    experienceBadge: {
      sinceText: 'Personalised care,',
      subText: 'built around your wellness journey.',
      years: '4',
      yearsLabel: 'Disciplines Integrated',
      description: 'Begin with a focused consultation to understand your needs and identify a suitable wellness pathway.'
    },
    serviceOptions: [
      'Select Therapy or Program',
      'Yoga Therapy Consultation',
      'Naturopathy & Detoxification',
      'Ayurveda & Panchakarma',
      'Acupuncture Consultation',
      'Diabetes Wellness Program',
      'Obesity Reduction Program',
      'Spine & Joint Pain Management',
      'Full-Body Wellness Retreat'
    ],
    infoCards: [
      {
        id: 1,
        title: 'Practitioner-Led Care',
        desc: 'Personalised guidance based on your individual needs.',
        icon: 'flaticon-medical-1'
      },
      {
        id: 2,
        title: 'Natural Approach',
        desc: 'Thoughtful, non-invasive wellness-focused therapies.',
        icon: 'flaticon-nature-1'
      },
      {
        id: 3,
        title: 'Personalised Plans',
        desc: 'Programs adapted to your goals, comfort and lifestyle.',
        icon: 'flaticon-flower'
      }
    ]
  },

  // Why Choose Us Section
  whyChooseUs: {
    title: 'What Makes Oriolus Different',
    items: [
      {
        id: 1,
        title: 'Personalised Wellness Plans',
        desc: 'Care shaped around individual lifestyle, comfort and wellness goals.',
        icon: 'flaticon-medical-1',
        isBottomBorder: true
      },
      {
        id: 2,
        title: 'Practitioner-Led Guidance',
        desc: 'Thoughtful guidance helps identify appropriate therapies and next steps.',
        icon: 'flaticon-medical-2',
        isBottomBorder: true
      },
      {
        id: 3,
        title: 'Whole-Person Approach',
        desc: 'Movement, nutrition, rest, stress and lifestyle are considered together.',
        icon: 'flaticon-people-1',
        isBottomBorder: true
      },
      {
        id: 4,
        title: 'Calm Wellness Environment',
        desc: 'A welcoming setting designed for privacy, comfort and restorative care.',
        icon: 'flaticon-nature-1',
        isBottomBorder: false
      },
      {
        id: 5,
        title: 'Four Disciplines, One Center',
        desc: 'Yoga Therapy, Naturopathy, Ayurveda and Acupuncture within one integrated approach.',
        icon: 'flaticon-flower',
        isBottomBorder: false
      },
      {
        id: 6,
        title: 'Lifestyle-Focused Wellness',
        desc: 'Practical guidance encourages healthier habits that can continue beyond individual sessions.',
        icon: 'flaticon-relax',
        isBottomBorder: false
      }
    ]
  },

  // Structured Wellness Programs Section
  structuredPrograms: {
    eyebrow: 'PERSONALISED WELLNESS PROGRAMS',
    title: 'Structured Programs for\nFocused Wellbeing',
    subtitle: 'Explore thoughtfully designed wellness programs combining suitable therapies, lifestyle guidance and personalised care around specific health and wellbeing goals.',
    cornerImage: '/images/ChatGPT Image Aug 22, 2026, 12_17_01 AM.png',
    programs: [
      {
        id: 1,
        number: '01',
        title: 'Obesity Reduction & Detox',
        duration: '4–6 Weeks',
        icon: 'obesity',
        image: '/images/ChatGPT Image Aug 22, 2026, 12_18_27 AM.png',
        desc: 'A structured wellness program combining nutrition guidance, Naturopathy, Yoga and selected Ayurvedic therapies to support healthier lifestyle habits.',
        highlights: [
          'Personalised wellness consultation',
          'Nutrition & lifestyle guidance',
          'Naturopathy & detox support',
          'Yoga & Ayurvedic therapies'
        ],
        btnText: 'Explore Program',
        btnLink: '/programs/obesity-detox',
        isSignature: false
      },
      {
        id: 2,
        number: '02',
        title: 'Diabetes Wellness Program',
        duration: '8 Weeks',
        icon: 'diabetes',
        image: '/images/ChatGPT Image Aug 22, 2026, 12_22_46 AM.png',
        desc: 'A personalised lifestyle-focused program integrating therapeutic movement, nutrition guidance and natural wellness practices to support metabolic wellbeing.',
        highlights: [
          'Lifestyle & nutrition assessment',
          'Therapeutic Yoga practices',
          'Metabolic wellness support',
          'Progress & lifestyle reviews'
        ],
        btnText: 'Explore Program',
        btnLink: '/programs/diabetes-reversal',
        isSignature: false
      },
      {
        id: 3,
        number: '03',
        title: 'Spine & Joint Pain Care',
        duration: '3–4 Weeks',
        icon: 'spine',
        image: '/images/ChatGPT Image Aug 22, 2026, 12_25_07 AM.png',
        desc: 'An integrative program combining movement assessment, Yoga Therapy, Ayurveda and Acupuncture to support mobility, comfort and everyday function.',
        highlights: [
          'Posture & mobility assessment',
          'Pain Management Yoga',
          'Supportive Ayurvedic therapies',
          'Acupuncture & mobility guidance'
        ],
        btnText: 'Explore Program',
        btnLink: '/programs/pain-management',
        isSignature: false
      },
      {
        id: 4,
        number: '04',
        title: 'Full-Body Wellness Retreat',
        duration: '7–14 Days',
        icon: 'retreat',
        image: '/images/ChatGPT Image Aug 22, 2026, 12_26_08 AM.png',
        desc: 'Our signature wellness experience brings all four disciplines together for personalised rejuvenation, deep rest and meaningful lifestyle renewal.',
        highlights: [
          'Personalised wellness planning',
          'Daily Yoga & relaxation',
          'Ayurveda & Naturopathy therapies',
          'Nutrition & lifestyle guidance'
        ],
        btnText: 'Explore Retreat',
        btnLink: '/programs/wellness-retreat',
        isSignature: true,
        signatureBadge: 'SIGNATURE PROGRAM'
      }
    ],
    footerTextLine1: 'Each program is personalised and guided by experienced practitioners.',
    footerTextLine2: 'Your wellness. Your journey. Our support.'
  },

  // Slogan Banner
  sloganBanner: {
    bgImage: '/images/resources/slogan-bg.jpg',
    title: 'Reconnect With Your Health. Restore Your Natural Balance.',
    line1: 'Discover personalised wellness through Yoga Therapy, Naturopathy, Ayurveda and Acupuncture.',
    line2: 'Where Ancient Science Meets Modern Medical Wellness.',
    btnText: 'Book Consultation',
    btnLink: '/contact'
  },

  // Wellness Journey Process Section
  wellnessJourney: {
    eyebrow: 'YOUR WELLNESS JOURNEY',
    title: 'A Personalised Path to Better Wellbeing',
    subtitle: 'Every journey at Oriolus Scientific begins with understanding you. From the first consultation to continued guidance, each step is thoughtfully shaped around your individual needs.',
    steps: [
      {
        stepNumber: '01',
        stepColor: '#12305C',
        icon: 'consultation',
        title: 'Consultation & Assessment',
        desc: 'We begin by understanding your health history, lifestyle, mobility, concerns and personal wellness goals.'
      },
      {
        stepNumber: '02',
        stepColor: '#0F8B8D',
        icon: 'lotus',
        title: 'Personalised Wellness Plan',
        desc: 'Suitable Yoga, Naturopathy, Ayurveda or Acupuncture therapies are selected around your individual needs.'
      },
      {
        stepNumber: '03',
        stepColor: '#12305C',
        icon: 'progress',
        title: 'Progress & Guidance',
        desc: 'Your wellness journey is reviewed over time with practical guidance to support sustainable everyday wellbeing.'
      }
    ],
    cta: {
      btnText: 'Begin Your Wellness Journey',
      btnLink: '/contact'
    }
  },

  // Testimonials (6 Authentic Patient Success Stories)
  testimonials: {
    title: 'Successful Stories',
    bgImage: '/images/testimonial/testimonial-bg.jpg',
    items: [
      {
        id: 1,
        image: '/images/testimonial/1.png',
        title: 'Remarkable Relief from Chronic Lumbar Pain',
        quote: 'After suffering from lower back stiffness and sciatica for over 4 years, Dr. Vijay’s customized Therapeutic Yoga and Acupuncture regimen restored my mobility within 6 weeks.',
        name: 'Priya S.',
        role: 'Therapeutic Yoga & Acupuncture',
        rating: 5
      },
      {
        id: 2,
        image: '/images/testimonial/2.png',
        title: 'HbA1c Reduced Naturally Without Drugs',
        quote: 'The clinical Naturopathy detox and personalized nutritional fasting stabilized my blood sugar levels and gave me my vitality back. Truly life-changing drugless care.',
        name: 'Rajesh K.',
        role: 'Clinical Naturopathy & Metabolic Wellness',
        rating: 5
      },
      {
        id: 3,
        image: '/images/testimonial/3.png',
        title: 'Calm, Restorative & Authentic Panchakarma',
        quote: 'The authentic Classical Panchakarma and Shirodhara therapies eliminated my chronic migraine attacks and mental fatigue. The clinic atmosphere is profoundly peaceful.',
        name: 'Ananya M.',
        role: 'Classical Ayurveda & Panchakarma',
        rating: 5
      },
      {
        id: 4,
        image: '/images/testimonial/1.png',
        title: 'Effective Danda Yoga for Neck Stiffness',
        quote: 'Hours of desk work caused severe neck and shoulder tension. Dr. Vijay’s Stick Yoga techniques corrected my spinal curvature and posture effortlessly.',
        name: 'Suresh N.',
        role: 'Stick Yoga / Danda Yoga',
        rating: 5
      },
      {
        id: 5,
        image: '/images/testimonial/2.png',
        title: 'Lost 9 Kgs & Eliminated Chronic Acidity',
        quote: 'The Colon Hydrotherapy and structured obesity reduction retreat completely cleansed my digestive system. I feel lighter, energetic, and completely rejuvenated.',
        name: 'Meera V.',
        role: 'Colon Hydrotherapy & Obesity Program',
        rating: 5
      },
      {
        id: 6,
        image: '/images/testimonial/3.png',
        title: 'Scientific, Evidence-Based Natural Healing',
        quote: 'As a medical professional, I was impressed by Dr. Vijay’s holistic diagnostics and clinical precision. My knee joint mobility has significantly improved without surgery.',
        name: 'Dr. Arvind R.',
        role: 'Spine & Joint Rehabilitation',
        rating: 5
      }
    ]
  },

  // Latest Blog & Wellness Insights
  latestBlog: {
    title: 'Wellness Insights & Resources',
    btnText: 'Explore All Articles',
    btnLink: '/blog',
    posts: [
      {
        id: 1,
        title: 'How Therapeutic Yoga Supports Better Posture & Mobility',
        image: '/images/blog/latest-blog-1.jpg',
        category: 'Yoga Therapy',
        date: 'Wellness Guide',
        comments: 'Expert Insight',
        desc: 'Understand how personalised movement, breathing and alignment practices can support everyday mobility.',
        link: '/blog/therapeutic-yoga-posture-mobility'
      },
      {
        id: 2,
        title: 'Building Better Metabolic Health Through Everyday Lifestyle',
        image: '/images/blog/latest-blog-2.jpg',
        category: 'Naturopathy',
        date: 'Lifestyle Wellness',
        comments: 'Health Education',
        desc: 'Explore the role of nutrition, movement, sleep and sustainable habits in supporting metabolic wellbeing.',
        link: '/blog/metabolic-health-lifestyle'
      },
      {
        id: 3,
        title: 'Understanding Panchakarma as a Classical Ayurvedic Practice',
        image: '/images/blog/latest-blog-3.jpg',
        category: 'Ayurveda',
        date: 'Ayurveda Guide',
        comments: 'Traditional Wellness',
        desc: 'A simple introduction to the preparation, therapeutic stages and restorative principles of Panchakarma.',
        link: '/blog/understanding-panchakarma'
      }
    ]
  }
};

export default homeContent;