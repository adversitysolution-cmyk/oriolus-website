/**
 * Oriolus Scientific - Comprehensive Service Details Content Store
 * Covers all 19 Services & Programs across the 5 Disciplines
 */

export const servicesDetailData = {
  // ─── YOGA THERAPY (4 Services) ───────────────────────────
  'therapeutic-yoga': {
    slug: 'therapeutic-yoga',
    title: 'Therapeutic Yoga',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',
    tagline: 'Personalised Movement, Biomechanical Realignment & Autonomic Healing',
    image: '/images/procedures/1.png',
    overview: 'Therapeutic Yoga at Oriolus Scientific is an individualized, clinical practice designed to address specific chronic health disorders, musculoskeletal dysfunctions, and psychosomatic imbalances. Unlike general fitness yoga, every posture (asana), breath regulation (pranayama), and neuromuscular release technique is tailored following an in-depth clinical assessment by Dr. Vijay.',
    subText: 'Our clinical approach focuses on correcting postural asymmetry, restoring healthy joint range of motion, decompressing the spinal column, and systematically downregulating sympathetic nervous fight-or-flight triggers.',
    benefits: [
      'Relieves chronic cervical, thoracic, and lumbar spinal compression',
      'Stimulates the vagus nerve and normalizes autonomic nervous balance',
      'Enhances vital lung capacity and cellular oxygen delivery',
      'Strengthens core stabilizer muscles and improves posture'
    ],
    packages: [
      { name: 'Initial Assessment & Protocol Design (60 Min)', price: '$60' },
      { name: 'Single Therapeutic Session (45 Min)', price: '$45' },
      { name: '10-Session Alignment Package', price: '$380' },
      { name: 'Comprehensive 1-Month Rehabilitation Plan', price: '$550' }
    ]
  },

  'stick-yoga': {
    slug: 'stick-yoga',
    title: 'Stick Yoga / Danda Yoga',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',
    tagline: 'Ancient Yogic Prop Methodology for Deep Postural & Spinal Correction',
    image: '/images/procedures/2.png',
    overview: 'Danda Yoga (Stick Yoga) is an authentic traditional yogic system utilizing a handcrafted wooden staff as a precision biomechanical lever. The stick acts as an external spine, guiding the practitioner into exact anatomical alignment without straining compensatory muscle groups.',
    subText: 'This specialized discipline opens the chest, decompresses the upper thoracic cage, releases stubborn scapular adhesions, and rectifies rounded shoulders caused by prolonged desk posture.',
    benefits: [
      'Corrects forward head posture and upper crossed syndrome',
      'Provides deep myofascial stretch to chest, shoulders, and lats',
      'Prevents rotational spinal imbalances and scoliosis progression',
      'Deepens ribcage expansion and diaphragmatic breathing'
    ],
    packages: [
      { name: 'Introductory Alignment Session (45 Min)', price: '$45' },
      { name: 'Standard Danda Therapy Session (60 Min)', price: '$55' },
      { name: '6-Week Posture Rectification Course', price: '$290' }
    ]
  },

  'aerial-yoga': {
    slug: 'aerial-yoga',
    title: 'Aerial Yoga Therapy',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',
    tagline: 'Zero-Compression Spinal Inversion & Core Decompression Therapy',
    image: '/images/procedures/3.png',
    overview: 'Aerial Yoga Therapy utilizes soft, high-tensile silk hammocks suspended from the ceiling to support the body in partial or complete suspension. By working in harmony with gravity, it allows the spine to achieve zero-compression traction.',
    subText: 'Suspension therapy enables deep, pain-free spinal decompression, relieves pinched sciatic nerves, and promotes venous blood drainage from the lower extremities toward vital internal organs.',
    benefits: [
      'Delivers gentle, zero-gravity intervertebral disc decompression',
      'Relieves sciatica, piriformis syndrome, and chronic lumbar fatigue',
      'Enhances joint mobility without bearing heavy compressive body weight',
      'Boosts lymphatic drainage and cerebral microcirculation'
    ],
    packages: [
      { name: 'Single Aerial Session (50 Min)', price: '$50' },
      { name: '5-Session Decompression Series', price: '$220' },
      { name: '10-Session Core & Spinal Recovery Package', price: '$400' }
    ]
  },

  'pain-management-yoga': {
    slug: 'pain-management-yoga',
    title: 'Pain Management Yoga',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',
    tagline: 'Gentle, Non-Invasive Musculoskeletal & Joint Pain Rehabilitation',
    image: '/images/procedures/4.png',
    overview: 'Pain Management Yoga is a specialized clinical program designed specifically for individuals suffering from acute or chronic pain conditions such as arthritis, fibromyalgia, spondylosis, and slip disc. The movements are gentle, restorative, and non-jarring.',
    subText: 'Every routine is coordinated with conscious breath control to reduce systemic inflammation markers, break the chronic pain-spasm-pain neurological loop, and rebuild functional confidence.',
    benefits: [
      'Breaks neuromuscular pain-guarding spasms',
      'Nourishes joint cartilage with increased synovial fluid circulation',
      'Reduces dependence on pharmaceutical analgesics and NSAIDs',
      'Improves sleep quality disrupted by chronic nocturnal discomfort'
    ],
    packages: [
      { name: 'Individual Pain Care Session (45 Min)', price: '$50' },
      { name: '8-Session Pain Management Protocol', price: '$350' },
      { name: 'Monthly Intensive Joint Restoration Program', price: '$480' }
    ]
  },

  // ─── NATUROPATHY (4 Services) ─────────────────────────────
  'colon-hydrotherapy': {
    slug: 'colon-hydrotherapy',
    title: 'Colon Hydrotherapy',
    category: 'Naturopathy',
    parentLink: '/naturopathy',
    tagline: 'Gentle, Closed-System Hydro-Thermal Large Intestine Cleansing',
    image: '/images/procedures/2.png',
    overview: 'Colon Hydrotherapy at Oriolus Scientific is a medically supervised, closed-system therapy using ultra-purified, temperature-controlled water to gently flush accumulated metabolic waste, stagnant fecal matter, and cellular toxins from the large intestine.',
    subText: 'Administered in a pristine clinical environment with disposable sterile speculums, this drugless detox procedure improves peristalsis, clears lymphatic congestion, and resets the gut microbiome ecosystem.',
    benefits: [
      'Relieves severe chronic constipation, gas, and abdominal bloating',
      'Eliminates stagnant waste plaques and toxic putrefaction',
      'Enhances intestinal nutrient absorption and metabolic efficiency',
      'Improves complexion, energy levels, and mental clarity'
    ],
    packages: [
      { name: 'Single Colon Hydrotherapy Session (45 Min)', price: '$75' },
      { name: '3-Session Complete Cleanse Package', price: '$200' },
      { name: '5-Session Deep Detoxification Protocol', price: '$320' }
    ]
  },

  'clinical-detoxification': {
    slug: 'clinical-detoxification',
    title: 'Clinical Detoxification',
    category: 'Naturopathy',
    parentLink: '/naturopathy',
    tagline: 'Comprehensive Hydro-Thermal & Mineral Eliminative Therapies',
    image: '/images/procedures/1.png',
    overview: 'Clinical Detoxification harnesses the healing powers of the five natural elements (Pancha Mahabhutas) to support the body’s innate excretory organs: the liver, kidneys, skin, colon, and lungs.',
    subText: 'Our multidisciplinary detox protocol combines full-body mineral mud applications, hydro-thermal contrast baths, hepatic compresses, and herbal teas to eliminate heavy metabolic burdens.',
    benefits: [
      'Accelerates liver phase I and phase II metabolic detoxification',
      'Draws out cutaneous impurities and balances sebum secretion',
      'Stimulates peripheral microcirculation and renal filtration',
      'Restores systemic cellular energy and clears brain fog'
    ],
    packages: [
      { name: 'Express Detox Day (Hydrotherapy + Mud Bath)', price: '$90' },
      { name: '3-Day Intensive Detox Protocol', price: '$250' },
      { name: '7-Day Complete Cellular Cleanse', price: '$550' }
    ]
  },

  'diabetes-wellness-support': {
    slug: 'diabetes-wellness-support',
    title: 'Diabetes Wellness Support',
    category: 'Naturopathy',
    parentLink: '/naturopathy',
    tagline: 'Evidence-Based Lifestyle Medicine & Pancreatic Metabolic Reset',
    image: '/images/procedures/3.png',
    overview: 'Our Diabetes Wellness Support program is designed to address the root causes of insulin resistance and metabolic syndrome. By combining living alkaline nutrition, pancreatic-stimulating naturopathy hydro-treatments, and customized movement, we guide individuals toward sustainable glycemic regulation.',
    subText: 'Patients receive daily continuous glucose monitoring analysis, therapeutic abdominal packs, and customized herbal teas that support healthy glucose uptake at the cellular level.',
    benefits: [
      'Improves insulin receptor sensitivity and reduces fasting blood sugar',
      'Promotes visceral fat reduction and liver decongestion',
      'Protects micro-vascular capillaries against diabetic neuropathy',
      'Educates patients on sustainable whole-food, low-glycemic eating'
    ],
    packages: [
      { name: 'Metabolic Assessment & 1-Week Protocol', price: '$120' },
      { name: '1-Month Reversal Support Program', price: '$390' },
      { name: '3-Month Comprehensive Diabetes Management', price: '$950' }
    ]
  },

  'obesity-reduction': {
    slug: 'obesity-reduction',
    title: 'Obesity Reduction & Lifestyle Wellness',
    category: 'Naturopathy',
    parentLink: '/naturopathy',
    tagline: 'Drugless Metabolic Re-Ignition & Sustainable Fat Loss',
    image: '/images/procedures/4.png',
    overview: 'Obesity Reduction at Oriolus Scientific is not a quick-fix diet, but a medically structured metabolic overhaul. We integrate active hydrotherapy baths, full-body herbal mud wraps, thermogenic physical exercise, and circadian fasting protocols to reignite basal metabolic rate.',
    subText: 'Our protocols optimize hormone signaling (leptin, ghrelin, insulin), reduce chronic low-grade systemic inflammation, and instill mindful dietary habits for permanent wellness.',
    benefits: [
      'Promotes healthy, sustainable loss of stubborn visceral adipose tissue',
      'Eliminates water retention and reduces systemic inflammation',
      'Normalizes appetite signaling and curb emotional sugar cravings',
      'Improves cardiovascular endurance and joint load tolerance'
    ],
    packages: [
      { name: '2-Week Metabolic Jumpstart', price: '$280' },
      { name: '1-Month Comprehensive Weight Management', price: '$520' },
      { name: '3-Month Transformational Lifestyle Package', price: '$1,200' }
    ]
  },

  // ─── AYURVEDA (5 Services) ───────────────────────────────
  'panchakarma': {
    slug: 'panchakarma',
    title: 'Panchakarma Detoxification',
    category: 'Ayurveda',
    parentLink: '/ayurveda',
    tagline: 'Authentic 5-Fold Classical Bio-Purification & Cellular Rejuvenation',
    image: '/images/procedures/1.png',
    overview: 'Panchakarma is the pinnacle of Ayurvedic medicine—a profound, authentic 5-step detoxification process designed to uproot deep-seated metabolic toxins (Ama) and pacify aggravated Vata, Pitta, and Kapha doshas from the cellular level.',
    subText: 'Under the guidance of experienced Ayurvedic physicians, treatments include Snehana (oleation), Swedana (sudation), Vamana/Virechana (therapeutic cleansing), Basti (medicated enemas), and Nasya (nasal administration).',
    benefits: [
      'Eradicates accumulated environmental and metabolic toxins (Ama)',
      'Restores the biological equilibrium of Tridoshas and Agni (digestive fire)',
      'Reverses chronic physiological fatigue and strengthens immunity (Ojas)',
      'Promotes cellular longevity and deep mental peace'
    ],
    packages: [
      { name: '3-Day Mini Panchakarma Reset', price: '$290' },
      { name: '7-Day Classical Panchakarma Protocol', price: '$650' },
      { name: '14-Day Complete Rejuvenation Retreat', price: '$1,250' }
    ]
  },

  'abhyanga': {
    slug: 'abhyanga',
    title: 'Medicated Abhyanga Massage',
    category: 'Ayurveda',
    parentLink: '/ayurveda',
    tagline: 'Full-Body Synchronized Herbal Oil Oleation & Nerve Rejuvenation',
    image: '/images/procedures/3.png',
    overview: 'Abhyanga is an authentic Ayurvedic full-body therapeutic massage performed with warm, herb-infused classical oils chosen specifically according to your unique constitutional Prakriti and current imbalance (Vikriti).',
    subText: 'Rhythmic, synchronized strokes along energy pathways nourish the deeper tissues (Dhatus), lubricate the joints, soften stiff muscles, and ground the nervous system.',
    benefits: [
      'Pacifies Vata dosha, calming anxiety, insomnia, and nervous exhaustion',
      'Nourishes joint cartilage and alleviates chronic stiffness and aches',
      'Improves peripheral microcirculation and cellular waste excretion',
      'Enhances skin tone, softness, and natural luster'
    ],
    packages: [
      { name: '60 Min Classical Abhyanga', price: '$70' },
      { name: '90 Min Deluxe Abhyanga + Herbal Steam', price: '$95' },
      { name: '7-Session Therapeutic Healing Series', price: '$450' }
    ]
  },

  'shirodhara': {
    slug: 'shirodhara',
    title: 'Authentic Shirodhara Stream',
    category: 'Ayurveda',
    parentLink: '/ayurveda',
    tagline: 'Continuous Warm Herbal Oil Stream for Alpha-Brainwave & Mental Calm',
    image: '/images/procedures/2.png',
    overview: 'Shirodhara is one of Ayurveda’s most sublime and celebrated therapies. It involves pouring a continuous, gentle stream of warm medicated herbal oil (Tailam), herbal buttermilk (Takra), or decoction (Kwath) over the forehead (Ajna chakra) from a suspended copper vessel.',
    subText: 'The rhythmic flow induces a deeply meditative state, tranquilizing the nervous system, harmonizing circadian rhythms, and dissolving psychological stress.',
    benefits: [
      'Induces profound mental tranquilization and downregulates cortisol',
      'Alleviates chronic insomnia, racing thoughts, and mental fatigue',
      'Soothes tension headaches, migraines, and cervical tension',
      'Enhances cognitive focus, memory retention, and emotional balance'
    ],
    packages: [
      { name: '45 Min Shirodhara Session', price: '$85' },
      { name: '60 Min Abhyanga + Shirodhara Combination', price: '$130' },
      { name: '5-Day Sleep & Stress Restoration Course', price: '$380' }
    ]
  },

  'udwarthanam': {
    slug: 'udwarthanam',
    title: 'Udwarthanam Herbal Powder Massage',
    category: 'Ayurveda',
    parentLink: '/ayurveda',
    tagline: 'Deep Therapeutic Dry Herbal Scrub for Cellulite Breakdown & Lymphatic Drainage',
    image: '/images/procedures/4.png',
    overview: 'Udwarthanam is a dynamic, invigorating Ayurvedic massage performed using warm, dry herbal powders (Choornams) rubbed vigorously over the body in upward strokes opposing the direction of hair growth.',
    subText: 'This powerful therapy stimulates subcutaneous fat metabolism, breaks down cellulite plaques, strengthens muscular tone, and promotes robust lymphatic drainage.',
    benefits: [
      'Breaks down stubborn subcutaneous fat and tones body contours',
      'Exfoliates dead skin cells, leaving the skin radiant and soft',
      'Stimulates sluggish lymphatic circulation and eliminates water retention',
      'Pacifies Kapha dosha and elevates sluggish metabolic rate'
    ],
    packages: [
      { name: '60 Min Udwarthanam Treatment', price: '$75' },
      { name: '90 Min Udwarthanam + Swedana Steam Therapy', price: '$105' },
      { name: '7-Session Weight & Cellulite Reduction Package', price: '$490' }
    ]
  },

  'swedana': {
    slug: 'swedana',
    title: 'Herbal Swedana Therapy',
    category: 'Ayurveda',
    parentLink: '/ayurveda',
    tagline: 'Medicinal Herbal Steam Chamber to Open Channels & Liquefy Toxins',
    image: '/images/procedures/1.png',
    overview: 'Swedana is an authentic Ayurvedic therapeutic steam treatment where the patient is seated in a specially designed herbal steam box with their head resting comfortably outside in cool air.',
    subText: 'Medicinal steam infused with Dashamoola, Nirgundi, and eucalyptus decoctions penetrates deep into bodily channels (Srotas), liquefying cellular toxins and carrying them toward excretory pathways.',
    benefits: [
      'Expels deep tissue impurities and metabolic toxins through perspiration',
      'Relieves profound joint stiffness, backache, and muscular cramps',
      'Improves skin tone and clears cutaneous pores',
      'Induces a sensation of whole-body lightness and renewed vitality'
    ],
    packages: [
      { name: '30 Min Herbal Swedana Steam', price: '$40' },
      { name: 'Abhyanga Massage + Swedana Combination (75 Min)', price: '$90' },
      { name: '5-Session Detox & De-Stiffening Series', price: '$180' }
    ]
  },

  // ─── ACUPUNCTURE (2 Services) ────────────────────────────
  'acupuncture-pain-management': {
    slug: 'acupuncture-pain-management',
    title: 'Acupuncture for Pain Management',
    category: 'Acupuncture',
    parentLink: '/acupuncture',
    tagline: 'Precision Meridian Neuro-Stimulation & Endorphin Pain Modulation',
    image: '/images/procedures/4.png',
    overview: 'Acupuncture for Pain Management utilizes ultra-fine, single-use sterile needles placed along anatomical motor points and traditional energy meridians to trigger the release of natural endorphins and downregulate pain signal pathways.',
    subText: 'It is highly effective for sciatica, cervical spondylosis, frozen shoulder, lumbar disc herniation, knee osteoarthritis, and acute sports injuries.',
    benefits: [
      'Triggers immediate secretion of endogenous endorphins and dynorphins',
      'Deactivates hyperirritable myofascial trigger points and muscle knots',
      'Improves local blood microcirculation to ischemic tissues',
      'Provides safe, drug-free, and non-addictive pain relief'
    ],
    packages: [
      { name: 'Initial Consultation & Treatment (45 Min)', price: '$55' },
      { name: 'Follow-up Acupuncture Session (30 Min)', price: '$40' },
      { name: '6-Session Pain Relief Package', price: '$220' },
      { name: '10-Session Chronic Pain Resolution Course', price: '$350' }
    ]
  },

  'acupuncture-chronic-conditions': {
    slug: 'acupuncture-chronic-conditions',
    title: 'Acupuncture for Chronic Conditions',
    category: 'Acupuncture',
    parentLink: '/acupuncture',
    tagline: 'Comprehensive Neuro-Endocrine & Systemic Meridian Regulation',
    image: '/images/procedures/1.png',
    overview: 'Acupuncture for Chronic Conditions addresses systemic, functional, and psychosomatic disorders such as migraines, chronic fatigue, allergic rhinitis, digestive dysregulation (IBS), anxiety, and peripheral neuropathy.',
    subText: 'By restoring the harmonic flow of bio-electric energy (Qi) along visceral meridians, this therapy enhances systemic homeostatic self-regulation.',
    benefits: [
      'Regulates autonomic neuro-endocrine and hormonal equilibrium',
      'Reduces the frequency and severity of chronic migraine headaches',
      'Improves gastrointestinal motility and reduces stress-induced IBS',
      'Strengthens immune resilience and cellular vitality'
    ],
    packages: [
      { name: 'Initial Assessment & Treatment (50 Min)', price: '$60' },
      { name: 'Single Meridian Regulation Session (35 Min)', price: '$45' },
      { name: '8-Session Chronic Condition Protocol', price: '$320' }
    ]
  },

  // ─── STRUCTURED WELLNESS PROGRAMS (4 Programs) ───────────
  'obesity-reduction-detox': {
    slug: 'obesity-reduction-detox',
    title: 'Obesity Reduction & Detox Program',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',
    tagline: 'Clinical Metabolic Overhaul & Sustainable Fat Loss Protocol',
    image: '/images/ChatGPT Image Aug 22, 2026, 12_18_27 AM.png',
    overview: 'Our Structured Obesity Reduction & Detox Program is a physician-designed protocol that combines gut cleansing (Colon Hydrotherapy), Udwarthanam herbal fat scrubbing, metabolic-stimulating Yoga, and alkaline clinical nutrition.',
    subText: 'This program re-calibrates sluggish metabolism, purges visceral fat, and provides long-term habit transformation for lasting weight normalization.',
    benefits: [
      'Promotes 4–8 kg healthy, sustained fat loss in structured cycles',
      'Flushes accumulated lymphatic waste and reduces fluid retention',
      'Improves lipid profiles, liver enzymes, and blood pressure',
      'Includes personalized post-program lifestyle maintenance plans'
    ],
    packages: [
      { name: '7-Day Intensive Detox (OPD / Day Care)', price: '$450' },
      { name: '14-Day Residential Weight Loss Transformation', price: '$950' },
      { name: '21-Day Complete Metabolic Rejuvenation Program', price: '$1,400' }
    ]
  },

  'diabetes-wellness': {
    slug: 'diabetes-wellness',
    title: 'Diabetes Wellness Program',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',
    tagline: 'Multidisciplinary Insulin Sensitivity & Glycemic Reversal Program',
    image: '/images/ChatGPT Image Aug 22, 2026, 12_22_46 AM.png',
    overview: 'The Diabetes Wellness Program combines evidence-based Naturopathic therapies, pancreatic-stimulating Yoga Asanas, acupuncture meridian stimulation, and personalized low-glycemic dietary planning.',
    subText: 'Our clinical team monitors blood glucose trends, reduces insulin resistance, protects vital capillary organs, and empowers individuals to minimize medication dependence under medical supervision.',
    benefits: [
      'Lowers HbA1c and fasting blood sugar naturally',
      'Decongests fatty liver and enhances pancreatic beta-cell function',
      'Prevents peripheral neuropathy, retinopathy, and kidney strain',
      'Provides daily continuous dietary and lifestyle coaching'
    ],
    packages: [
      { name: '10-Day Glycemic Reset Program', price: '$500' },
      { name: '1-Month Reversal Protocol (Weekly Clinical Review)', price: '$850' },
      { name: '3-Month Comprehensive Diabetes Transformation', price: '$1,800' }
    ]
  },

  'spine-joint-pain': {
    slug: 'spine-joint-pain',
    title: 'Spine & Joint Pain Management Program',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',
    tagline: 'Integrative Drug-Free Protocol for Spondylosis, Arthritis & Disc Care',
    image: '/images/ChatGPT Image Aug 22, 2026, 12_25_07 AM.png',
    overview: 'This comprehensive clinical program integrates Acupuncture neuro-stimulation, Ayurvedic Kati Vasti herbal oil pooling, therapeutic mud packs, and specialized Danda/Aerial spinal decompression yoga.',
    subText: 'Engineered specifically for individuals with lumbar disc herniation, cervical spondylosis, sciatica, osteoarthritis, and frozen shoulder who seek long-term relief without surgery or heavy pain medication.',
    benefits: [
      'Significantly reduces localized inflammation and disc compression',
      'Restores spinal flexibility, disc hydration, and posture',
      'Increases pain-free walking distance and daily mobility',
      'Reconditions deep spinal core muscles to prevent recurrence'
    ],
    packages: [
      { name: '7-Day Intensive Spinal Care Program', price: '$480' },
      { name: '14-Day Comprehensive Joint Rehabilitation', price: '$920' },
      { name: '21-Day Full Spine & Mobility Restoration', price: '$1,350' }
    ]
  },

  'full-body-retreat': {
    slug: 'full-body-retreat',
    title: 'Full-Body Wellness Retreat (Signature Program)',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',
    tagline: 'Signature Residential Multi-Day Clinical Healing & Deep Rejuvenation',
    image: '/images/ChatGPT Image Aug 22, 2026, 12_26_08 AM.png',
    overview: 'Our flagship Full-Body Wellness Retreat is an all-inclusive residential healing experience. Patients stay at our peaceful campus and receive daily multidisciplinary treatments combining Panchakarma, Therapeutic Yoga, Hydrotherapy, Acupuncture, and organic farm-to-table nutrition.',
    subText: 'Designed for complete physical detoxification, mental replenishment, and physiological anti-aging, every day is tailored by our master practitioners.',
    benefits: [
      'Comprehensive whole-body cellular detoxification and doshic reset',
      'Daily 1-on-1 consultations with Dr. Vijay and senior clinical faculty',
      'Profound reduction in chronic fatigue, insomnia, and burnout',
      'Includes private accommodations, therapeutic meals, and complete care'
    ],
    packages: [
      { name: '3-Day Weekend Wellness Retreat (All-Inclusive)', price: '$499' },
      { name: '7-Day Signature Holistic Healing Retreat', price: '$1,150' },
      { name: '14-Day Transformational Residential Package', price: '$2,100' }
    ]
  }
};

export default servicesDetailData;
