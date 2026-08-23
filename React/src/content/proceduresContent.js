/**
 * Oriolus Scientific - Procedures & Therapies Content Store
 */

export const proceduresContent = {
  header: {
    title: 'Clinical Procedures & Therapies',
    activeTitle: 'Procedures',
    subtitle: 'Evidence-based natural medicine therapies combining Yoga Therapy, Naturopathy, Classical Ayurveda, and Acupuncture.'
  },

  // 6 Main Procedures
  items: [
    {
      id: 1,
      slug: 'massage-therapy',
      title: 'Therapeutic Yoga & Medical Bodywork',
      category: 'Yoga Therapy',
      icon: 'flaticon-hands',
      image: '/images/procedures/1.png',
      link: '/massage-therapy',
      shortDesc: 'Condition-specific biomechanical alignment, restorative asanas, and clinical breathwork.',
      tagline: 'Autonomic Balancing & Non-Invasive Musculoskeletal Healing',
      overview: 'Therapeutic Yoga at Oriolus Scientific is an individualized clinical practice designed to address specific chronic health disorders, musculoskeletal dysfunctions, and psychosomatic imbalances.',
      price: '$49',
      duration: '60 Minutes',
      benefits: [
        'Relieves chronic musculoskeletal tension and spinal stiffness',
        'Normalizes sympathetic-parasympathetic autonomic nervous balance',
        'Enhances respiratory vital capacity and cellular oxygenation',
        'Improves joint range of motion and core stability'
      ]
    },
    {
      id: 2,
      slug: 'facial-treatments',
      title: 'Clinical Naturopathy & Hydrotherapy',
      category: 'Naturopathy',
      icon: 'flaticon-medical',
      image: '/images/procedures/2.png',
      link: '/facial-treatments',
      shortDesc: 'Colon Hydrotherapy, living raw nutrition, and hydro-thermal metabolic detox.',
      tagline: 'Gut Microbiome Reset & Cellular Detoxification',
      overview: 'Clinical Naturopathy integrates hydro-thermal therapies, living nutrition, and gentle eliminative protocols to accelerate the body’s innate detoxification systems.',
      price: '$65',
      duration: '75 Minutes',
      benefits: [
        'Thoroughly cleanses the large intestine and enhances gut motility',
        'Alleviates metabolic sluggishness, chronic fatigue, and brain fog',
        'Restores liver enzyme equilibrium and supports renal filtration',
        'Promotes radiant skin health and natural weight normalization'
      ]
    },
    {
      id: 3,
      slug: 'pedicure-menicure',
      title: 'Classical Ayurveda & Abhyanga',
      category: 'Ayurveda',
      icon: 'flaticon-people',
      image: '/images/procedures/3.png',
      link: '/pedicure-menicure',
      shortDesc: 'Panchakarma biocleansing, warm medicated Abhyanga, and authentic Shirodhara.',
      tagline: 'Deep Cellular Rejuvenation & Doshic Equilibrium',
      overview: 'Classical Ayurveda at Oriolus Scientific utilizes warm medicated herbal tailams and authentic purification protocols to pacify aggravated Vata, Pitta, and Kapha.',
      price: '$75',
      duration: '90 Minutes',
      benefits: [
        'Deeply pacifies aggravated doshas and calms the nervous system',
        'Nourishes joint cartilage and relieves chronic arthritis stiffness',
        'Improves peripheral microcirculation and cellular waste elimination',
        'Induces restorative sleep and relieves psychological burnout'
      ]
    },
    {
      id: 4,
      slug: 'salt-oil-bath',
      title: 'Acupuncture & Meridian Therapy',
      category: 'Acupuncture',
      icon: 'flaticon-relax',
      image: '/images/procedures/4.png',
      link: '/salt-oil-bath',
      shortDesc: 'Precision meridian neuro-stimulation and non-invasive endorphin pain modulation.',
      tagline: 'Targeted Neuro-Endocrine & Pain Pathway Regulation',
      overview: 'Acupuncture for Pain Management utilizes ultra-fine, single-use sterile needles inserted into specific meridian points to trigger the release of endogenous endorphins and downregulate pain signaling.',
      price: '$55',
      duration: '45 Minutes',
      benefits: [
        'Triggers immediate release of natural pain-relieving biochemicals',
        'Deactivates hyperirritable myofascial trigger points',
        'Improves microcirculation to ischemic and inflamed tissues',
        'Provides safe, non-addictive relief for acute and chronic pain'
      ]
    },
    {
      id: 5,
      slug: 'perfect-makeup',
      title: 'Herbal Swedana & Mud Therapy',
      category: 'Naturopathy & Ayurveda',
      icon: 'flaticon-light',
      image: '/images/procedures/1.png',
      link: '/perfect-makeup',
      shortDesc: 'Botanical steam chamber therapy and mineral mud packs for deep tissue drainage.',
      tagline: 'Thermal Detoxification & Joint De-Stiffening',
      overview: 'Herbal Swedana utilizes medicinal steam infused with Dashamoola and Nirgundi decoctions combined with abdominal and spinal mineral mud packs to liquefy toxins and restore mobility.',
      price: '$45',
      duration: '50 Minutes',
      benefits: [
        'Expels deep tissue impurities and toxins through perspiration',
        'Softens and lubricates rigid joints, relieving chronic arthritis',
        'Improves skin microcirculation and imparts a clear complexion',
        'Promotes whole-body lightness and deep physical relaxation'
      ]
    },
    {
      id: 6,
      slug: 'hair-treatments',
      title: 'Authentic Shirodhara Stream',
      category: 'Ayurveda',
      icon: 'flaticon-flower',
      image: '/images/procedures/2.png',
      link: '/hair-treatments',
      shortDesc: 'Continuous warm medicated herbal oil stream over the forehead for deep mental calm.',
      tagline: 'Neuro-Tranquilization & Alpha-Brainwave Induction',
      overview: 'Authentic Shirodhara involves pouring a continuous, gentle stream of warm medicated herbal oil over the forehead from an oscillating copper vessel to calm the central nervous system.',
      price: '$85',
      duration: '60 Minutes',
      benefits: [
        'Induces profound mental relaxation and downregulates stress hormones',
        'Treats chronic insomnia, disturbed sleep, and racing thoughts',
        'Alleviates tension headaches, migraines, and mental exhaustion',
        'Enhances cognitive clarity, memory retention, and emotional balance'
      ]
    }
  ]
};

