/**
 * Oriolus Scientific - Complete Detailed Therapy Content Store
 * Exact content architecture for all 15 therapy/service pages
 */

export const servicesDetailData = {
  // ─── A. YOGA THERAPY ─────────────────────────────────────

  // 1. Therapeutic Yoga
  'therapeutic-yoga': {
    slug: 'therapeutic-yoga',
    aliasUrl: '/therapies/yoga/therapeutic',
    eyebrow: 'YOGA THERAPY',
    title: 'Therapeutic Yoga',
    tagline: 'Movement Designed Around Your Body',
    heroDescription: 'A personalised approach to Yoga that adapts movement, posture, breathing and relaxation practices according to your mobility, comfort and individual wellness goals.',
    image: '/images/procedures/1.png',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',
    
    overviewTitle: 'What Is Therapeutic Yoga?',
    overview: [
      'Therapeutic Yoga takes the principles of traditional Yoga and applies them in a more individualised and purposeful way.',
      'Unlike a general group class where everyone follows the same sequence, therapeutic sessions consider how your body moves, where you experience limitations, how you breathe and what you want to improve.',
      'Practices may include modified asanas, assisted movements, breathing techniques, relaxation practices and supportive props such as chairs, belts, bolsters or walls.',
      'At Oriolus Scientific, the emphasis is not on achieving advanced poses. It is on creating a comfortable and meaningful practice that supports better movement, body awareness and overall wellbeing.'
    ],

    benefits: [
      'Improve everyday mobility and flexibility',
      'Encourage better postural awareness',
      'Support gentle strengthening',
      'Reduce stiffness from prolonged sitting',
      'Encourage more comfortable movement',
      'Improve breathing awareness',
      'Support relaxation and stress management',
      'Build confidence in regular physical activity'
    ],

    whoMayBenefit: [
      'People with limited flexibility or mobility',
      'Working professionals experiencing postural stiffness',
      'Older adults looking for gentle movement',
      'Individuals returning to activity after a period of inactivity',
      'People seeking guided movement for back, neck or joint comfort',
      'Beginners who prefer individual attention',
      'Anyone looking for a slower, more personalised Yoga practice'
    ],

    whatToExpect: [
      { title: 'Gentle Mobility', desc: 'Controlled movements designed around your current range of motion.' },
      { title: 'Postural Awareness', desc: 'Practices that help you recognise and improve everyday movement patterns.' },
      { title: 'Supportive Asanas', desc: 'Modified Yoga postures using props where required.' },
      { title: 'Breathwork', desc: 'Simple breathing practices supporting relaxation and awareness.' },
      { title: 'Guided Relaxation', desc: 'A calm closing practice allowing the body and mind to settle.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Understand', desc: 'We begin by discussing your lifestyle, mobility, previous injuries or concerns and wellness objectives.' },
      { step: '02', title: 'Personalise', desc: 'Suitable movements, breathing techniques and supportive practices are selected around your comfort and ability.' },
      { step: '03', title: 'Progress', desc: 'Your practice may be reviewed and gradually adapted as mobility, confidence and comfort evolve.' }
    ],

    importantConsiderations: 'Inform the practitioner about diagnosed conditions, recent procedures, injuries and medications before beginning. Medical guidance may be recommended where appropriate.',

    faqs: [
      { q: 'Is Therapeutic Yoga suitable for beginners?', a: 'Yes. No previous Yoga experience is required. Movements can be modified around your current ability.' },
      { q: 'What if I cannot sit on the floor?', a: 'Chair-based, wall-supported and other adapted practices can be used where appropriate.' },
      { q: 'What should I wear?', a: 'Comfortable clothing that allows unrestricted movement is recommended.' },
      { q: 'How is this different from a regular Yoga class?', a: 'The major difference is personalisation. The practice is selected around your individual needs rather than following a standard group sequence.' },
      { q: 'Can I attend if I have an existing medical condition?', a: 'Inform the practitioner about diagnosed conditions, recent procedures, injuries and medications before beginning. Medical guidance may be recommended where appropriate.' }
    ],

    cta: {
      heading: 'Begin With Movement That Understands You',
      subheading: 'Discover a personalised Yoga practice designed around your mobility, comfort and wellness goals.',
      btnText: 'Book Therapeutic Yoga Consultation'
    },

    relatedLinks: [
      { title: 'Stick Yoga / Danda Yoga', link: '/services/stick-yoga' },
      { title: 'Pain Management Yoga', link: '/services/pain-management-yoga' },
      { title: 'Acupuncture for Pain Management', link: '/services/acupuncture-pain-management' }
    ]
  },

  // 2. Stick Yoga / Danda Yoga
  'stick-yoga': {
    slug: 'stick-yoga',
    aliasUrl: '/therapies/yoga/stick',
    eyebrow: 'PROP-ASSISTED YOGA',
    title: 'Stick Yoga / Danda Yoga',
    tagline: 'Alignment. Mobility. Awareness.',
    heroDescription: 'Discover an engaging Yoga practice that uses a simple wooden stick as a supportive tool for alignment, stretching, balance and movement awareness.',
    image: '/images/procedures/2.png',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',

    overviewTitle: 'What Is Stick Yoga?',
    overview: [
      'Stick Yoga, also known as Danda Yoga, incorporates a lightweight wooden stick into selected Yoga movements.',
      'The stick provides a physical reference that can make alignment easier to understand.',
      'By holding the stick during movements, practitioners can become more aware of differences between the left and right sides of the body, shoulder positioning, spinal rotation and overall posture.',
      'At Oriolus Scientific, Stick Yoga is approached as an accessible, structured movement practice rather than a performance-oriented form of Yoga.'
    ],

    benefits: [
      'Encourages better postural awareness',
      'Supports shoulder mobility',
      'Helps open the chest and upper body',
      'Encourages controlled spinal rotation',
      'Supports coordination and balance',
      'Makes some stretches easier to understand',
      'Provides visual and physical alignment feedback',
      'Adds variety to therapeutic movement sessions'
    ],

    whoMayBenefit: [
      'Desk-based professionals',
      'Individuals with rounded posture',
      'People experiencing upper-body stiffness',
      'Beginners who benefit from prop support',
      'Individuals working on shoulder mobility',
      'People wanting more structured stretching',
      'Active individuals improving rotational mobility'
    ],

    whatToExpect: [
      { title: 'Shoulder-Opening Movements', desc: 'Relieve upper shoulder tightness and impingement.' },
      { title: 'Controlled Spinal Rotations', desc: 'Mobilise thoracic segments safely with prop support.' },
      { title: 'Side Stretches & Chest Opening', desc: 'Expand the ribcage and improve lung breathing volume.' },
      { title: 'Balance Exercises & Postural Drills', desc: 'Reinforce muscle memory for healthy posture.' },
      { title: 'Breathing and Relaxation', desc: 'Calm the nervous system at the close of practice.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Posture & Mobility Review', desc: 'Observe shoulder position, upper-body mobility and general movement patterns.' },
      { step: '02', title: 'Guided Stick Practice', desc: 'Perform selected stretches and movement sequences using the stick for support and feedback.' },
      { step: '03', title: 'Everyday Posture Guidance', desc: 'Learn simple movement habits that may help maintain better posture outside the session.' }
    ],

    importantConsiderations: 'Suitability depends on individual mobility, but movements can often be modified to accommodate existing limitations.',

    faqs: [
      { q: 'Do I need Yoga experience?', a: 'No. Stick Yoga can be adapted for beginners.' },
      { q: 'Is the stick heavy?', a: 'No. A comfortable lightweight prop is used for guided movements.' },
      { q: 'Can older adults practise Stick Yoga?', a: 'Suitability depends on individual mobility, but movements can often be modified.' },
      { q: 'How long is a session?', a: 'Session duration depends on the chosen plan and individual requirements.' },
      { q: 'Can Stick Yoga be combined with Therapeutic Yoga?', a: 'Yes. Suitable Stick Yoga practices may form part of a wider therapeutic movement plan.' }
    ],

    cta: {
      heading: 'Rediscover Better Movement & Alignment',
      subheading: 'Experience the gentle, structural clarity that prop-assisted Danda Yoga brings to your posture.',
      btnText: 'Book a Stick Yoga Session'
    },

    relatedLinks: [
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' },
      { title: 'Pain Management Yoga', link: '/services/pain-management-yoga' }
    ]
  },

  // 3. Aerial Yoga
  'aerial-yoga': {
    slug: 'aerial-yoga',
    aliasUrl: '/therapies/yoga/aerial',
    eyebrow: 'SUPPORTED MOVEMENT',
    title: 'Therapeutic Aerial Yoga',
    tagline: 'Experience Movement With Support',
    heroDescription: 'A guided Yoga practice using suspended fabric to support selected stretches, movement and relaxation in a unique, low-impact environment.',
    image: '/images/procedures/3.png',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',

    overviewTitle: 'What Is Therapeutic Aerial Yoga?',
    overview: [
      'Aerial Yoga uses a strong fabric hammock as a supportive movement tool.',
      'Unlike performance-based aerial classes, the focus at Oriolus Scientific is on controlled, accessible practices.',
      'The hammock can partially support body weight during stretching, balance and selected Yoga postures.',
      'This creates a different movement experience and may make certain stretches feel more accessible.',
      'Sessions are practitioner-guided and adjusted according to individual comfort.'
    ],

    benefits: [
      'Provides supported stretching',
      'Encourages spinal mobility',
      'Builds body awareness',
      'Supports balance and coordination',
      'Engages core stability',
      'Offers low-impact movement variations',
      'Encourages relaxation',
      'Creates an enjoyable alternative to floor-based movement'
    ],

    whoMayBenefit: [
      'Individuals seeking supported stretching',
      'People comfortable trying a new movement experience',
      'Working professionals experiencing general stiffness',
      'Individuals wanting to improve mobility',
      'People who find selected floor exercises uncomfortable',
      'Anyone looking for a deeply relaxing supported practice'
    ],

    whatToExpect: [
      { title: 'Hammock Orientation', desc: 'Gentle introduction to the fabric and safety checks.' },
      { title: 'Supported Standing Movements', desc: 'Using the hammock for weight-relief balance and stability.' },
      { title: 'Assisted Stretches & Gentle Balance', desc: 'Deep muscle lengthening without compressive load.' },
      { title: 'Optional Supported Inversions', desc: 'Gentle zero-compression spinal traction when appropriate.' },
      { title: 'Cocoon-Style Savasana', desc: 'Deep guided relaxation completely enveloped in the hammock.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Comfort & Equipment Setup', desc: 'The hammock is adjusted and you are introduced to safe entry, support and positioning.' },
      { step: '02', title: 'Supported Movement', desc: 'Your practitioner guides appropriate stretches and Yoga movements using the hammock.' },
      { step: '03', title: 'Relaxation & Integration', desc: 'The session concludes with calming supported relaxation.' }
    ],

    importantConsiderations: 'Aerial Yoga may not be appropriate for everyone. Tell the practitioner beforehand if you have uncontrolled blood pressure, glaucoma or certain eye conditions, severe vertigo, recent surgery, pregnancy, significant cardiovascular concerns, or acute injury.',

    faqs: [
      { q: 'Do I need to be flexible?', a: 'No. The hammock assists you at your current flexibility level.' },
      { q: 'Will I have to hang upside down?', a: 'Not necessarily. Inversions are optional and depend on suitability.' },
      { q: 'What should I wear?', a: 'Comfortable fitted clothing that covers areas in contact with the hammock is usually preferable.' },
      { q: 'Is it suitable for beginners?', a: 'Yes, where individual screening indicates it is appropriate.' },
      { q: 'Is Aerial Yoga the same as aerial acrobatics?', a: 'No. Oriolus Scientific focuses on supported wellness-oriented movement rather than acrobatic performance.' }
    ],

    cta: {
      heading: 'Experience Yoga From a Different Perspective',
      subheading: 'Let suspended fabric support your spine and joints in a relaxing, zero-gravity environment.',
      btnText: 'Reserve an Aerial Yoga Consultation'
    },

    relatedLinks: [
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' },
      { title: 'Pain Management Yoga', link: '/services/pain-management-yoga' }
    ]
  },

  // 4. Pain Management Yoga
  'pain-management-yoga': {
    slug: 'pain-management-yoga',
    aliasUrl: '/therapies/yoga/pain-management',
    eyebrow: 'MOVEMENT & MOBILITY SUPPORT',
    title: 'Pain Management Yoga',
    tagline: 'Gentle Movement for Greater Everyday Comfort',
    heroDescription: 'A personalised Yoga approach focusing on controlled mobility, breathing, relaxation and movement confidence for individuals experiencing persistent physical discomfort.',
    image: '/images/procedures/4.png',
    category: 'Yoga Therapy',
    parentLink: '/yoga-therapy',

    overviewTitle: 'What Is Pain Management Yoga?',
    overview: [
      'Living with ongoing discomfort can sometimes make people afraid to move.',
      'Pain Management Yoga uses gentle, carefully selected practices to help individuals reconnect with movement in a controlled environment.',
      'Rather than aggressive stretching, the focus may include small movements, supported postures, breathing, gentle strengthening and relaxation.',
      'The aim is to help individuals move more confidently while respecting their current comfort levels.'
    ],

    benefits: [
      'Supports comfortable everyday movement',
      'Encourages joint mobility',
      'Builds movement confidence',
      'Supports postural awareness',
      'Encourages gentle muscular strength',
      'Promotes relaxation',
      'Helps reduce movement-related fear',
      'Supports overall physical wellbeing'
    ],

    whoMayBenefit: [
      'People experiencing persistent back discomfort',
      'Neck and shoulder stiffness',
      'General joint stiffness',
      'Individuals with limited mobility',
      'Older adults',
      'Desk-based professionals',
      'People returning to movement after inactivity'
    ],

    whatToExpect: [
      { title: 'Gentle Controlled Movements', desc: 'Slow, deliberate joint movements performed within a comfortable pain-free zone.' },
      { title: 'Breathing to Dissolve Guarding', desc: 'Pranayama designed to ease muscle guarding and neurological tension.' },
      { title: 'Supported Postures', desc: 'Using cushions, chairs, or bolsters to protect sensitive joints.' },
      { title: 'Restorative Stillness', desc: 'Soothing the pain-spasm cycle with guided restorative rest.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Movement & Comfort Assessment', desc: 'Understand current discomfort, limitations and previous reports or diagnoses.' },
      { step: '02', title: 'Gentle Guided Movement', desc: 'Practise appropriate, pain-aware movements and supportive Yoga techniques.' },
      { step: '03', title: 'Relaxation & Continued Guidance', desc: 'Develop practical movement and relaxation practices for everyday life.' }
    ],

    importantConsiderations: 'Never discontinue or adjust prescribed medication without your treating medical professional. Yoga is complementary and does not replace emergency medical or surgical care.',

    faqs: [
      { q: 'Will you make me stretch through pain?', a: 'No. Exercises should remain within an appropriate comfort range.' },
      { q: 'Can chair-based Yoga be used?', a: 'Yes.' },
      { q: 'Should I stop pain medication?', a: 'No. Never discontinue or adjust prescribed medication without your treating medical professional.' },
      { q: 'Should I bring scans or medical reports?', a: 'Existing reports can be useful when discussing your history.' },
      { q: 'Does Yoga replace physiotherapy or medical treatment?', a: 'No. It can be complementary where appropriate.' }
    ],

    cta: {
      heading: 'Move With Greater Confidence',
      subheading: 'Rebuild functional comfort and ease through gentle, customized therapeutic movements.',
      btnText: 'Book a Pain Management Yoga Consultation'
    },

    relatedLinks: [
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' },
      { title: 'Acupuncture for Pain Management', link: '/services/acupuncture-pain-management' }
    ]
  },

  // ─── B. NATUROPATHY ──────────────────────────────────────

  // 5. Colon Hydrotherapy
  'colon-hydrotherapy': {
    slug: 'colon-hydrotherapy',
    aliasUrl: '/therapies/naturopathy/colon-hydrotherapy',
    eyebrow: 'NATUROPATHY',
    title: 'Colon Hydrotherapy',
    tagline: 'A Private, Professionally Guided Wellness Procedure',
    heroDescription: 'A water-based colon cleansing procedure performed within a hygienic, controlled environment following individual suitability screening.',
    image: '/images/procedures/2.png',
    category: 'Naturopathy',
    parentLink: '/naturopathy',

    overviewTitle: 'What Is Colon Hydrotherapy?',
    overview: [
      'Colon Hydrotherapy involves introducing carefully controlled water into the colon through specialised equipment.',
      'Some individuals choose the procedure as part of a broader naturopathy or wellness program.',
      'At Oriolus Scientific, privacy, hygiene, comfort and suitability assessment should remain central to the experience.',
      'It is important to position Colon Hydrotherapy responsibly: evidence for many broad “detox” claims is limited, so the website should not promise removal of toxins, treatment of disease or guaranteed digestive outcomes.'
    ],

    benefits: [
      'Privacy and dignity throughout the procedure',
      'Hygienic procedure protocols with sterile single-use tubing',
      'Controlled water temperature and gentle flow',
      'Individual suitability screening prior to session',
      'Professional practitioner supervision',
      'Comfortable and relaxing environment',
      'Post-session hydration and nutrition guidance',
      'Integration with broader wellness plans where appropriate'
    ],

    whoMayBenefit: [
      'Individuals seeking guided digestive wellness support',
      'People participating in a structured Naturopathic cleanse',
      'Individuals looking for professional colon hygiene procedures',
      'Those interested in drugless digestive lifestyle protocols'
    ],

    whatToExpect: [
      { title: 'Private Clinical Suite', desc: 'A secluded, pristine room ensuring total patient dignity.' },
      { title: 'Gentle Warm Infusion', desc: 'Purified, temperature-regulated water gently introduced.' },
      { title: 'Abdominal Support Massage', desc: 'Gentle external palpation to assist natural peristalsis.' },
      { title: 'Hydration Recovery', desc: 'Post-procedure electrolyte and probiotic replenishment.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Consultation & Suitability Review', desc: 'Discuss digestive history, current health concerns and contraindications.' },
      { step: '02', title: 'Guided Hydrotherapy Session', desc: 'The procedure is conducted privately using appropriate equipment and controlled water.' },
      { step: '03', title: 'Aftercare', desc: 'Receive hydration, food and general aftercare guidance.' }
    ],

    importantConsiderations: 'Anyone considering the procedure should undergo screening. Particular caution may be appropriate for individuals with certain gastrointestinal conditions, recent bowel surgery, active intestinal inflammation, significant haemorrhoids or bleeding, kidney or heart conditions, or pregnancy.',

    faqs: [
      { q: 'Is Colon Hydrotherapy suitable for everyone?', a: 'No. Screening is important to rule out contraindications.' },
      { q: 'Does it cure constipation or digestive disease?', a: 'It should not be presented as a cure for medical gastrointestinal conditions.' },
      { q: 'Is hygiene important?', a: 'Extremely. Appropriate equipment protocols and infection-control practices are strictly maintained.' },
      { q: 'How long does it take?', a: 'Duration depends on the equipment and protocol used by the center (typically 45–60 minutes).' },
      { q: 'Can I include it in a detox program?', a: 'It may be considered where appropriate after individual assessment.' }
    ],

    cta: {
      heading: 'Have Questions About Colon Hydrotherapy?',
      subheading: 'Speak with our certified naturopathy team to discuss your suitability and treatment plan.',
      btnText: 'Speak With Our Naturopathy Team'
    },

    relatedLinks: [
      { title: 'Clinical Detoxification', link: '/services/clinical-detoxification' },
      { title: 'Obesity Reduction & Lifestyle Wellness', link: '/services/obesity-reduction' }
    ]
  },

  // 6. Clinical Detoxification
  'clinical-detoxification': {
    slug: 'clinical-detoxification',
    aliasUrl: '/therapies/naturopathy/detoxification',
    eyebrow: 'NATUROPATHY & LIFESTYLE RESET',
    title: 'Clinical Detoxification',
    tagline: 'Step Away From Unhealthy Routines. Rebuild Better Ones.',
    heroDescription: 'A structured wellness experience combining nourishing food choices, hydration, restorative naturopathy practices, relaxation and healthier daily routines.',
    image: '/images/procedures/1.png',
    category: 'Naturopathy',
    parentLink: '/naturopathy',

    overviewTitle: 'What We Mean by Detox',
    overview: [
      'At Oriolus Scientific, “detox” should not be positioned as a promise to physically remove unspecified toxins or cure disease.',
      'Instead, think of it as a structured lifestyle reset.',
      'The program can create a guided period in which individuals step away from highly processed foods, irregular routines, inadequate hydration, inactivity and everyday stress.',
      'Suitable naturopathy practices can then complement nutrition, movement and rest.'
    ],

    benefits: [
      'Build healthier eating habits',
      'Improve hydration routines',
      'Establish better meal timing',
      'Reintroduce regular movement',
      'Encourage relaxation',
      'Improve lifestyle awareness',
      'Support a more structured daily routine',
      'Feel more rested and refreshed'
    ],

    whoMayBenefit: [
      'Individuals feeling sluggish from irregular work schedules',
      'Working professionals seeking a structured health pause',
      'People looking to break poor dietary and snacking habits',
      'Those interested in nature cure and holistic nutrition'
    ],

    whatToExpect: [
      { title: 'Wellness Consultation', desc: 'Initial health screening and lifestyle assessment.' },
      { title: 'Nourishing Nutrition & Juices', desc: 'Alkaline, freshly prepared meals and therapeutic herbal teas.' },
      { title: 'Mud & Hydro-Treatments', desc: 'External mineral mud packs and temperature-contrast applications.' },
      { title: 'Rest & Gentle Movement', desc: 'Guided breathing and therapeutic restorative yoga.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Lifestyle Review', desc: 'Understand current nutrition, activity, hydration, sleep and stress patterns.' },
      { step: '02', title: 'Guided Wellness Reset', desc: 'Follow a structured plan combining appropriate therapies and lifestyle practices.' },
      { step: '03', title: 'Re-Entry & Sustainability', desc: 'Gradually transition into practical habits that can continue after the program.' }
    ],

    importantConsiderations: 'Detox programs should never promote extreme starvation. All nutritional plans are designed to be safe, sustaining, and suited to your physical requirements.',

    faqs: [
      { q: 'Is this a juice-only fast?', a: 'Not necessarily. Plans should be personalised and nutritionally appropriate.' },
      { q: 'Will I need to stop eating?', a: 'No. Extreme fasting should not be promoted without appropriate professional supervision.' },
      { q: 'How long are programs?', a: 'Options can vary depending on individual requirements (e.g. 3, 7, or 14 days).' },
      { q: 'Can I continue working?', a: 'That depends on program intensity and your routine.' },
      { q: 'Will detox cure medical conditions?', a: 'No. It should be positioned as a wellness and lifestyle program, not a disease treatment.' }
    ],

    cta: {
      heading: 'Give Your Routine a Thoughtful Reset',
      subheading: 'Step into a guided natural environment designed to restore your energy and wellbeing.',
      btnText: 'Explore Detoxification'
    },

    relatedLinks: [
      { title: 'Colon Hydrotherapy', link: '/services/colon-hydrotherapy' },
      { title: 'Obesity Reduction & Lifestyle Wellness', link: '/services/obesity-reduction' }
    ]
  },

  // 7. Diabetes Wellness Support
  'diabetes-wellness-support': {
    slug: 'diabetes-wellness-support',
    aliasUrl: '/therapies/naturopathy/diabetes-reversal',
    eyebrow: 'METABOLIC WELLNESS',
    title: 'Diabetes Wellness Support',
    tagline: 'Healthier Habits Alongside Appropriate Medical Care',
    heroDescription: 'A structured lifestyle program designed to support people living with or at risk of Type 2 diabetes through movement, nutrition awareness, stress management and healthier daily routines.',
    image: '/images/procedures/3.png',
    category: 'Naturopathy',
    parentLink: '/naturopathy',

    overviewTitle: 'A Responsible Approach to Diabetes Wellness',
    overview: [
      'Diabetes requires proper medical diagnosis and ongoing monitoring.',
      'Oriolus Scientific’s wellness approach should therefore complement—not replace—medical treatment.',
      'The program can help individuals work on lifestyle factors closely associated with metabolic wellbeing, such as food choices, movement, sleep, stress and body composition.',
      'Your original specification included an 8–12 week diabetes-focused lifestyle structure, but also contained strong reversal and medication-reduction claims. Those should not be published as guarantees.'
    ],

    benefits: [
      'Comprehensive lifestyle assessment',
      'Whole-food nutrition education',
      'Therapeutic movement and yoga',
      'Targeted breathing and stress management',
      'Sleep and daily routine awareness',
      'Objective progress tracking',
      'Sustainable habit development',
      'Better metabolic awareness'
    ],

    whoMayBenefit: [
      'Adults living with Type 2 diabetes seeking lifestyle guidance',
      'Individuals diagnosed with prediabetes',
      'People concerned about metabolic wellbeing',
      'Individuals with sedentary lifestyles',
      'People seeking greater structure around nutrition and activity'
    ],

    whatToExpect: [
      { title: 'Metabolic History Review', desc: 'Understanding your existing diagnosis, blood markers, and routine.' },
      { title: 'Low-Glycemic Dietary Coaching', desc: 'Education on unrefined whole foods, fibre, and meal timing.' },
      { title: 'Pancreatic-Stimulating Yoga', desc: 'Gentle asanas designed to improve insulin sensitivity.' },
      { title: 'Routine Maintenance Plan', desc: 'Clear guidelines to maintain healthier habits at home.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Understand', desc: 'Review lifestyle habits, medical history and wellness goals.' },
      { step: '02', title: 'Build', desc: 'Develop a personalised nutrition, movement and wellness routine.' },
      { step: '03', title: 'Review', desc: 'Track lifestyle progress and refine habits while continuing appropriate medical care.' }
    ],

    importantConsiderations: 'Medication changes must only be made by the clinician responsible for your medical care. Never adjust or stop prescribed pharmaceuticals on your own.',

    faqs: [
      { q: 'Can I stop diabetes medication?', a: 'No. Medication changes must only be made by the clinician responsible for your medical care.' },
      { q: 'Does Oriolus guarantee diabetes reversal?', a: 'No. Individual outcomes differ and no guaranteed remission claim should be made.' },
      { q: 'Can Yoga be part of the program?', a: 'Yes, appropriate therapeutic movement may be incorporated.' },
      { q: 'Do I need blood reports?', a: 'Recent reports can help provide context, but medical interpretation should remain with appropriately qualified professionals.' },
      { q: 'How long is the program?', a: 'The structured program is positioned around approximately 8 weeks, subject to final practitioner planning.' }
    ],

    cta: {
      heading: 'Build a More Sustainable Metabolic Wellness Routine',
      subheading: 'Empower your daily life with guided nutrition, mindful movement, and holistic lifestyle support.',
      btnText: 'Enquire About the Diabetes Wellness Program'
    },

    relatedLinks: [
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' },
      { title: 'Obesity Reduction & Lifestyle Wellness', link: '/services/obesity-reduction' }
    ]
  },

  // 8. Obesity Reduction & Lifestyle Wellness
  'obesity-reduction': {
    slug: 'obesity-reduction',
    aliasUrl: '/therapies/naturopathy/obesity-reduction',
    eyebrow: 'WEIGHT & LIFESTYLE WELLNESS',
    title: 'Obesity Reduction Therapy',
    tagline: 'Sustainable Habits Over Short-Term Fixes',
    heroDescription: 'A personalised wellness approach combining movement, nutrition guidance and selected natural therapies to support healthier long-term lifestyle patterns.',
    image: '/images/procedures/4.png',
    category: 'Naturopathy',
    parentLink: '/naturopathy',

    overviewTitle: 'Our Approach',
    overview: [
      'Weight is influenced by many factors including nutrition, movement, sleep, stress, medication, hormones, genetics and environment.',
      'For this reason, Oriolus Scientific should avoid presenting weight management as simply “burning fat” through one therapy.',
      'Instead, the service focuses on building a structured lifestyle approach.',
      'Suitable Yoga, Naturopathy and Ayurveda practices may be included alongside practical nutrition and behaviour guidance.'
    ],

    benefits: [
      'Improve everyday physical activity',
      'Build more consistent daily routines',
      'Improve nutrition awareness and portion control',
      'Encourage sustainable weight-management habits',
      'Support joint comfort and mobility',
      'Develop better sleep and stress routines',
      'Reduce dependence on crash dieting',
      'Improve long-term wellness awareness'
    ],

    whoMayBenefit: [
      'Individuals struggling with weight fluctuations',
      'People experiencing reduced mobility from excess weight',
      'Working professionals seeking structured diet and fitness coaching',
      'Individuals looking for natural, non-surgical body wellness'
    ],

    whatToExpect: [
      { title: 'Comprehensive Consultation', desc: 'Analyzing lifestyle patterns, meal habits, and activity.' },
      { title: 'Active Naturopathy Therapies', desc: 'Hydrotherapy, herbal steam, or dry powder scrubs where suitable.' },
      { title: 'Graduated Movement', desc: 'Joint-safe yoga and mobility exercises adapted to your stamina.' },
      { title: 'Long-Term Habit Plan', desc: 'Sustainable behavioral strategies to prevent rebound weight gain.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Lifestyle Assessment', desc: 'Understand habits, movement, goals and challenges.' },
      { step: '02', title: 'Structured Wellness Plan', desc: 'Combine suitable therapies with nutrition and movement guidance.' },
      { step: '03', title: 'Sustainable Maintenance', desc: 'Focus on routines that can continue beyond the initial program.' }
    ],

    importantConsiderations: 'Sustainable nutrition habits are preferable to crash dieting. People with significant obesity or associated cardiovascular conditions should continue appropriate medical care.',

    faqs: [
      { q: 'How much weight will I lose?', a: 'No fixed amount should be promised. Outcomes vary greatly between individuals.' },
      { q: 'Do I need extreme dieting?', a: 'No. Sustainable nutrition habits are preferable to crash dieting.' },
      { q: 'Can Ayurveda be included?', a: 'Selected therapies such as Udwarthanam or Swedana may be considered where appropriate.' },
      { q: 'What if I have joint discomfort?', a: 'Movement can be adapted to your current ability and comfort.' },
      { q: 'Is this a substitute for obesity medical care?', a: 'No. People with significant obesity or associated health conditions should continue appropriate medical care.' }
    ],

    cta: {
      heading: 'Start With Better Habits, Not Another Quick Fix',
      subheading: 'Begin a balanced, physician-supervised lifestyle transformation tailored to your body.',
      btnText: 'Begin Your Wellness Consultation'
    },

    relatedLinks: [
      { title: 'Udwarthanam Herbal Massage', link: '/services/udwarthanam' },
      { title: 'Herbal Swedana Therapy', link: '/services/swedana' },
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' }
    ]
  },

  // ─── C. AYURVEDA ─────────────────────────────────────────

  // 9. Classical Panchakarma
  'panchakarma': {
    slug: 'panchakarma',
    aliasUrl: '/therapies/ayurveda/panchakarma',
    eyebrow: 'CLASSICAL AYURVEDA',
    title: 'Classical Panchakarma',
    tagline: 'A Structured Ayurvedic Wellness Journey',
    heroDescription: 'Experience a personalised Ayurvedic program incorporating preparatory, selected cleansing and restorative practices according to traditional principles and individual suitability.',
    image: '/images/procedures/1.png',
    category: 'Ayurveda',
    parentLink: '/ayurveda',

    overviewTitle: 'What Is Panchakarma?',
    overview: [
      'Panchakarma is one of Ayurveda’s best-known traditional therapeutic frameworks.',
      'Rather than being a single treatment, it represents a structured process that may involve preparation, selected Ayurvedic procedures, dietary routines and a restorative phase.',
      'The precise plan should depend on the individual rather than automatically applying every traditional procedure.'
    ],

    benefits: [
      'Rest and deep systemic rejuvenation',
      'Traditional Ayurvedic lifestyle practice',
      'Mindful, constitution-specific eating',
      'Profound relaxation and tension relief',
      'Enhanced body and doshic awareness',
      'Structured self-care rituals',
      'Complete lifestyle reset',
      'Restorative circadian routine'
    ],

    whoMayBenefit: [
      'Individuals interested in authentic classical Ayurveda',
      'People seeking a structured residential wellness retreat',
      'Those wanting time away from demanding urban routines',
      'Individuals interested in Ayurvedic rejuvenation and anti-aging',
      'People seeking guided, disciplined lifestyle transformation'
    ],

    whatToExpect: [
      { title: 'Purvakarma (Preparation)', desc: 'Internal and external oleation with medicated oils followed by gentle steam.' },
      { title: 'Pradhanakarma (Main Procedures)', desc: 'Selected classical bio-cleansing procedures chosen according to individual constitution.' },
      { title: 'Paschatkarma (Restoration)', desc: 'Gradual normalization of diet, rest, and mindful daily lifestyle routines.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Purvakarma — Preparation', desc: 'The body is prepared using selected practices such as oil application and Swedana.' },
      { step: '02', title: 'Pradhanakarma — Main Procedures', desc: 'Suitable classical procedures are selected according to individual assessment.' },
      { step: '03', title: 'Paschatkarma — Restoration', desc: 'Diet, rest and lifestyle are gradually normalised following the main program.' }
    ],

    importantConsiderations: 'Suitability depends on individual health, age, and stamina. A detailed diagnostic assessment by our Ayurvedic physician is conducted prior to planning any procedures.',

    faqs: [
      { q: 'How long does Panchakarma take?', a: 'Programs may be offered in formats such as 7, 14 or 21 days, depending on the clinical offering and individual suitability.' },
      { q: 'Does everyone receive the same procedures?', a: 'No. Procedures are selected based on your unique Prakriti (constitution) and current imbalance.' },
      { q: 'Will there be dietary guidance?', a: 'Yes. Ayurvedic dietary practices and nourishing gruels form an integral part of the program.' },
      { q: 'Can older adults participate?', a: 'Suitability depends on individual health and capability.' },
      { q: 'Is Panchakarma simply a massage package?', a: 'No. It is a broader traditional Ayurvedic bio-purification framework.' }
    ],

    cta: {
      heading: 'Discover a More Complete Ayurvedic Wellness Experience',
      subheading: 'Immerse yourself in authentic classical Panchakarma supervised by seasoned Ayurvedic practitioners.',
      btnText: 'Enquire About Panchakarma'
    },

    relatedLinks: [
      { title: 'Abhyanga Massage', link: '/services/abhyanga' },
      { title: 'Shirodhara Stream', link: '/services/shirodhara' },
      { title: 'Herbal Swedana Therapy', link: '/services/swedana' }
    ]
  },

  // 10. Abhyanga
  'abhyanga': {
    slug: 'abhyanga',
    aliasUrl: '/therapies/ayurveda/abhyanga',
    eyebrow: 'AYURVEDIC BODY THERAPY',
    title: 'Therapeutic Abhyanga',
    tagline: 'Warm Oil. Rhythmic Touch. Deep Relaxation.',
    heroDescription: 'A traditional Ayurvedic full-body oil application performed with warm oils and rhythmic massage techniques to create a restorative wellness experience.',
    image: '/images/procedures/3.png',
    category: 'Ayurveda',
    parentLink: '/ayurveda',

    overviewTitle: 'What Is Abhyanga?',
    overview: [
      'Abhyanga is a classical Ayurvedic practice involving warm oil applied across the body using rhythmic massage strokes.',
      'It differs from a conventional spa massage in its Ayurvedic context, oil selection and traditional technique.',
      'At Oriolus Scientific, Abhyanga can be offered independently or incorporated into larger Ayurveda and wellness programs.'
    ],

    benefits: [
      'Encourages deep physical relaxation',
      'Supports muscle comfort and joint ease',
      'Creates a calming sensory experience',
      'Supports skin moisturisation and nourishment',
      'Encourages mindful body awareness',
      'Complements restorative wellness routines',
      'Pairs naturally with herbal Swedana steam',
      'Offers a traditional Ayurvedic self-care experience'
    ],

    whoMayBenefit: [
      'People experiencing everyday physical fatigue',
      'Individuals seeking deep relaxation and stress relief',
      'Working professionals dealing with musculoskeletal stiffness',
      'Older adults looking for nourishing body care',
      'Participants in Panchakarma or retreat programs'
    ],

    whatToExpect: [
      { title: 'Constitutional Oil Selection', desc: 'Customized warm herbal oil selected for your body type.' },
      { title: 'Synchronized Bodywork', desc: 'Rhythmic, long strokes along energy meridians and joints.' },
      { title: 'Optional Swedana Steam', desc: 'Gentle warmth to allow herbal oils to penetrate deeply.' },
      { title: 'Post-Therapy Rest', desc: 'Quiet relaxation to integrate the soothing effects of the treatment.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Consultation & Oil Selection', desc: 'Your practitioner considers individual needs, constitution, and suitability.' },
      { step: '02', title: 'Warm Oil Application', desc: 'Traditional rhythmic massage techniques are performed in a calm environment.' },
      { step: '03', title: 'Rest / Optional Swedana', desc: 'Depending on the plan, the session may be followed by rest or herbal steam.' }
    ],

    importantConsiderations: 'Suitability should be assessed where there are acute medical concerns, fever, contagious skin conditions, recent surgery, or pregnancy.',

    faqs: [
      { q: 'Is Abhyanga the same as spa massage?', a: 'No. It follows classical Ayurvedic principles and uses warm medicated herbal tailams.' },
      { q: 'Will oil remain on my skin?', a: 'Some oil naturally remains until washing to deeply moisturize the dermis.' },
      { q: 'How long does a session take?', a: 'Sessions typically last 60 to 75 minutes.' },
      { q: 'Can Abhyanga be paired with Swedana?', a: 'Yes, this is a classical, highly recommended Ayurvedic combination.' },
      { q: 'Is it suitable during every health condition?', a: 'No. An initial suitability assessment ensures your safety.' }
    ],

    cta: {
      heading: 'Give Your Body Time to Slow Down',
      subheading: 'Experience the restorative touch of warm medicated herbal oils in a serene setting.',
      btnText: 'Book an Abhyanga Session'
    },

    relatedLinks: [
      { title: 'Herbal Swedana Therapy', link: '/services/swedana' },
      { title: 'Shirodhara Stream', link: '/services/shirodhara' }
    ]
  },

  // 11. Shirodhara
  'shirodhara': {
    slug: 'shirodhara',
    aliasUrl: '/therapies/ayurveda/shirodhara',
    eyebrow: 'RESTORATIVE AYURVEDA',
    title: 'Authentic Shirodhara',
    tagline: 'A Ritual of Stillness & Deep Relaxation',
    heroDescription: 'Experience the gentle rhythmic flow of warm therapeutic liquid over the forehead within a peaceful Ayurvedic setting.',
    image: '/images/procedures/2.png',
    category: 'Ayurveda',
    parentLink: '/ayurveda',

    overviewTitle: 'What Is Shirodhara?',
    overview: [
      'The word Shirodhara combines Shiro, meaning head, and Dhara, meaning flow.',
      'During the therapy, a steady stream of warm liquid is gently directed across the forehead while the individual rests comfortably.',
      'Traditional preparations can vary depending on the type of Shirodhara selected.',
      'At Oriolus Scientific, the therapy should primarily be positioned as a deeply calming and restorative Ayurvedic experience rather than a guaranteed treatment for anxiety, insomnia or neurological disease.'
    ],

    benefits: [
      'Deep mental relaxation and tranquility',
      'Mental calmness and emotional grounding',
      'Restorative self-care experience',
      'Reduced everyday mental tension',
      'Quiet mindfulness and inner peace',
      'Improved sense of holistic wellbeing',
      'A calmer, smoother transition into restful sleep',
      'Classical Ayurvedic nervous rejuvenation'
    ],

    whoMayBenefit: [
      'Individuals dealing with high mental workloads',
      'People seeking deep meditation and stillness',
      'Those experiencing everyday stress and sensory overload',
      'Participants in comprehensive Ayurvedic wellness programs'
    ],

    whatToExpect: [
      { title: 'Quiet Preparation', desc: 'Resting comfortably face-up with soothing ambient soundscapes.' },
      { title: 'Oscillating Flow', desc: 'Warm medicated oil poured continuously across the forehead.' },
      { title: 'Deep Meditative Alpha State', desc: 'Slowing of brainwaves into peaceful restoration.' },
      { title: 'Gentle Awakening & Rest', desc: 'Slow recovery and towel-dry with warm herbal water.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Preparation', desc: 'A calm environment and gentle preparation help you settle into the session.' },
      { step: '02', title: 'Shirodhara Flow', desc: 'Warm therapeutic liquid is delivered in a controlled rhythmic flow.' },
      { step: '03', title: 'Rest', desc: 'A short quiet period completes the experience.' }
    ],

    importantConsiderations: 'Discuss active scalp conditions, open wounds, or recent neck trauma before booking.',

    faqs: [
      { q: 'What does Shirodhara feel like?', a: 'Most people describe it as warm, rhythmic, and deeply calming.' },
      { q: 'Will my hair become oily?', a: 'Oil-based Shirodhara will naturally contact the scalp and hair.' },
      { q: 'How long does it last?', a: 'Sessions usually range from 45 to 60 minutes.' },
      { q: 'Is it suitable if I have a scalp condition?', a: 'Discuss active scalp conditions or wounds before booking.' },
      { q: 'Does it cure insomnia or anxiety?', a: 'It should not be marketed as a guaranteed cure. People with persistent sleep or mental-health concerns should seek appropriate professional care.' }
    ],

    cta: {
      heading: 'Make Space for Stillness',
      subheading: 'Allow the gentle rhythm of warm herbal flow to quiet your mind and dissolve tension.',
      btnText: 'Book Your Shirodhara Experience'
    },

    relatedLinks: [
      { title: 'Abhyanga Massage', link: '/services/abhyanga' },
      { title: 'Classical Panchakarma', link: '/services/panchakarma' }
    ]
  },

  // 12. Udwarthanam
  'udwarthanam': {
    slug: 'udwarthanam',
    aliasUrl: '/therapies/ayurveda/udwarthanam',
    eyebrow: 'AYURVEDIC HERBAL BODY THERAPY',
    title: 'Udwarthanam',
    tagline: 'An Invigorating Traditional Herbal Powder Massage',
    heroDescription: 'A traditional Ayurvedic body therapy using selected herbal powders and rhythmic upward massage strokes.',
    image: '/images/procedures/4.png',
    category: 'Ayurveda',
    parentLink: '/ayurveda',

    overviewTitle: 'What Is Udwarthanam?',
    overview: [
      'Udwarthanam is an Ayurvedic dry or semi-dry body therapy in which herbal powders are applied using directional massage movements.',
      'Its texture and energising technique create an experience distinctly different from oil-based Abhyanga.',
      'Oriolus Scientific may incorporate Udwarthanam within selected weight-management, Ayurveda or rejuvenation programs where suitable.'
    ],

    benefits: [
      'Natural skin exfoliation and smoothing',
      'Encourages a refreshed, toned skin feel',
      'Provides an invigorating whole-body therapy',
      'Supports body awareness and circulation',
      'Encourages healthy lymphatic flow',
      'Complements lifestyle and metabolic programs',
      'Pairs with selected Ayurvedic steam therapies',
      'Offers a traditional Kapha-focused wellness practice'
    ],

    whoMayBenefit: [
      'Individuals seeking an energising Ayurvedic therapy',
      'Participants in structured weight-management programs',
      'People interested in organic herbal body treatments',
      'Individuals seeking natural dead-cell exfoliation',
      'People exploring traditional Kapha-balancing Ayurveda'
    ],

    whatToExpect: [
      { title: 'Skin & Texture Assessment', desc: 'Selecting fine or coarse medicinal herbal powders.' },
      { title: 'Upward Directional Strokes', desc: 'Vigorous massage against hair growth to stimulate microcirculation.' },
      { title: 'Thermal Activation', desc: 'Natural heat generated from herbal friction.' },
      { title: 'Herbal Steam Rinse', desc: 'Complementary Swedana or warm shower rinse.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Skin & Suitability Review', desc: 'Determine suitable powder texture and pressure.' },
      { step: '02', title: 'Herbal Powder Therapy', desc: 'Rhythmic strokes are applied according to the chosen protocol.' },
      { step: '03', title: 'Rest or Swedana', desc: 'The therapy may be followed by herbal steam where appropriate.' }
    ],

    importantConsiderations: 'Avoid advertising it as directly “breaking down fat” or guaranteeing cellulite reduction. A suitability assessment is completed for sensitive or broken skin.',

    faqs: [
      { q: 'Is the treatment rough?', a: 'Pressure and powder texture can be adapted to your skin sensitivity.' },
      { q: 'Does it guarantee weight loss?', a: 'No. Sustainable weight management depends on multiple lifestyle and health factors.' },
      { q: 'Can it be combined with Abhyanga?', a: 'Certain Ayurvedic plans may combine oil and powder therapies.' },
      { q: 'How long does a treatment take?', a: 'Typically 45 to 60 minutes.' },
      { q: 'Is it suitable for sensitive skin?', a: 'A suitability assessment should be completed first.' }
    ],

    cta: {
      heading: 'Experience an Energising Ayurvedic Ritual',
      subheading: 'Revitalise sluggish circulation and exfoliate your skin with classical herbal powders.',
      btnText: 'Explore Udwarthanam'
    },

    relatedLinks: [
      { title: 'Herbal Swedana Therapy', link: '/services/swedana' },
      { title: 'Obesity Reduction & Lifestyle Wellness', link: '/services/obesity-reduction' }
    ]
  },

  // 13. Swedana
  'swedana': {
    slug: 'swedana',
    aliasUrl: '/therapies/ayurveda/swedana',
    eyebrow: 'HERBAL STEAM THERAPY',
    title: 'Herbal Swedana',
    tagline: 'Warmth, Relaxation & Ayurvedic Rejuvenation',
    heroDescription: 'A traditional Ayurvedic steam experience using gentle heat and selected herbal preparations to complement restorative body therapies.',
    image: '/images/procedures/1.png',
    category: 'Ayurveda',
    parentLink: '/ayurveda',

    overviewTitle: 'What Is Swedana?',
    overview: [
      'Swedana refers to traditional Ayurvedic heat or steam therapy.',
      'At Oriolus Scientific, it can be offered as a standalone supportive experience or following another Ayurvedic therapy such as Abhyanga.',
      'The body is exposed to controlled warmth while comfort and hydration are carefully considered.'
    ],

    benefits: [
      'Encourages deep muscular relaxation',
      'Provides soothing herbal warmth',
      'Complements oil-based body therapies',
      'Encourages a sense of physical lightness',
      'Creates a restorative wellness experience',
      'Supports whole-body relaxation',
      'Encourages healthy natural perspiration',
      'Complements classical Ayurvedic programs'
    ],

    whoMayBenefit: [
      'Individuals seeking soothing warmth and relaxation',
      'People experiencing general physical stiffness',
      'Participants in Abhyanga oil massage programs',
      'Panchakarma participants',
      'People seeking traditional Ayurvedic wellness rituals'
    ],

    whatToExpect: [
      { title: 'Comfortable Box Setup', desc: 'Seated inside a cedar/herbal steam cabinet with head resting outside in fresh cool air.' },
      { title: 'Infused Botanical Steam', desc: 'Herbal decoctions such as Dashamoola and eucalyptus vaporized around the body.' },
      { title: 'Hydration Monitoring', desc: 'Cold compresses and herbal water provided for comfort.' },
      { title: 'Post-Steam Cooldown', desc: 'Gentle normalization of body temperature.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Preparation', desc: 'Review comfort, hydration and suitability.' },
      { step: '02', title: 'Controlled Herbal Steam', desc: 'Experience a carefully timed steam session (15–20 minutes).' },
      { step: '03', title: 'Cooling & Hydration', desc: 'Rest and allow the body temperature to return comfortably to normal.' }
    ],

    importantConsiderations: 'Heat-based therapies may not be suitable for everyone. Discuss cardiovascular conditions, blood-pressure concerns, pregnancy, fever, dehydration or other medical issues beforehand.',

    faqs: [
      { q: 'Why might the head remain outside the steam chamber?', a: 'This improves comfort, keeps you breathing fresh air, and prevents excessive heat around the head.' },
      { q: 'How long does Swedana last?', a: 'Steam exposure is usually relatively short (15–20 minutes) and adjusted to comfort.' },
      { q: 'Can it follow Abhyanga?', a: 'Yes. This is the classical Ayurvedic sequence.' },
      { q: 'Does sweating remove all toxins?', a: 'Sweating is a normal body process, but avoid exaggerated “toxin removal” claims.' },
      { q: 'Should I hydrate afterwards?', a: 'Appropriate hydration is very important.' }
    ],

    cta: {
      heading: 'Experience Restorative Ayurvedic Warmth',
      subheading: 'Soften stiff muscles and melt away physical fatigue with aromatic herbal steam.',
      btnText: 'Include Swedana in Your Wellness Plan'
    },

    relatedLinks: [
      { title: 'Abhyanga Massage', link: '/services/abhyanga' },
      { title: 'Classical Panchakarma', link: '/services/panchakarma' }
    ]
  },

  // ─── D. ACUPUNCTURE ──────────────────────────────────────

  // 14. Acupuncture for Pain Management
  'acupuncture-pain-management': {
    slug: 'acupuncture-pain-management',
    aliasUrl: '/therapies/acupuncture/pain-management',
    eyebrow: 'ACUPUNCTURE',
    title: 'Acupuncture for Pain Management',
    tagline: 'Precision Support for Mobility & Physical Comfort',
    heroDescription: 'A personalised acupuncture approach using fine, sterile, single-use needles as part of an integrated strategy for musculoskeletal comfort and wellbeing.',
    image: '/images/procedures/4.png',
    category: 'Acupuncture',
    parentLink: '/acupuncture',

    overviewTitle: 'What Is Acupuncture?',
    overview: [
      'Acupuncture is a traditional therapeutic practice involving the insertion of very fine needles at selected points on the body.',
      'It is used in many integrative-care settings, particularly in connection with pain and musculoskeletal concerns.',
      'At Oriolus Scientific, acupuncture can be considered alongside movement, Yoga and other wellness approaches when appropriate.',
      'The number and location of points should depend on individual assessment.'
    ],

    benefits: [
      'Lower-back discomfort support',
      'Neck and shoulder tension relief',
      'General muscular discomfort easing',
      'Joint comfort and mobility assistance',
      'Movement support and flexibility',
      'Deep physical relaxation',
      'Sports-related muscular tension release',
      'Integrated pain-management support'
    ],

    whoMayBenefit: [
      'Individuals dealing with persistent back or neck discomfort',
      'People experiencing joint or muscle stiffness',
      'Athletes with sports-related muscular tightness',
      'Working professionals seeking non-pharmaceutical pain relief'
    ],

    whatToExpect: [
      { title: 'Point Identification', desc: 'Careful palpation of meridian points and myofascial trigger knots.' },
      { title: 'Fine Needle Placement', desc: 'Single-use, hair-thin sterile needles gently placed.' },
      { title: 'Sensation Induction', desc: 'Mild tingling, warmth, heaviness, or soothing pressure.' },
      { title: 'Relaxation Period', desc: 'Resting quietly for 20–30 minutes while needles remain in place.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Assessment', desc: 'Discuss the location and nature of discomfort, medical history and relevant concerns.' },
      { step: '02', title: 'Acupuncture', desc: 'Fine sterile single-use needles are placed at selected points and retained for an appropriate period.' },
      { step: '03', title: 'Review', desc: 'Needles are removed and general movement or aftercare guidance may be provided.' }
    ],

    importantConsiderations: 'Never alter or stop prescribed pain medication without your treating doctor’s guidance. Acupuncture is a complementary modality.',

    faqs: [
      { q: 'Does acupuncture hurt?', a: 'Many people experience minimal discomfort, although sensations like tingling, warmth, or heaviness can occur.' },
      { q: 'Are needles reused?', a: 'No. We strictly use sterile, disposable, single-use needles.' },
      { q: 'How many sessions will I need?', a: 'There is no universal number. Recommendations depend on your concern and individual response.' },
      { q: 'Can I take my medication?', a: 'Do not alter prescribed medication without your medical professional’s guidance.' },
      { q: 'Are there side effects?', a: 'Temporary minor effects such as small bruises, mild soreness or light-headedness can occur, but serious complications are uncommon when performed appropriately.' }
    ],

    cta: {
      heading: 'Take the Next Step Towards Greater Comfort',
      subheading: 'Consult with our certified acupuncture specialist for precision musculoskeletal support.',
      btnText: 'Book an Acupuncture Consultation'
    },

    relatedLinks: [
      { title: 'Pain Management Yoga', link: '/services/pain-management-yoga' },
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' }
    ]
  },

  // 15. Acupuncture for Chronic Conditions
  'acupuncture-chronic-conditions': {
    slug: 'acupuncture-chronic-conditions',
    aliasUrl: '/therapies/acupuncture/chronic-conditions',
    eyebrow: 'INTEGRATIVE ACUPUNCTURE',
    title: 'Acupuncture for Chronic Conditions',
    tagline: 'Complementary Wellness Support for Longer-Term Concerns',
    heroDescription: 'A personalised acupuncture service for individuals exploring complementary support alongside appropriate conventional medical care.',
    image: '/images/procedures/1.png',
    category: 'Acupuncture',
    parentLink: '/acupuncture',

    overviewTitle: 'A Complementary Approach',
    overview: [
      'People living with chronic health concerns often use multiple approaches to support quality of life.',
      'Acupuncture may be considered as part of that broader plan.',
      'At Oriolus Scientific, this service should not be positioned as curing chronic diseases or replacing evidence-based medical treatment.',
      'Instead, it can focus on wellbeing areas such as relaxation, physical comfort, sleep-related routines and general quality of life.'
    ],

    benefits: [
      'Persistent muscular tension relief',
      'Support for recurrent headache management',
      'Stress-related wellbeing concerns',
      'General fatigue easing',
      'Deep restorative relaxation',
      'Sleep-related wellness support',
      'Digestive wellbeing support',
      'General quality-of-life improvement'
    ],

    whoMayBenefit: [
      'Individuals exploring complementary options alongside ongoing medical care',
      'People living with long-term discomfort or fatigue',
      'Those seeking non-drug modalities to support daily stress and sleep',
      'Patients looking for holistic, whole-person care'
    ],

    whatToExpect: [
      { title: 'Holistic Intake Review', desc: 'Discussing your medical history, symptoms, and lifestyle goals.' },
      { title: 'Meridian Balance Strategy', desc: 'Selecting systemic points across extremities and ear/body meridians.' },
      { title: 'Gentle Rest Period', desc: '20–30 minutes of undisturbed relaxation in a quiet room.' },
      { title: 'Integration Advice', desc: 'Post-treatment hydration, movement, and lifestyle pointers.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Health & Wellness Consultation', desc: 'Discuss existing diagnoses, symptoms, medications and goals.' },
      { step: '02', title: 'Personalised Acupuncture Session', desc: 'Appropriate acupuncture points are selected according to the practitioner’s assessment.' },
      { step: '03', title: 'Ongoing Review', desc: 'Responses are reviewed and the wellness plan adjusted where appropriate.' }
    ],

    importantConsiderations: 'Complementary, Not Replacement Care: Individuals should never be advised to stop prescribed medication, delay medical investigations, discontinue specialist care, or use acupuncture instead of urgent treatment.',

    faqs: [
      { q: 'Can acupuncture cure my chronic condition?', a: 'No guaranteed cure should be promised. It is complementary wellness care.' },
      { q: 'Can it be used alongside medical treatment?', a: 'Often acupuncture is used as complementary care, but discuss your medical situation with appropriate professionals.' },
      { q: 'How many sessions are needed?', a: 'This varies significantly by individual.' },
      { q: 'Should I bring my health information?', a: 'Yes. Details of diagnosed conditions, medications and recent procedures are useful.' },
      { q: 'Is acupuncture appropriate for everyone?', a: 'Not necessarily. Suitability screening should occur before treatment.' }
    ],

    cta: {
      heading: 'Explore Acupuncture as Part of Your Wider Wellness Plan',
      subheading: 'Discover how precision meridian therapy can complement your existing healthcare regimen.',
      btnText: 'Discuss Your Needs With Our Team'
    },

    relatedLinks: [
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' },
      { title: 'Clinical Naturopathy', link: '/naturopathy' }
    ]
  },

  // ─── E. STRUCTURED WELLNESS PROGRAMS (4 Programs) ────────

  'obesity-reduction-detox': {
    slug: 'obesity-reduction-detox',
    aliasUrl: '/programs/obesity-reduction-detox',
    eyebrow: 'STRUCTURED WELLNESS PROGRAM',
    title: 'Obesity Reduction & Detox Program',
    tagline: 'A Multi-Disciplinary Lifestyle Reset for Healthy Weight',
    heroDescription: 'A physician-guided structured wellness program combining metabolic Naturopathy, Colon Hydrotherapy, Udwarthanam herbal therapies, and individualized nutrition.',
    image: '/images/procedures/1.png',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',

    overviewTitle: 'About The Program',
    overview: [
      'Our Structured Obesity Reduction & Detox Program is a multidisciplinary clinical protocol combining Colon Hydrotherapy, Udwarthanam herbal powder bodywork, metabolic-stimulating Yoga, and customized nutrition.',
      'Designed to help individuals build sustainable daily habits, break metabolic plateaus, and improve long-term vitality.'
    ],

    benefits: [
      'Comprehensive body composition and lifestyle assessment',
      'Structured Naturopathic detox and colon hydrotherapy',
      'Udwarthanam herbal powder therapies for lymphatic flow',
      'Customized plant-based low-glycemic dietary planning',
      'Joint-friendly mobility and therapeutic yoga',
      'Daily progress tracking and lifestyle habit coaching'
    ],

    whoMayBenefit: [
      'Individuals struggling with stubborn weight and metabolic fatigue',
      'People looking for structured, supervised residential or day-care cleanses',
      'Those seeking a sustainable, non-crash dietary reset'
    ],

    whatToExpect: [
      { title: 'Clinical Baseline Review', desc: 'Detailed health and vitals screening.' },
      { title: 'Daily Detox Modalities', desc: 'Hydrotherapy, herbal scrubs, and steam sessions.' },
      { title: 'Therapeutic Movement', desc: 'Joint-safe yoga and circulation exercises.' },
      { title: 'Home Maintenance Guide', desc: 'Actionable post-program habits to maintain results.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Consultation & Goal Setting', desc: 'Assess current metabolic health, lifestyle patterns, and targets.' },
      { step: '02', title: 'Active Therapeutic Cycle', desc: 'Immerse in daily natural therapies, custom nutrition, and movement.' },
      { step: '03', title: 'Sustainable Integration', desc: 'Transition back with practical, long-term healthy habits.' }
    ],

    importantConsiderations: 'Weight outcomes vary by individual. This program complements but does not replace endocrinology or specialist medical care.',

    faqs: [
      { q: 'How long is the program?', a: 'Formats range from 7-day intensive day-care to 14 or 21-day residential programs.' },
      { q: 'Is starvation required?', a: 'No. Meals are nutrient-dense, fresh, and scientifically balanced.' },
      { q: 'Can I participate if I have joint pain?', a: 'Yes, movements and therapies are customized to protect your joints.' }
    ],

    cta: {
      heading: 'Take Control of Your Metabolic Health',
      subheading: 'Join our structured, physician-supervised obesity reduction program.',
      btnText: 'Enquire About Obesity Program'
    },

    relatedLinks: [
      { title: 'Colon Hydrotherapy', link: '/services/colon-hydrotherapy' },
      { title: 'Udwarthanam Herbal Massage', link: '/services/udwarthanam' }
    ]
  },

  'diabetes-wellness': {
    slug: 'diabetes-wellness',
    aliasUrl: '/programs/diabetes-wellness',
    eyebrow: 'STRUCTURED WELLNESS PROGRAM',
    title: 'Diabetes Wellness Program',
    tagline: 'Structured Glycemic Support & Lifestyle Medicine',
    heroDescription: 'A multi-week structured lifestyle program designed to improve insulin sensitivity, reduce metabolic stress, and foster lifelong healthy nutrition.',
    image: '/images/procedures/2.png',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',

    overviewTitle: 'About The Program',
    overview: [
      'The Diabetes Wellness Program combines evidence-based lifestyle medicine, pancreatic-stimulating Yoga postures, Naturopathy hydrotherapy, and personalized low-glycemic dietary planning.',
      'Our team helps patients understand the critical lifestyle drivers of blood sugar regulation alongside their treating physician.'
    ],

    benefits: [
      'Personalized low-glycemic nutrition coaching',
      'Pancreatic-stimulating yoga and pranayama',
      'Acupuncture for microcirculation and stress relief',
      'Stress reduction protocols to lower cortisol spikes',
      'Structured daily routines and sleep hygiene support'
    ],

    whoMayBenefit: [
      'Individuals with Type 2 diabetes or prediabetes',
      'People seeking holistic support alongside prescribed medication',
      'Sedentary professionals wanting structured metabolic routines'
    ],

    whatToExpect: [
      { title: 'Intake Assessment', desc: 'Reviewing current HbA1c, diet, and medications.' },
      { title: 'Lifestyle Interventions', desc: 'Daily therapeutic movement and nourishing meals.' },
      { title: 'Education & Coaching', desc: 'Learning about carbohydrates, exercise timing, and stress.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Evaluate', desc: 'Understand blood sugar trends, lifestyle, and medications.' },
      { step: '02', title: 'Implement', desc: 'Follow a tailored movement, nutrition, and stress management plan.' },
      { step: '03', title: 'Sustain', desc: 'Maintain improved habits under ongoing clinical supervision.' }
    ],

    importantConsiderations: 'Never discontinue prescribed medications without direct instruction from your treating endocrinologist or physician.',

    faqs: [
      { q: 'Will this cure my diabetes?', a: 'No guaranteed cure should be promised. The program focuses on sustainable lifestyle improvements.' },
      { q: 'Can I do this alongside my doctor’s care?', a: 'Yes, this program is designed to be complementary.' }
    ],

    cta: {
      heading: 'Empower Your Daily Metabolic Health',
      subheading: 'Learn how structured lifestyle medicine can support your diabetes management.',
      btnText: 'Enquire About Diabetes Program'
    },

    relatedLinks: [
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' },
      { title: 'Diabetes Wellness Support', link: '/services/diabetes-wellness-support' }
    ]
  },

  'spine-joint-pain': {
    slug: 'spine-joint-pain',
    aliasUrl: '/programs/spine-joint-pain',
    eyebrow: 'STRUCTURED WELLNESS PROGRAM',
    title: 'Spine & Joint Pain Management Program',
    tagline: 'Integrative Drug-Free Protocol for Spondylosis, Arthritis & Disc Care',
    heroDescription: 'An integrative multidisciplinary clinical program combining Acupuncture, Ayurvedic Kati Vasti, mineral mud therapies, and gentle decompression yoga.',
    image: '/images/procedures/3.png',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',

    overviewTitle: 'About The Program',
    overview: [
      'This comprehensive program is engineered for individuals with chronic back discomfort, cervical spondylosis, sciatica, osteoarthritis, or joint stiffness.',
      'By bringing together Acupuncture, warm herbal oil pooling (Kati Vasti), and prop-assisted Danda/Aerial decompression yoga, patients experience gentle, restorative relief.'
    ],

    benefits: [
      'Precision acupuncture for pain and trigger point release',
      'Ayurvedic Kati Vasti warm herbal oil therapy for disc nourishment',
      'Gentle zero-compression spinal mobility practices',
      'Anti-inflammatory herbal packs and warm compresses',
      'Postural ergonomics and home movement guidance'
    ],

    whoMayBenefit: [
      'People with chronic lower back or neck discomfort',
      'Desk workers suffering from postural strain and stiffness',
      'Older adults looking for safe, gentle joint care'
    ],

    whatToExpect: [
      { title: 'Biomechanical Screening', desc: 'Assessing posture, range of motion, and pain points.' },
      { title: 'Multidisciplinary Care', desc: 'Coordinated acupuncture, herbal oils, and gentle movement.' },
      { title: 'Rehabilitation Guidance', desc: 'Core strengthening exercises to protect joints long-term.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Assessment', desc: 'Identify movement restrictions and pain triggers.' },
      { step: '02', title: 'Therapy & Alignment', desc: 'Receive coordinated natural therapies and decompression.' },
      { step: '03', title: 'Mobility & Prevention', desc: 'Adopt ergonomic daily movement routines.' }
    ],

    importantConsiderations: 'Complementary care. Bring recent scans or reports to assist practitioner planning.',

    faqs: [
      { q: 'Is this suitable for slip disc or sciatica?', a: 'Yes, treatments are modified to be gentle and non-compressive.' },
      { q: 'How many sessions are recommended?', a: 'Typically structured across 7 to 14 sessions based on severity.' }
    ],

    cta: {
      heading: 'Reclaim Pain-Free Everyday Movement',
      subheading: 'Experience our integrated natural approach to spinal alignment and joint wellness.',
      btnText: 'Book Spine & Joint Consultation'
    },

    relatedLinks: [
      { title: 'Pain Management Yoga', link: '/services/pain-management-yoga' },
      { title: 'Acupuncture for Pain Management', link: '/services/acupuncture-pain-management' }
    ]
  },

  'full-body-retreat': {
    slug: 'full-body-retreat',
    aliasUrl: '/programs/full-body-retreat',
    eyebrow: 'SIGNATURE RESIDENTIAL PROGRAM',
    title: 'Full-Body Wellness Retreat',
    tagline: 'Signature Residential Multi-Day Clinical Healing & Deep Rejuvenation',
    heroDescription: 'An all-inclusive residential healing experience combining daily Panchakarma, Therapeutic Yoga, Naturopathy, Acupuncture, and farm-to-table nutrition.',
    image: '/images/procedures/4.png',
    category: 'Structured Wellness Programs',
    parentLink: '/structured-wellness-programs',

    overviewTitle: 'About The Retreat',
    overview: [
      'Our flagship Full-Body Wellness Retreat offers complete immersion away from everyday stress.',
      'Guests stay on campus and receive daily tailored natural therapies, private consultations with Dr. Vijay and senior faculty, organic meals, and guided restorative practices.'
    ],

    benefits: [
      'All-inclusive private accommodation and therapeutic dining',
      'Daily 1-on-1 consultations with Lead Practitioner Dr. Vijay',
      'Coordinated Panchakarma, Abhyanga, and Shirodhara sessions',
      'Daily therapeutic yoga, pranayama, and meditation',
      'Complete physical detoxification and mental replenishment'
    ],

    whoMayBenefit: [
      'Individuals seeking an authentic holistic wellness sabbatical',
      'People recovering from chronic burnout and fatigue',
      'Those wanting an immersive reset in a serene, natural sanctuary'
    ],

    whatToExpect: [
      { title: 'Welcoming & Intake', desc: 'Detailed constitutional and metabolic diagnostic assessment.' },
      { title: 'Daily Treatment Rhythm', desc: 'Morning yoga, therapeutic bodywork, nutritious dining, and evening meditation.' },
      { title: 'Restoration & Departure', desc: 'Personalized wellness roadmap for continuing health at home.' }
    ],

    threeStepJourney: [
      { step: '01', title: 'Arrive & Settle', desc: 'Comprehensive health check and custom retreat scheduling.' },
      { step: '02', title: 'Immerse & Heal', desc: 'Daily natural therapies, organic nutrition, and restorative quiet.' },
      { step: '03', title: 'Renew & Return', desc: 'Leave refreshed with a personalized post-retreat wellness plan.' }
    ],

    importantConsiderations: 'Residential bookings require prior suitability screening and reservation.',

    faqs: [
      { q: 'How long are the retreat stays?', a: 'Standard packages include 3-day weekend resets, 7-day, and 14-day comprehensive retreats.' },
      { q: 'Are meals included?', a: 'Yes, all organic therapeutic meals and herbal teas are provided.' }
    ],

    cta: {
      heading: 'Immerse in Whole-Person Rejuvenation',
      subheading: 'Reserve your residential healing retreat at Oriolus Scientific.',
      btnText: 'Enquire About Retreat Reservations'
    },

    relatedLinks: [
      { title: 'Classical Panchakarma', link: '/services/panchakarma' },
      { title: 'Therapeutic Yoga', link: '/services/therapeutic-yoga' }
    ]
  }
};

export default servicesDetailData;
