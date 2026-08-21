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
        alignment: 'center'
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
        alignment: 'center'
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
        alignment: 'center'
      }
    ]
  },

  // Welcome Snapshot Area
  welcomeArea: {
    eyebrow: 'About Oriolus Scientific',
    title: 'Personalised Wellness, Thoughtfully Delivered',
    leadText: 'Oriolus Scientific is a Yoga & Naturopathy Research Center bringing Yoga Therapy, Naturopathy, Ayurveda and Acupuncture together within one integrated wellness approach.',
    image: '/images/resources/welcome.jpg',
    imageAlt: 'Oriolus Scientific Yoga and Naturopathy Research Center',
    mission: {
      title: 'Our Mission',
      desc: 'To make structured, responsible and personalised natural wellness accessible through integrated therapeutic care and lifestyle guidance.'
    },
    vision: {
      title: 'Our Vision',
      desc: 'To build a trusted center for integrative Yoga and Naturopathy practice, personalised wellness and meaningful long-term wellbeing.'
    },
    cta: {
      btnText: 'Discover Our Story',
      btnLink: '/about',
      adviceLabel: 'Need guidance?',
      advicePhone: '+91 XXXXX XXXXX'
    }
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
    title: 'Why Choose Oriolus Scientific?',
    items: [
      {
        id: 1,
        title: 'Individual-First Approach',
        desc: 'Every wellness journey begins by understanding your health goals, lifestyle and physical needs.',
        icon: 'flaticon-medical-1',
        isBottomBorder: true
      },
      {
        id: 2,
        title: 'Whole-Person Wellness',
        desc: 'Movement, nutrition, relaxation and lifestyle are considered together rather than in isolation.',
        icon: 'flaticon-medical-2',
        isBottomBorder: true
      },
      {
        id: 3,
        title: 'Guided Therapeutic Care',
        desc: 'Structured wellness programs are delivered with practitioner guidance and personalised attention.',
        icon: 'flaticon-people-1',
        isBottomBorder: true
      },
      {
        id: 4,
        title: 'Natural Therapies',
        desc: 'Traditional wellness practices are delivered with care, clarity and individual suitability in mind.',
        icon: 'flaticon-nature-1',
        isBottomBorder: false
      },
      {
        id: 5,
        title: 'Four Disciplines, One Center',
        desc: 'Yoga Therapy, Naturopathy, Ayurveda and Acupuncture come together in one integrated approach.',
        icon: 'flaticon-flower',
        isBottomBorder: false
      },
      {
        id: 6,
        title: 'Calm Healing Environment',
        desc: 'A thoughtfully designed wellness setting that encourages privacy, relaxation and restorative care.',
        icon: 'flaticon-relax',
        isBottomBorder: false
      }
    ]
  },

  // Structured Wellness Programs Section
  pricingPlans: {
    title: 'Structured Wellness Programs',
    bgImage: '/images/resources/pricing-bg.jpg',
    plans: [
      {
        id: 1,
        name: 'Obesity Reduction & Detox',
        price: '4–6',
        period: ' Weeks',
        features: [
          'Personalised wellness consultation',
          'Nutrition & lifestyle guidance',
          'Selected naturopathy therapies',
          'Yoga, Udwarthanam & Swedana'
        ],
        btnText: 'Explore Program',
        link: '/programs/obesity-detox'
      },
      {
        id: 2,
        name: 'Diabetes Wellness Program',
        price: '8',
        period: ' Weeks',
        features: [
          'Lifestyle & nutrition assessment',
          'Therapeutic Yoga practices',
          'Metabolic wellness support',
          'Progress & lifestyle reviews'
        ],
        btnText: 'Explore Program',
        link: '/programs/diabetes-reversal'
      },
      {
        id: 3,
        name: 'Spine & Joint Pain Care',
        price: '3–4',
        period: ' Weeks',
        features: [
          'Movement & posture assessment',
          'Pain Management Yoga',
          'Ayurvedic supportive therapies',
          'Acupuncture & mobility guidance'
        ],
        btnText: 'Explore Program',
        link: '/programs/pain-management'
      }
    ]
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

  // Testimonials
  // Replace these placeholders with genuine, approved patient testimonials before launch.
  testimonials: {
    title: 'Patient Experiences',
    bgImage: '/images/testimonial/testimonial-bg.jpg',
    items: [
      {
        id: 1,
        image: '/images/testimonial/1.png',
        title: 'A More Personal Wellness Experience',
        quote: 'Add an approved patient testimonial here describing the consultation experience, personalised care and overall wellness journey.',
        name: 'Verified Patient'
      },
      {
        id: 2,
        image: '/images/testimonial/2.png',
        title: 'Thoughtful Guidance & Care',
        quote: 'Add an approved patient testimonial here focused on the quality of guidance, therapeutic environment and practitioner support.',
        name: 'Verified Patient'
      },
      {
        id: 3,
        image: '/images/testimonial/3.png',
        title: 'Calm, Professional & Restorative',
        quote: 'Add an approved patient testimonial here describing the center atmosphere, therapy experience and overall sense of wellbeing.',
        name: 'Verified Patient'
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