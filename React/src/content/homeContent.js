/**
 * Oriolus Scientific - Homepage Content Store
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
        desc: 'Oriolus Scientific brings together Therapeutic Yoga, Naturopathy, Ayurveda and Acupuncture through personalised wellness protocols designed around each individual.',
        btnText1: 'Explore Therapies',
        btnLink1: '/procedures',
        btnText2: 'Book Consultation',
        btnLink2: '/appointment',
        alignment: 'left'
      },
      {
        id: 2,
        image: '/images/slides/2.jpg',
        subtitle: 'A Division of Funicle Health Care and Wellness Pvt. Ltd.',
        title: 'Evidence-Based Drugless\nClinical Healing Protocols',
        desc: 'Transformative natural medicine therapies for diabetes remission, metabolic detox, and pain management under expert physician supervision.',
        btnText1: 'About Center',
        btnLink1: '/about',
        btnText2: 'Contact OPD',
        btnLink2: '/contact',
        alignment: 'center'
      },
      {
        id: 3,
        image: '/images/slides/3.jpg',
        subtitle: 'Oriolus Scientific Clinical Sanctuary',
        title: 'Restoring Natural\nPhysiological Equilibrium',
        desc: 'Experience 26+ years of clinical mastery in authentic Yogic Sciences and Naturopathic therapies at our serene Bengaluru campus.',
        btnText1: 'Our Procedures',
        btnLink1: '/procedures',
        btnText2: 'Make Appointment',
        btnLink2: '/appointment',
        alignment: 'right'
      }
    ]
  },

  // Welcome Snapshot Area
  welcomeArea: {
    eyebrow: 'Institutional Heritage',
    title: 'Welcome to Oriolus Scientific',
    leadText: 'Oriolus Scientific is a premier Yoga & Naturopathy Research Center. A division of Funicle Health Care and Wellness Pvt. Ltd., dedicated to personalized, drugless clinical healing.',
    image: '/images/resources/welcome.jpg',
    imageAlt: 'Welcome to Oriolus Scientific',
    mission: {
      title: 'Our Mission',
      desc: 'To provide scientifically validated, drugless, holistic healthcare that addresses root causes and restores natural physiological balance.'
    },
    vision: {
      title: 'Our Vision',
      desc: 'To be globally recognized as a center of clinical excellence in Yoga, Naturopathy, Ayurveda, and Acupuncture research.'
    },
    cta: {
      btnText: 'Read More',
      btnLink: '/about',
      adviceLabel: 'Need advice?',
      advicePhone: '+91 98450 12345'
    }
  },

  // Procedures Overview List (4 Core Disciplines)
  proceduresList: {
    eyebrow: 'Core Medical Disciplines',
    title: 'Our Procedures',
    items: [
      {
        id: 1,
        title: 'Therapeutic Yoga',
        icon: 'flaticon-hands',
        image: '/images/procedures/1.png',
        link: '/massage-therapy',
        desc: 'Condition-specific biomechanical alignment, restorative asanas, and clinical breathwork.'
      },
      {
        id: 2,
        title: 'Clinical Naturopathy',
        icon: 'flaticon-medical',
        image: '/images/procedures/2.png',
        link: '/facial-treatments',
        desc: 'Colon Hydrotherapy, raw living nutrition, and hydro-thermal metabolic detox.'
      },
      {
        id: 3,
        title: 'Classical Ayurveda',
        icon: 'flaticon-people',
        image: '/images/procedures/3.png',
        link: '/pedicure-menicure',
        desc: 'Panchakarma biocleansing, warm medicated Abhyanga, and authentic Shirodhara.'
      },
      {
        id: 4,
        title: 'Acupuncture & Pain Relief',
        icon: 'flaticon-relax',
        image: '/images/procedures/4.png',
        link: '/salt-oil-bath',
        desc: 'Precision meridian neuro-stimulation and non-invasive endorphin pain modulation.'
      }
    ]
  },

  // Quick Appointment Section
  quickAppointment: {
    title: 'Make an Appointment',
    experienceBadge: {
      sinceText: 'Since 1998,',
      subText: 'we provide holistic clinical care.',
      years: '26',
      yearsLabel: 'Years of Clinical Excellence',
      description: 'Comprehensive physician consultation integrating all four natural healing disciplines.'
    },
    serviceOptions: [
      'Select Clinical Discipline',
      'Yoga Therapy Consultation',
      'Naturopathy & Detoxification',
      'Classical Ayurveda / Panchakarma',
      'Clinical Acupuncture',
      'Diabetes Wellness Program',
      'Obesity Reduction Program',
      'Spine & Joint Pain Management',
      'Full-Body Wellness Retreat'
    ],
    infoCards: [
      {
        id: 1,
        title: 'Medical Faculty',
        desc: 'Direct consultation with Dr. Vijay and licensed doctors.',
        icon: 'flaticon-medical-1'
      },
      {
        id: 2,
        title: 'Safe & Drugless',
        desc: 'Non-pharmacological therapies respecting bodily harmony.',
        icon: 'flaticon-nature-1'
      },
      {
        id: 3,
        title: 'Personalized Care',
        desc: 'Customized protocols based on in-depth diagnostics.',
        icon: 'flaticon-flower'
      }
    ]
  },

  // Why Choose Us Section
  whyChooseUs: {
    title: 'Why Choosing Us?',
    items: [
      {
        id: 1,
        title: 'Mind & Autonomic Balance',
        desc: 'Downregulates sympathetic nervous stress and restores parasympathetic cellular healing.',
        icon: 'flaticon-medical-1',
        isBottomBorder: true
      },
      {
        id: 2,
        title: 'Holistic Health & Vitality',
        desc: 'Addresses the root causes of metabolic and musculoskeletal disorders without chemical drugs.',
        icon: 'flaticon-medical-2',
        isBottomBorder: true
      },
      {
        id: 3,
        title: 'Practitioner Guidance',
        desc: '26+ years of clinical excellence under Chief Medical Officer Dr. Vijay and expert faculty.',
        icon: 'flaticon-people-1',
        isBottomBorder: true
      },
      {
        id: 4,
        title: '100% Herbal & Natural',
        desc: 'Classical medicated botanical oils, pure therapeutic waters, and organic clinical nutrition.',
        icon: 'flaticon-nature-1',
        isBottomBorder: false
      },
      {
        id: 5,
        title: 'Four Disciplines in One',
        desc: 'Seamless integration of Yoga, Naturopathy, Ayurveda, and Acupuncture under one roof.',
        icon: 'flaticon-flower',
        isBottomBorder: false
      },
      {
        id: 6,
        title: 'Serene Botanical Campus',
        desc: 'A calming clinical sanctuary in Bengaluru designed to nurture holistic recovery.',
        icon: 'flaticon-relax',
        isBottomBorder: false
      }
    ]
  },

  // Pricing & Structured Packages Section
  pricingPlans: {
    title: 'Clinical Wellness Packages',
    bgImage: '/images/resources/pricing-bg.jpg',
    plans: [
      {
        id: 1,
        name: 'Obesity Reduction & Detox',
        price: '$49',
        period: '/Day',
        features: [
          'Doctor Naturopathy consultation',
          'Therapeutic raw nutrition & juices',
          'Colon Hydrotherapy & Mud packs',
          'Udwarthanam herbal dry massage'
        ],
        btnText: 'View Package',
        link: '/appointment'
      },
      {
        id: 2,
        name: 'Diabetes Wellness Program',
        price: '$79',
        period: '/Day',
        features: [
          'Continuous glycemic monitoring',
          'Pancreatic mud & hydro packs',
          'Metabolic Medical Yoga Asanas',
          'Targeted clinical acupuncture'
        ],
        btnText: 'View Package',
        link: '/appointment'
      },
      {
        id: 3,
        name: 'Spine & Joint Pain Care',
        price: '$99',
        period: '/Day',
        features: [
          'Orthopedic alignment assessment',
          'Therapeutic Abhyanga & Swedana',
          'Neuro-stimulation acupuncture',
          'Prop-supported spinal yoga'
        ],
        btnText: 'View Package',
        link: '/appointment'
      }
    ]
  },

  // Slogan Banner
  sloganBanner: {
    bgImage: '/images/resources/slogan-bg.jpg',
    title: 'Treat Yourself for Rejuvenating Your Body & Soul',
    line1: 'Oriolus Scientific brings together classical natural medicine and modern clinical excellence for lifelong wellness.',
    line2: 'Where Ancient Science Meets Modern Medical Wellness.',
    btnText: 'Make an Appointment',
    btnLink: '/appointment'
  },

  // Testimonials
  testimonials: {
    title: 'Patient Experiences',
    bgImage: '/images/testimonial/testimonial-bg.jpg',
    items: [
      {
        id: 1,
        image: '/images/testimonial/1.png',
        title: 'Oriolus Scientific is outstanding!',
        quote: 'Great clinical experience and a wonderful transformation for our wellness. Dr. Vijay and the team provided thorough naturopathic care.',
        name: 'Findlay Davis'
      },
      {
        id: 2,
        image: '/images/testimonial/2.png',
        title: 'Always gentle and restorative.',
        quote: 'I was greeted at the clinical reception with warmth and professionalism. The Yoga Therapy and Hydrotherapy protocols brought immediate relief.',
        name: 'Linforde Iris'
      },
      {
        id: 3,
        image: '/images/testimonial/3.png',
        title: 'Serene and transformative campus',
        quote: 'Oriolus Scientific is fantastic. From entering the center, the calming atmosphere and authentic therapies immediately restore peace of mind.',
        name: 'Marsh Harnel'
      }
    ]
  },

  // Latest Blog & Research Publications
  latestBlog: {
    title: 'Latest From Blog & Research',
    btnText: 'Read More Articles',
    btnLink: '/blog-default',
    posts: [
      {
        id: 1,
        title: 'Therapeutic Yoga for Chronic Work Stress & Autonomic Balance',
        image: '/images/blog/latest-blog-1.jpg',
        category: 'Yoga Therapy',
        date: 'August 15, 2026',
        comments: '12 Comments',
        desc: 'How targeted asanas, pranayama, and vagal nerve activation restore parasympathetic equilibrium.',
        link: '/blog-single'
      },
      {
        id: 2,
        title: 'Reversing Insulin Resistance Through Naturopathic Nutrition',
        image: '/images/blog/latest-blog-2.jpg',
        category: 'Naturopathy',
        date: 'July 28, 2026',
        comments: '18 Comments',
        desc: 'Clinical observations on visceral lipid clearance and beta-cell resting protocols.',
        link: '/blog-single'
      },
      {
        id: 3,
        title: 'Classical Panchakarma: Cellular Biocleansing & Longevity',
        image: '/images/blog/latest-blog-3.jpg',
        category: 'Ayurveda',
        date: 'July 10, 2026',
        comments: '24 Comments',
        desc: 'Scientific insights into deep tissue oleation, doshic balance, and immune rejuvenation.',
        link: '/blog-single'
      }
    ]
  }
};

export default homeContent;
