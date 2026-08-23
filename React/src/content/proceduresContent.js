/**
 * Oriolus Scientific - Procedures & Therapies Content Store
 * Exact Service Architecture Specification with Dedicated Detail Links
 */

// Main Procedures Overview
export const proceduresContent = {
  header: {
    title: 'Clinical Procedures & Therapies',
    activeTitle: 'Procedures',
    subtitle: 'Evidence-based natural medicine therapies combining Yoga Therapy, Naturopathy, Classical Ayurveda, and Acupuncture.'
  },

  // Overview of Core Clinical Categories
  items: [
    {
      id: 1,
      slug: 'yoga-therapy',
      title: 'Yoga Therapy',
      category: 'Yoga Therapy',
      icon: 'flaticon-lotus-flower',
      image: '/images/procedures/1.png',
      link: '/yoga-therapy',
      shortDesc: 'Condition-specific biomechanical alignment, Danda yoga, aerial yoga, and pain management.'
    },
    {
      id: 2,
      slug: 'naturopathy',
      title: 'Clinical Naturopathy',
      category: 'Naturopathy',
      icon: 'flaticon-medical',
      image: '/images/procedures/2.png',
      link: '/naturopathy',
      shortDesc: 'Colon Hydrotherapy, clinical detox, diabetes wellness support, and obesity reduction.'
    },
    {
      id: 3,
      slug: 'ayurveda',
      title: 'Classical Ayurveda',
      category: 'Ayurveda',
      icon: 'flaticon-stones-and-leaf-massage-spa-symbol',
      image: '/images/procedures/3.png',
      link: '/ayurveda',
      shortDesc: 'Authentic Panchakarma, Abhyanga, Shirodhara, Udwarthanam, and Herbal Swedana.'
    },
    {
      id: 4,
      slug: 'acupuncture',
      title: 'Acupuncture & Meridian Therapy',
      category: 'Acupuncture',
      icon: 'flaticon-relax',
      image: '/images/procedures/4.png',
      link: '/acupuncture',
      shortDesc: 'Precision meridian neuro-stimulation for pain management and chronic condition relief.'
    },
    {
      id: 5,
      slug: 'structured-wellness-programs',
      title: 'Structured Wellness Programs',
      category: 'Clinical Programs',
      icon: 'flaticon-flower',
      image: '/images/ChatGPT Image Aug 22, 2026, 12_18_27 AM.png',
      link: '/structured-wellness-programs',
      shortDesc: '4 Structured Clinical Programs: Obesity Detox, Diabetes Wellness, Spine/Joint Care, & Full-Body Retreat.'
    }
  ]
};

// 1. Yoga Therapy — 4 Services
export const yogaTherapyPageContent = {
  header: {
    title: 'Yoga Therapy',
    activeTitle: 'Yoga Therapy',
    subtitle: 'Individualized clinical movement, biomechanical realignment, restorative pranayama, and therapeutic asanas.'
  },
  items: [
    {
      id: 1,
      title: 'Therapeutic Yoga',
      category: 'Yoga Therapy',
      icon: 'flaticon-lotus-flower',
      image: '/images/procedures/1.png',
      link: '/services/therapeutic-yoga',
      shortDesc: 'Condition-specific movement, breathing, and postural realignment designed around individual health goals.'
    },
    {
      id: 2,
      title: 'Stick Yoga / Danda Yoga',
      category: 'Yoga Therapy',
      icon: 'flaticon-hands',
      image: '/images/procedures/2.png',
      link: '/services/stick-yoga',
      shortDesc: 'Ancient Yogic stick prop methodology to correct spinal curvature, posture, and deep shoulder stiffness.'
    },
    {
      id: 3,
      title: 'Aerial Yoga',
      category: 'Yoga Therapy',
      icon: 'flaticon-nature',
      image: '/images/procedures/3.png',
      link: '/services/aerial-yoga',
      shortDesc: 'Suspended silk hammock therapy for zero-compression spinal traction, decompression, and core flexibility.'
    },
    {
      id: 4,
      title: 'Pain Management Yoga',
      category: 'Yoga Therapy',
      icon: 'flaticon-relax',
      image: '/images/procedures/4.png',
      link: '/services/pain-management-yoga',
      shortDesc: 'Gentle, non-invasive therapeutic asanas engineered to alleviate chronic musculoskeletal and joint pain.'
    }
  ]
};

// 2. Naturopathy — 4 Services
export const naturopathyPageContent = {
  header: {
    title: 'Naturopathy',
    activeTitle: 'Naturopathy',
    subtitle: 'Lifestyle-focused natural drugless therapies, gut cleansing, and metabolic detoxification.'
  },
  items: [
    {
      id: 1,
      title: 'Colon Hydrotherapy',
      category: 'Naturopathy',
      icon: 'flaticon-medical',
      image: '/images/procedures/2.png',
      link: '/services/colon-hydrotherapy',
      shortDesc: 'Safe, closed-system filtered water infusion to thoroughly cleanse the colon and enhance gut motility.'
    },
    {
      id: 2,
      title: 'Clinical Detoxification',
      category: 'Naturopathy',
      icon: 'flaticon-nature',
      image: '/images/procedures/1.png',
      link: '/services/clinical-detoxification',
      shortDesc: 'Hydro-thermal therapies, mineral mud packs, and supervised metabolic cleansing protocols.'
    },
    {
      id: 3,
      title: 'Diabetes Wellness Support',
      category: 'Naturopathy',
      icon: 'flaticon-flower',
      image: '/images/procedures/3.png',
      link: '/services/diabetes-wellness-support',
      shortDesc: 'Targeted lifestyle interventions, living raw nutrition, and insulin-sensitizing clinical protocols.'
    },
    {
      id: 4,
      title: 'Obesity Reduction & Lifestyle Wellness',
      category: 'Naturopathy',
      icon: 'flaticon-herbal-spa-treatment-leaves',
      image: '/images/procedures/4.png',
      link: '/services/obesity-reduction',
      shortDesc: 'Structured metabolic acceleration, active detox baths, and sustainable dietary habit transformation.'
    }
  ]
};