// 1. Yoga Therapy Page Content
export const yogaTherapyPageContent = {
  header: {
    title: 'Yoga Therapy',
    activeTitle: 'Yoga Therapy',
    subtitle: 'Individualized clinical movement, biomechanical realignment, restorative pranayama, and therapeutic asanas.'
  },
  items: [
    {
      id: 1,
      title: 'Spinal Alignment & Lumbar Care',
      category: 'Yoga Therapy',
      icon: 'flaticon-lotus-flower',
      image: '/images/procedures/1.png',
      link: '/massage-therapy',
      shortDesc: 'Precision spinal decompression, pelvic stabilization asanas, and core strengthening.'
    },
    {
      id: 2,
      title: 'Clinical Pranayama & Vagus Nerve Balance',
      category: 'Yoga Therapy',
      icon: 'flaticon-flower',
      image: '/images/procedures/2.png',
      link: '/massage-therapy',
      shortDesc: 'Targeted breath control exercises to activate the parasympathetic healing state.'
    },
    {
      id: 3,
      title: 'Therapeutic Yoga Nidra for Burnout',
      category: 'Yoga Therapy',
      icon: 'flaticon-relax',
      image: '/images/procedures/3.png',
      link: '/massage-therapy',
      shortDesc: 'Guided systematic deep relaxation inducing delta/theta restorative brainwave frequencies.'
    },
    {
      id: 4,
      title: 'Joint Mobility & Arthritis Gentle Asanas',
      category: 'Yoga Therapy',
      icon: 'flaticon-hands',
      image: '/images/procedures/4.png',
      link: '/massage-therapy',
      shortDesc: 'Non-weight-bearing fluid movements to increase synovial fluid circulation.'
    }
  ]
};

// 2. Naturopathy Page Content
export const naturopathyPageContent = {
  header: {
    title: 'Clinical Naturopathy',
    activeTitle: 'Naturopathy',
    subtitle: 'Drugless eliminative therapies, Colon Hydrotherapy, Mud Therapy, and Hydro-Thermal Metabolic Detox.'
  },
  items: [
    {
      id: 1,
      title: 'Colon Hydrotherapy & Gut Cleanse',
      category: 'Naturopathy',
      icon: 'flaticon-medical',
      image: '/images/procedures/2.png',
      link: '/facial-treatments',
      shortDesc: 'Gentle, closed-system filtered water infusion to cleanse the large intestine.'
    },
    {
      id: 2,
      title: 'Full-Body Mineral Mud Pack',
      category: 'Naturopathy',
      icon: 'flaticon-nature',
      image: '/images/procedures/1.png',
      link: '/perfect-makeup',
      shortDesc: 'Mineral-rich unpolluted clay applied to draw out toxins and reduce local inflammation.'
    },
    {
      id: 3,
      title: 'Hydro-Thermal Contrast Baths',
      category: 'Naturopathy',
      icon: 'flaticon-relax',
      image: '/images/procedures/4.png',
      link: '/salt-oil-bath',
      shortDesc: 'Alternating hot and cold immersion to stimulate circulation and metabolic fire.'
    },
    {
      id: 4,
      title: 'Living Raw Nutrition & Fasting Care',
      category: 'Naturopathy',
      icon: 'flaticon-herbal-spa-treatment-leaves',
      image: '/images/procedures/3.png',
      link: '/facial-treatments',
      shortDesc: 'Supervised elimination diet, alkaline green juices, and cellular metabolic fasting.'
    }
  ]
};

