import { LanguageCode } from './clinicData';

export interface TranslationBundle {
  nav: {
    home: string;
    treatments: string;
    specialist: string;
    gallery: string;
    reviews: string;
    bookVisit: string;
  };
  controls: {
    callClinic: string;
    whatsapp: string;
    lightMode: string;
    darkMode: string;
    languageLabel: string;
    currencyLabel: string;
    consultStarts: string;
  };
  hero: {
    locationLine: string;
    headline: string;
    subheadline: string;
    ratingText: string;
    primaryCta: string;
    secondaryCta: string;
    kpi1Label: string;
    kpi1Value: string;
    kpi2Label: string;
    kpi2Value: string;
    kpi3Label: string;
    kpi3Value: string;
    kpi4Label: string;
    kpi4Value: string;
  };
  treatments: {
    eyebrow: string;
    heading: string;
    subheading: string;
    filterAll: string;
    filterPreventive: string;
    filterCosmetic: string;
    filterOrthodontics: string;
    filterRestorative: string;
    startingFrom: string;
    bookThis: string;
  };
  specialist: {
    eyebrow: string;
    heading: string;
    doctorRole: string;
    doctorBio: string;
    cred1: string;
    cred2: string;
    cred3: string;
    safetyHeading: string;
    safety1Title: string;
    safety1Desc: string;
    safety2Title: string;
    safety2Desc: string;
    safety3Title: string;
    safety3Desc: string;
    galleryHeading: string;
    gallerySubheading: string;
    gal1Title: string;
    gal1Desc: string;
    gal2Title: string;
    gal2Desc: string;
    gal3Title: string;
    gal3Desc: string;
  };
  booking: {
    eyebrow: string;
    heading: string;
    subheading: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    treatmentLabel: string;
    dateLabel: string;
    timeLabel: string;
    painLabel: string;
    painRoutine: string;
    painMild: string;
    painUrgent: string;
    submitButton: string;
    whatsappDirectNote: string;
    errorRequired: string;
    errorPhone: string;
    modalTitle: string;
    modalSubtitle: string;
    sendWhatsappBtn: string;
    closeBtn: string;
    summaryPatient: string;
    summaryPhone: string;
    summaryTreatment: string;
    summaryDate: string;
    summaryTime: string;
    summaryUrgency: string;
  };
  reviewsLocation: {
    eyebrow: string;
    heading: string;
    verifiedBadge: string;
    hoursHeading: string;
    openDailyNote: string;
    mapHeading: string;
    directionsBtn: string;
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    todayTag: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    privacyPolicy: string;
    rights: string;
    credit: string;
  };
  privacyModal: {
    title: string;
    body1: string;
    body2: string;
    body3: string;
    close: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationBundle> = {
  en: {
    nav: {
      home: 'Home',
      treatments: 'Treatments',
      specialist: 'Our Dentist',
      gallery: 'Smile Gallery',
      reviews: 'Reviews',
      bookVisit: 'Book Visit',
    },
    controls: {
      callClinic: 'Call Clinic',
      whatsapp: 'WhatsApp',
      lightMode: 'Light',
      darkMode: 'Dark',
      languageLabel: 'Language',
      currencyLabel: 'Currency',
      consultStarts: 'Consultation from',
    },
    hero: {
      locationLine: 'Panjfooti Samungli Road · Simongli Town, Quetta',
      headline: 'Painless Dental Care & Confident Smiles in Quetta',
      subheadline:
        'Modern digital diagnostics, Class-B autoclave sterilization, and gentle chairside care led by Dr. Ali Ahmed Khosa — trusted across Simongli Town and Quetta.',
      ratingText: '5.0 Rating · 31 Verified Google Reviews',
      primaryCta: 'Book Dental Appointment',
      secondaryCta: 'Chat on WhatsApp',
      kpi1Label: 'Google Rating',
      kpi1Value: '5.0 / 5.0 (31 Reviews)',
      kpi2Label: 'Clinic Hours',
      kpi2Value: 'Mon–Sun · 12 PM – 10 PM',
      kpi3Label: 'Sterilization',
      kpi3Value: '100% Class-B Autoclave',
      kpi4Label: 'Direct Line',
      kpi4Value: '+92 333 7909299',
    },
    treatments: {
      eyebrow: 'Clinical & Cosmetic Services',
      heading: 'Comprehensive Dental Treatments',
      subheading:
        'Transparent starting fees, clear session times, and gentle techniques tailored to keep you comfortable at every visit.',
      filterAll: 'All Treatments',
      filterPreventive: 'Preventive',
      filterCosmetic: 'Cosmetic',
      filterOrthodontics: 'Orthodontics',
      filterRestorative: 'Restorative & Surgical',
      startingFrom: 'Starting from',
      bookThis: 'Book This Treatment',
    },
    specialist: {
      eyebrow: 'Meet Your Dental Surgeon & Clinical Hygiene',
      heading: 'Gentle, Attentive Care Led by Dr. Ali Ahmed Khosa',
      doctorRole: 'BDS · Lead Dental Surgeon & Cosmetic Dentistry Specialist',
      doctorBio:
        'Praised by patients across Quetta for his calm chairside manner, thorough explanations, and attentive painless procedures, Dr. Ali Ahmed Khosa delivers evidence-based preventive, endodontic, and cosmetic dentistry at DENTAL HEALTH CARE.',
      cred1: 'BDS Qualified Dental Surgeon',
      cred2: 'Painless Endodontics & Cosmetic Care',
      cred3: '5.0★ Patient Satisfaction on Google',
      safetyHeading: 'Non-Negotiable Clinical Hygiene & Comfort Standards',
      safety1Title: '100% Autoclave Sterilization',
      safety1Desc:
        'Every handpiece and surgical instrument goes through sealed pouch vacuum autoclave cycles before each patient.',
      safety2Title: 'Painless Local Anesthesia',
      safety2Desc:
        'Topical numbing gel and buffered ultra-fine delivery ensure root canals and extractions feel calm and pain-free.',
      safety3Title: 'Low-Radiation Digital X-Ray',
      safety3Desc:
        'Instant chairside digital imaging lets you view clear tooth diagnostics on screen with minimal exposure.',
      galleryHeading: 'Sterile Suite & Smile Transformations',
      gallerySubheading:
        'Inside our Simongli Town clinic and real orthodontic and cosmetic alignment outcomes.',
      gal1Title: 'Class-B Sterilization Bay',
      gal1Desc: 'Sealed, individually Pouched instruments sterilized at 134°C.',
      gal2Title: 'Natural Shade Smile Makeover',
      gal2Desc: 'Composite bonding & whitening tuned for balanced enamel luminosity.',
      gal3Title: 'Orthodontic Bite & Arch Alignment',
      gal3Desc: 'Precision clear aligner therapy for symmetrical, confident smiles.',
    },
    booking: {
      eyebrow: 'Instant Appointment Scheduling',
      heading: 'Book Your Dental Visit',
      subheading:
        'Reserve your preferred time between 12:00 PM and 10:00 PM any day of the week and send instant confirmation directly to our clinic WhatsApp.',
      fullNameLabel: 'Patient Full Name',
      fullNamePlaceholder: 'e.g. Tariq Mahmood',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: 'e.g. 0333 1234567',
      treatmentLabel: 'Select Dental Treatment',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time Slot',
      painLabel: 'Symptoms / Comfort Level',
      painRoutine: 'Routine Checkup',
      painMild: 'Mild Discomfort',
      painUrgent: 'Urgent Toothache',
      submitButton: 'Confirm Appointment Request',
      whatsappDirectNote: 'Direct clinic WhatsApp: +92 333 7909299',
      errorRequired: 'Please enter your full name and select an appointment date.',
      errorPhone: 'Please enter a valid 10–15 digit phone or WhatsApp number.',
      modalTitle: 'Appointment Request Ready',
      modalSubtitle:
        'Review your visit details below and tap Send Appointment on WhatsApp to confirm immediately with Dr. Ali Ahmed Khosa’s reception desk.',
      sendWhatsappBtn: 'Send Appointment on WhatsApp',
      closeBtn: 'Done',
      summaryPatient: 'Patient',
      summaryPhone: 'Phone / WhatsApp',
      summaryTreatment: 'Treatment',
      summaryDate: 'Date',
      summaryTime: 'Time Slot',
      summaryUrgency: 'Urgency',
    },
    reviewsLocation: {
      eyebrow: 'Verified Google Maps Profile & Clinic Hours',
      heading: 'Trusted by Patients Across Quetta',
      verifiedBadge: '5.0 ★ Average from 31 Google Maps Reviews',
      hoursHeading: 'Clinic Consultation Hours',
      openDailyNote: 'Open 7 days a week · Evening appointments available',
      mapHeading: 'Visit DENTAL HEALTH CARE on Samungli Road',
      directionsBtn: 'Get Directions on Google Maps',
      days: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
      todayTag: 'Today',
    },
    footer: {
      tagline:
        'Modern painless dentistry, cosmetic smile design, and strict sterilization standards serving families on Panjfooti Samungli Road, Simongli Town, Quetta.',
      quickLinks: 'Clinic Sections',
      contactTitle: 'Clinic Location & Contact',
      privacyPolicy: 'Privacy Policy',
      rights: 'DENTAL HEALTH CARE Quetta. All clinical appointments subject to dentist confirmation.',
      credit: 'Designed for DENTAL HEALTH CARE · Quetta, Pakistan',
    },
    privacyModal: {
      title: 'Patient Privacy & Appointment Data Policy',
      body1:
        'DENTAL HEALTH CARE (Panjfooti Samungli Road, Simongli Town, Quetta) respects your medical privacy. Information entered in the online appointment form (your name, phone number, preferred date, and symptoms) is formatted exclusively on your device to initiate a direct WhatsApp or phone consultation with the clinic desk.',
      body2:
        'We do not sell, share, or transmit your dental inquiry data to third-party marketing brokers. All clinical records taken in person at the clinic are kept strictly confidential under medical ethics.',
      body3:
        'For urgent dental assistance or to update an existing appointment, please call +92 333 7909299 during clinic hours (12:00 PM – 10:00 PM daily).',
      close: 'Close Policy',
    },
  },
  ur: {
    nav: {
      home: 'ہوم',
      treatments: 'علاج',
      specialist: 'ڈاکٹر',
      gallery: 'اسمائل گیلری',
      reviews: 'ریویوز',
      bookVisit: 'اپوائنٹمنٹ بک کریں',
    },
    controls: {
      callClinic: 'کلینک کال کریں',
      whatsapp: 'واٹس ایپ',
      lightMode: 'لائٹ',
      darkMode: 'ڈارک',
      languageLabel: 'زبان',
      currencyLabel: 'کرنسی',
      consultStarts: 'مشورہ فیس از',
    },
    hero: {
      locationLine: 'پنجفوٹی سمنگلی روڈ · سمنگلی ٹاؤن، کوئٹہ',
      headline: 'کوئٹہ میں بغیر درد جدید ڈینٹل کیئر اور پراعتماد مسکراہٹ',
      subheadline:
        'ڈاکٹر علی احمد کھوسہ کی زیرِ نگرانی جدید ڈیجیٹل تشخیص، آٹوکلیو جراثیم کش صفائی اور دوستانہ ماحول میں معیاری علاج۔',
      ratingText: '5.0 ریٹنگ · گوگل میپس پر 31 تصدیق شدہ ریویوز',
      primaryCta: 'اپوائنٹمنٹ بک کریں',
      secondaryCta: 'واٹس ایپ پر رابطہ کریں',
      kpi1Label: 'گوگل ریٹنگ',
      kpi1Value: '5.0 / 5.0 (31 ریویوز)',
      kpi2Label: 'کلینک اوقات',
      kpi2Value: 'پیر تا اتوار · دوپہر 12 تا رات 10',
      kpi3Label: 'اسٹرلائزیشن',
      kpi3Value: '100% کلاس بی آٹوکلیو',
      kpi4Label: 'براہِ راست نمبر',
      kpi4Value: '+92 333 7909299',
    },
    treatments: {
      eyebrow: 'کلینیکل اور کاسمیٹک سروسز',
      heading: 'دانتوں کے مکمل اور جدید علاج',
      subheading:
        'شفاف ابتدائی فیس، واضح وقت اور بغیر درد علاج تاکہ ہر وزٹ آپ کے لیے پُرسکون ہو۔',
      filterAll: 'تمام علاج',
      filterPreventive: 'حفاظتی صفائی',
      filterCosmetic: 'کاسمیٹک',
      filterOrthodontics: 'آرتھوڈونٹکس',
      filterRestorative: 'بحالی و سرجری',
      startingFrom: 'ابتدائی فیس',
      bookThis: 'یہ علاج بک کریں',
    },
    specialist: {
      eyebrow: 'ہمارے ماہر ڈینٹل سرجن اور صفائی کے معیارات',
      heading: 'ڈاکٹر علی احمد کھوسہ کی زیرِ نگرانی پُرسکون علاج',
      doctorRole: 'BDS · سینئر ڈینٹل سرجن و کاسمیٹک اسپیشلسٹ',
      doctorBio:
        'کوئٹہ بھر کے مریضوں کی جانب سے بہترین اخلاق، توجہ اور مہارت کے لیے سراہے جانے والے ڈاکٹر علی احمد کھوسہ ڈینٹل ہیلتھ کیئر میں جدید اور بغیر درد علاج فراہم کرتے ہیں۔',
      cred1: 'BDS کوالیفائیڈ ڈینٹل سرجن',
      cred2: 'بغیر درد روٹ کینال اور کاسمیٹک ماہر',
      cred3: 'گوگل پر 5.0★ مریضوں کا اعتماد',
      safetyHeading: 'مکمل جراثیم کش صفائی اور آرام کے معیارات',
      safety1Title: '100% آٹوکلیو اسٹرلائزیشن',
      safety1Desc:
        'ہر مریض کے لیے آلات کو سیل شدہ پاؤچ میں جدید کلاس بی آٹوکلیو سے جراثیم سے پاک کیا جاتا ہے۔',
      safety2Title: 'بغیر درد انستھیزیا',
      safety2Desc:
        'نمبنگ جیل اور باریک جدید انجیکشن سے روٹ کینال اور دانت نکالنا بالکل آسان ہو جاتا ہے۔',
      safety3Title: 'ڈیجیٹل ایکس رے',
      safety3Desc:
        'کم شعاعوں والا فوری ڈیجیٹل ایکس رے اسکرین پر واضح تشخیص فراہم کرتا ہے۔',
      galleryHeading: 'اسٹرلائزیشن روم اور اسمائل گیلری',
      gallerySubheading: 'سمنگلی ٹاؤن کلینک کی صفائی اور خوبصورت مسکراہٹوں کے نتائج۔',
      gal1Title: 'کلاس بی آٹوکلیو یونٹ',
      gal1Desc: '134 ڈگری سینٹی گریڈ پر جراثیم سے پاک سیل شدہ آلات۔',
      gal2Title: 'قدرتی مسکراہٹ کی بحالی',
      gal2Desc: 'دانتوں کی سفیدی اور کاسمیٹک بونڈنگ سے متوازن چمک۔',
      gal3Title: 'کلیئر الائنرز اور آرتھوڈونٹکس',
      gal3Desc: 'ٹیڑھے دانتوں کی درستگی اور پراعتماد مسکراہٹ۔',
    },
    booking: {
      eyebrow: 'فوری اپوائنٹمنٹ بکنگ',
      heading: 'اپنا ڈینٹل وزٹ بک کریں',
      subheading:
        'ہفتے کے ساتوں دن دوپہر 12 سے رات 10 بجے تک اپنا وقت منتخب کریں اور واٹس ایپ پر فوری تصدیق بھیجیں۔',
      fullNameLabel: 'مریض کا مکمل نام',
      fullNamePlaceholder: 'مثلاً طارق محمود',
      phoneLabel: 'فون / واٹس ایپ نمبر',
      phonePlaceholder: 'مثلاً 0333 1234567',
      treatmentLabel: 'علاج منتخب کریں',
      dateLabel: 'مطلوبہ تاریخ',
      timeLabel: 'مطلوبہ وقت',
      painLabel: 'علامات / تکلیف کی نوعیت',
      painRoutine: 'معمول کا معائنہ',
      painMild: 'ہلکا درد / حساسیت',
      painUrgent: 'شدید دانت درد (فوری)',
      submitButton: 'اپوائنٹمنٹ کی تصدیق کریں',
      whatsappDirectNote: 'کلینک واٹس ایپ: +92 333 7909299',
      errorRequired: 'براہ کرم اپنا مکمل نام اور تاریخ درج کریں۔',
      errorPhone: 'براہ کرم درست فون یا واٹس ایپ نمبر درج کریں۔',
      modalTitle: 'اپوائنٹمنٹ کی تفصیلات تیار ہیں',
      modalSubtitle:
        'اپنی تفصیلات چیک کریں اور کلینک کے واٹس ایپ پر فوری تصدیق کے لیے نیچے بٹن دبائیں۔',
      sendWhatsappBtn: 'واٹس ایپ پر اپوائنٹمنٹ بھیجیں',
      closeBtn: 'مکمل',
      summaryPatient: 'مریض',
      summaryPhone: 'فون / واٹس ایپ',
      summaryTreatment: 'علاج',
      summaryDate: 'تاریخ',
      summaryTime: 'وقت',
      summaryUrgency: 'نوعیت',
    },
    reviewsLocation: {
      eyebrow: 'گوگل میپس پروفائل اور اوقاتِ کار',
      heading: 'کوئٹہ کے مریضوں کا مکمل اعتماد',
      verifiedBadge: '31 گوگل ریویوز میں 5.0 ★ ریٹنگ',
      hoursHeading: 'کلینک کے اوقاتِ کار',
      openDailyNote: 'ہفتے کے ساتوں دن کھلا ہے · شام کے اوقات دستیاب',
      mapHeading: 'ڈینٹل ہیلتھ کیئر سمنگلی روڈ پر تشریف لائیں',
      directionsBtn: 'گوگل میپس پر راستہ دیکھیں',
      days: {
        monday: 'پیر',
        tuesday: 'منگل',
        wednesday: 'بدھ',
        thursday: 'جمعرات',
        friday: 'جمعہ',
        saturday: 'ہفتہ',
        sunday: 'اتوار',
      },
      todayTag: 'آج',
    },
    footer: {
      tagline:
        'پنجفوٹی سمنگلی روڈ، سمنگلی ٹاؤن، کوئٹہ میں جدید اور بغیر درد ڈینٹل علاج کی سہولت۔',
      quickLinks: 'اہم سیکشنز',
      contactTitle: 'پتہ اور رابطہ',
      privacyPolicy: 'پرائیویسی پالیسی',
      rights: 'DENTAL HEALTH CARE کوئٹہ۔ تمام اپوائنٹمنٹس کلینک کی تصدیق سے مشروط ہیں۔',
      credit: 'DENTAL HEALTH CARE · کوئٹہ، پاکستان',
    },
    privacyModal: {
      title: 'مریض کی رازداری اور ڈیٹا پالیسی',
      body1:
        'ڈینٹل ہیلتھ کیئر آپ کی رازداری کا احترام کرتا ہے۔ فارم میں درج کی گئی معلومات صرف آپ کے آلے پر واٹس ایپ پیغام تیار کرنے کے لیے استعمال ہوتی ہیں۔',
      body2:
        'ہم آپ کا ذاتی یا طبی ڈیٹا کسی تیسرے فریق کو فراہم نہیں کرتے۔',
      body3:
        'فوری رہنمائی کے لیے روزانہ دوپہر 12 سے رات 10 بجے تک +92 333 7909299 پر کال کریں۔',
      close: 'بند کریں',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      treatments: 'العلاجات',
      specialist: 'الطبيب',
      gallery: 'معرض الابتسامة',
      reviews: 'التقييمات',
      bookVisit: 'احجز موعداً',
    },
    controls: {
      callClinic: 'اتصل بالعيادة',
      whatsapp: 'واتساب',
      lightMode: 'نهاري',
      darkMode: 'ليلي',
      languageLabel: 'اللغة',
      currencyLabel: 'العملة',
      consultStarts: 'الاستشارة تبدأ من',
    },
    hero: {
      locationLine: 'طريق بنجفوتي سامونغلي · حي سامونغلي، كويتا',
      headline: 'رعاية أسنان بدون ألم وابتسامات واثقة في كويتا',
      subheadline:
        'تشخيص رقمي متطور وتعقيم أوتوكلاف فئة B ورعاية لطيفة بإشراف الدكتور علي أحمد خوسة لراحة عائلتك.',
      ratingText: 'تقييم 5.0 · 31 مراجعة موثقة على خرائط جوجل',
      primaryCta: 'احجز موعد أسنان',
      secondaryCta: 'تواصل عبر واتساب',
      kpi1Label: 'تقييم جوجل',
      kpi1Value: '5.0 / 5.0 (31 تقييم)',
      kpi2Label: 'ساعات العمل',
      kpi2Value: 'يومياً · 12 ظهراً – 10 مساءً',
      kpi3Label: 'التعقيم',
      kpi3Value: '100% أوتوكلاف فئة B',
      kpi4Label: 'الهاتف المباشر',
      kpi4Value: '+92 333 7909299',
    },
    treatments: {
      eyebrow: 'الخدمات العلاجية والتجميلية',
      heading: 'علاجات الأسنان الشاملة',
      subheading:
        'أسعار ابتدائية واضحة وأوقات جلسات دقيقة وتقنيات حديثة تضمن راحتك في كل زيارة.',
      filterAll: 'جميع العلاجات',
      filterPreventive: 'الوقاية',
      filterCosmetic: 'التجميل',
      filterOrthodontics: 'التقويم',
      filterRestorative: 'الترميم والجراحة',
      startingFrom: 'تبدأ من',
      bookThis: 'احجز هذا العلاج',
    },
    specialist: {
      eyebrow: 'تعرف على طبيبك ومعايير التعقيم',
      heading: 'عناية هادئة ومتقنة بقيادة الدكتور علي أحمد خوسة',
      doctorRole: 'BDS · أخصائي جراحة وتجميل الأسنان',
      doctorBio:
        'يشتهر الدكتور علي أحمد خوسة بين مرضى كويتا بأسلوبه اللطيف وشرحه الواضح ودقته في الإجراءات الخالية من الألم في عيادة DENTAL HEALTH CARE.',
      cred1: 'بكالوريوس جراحة الفم والأسنان (BDS)',
      cred2: 'علاج الجذور وتجميل الأسنان بدون ألم',
      cred3: 'تقييم 5.0★ على خرائط جوجل',
      safetyHeading: 'معايير التعقيم والراحة الصارمة',
      safety1Title: 'تعقيم أوتوكلاف 100%',
      safety1Desc:
        'يتم تغليف وتعقيم كافة الأدوات الطبية لكل مريض على حدة بدورات بخار فراغي.',
      safety2Title: 'تخدير موضعي مريح',
      safety2Desc:
        'جل مخدر موضعي وإبر فائقة الدقة لجعل علاج العصب والخلع تجربة هادئة.',
      safety3Title: 'أشعة رقمية منخفضة الإشعاع',
      safety3Desc:
        'تصوير رقمي فوري بجانب الكرسي لتشخيص واضح وأمان عالٍ.',
      galleryHeading: 'غرفة التعقيم ومعرض الابتسامات',
      gallerySubheading: 'جولة داخل عيادتنا في سامونغلي ونتائج العلاجات التجميلية والتقويمية.',
      gal1Title: 'وحدة التعقيم فئة B',
      gal1Desc: 'أدوات معقمة ومغلفة فردياً عند درجة 134 مئوية.',
      gal2Title: 'تصميم الابتسامة الطبيعي',
      gal2Desc: 'تبييض وترميم تجميلي متناغم مع لون المينا الطبيعي.',
      gal3Title: 'تقويم الأسنان الشفاف',
      gal3Desc: 'تصحيح دقيق لإطباق الأسنان لابتسامة متناسقة.',
    },
    booking: {
      eyebrow: 'حجز المواعيد الفوري',
      heading: 'احجز زيارتك لعيادة الأسنان',
      subheading:
        'اختر الوقت المناسب لك يومياً من 12:00 ظهراً حتى 10:00 مساءً وأرسل تأكيد الموعد مباشرة عبر واتساب.',
      fullNameLabel: 'الاسم الكامل للمريض',
      fullNamePlaceholder: 'مثال: طارق محمود',
      phoneLabel: 'رقم الهاتف / واتساب',
      phonePlaceholder: 'مثال: 0333 1234567',
      treatmentLabel: 'اختر العلاج المطلوب',
      dateLabel: 'التاريخ المفضل',
      timeLabel: 'الفترة الزمنية المفضلة',
      painLabel: 'الأعراض / مستوى الألم',
      painRoutine: 'فحص روتيني',
      painMild: 'انزعاج خفيف',
      painUrgent: 'ألم أسنان حاد (عاجل)',
      submitButton: 'تأكيد طلب الموعد',
      whatsappDirectNote: 'واتساب العيادة المباشر: +92 333 7909299',
      errorRequired: 'يرجى إدخال الاسم الكامل واختيار تاريخ الموعد.',
      errorPhone: 'يرجى إدخال رقم هاتف أو واتساب صحيح.',
      modalTitle: 'ملخص الموعد جاهز',
      modalSubtitle:
        'راجع تفاصيل الحجز أدناه واضغط على إرسال الموعد عبر واتساب للتأكيد الفوري مع استقبال العيادة.',
      sendWhatsappBtn: 'إرسال الموعد عبر واتساب',
      closeBtn: 'تم',
      summaryPatient: 'المريض',
      summaryPhone: 'الهاتف / واتساب',
      summaryTreatment: 'العلاج',
      summaryDate: 'التاريخ',
      summaryTime: 'الوقت',
      summaryUrgency: 'الحالة',
    },
    reviewsLocation: {
      eyebrow: 'ملف خرائط جوجل وساعات العمل',
      heading: 'موثوق من قبل المرضى في كويتا',
      verifiedBadge: 'متوسط 5.0 ★ من 31 مراجعة على جوجل',
      hoursHeading: 'ساعات عمل العيادة',
      openDailyNote: 'مفتوح طوال أيام الأسبوع · مواعيد مسائية متاحة',
      mapHeading: 'موقع DENTAL HEALTH CARE على طريق سامونغلي',
      directionsBtn: 'احصل على الاتجاهات في خرائط جوجل',
      days: {
        monday: 'الاثنين',
        tuesday: 'الثلاثاء',
        wednesday: 'الأربعاء',
        thursday: 'الخميس',
        friday: 'الجمعة',
        saturday: 'السبت',
        sunday: 'الأحد',
      },
      todayTag: 'اليوم',
    },
    footer: {
      tagline:
        'طب أسنان حديث بدون ألم وتجميل الابتسامة ومعايير تعقيم صارمة في طريق بنجفوتي سامونغلي، كويتا.',
      quickLinks: 'أقسام العيادة',
      contactTitle: 'العنوان والتواصل',
      privacyPolicy: 'سياسة الخصوصية',
      rights: 'DENTAL HEALTH CARE كويتا. تخضع المواعيد لتأكيد العيادة.',
      credit: 'DENTAL HEALTH CARE · كويتا، باكستان',
    },
    privacyModal: {
      title: 'سياسة خصوصية المريض وبيانات الحجز',
      body1:
        'تحترم عيادة DENTAL HEALTH CARE خصوصيتك الطبية. تُستخدم البيانات المدخلة في نموذج الحجز على جهازك فقط لإعداد رسالة واتساب مباشرة إلى استقبال العيادة.',
      body2: 'لا نقوم ببيع أو مشاركة معلوماتك الصحية مع أي أطراف خارجية.',
      body3: 'للحالات الطارئة يرجى الاتصال على +92 333 7909299 يومياً من 12 ظهراً حتى 10 مساءً.',
      close: 'إغلاق',
    },
  },
};