// 3. Ayurveda — 5 Services
export const ayurvedaPageContent = {
  header: {
    title: 'Ayurveda',
    activeTitle: 'Ayurveda',
    subtitle: 'Classical Ayurvedic treatments utilizing authentic herbal oils and purification protocols for doshic balance.'
  },
  items: [
    {
      id: 1,
      title: 'Panchakarma',
      category: 'Ayurveda',
      icon: 'flaticon-lotus-flower',
      image: '/images/procedures/1.png',
      link: '/services/panchakarma',
      shortDesc: 'Five-fold authentic classical bio-purification and cellular detoxification protocol.'
    },
    {
      id: 2,
      title: 'Abhyanga',
      category: 'Ayurveda',
      icon: 'flaticon-stones-and-leaf-massage-spa-symbol',
      image: '/images/procedures/3.png',
      link: '/services/abhyanga',
      shortDesc: 'Full-body synchronized therapeutic massage with warm dosha-specific medicated herbal tailams.'
    },
    {
      id: 3,
      title: 'Shirodhara',
      category: 'Ayurveda',
      icon: 'flaticon-flower',
      image: '/images/procedures/2.png',
      link: '/services/shirodhara',
      shortDesc: 'Rhythmic, continuous stream of warm medicated herbal oil over the third-eye chakra for deep calm.'
    },
    {
      id: 4,
      title: 'Udwarthanam',
      category: 'Ayurveda',
      icon: 'flaticon-hands',
      image: '/images/procedures/4.png',
      link: '/services/udwarthanam',
      shortDesc: 'Deep therapeutic dry herbal powder massage to break down subcutaneous fat and stimulate lymphatic drainage.'
    },
    {
      id: 5,
      title: 'Swedana',
      category: 'Ayurveda',
      icon: 'flaticon-light',
      image: '/images/procedures/1.png',
      link: '/services/swedana',
      shortDesc: 'Medicinal herbal steam box therapy to open micro-channels (Srotas) and expel deep cellular toxins.'
    }
  ]
};

// 4. Acupuncture — 2 Services
export const acupuncturePageContent = {
  header: {
    title: 'Acupuncture',
    activeTitle: 'Acupuncture',
    subtitle: 'Precision meridian neuro-stimulation and non-invasive endorphin pathway pain regulation.'
  },
  items: [
    {
      id: 1,
      title: 'Acupuncture for Pain Management',
      category: 'Acupuncture',
      icon: 'flaticon-relax',
      image: '/images/procedures/4.png',
      link: '/services/acupuncture-pain-management',
      shortDesc: 'Precision needle insertion into motor and meridian points for immediate relief from acute and chronic pain.'
    },
    {
      id: 2,
      title: 'Acupuncture for Chronic Conditions',
      category: 'Acupuncture',
      icon: 'flaticon-light',
      image: '/images/procedures/1.png',
      link: '/services/acupuncture-chronic-conditions',
      shortDesc: 'Comprehensive neuro-endocrine meridian therapy for neurological, digestive, and psychosomatic disorders.'
    }
  ]
};

// 5. Structured Wellness Programs — 4 Programs
export const structuredWellnessProgramsPageContent = {
  header: {
    title: 'Structured Wellness Programs',
    activeTitle: 'Wellness Programs',
    subtitle: 'Comprehensive multidisciplinary clinical programs designed for sustainable lifestyle disease reversal.'
  },
  items: [
    {
      id: 1,
      title: 'Obesity Reduction & Detox',
      category: 'Metabolic Care',
      icon: 'flaticon-medical',
      image: '/images/procedures/1.png',
      link: '/services/obesity-reduction-detox',
      shortDesc: 'Targeted metabolic reset, Colon Hydrotherapy, customized dietetics, and therapeutic weight reduction.'
    },
    {
      id: 2,
      title: 'Diabetes Wellness Program',
      category: 'Endocrine Care',
      icon: 'flaticon-flower',
      image: '/images/procedures/2.png',
      link: '/services/diabetes-wellness',
      shortDesc: 'Structured lifestyle medicine, pancreatic-stimulating yoga, herbal detox, and glycemic regulation.'
    },
    {
      id: 3,
      title: 'Spine & Joint Pain Management',
      category: 'Orthopedic Care',
      icon: 'flaticon-hands',
      image: '/images/procedures/3.png',
      link: '/services/spine-joint-pain',
      shortDesc: 'Integrated acupuncture trigger point therapy, Kati Vasti, and gentle spinal decompression movement.'
    },
    {
      id: 4,
      title: 'Full-Body Wellness Retreat',
      category: 'Signature Residential',
      icon: 'flaticon-lotus-flower',
      image: '/images/procedures/4.png',
      link: '/services/full-body-retreat',
      shortDesc: 'Immersive residential rejuvenation combining daily Panchakarma, Yoga Therapy, and profound metabolic renewal.'
    }
  ]
};

export default proceduresContent;