// 3. Ayurveda Page Content
export const ayurvedaPageContent = {
  header: {
    title: 'Classical Ayurveda',
    activeTitle: 'Ayurveda',
    subtitle: 'Authentic Panchakarma biocleansing, warm medicated Abhyanga, and continuous Shirodhara stream.'
  },
  items: [
    {
      id: 1,
      title: 'Authentic Medicated Abhyanga',
      category: 'Ayurveda',
      icon: 'flaticon-stones-and-leaf-massage-spa-symbol',
      image: '/images/procedures/3.png',
      link: '/pedicure-menicure',
      shortDesc: 'Full-body synchronized massage with warm dosha-specific herbal oils.'
    },
    {
      id: 2,
      title: 'Continuous Shirodhara Stream',
      category: 'Ayurveda',
      icon: 'flaticon-flower',
      image: '/images/procedures/2.png',
      link: '/hair-treatments',
      shortDesc: 'Rhythmic stream of medicated herbal oil on the forehead for profound calm.'
    },
    {
      id: 3,
      title: 'Herbal Swedana Steam Chamber',
      category: 'Ayurveda',
      icon: 'flaticon-light',
      image: '/images/procedures/1.png',
      link: '/perfect-makeup',
      shortDesc: 'Medicinal herbal steam box therapy to open bodily channels and release toxins.'
    },
    {
      id: 4,
      title: 'Kati Vasti Spine & Disc Care',
      category: 'Ayurveda',
      icon: 'flaticon-lotus-flower',
      image: '/images/procedures/4.png',
      link: '/pedicure-menicure',
      shortDesc: 'Warm medicated herbal oil retained in an herbal dough dam over the lumbar spine.'
    }
  ]
};

// 4. Acupuncture Page Content
export const acupuncturePageContent = {
  header: {
    title: 'Acupuncture & Meridian Therapy',
    activeTitle: 'Acupuncture',
    subtitle: 'Precision meridian neuro-stimulation, myofascial trigger point release, and endorphin pain modulation.'
  },
  items: [
    {
      id: 1,
      title: 'Clinical Pain Management Acupuncture',
      category: 'Acupuncture',
      icon: 'flaticon-relax',
      image: '/images/procedures/4.png',
      link: '/salt-oil-bath',
      shortDesc: 'Targeted insertion into motor and meridian points for immediate non-invasive pain relief.'
    },
    {
      id: 2,
      title: 'Electro-Acupuncture for Nerve Care',
      category: 'Acupuncture',
      icon: 'flaticon-light',
      image: '/images/procedures/1.png',
      link: '/salt-oil-bath',
      shortDesc: 'Gentle micro-current pulsed through needles to accelerate nerve regeneration.'
    },
    {
      id: 3,
      title: 'Cupping & Myofascial Decompression',
      category: 'Acupuncture',
      icon: 'flaticon-hands',
      image: '/images/procedures/2.png',
      link: '/salt-oil-bath',
      shortDesc: 'Negative pressure suction cups to release stubborn fascial adhesions and increase blood flow.'
    },
    {
      id: 4,
      title: 'Auricular Ear Acupuncture for Stress & Metabolism',
      category: 'Acupuncture',
      icon: 'flaticon-medical',
      image: '/images/procedures/3.png',
      link: '/salt-oil-bath',
      shortDesc: 'Ear reflexology points to regulate appetite, reduce anxiety, and balance neurotransmitters.'
    }
  ]
};

// 5. Structured Wellness Programs Page Content
export const structuredWellnessProgramsPageContent = {
  header: {
    title: 'Structured Wellness Programs',
    activeTitle: 'Wellness Programs',
    subtitle: 'Comprehensive multidisciplinary clinical programs designed for sustainable lifestyle disease reversal.'
  },
  items: [
    {
      id: 1,
      title: 'Obesity Reduction & Detox Program',
      category: 'Metabolic Care',
      icon: 'flaticon-medical',
      image: '/images/ChatGPT Image Aug 22, 2026, 12_18_27 AM.png',
      link: '/appointment',
      shortDesc: 'Gut cleansing, metabolic reset, specialized hydrotherapy, and personalized nutritional guidance.'
    },
    {
      id: 2,
      title: 'Diabetes Wellness Program',
      category: 'Endocrine Care',
      icon: 'flaticon-flower',
      image: '/images/ChatGPT Image Aug 22, 2026, 12_22_46 AM.png',
      link: '/appointment',
      shortDesc: 'Insulin-sensitizing yoga asanas, herbal detox, and low-glycemic dietary protocols.'
    },
    {
      id: 3,
      title: 'Spine & Joint Pain Care Program',
      category: 'Orthopedic Care',
      icon: 'flaticon-hands',
      image: '/images/ChatGPT Image Aug 22, 2026, 12_25_07 AM.png',
      link: '/appointment',
      shortDesc: 'Acupuncture trigger point therapy, Kati Vasti, and gentle spinal decompression movement.'
    },
    {
      id: 4,
      title: 'Full-Body Wellness Retreat (Signature Program)',
      category: 'Signature Residential',
      icon: 'flaticon-lotus-flower',
      image: '/images/ChatGPT Image Aug 22, 2026, 12_26_08 AM.png',
      link: '/appointment',
      shortDesc: 'Residential immersive rejuvenation combining daily Panchakarma, Yoga, and deep metabolic renewal.'
    }
  ]
};

export default proceduresContent;
