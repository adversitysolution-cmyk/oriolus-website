/**
 * Oriolus Scientific - Frequently Asked Questions Content Store
 */

export const faqContent = {
  header: {
    title: 'Frequently Asked Questions',
    activeTitle: 'FAQ’s',
    subtitle: 'Find clear answers regarding our clinical consultation process, therapies, residential retreat admissions, and policies.'
  },

  categories: [
    { id: 'about-oriolus', title: 'About Oriolus Scientific' },
    { id: 'yoga-therapy', title: 'Yoga Therapy' },
    { id: 'naturopathy', title: 'Naturopathy & Detox' },
    { id: 'ayurveda', title: 'Classical Ayurveda' },
    { id: 'acupuncture', title: 'Acupuncture & Pain Relief' },
    { id: 'programs', title: 'Wellness Programs' }
  ],

  faqData: {
    'about-oriolus': [
      {
        q: 'When should I schedule my clinical consultation?',
        a: 'We recommend scheduling your appointment at least 3 to 7 days in advance to ensure availability with Dr. Vijay and our specialized medical faculty, particularly for comprehensive diagnostic audits and residential retreat packages.'
      },
      {
        q: 'What should I bring to my first appointment?',
        a: 'Please bring any recent medical investigation reports (blood panels, lipid profiles, HbA1c, MRI/X-ray scans) and a list of current medications. This enables our doctors to personalize your natural therapy protocol safely.'
      },
      {
        q: 'Are treatments covered by insurance?',
        a: 'Ayush / Naturopathy treatments may be eligible for reimbursement under specific corporate health insurance policies that include AYUSH coverage. We provide standard clinical receipts and diagnostic documentation.'
      }
    ],

    'yoga-therapy': [
      {
        q: 'Is Yoga Therapy suitable for beginners or individuals with restricted mobility?',
        a: 'Yes, absolutely. Therapeutic Yoga is customized specifically to your physical capability and medical condition. We utilize supportive props, chairs, belts, and wall ropes to ensure safe, strain-free practice.'
      },
      {
        q: 'How does Yoga Therapy differ from regular yoga classes?',
        a: 'Unlike general fitness yoga, Yoga Therapy is prescribed by a physician to target specific pathologies (e.g. disc herniation, hypertension, diabetes) using clinical biomechanics and therapeutic breath regulation.'
      }
    ],

    'naturopathy': [
      {
        q: 'What is Colon Hydrotherapy and is it safe?',
        a: 'Colon Hydrotherapy is a safe, hygienic clinical procedure using sterilized single-use tubing and temperature-regulated purified water to cleanse the large intestine under doctor supervision.'
      },
      {
        q: 'What does the Clinical Detoxification protocol entail?',
        a: 'Our detox combines therapeutic cold-pressed juices, alkalizing broths, hydrotherapy baths, and abdominal mud packs to stimulate natural liver and kidney eliminative channels.'
      }
    ],

    'ayurveda': [
      {
        q: 'What is the recommended duration for Classical Panchakarma?',
        a: 'A complete Panchakarma purification typically ranges between 7 to 21 days, comprising preparatory oleation (Purvakarma), primary cleansing (Pradhanakarma), and dietary restoration (Paschatkarma).'
      },
      {
        q: 'How does Shirodhara help with anxiety and insomnia?',
        a: 'The continuous, rhythmic pouring of warm herbal oil over the forehead stimulates the Ajna meridian, slowing brainwave activity from beta to alpha/theta states, which induces profound autonomic nervous relaxation.'
      }
    ],

    'acupuncture': [
      {
        q: 'Does acupuncture hurt?',
        a: 'No. We use ultra-fine, single-use, sterile Japanese and Korean needles that are as thin as a strand of hair. Most patients experience only a mild, soothing tingling or warm sensation (De-Qi).'
      },
      {
        q: 'How many sessions of acupuncture are needed for chronic pain?',
        a: 'Acute pain often improves in 2 to 4 sessions, while chronic conditions typically benefit from a structured course of 6 to 12 sessions alongside supporting Yoga Therapy and herbal treatments.'
      }
    ],

    'programs': [
      {
        q: 'Can I stay on campus during the wellness programs?',
        a: 'Yes, our Full-Body Wellness Retreat and multi-day packages include private residential accommodation, doctor-prescribed organic meals, daily therapies, and 24/7 nursing care at our serene Bengaluru campus.'
      }
    ]
  }
};

export default faqContent;
