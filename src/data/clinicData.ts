export type LanguageCode = 'en' | 'ur' | 'ar';
export type CurrencyCode = 'PKR' | 'USD' | 'GBP' | 'AED';
export type TreatmentCategory = 'all' | 'preventive' | 'cosmetic' | 'orthodontics' | 'restorative';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromPKR: number;
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  PKR: { code: 'PKR', symbol: '₨', rateFromPKR: 1, label: 'PKR ₨' },
  USD: { code: 'USD', symbol: '$', rateFromPKR: 1 / 278, label: 'USD $' },
  GBP: { code: 'GBP', symbol: '£', rateFromPKR: 1 / 355, label: 'GBP £' },
  AED: { code: 'AED', symbol: 'د.إ', rateFromPKR: 1 / 75.7, label: 'AED د.إ' },
};

export function formatFee(pkrAmount: number, currency: CurrencyCode): string {
  const cfg = CURRENCIES[currency];
  if (currency === 'PKR') {
    return `${cfg.symbol} ${pkrAmount.toLocaleString('en-US')}`;
  }
  const converted = Math.max(1, Math.round(pkrAmount * cfg.rateFromPKR));
  if (currency === 'AED') {
    return `${converted.toLocaleString('en-US')} ${cfg.symbol}`;
  }
  return `${cfg.symbol}${converted.toLocaleString('en-US')}`;
}

export const CLINIC_INFO = {
  name: 'DENTAL HEALTH CARE',
  category: 'Dental Clinic & Cosmetic Dentistry Center',
  leadDoctor: 'Dr. Ali Ahmed Khosa',
  phoneDisplay: '+92 333 7909299',
  phoneLocal: '0333 7909299',
  phoneHref: 'tel:+923337909299',
  whatsappNumber: '923337909299',
  whatsappBaseUrl: 'https://wa.me/923337909299',
  address: 'Panjfooti sumangli road, Simongli Town, Quetta, 87300, Pakistan',
  shortLocation: 'Samungli Road, Simongli Town, Quetta',
  plusCode: '6X8P+88 Quetta, Pakistan',
  coordinates: { lat: 30.2157662, lng: 66.9858129 },
  googleMapsUrl: 'https://maps.app.goo.gl/zVsh8mzonSwDT7668',
  googleDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=30.2157662,66.9858129',
  googleEmbedUrl: 'https://maps.google.com/maps?q=30.2157662,66.9858129&z=16&output=embed',
  rating: '5.0',
  reviewCount: 31,
  consultationFeePKR: 1500,
  hoursSummary: '12:00 PM – 10:00 PM',
  heroImage: '/src/assets/images/hero_dental_suite_1795494453662.jpg',
  sterilizationImage: '/src/assets/images/gallery_autoclave_sterile_1795494456816.jpg',
};

export interface ClinicDaySchedule {
  dayKey: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  dayIndex: number; // 0 = Sun, 1 = Mon ... 6 = Sat
  hours: string;
}

export const CLINIC_SCHEDULE: ClinicDaySchedule[] = [
  { dayKey: 'monday', dayIndex: 1, hours: '12:00 PM – 10:00 PM' },
  { dayKey: 'tuesday', dayIndex: 2, hours: '12:00 PM – 10:00 PM' },
  { dayKey: 'wednesday', dayIndex: 3, hours: '12:00 PM – 10:00 PM' },
  { dayKey: 'thursday', dayIndex: 4, hours: '12:00 PM – 10:00 PM' },
  { dayKey: 'friday', dayIndex: 5, hours: '12:00 PM – 10:00 PM' },
  { dayKey: 'saturday', dayIndex: 6, hours: '12:00 PM – 10:00 PM' },
  { dayKey: 'sunday', dayIndex: 0, hours: '12:00 PM – 10:00 PM' },
];

export interface DentalTreatment {
  id: string;
  category: Exclude<TreatmentCategory, 'all'>;
  visualType: 'photo' | 'whitening' | 'aligners' | 'implants' | 'rootcanal' | 'pediatric';
  imageUrl?: string;
  durationMins: string;
  startingFeePKR: number;
  title: Record<LanguageCode, string>;
  categoryLabel: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
}

export const TREATMENTS: DentalTreatment[] = [
  {
    id: 'scaling-polishing',
    category: 'preventive',
    visualType: 'photo',
    imageUrl: '/src/assets/images/treatment_scaling_polishing_1795494454348.jpg',
    durationMins: '30–40 min',
    startingFeePKR: 4000,
    title: {
      en: 'Scaling & Polishing (Teeth Cleaning)',
      ur: 'اسکیلنگ اور پالشنگ (دانتوں کی صفائی)',
      ar: 'إزالة الجير وتلميع الأسنان',
    },
    categoryLabel: {
      en: 'Preventive Care',
      ur: 'حفاظتی علاج',
      ar: 'الرعاية الوقائية',
    },
    description: {
      en: 'Gentle ultrasonic removal of plaque, tartar, and coffee/tea stains followed by smooth enamel polishing for fresh breath and healthy gums.',
      ur: 'الٹراسونک مشین کے ذریعے پلاک، میل اور داغوں کی آرام دہ صفائی اور مسوڑھوں کی صحت کے لیے پالشنگ۔',
      ar: 'إزالة لطيفة للبلاك والجير والتصبغات بالموجات فوق الصوتية مع تلميع المينا لصحة اللثة.',
    },
  },
  {
    id: 'teeth-whitening',
    category: 'cosmetic',
    visualType: 'whitening',
    durationMins: '45–60 min',
    startingFeePKR: 18000,
    title: {
      en: 'Teeth Whitening & Smile Makeover',
      ur: 'دانتوں کی سفیدی اور اسمائل میک اوور',
      ar: 'تبييض الأسنان وتجميل الابتسامة',
    },
    categoryLabel: {
      en: 'Cosmetic Dentistry',
      ur: 'کاسمیٹک ڈینٹسٹری',
      ar: 'طب الأسنان التجميلي',
    },
    description: {
      en: 'Enamel-safe in-clinic whitening, composite bonding, and custom porcelain veneers designed to brighten natural shade without sensitivity.',
      ur: 'بغیر حساسیت کے کلینک میں محفوظ وائٹننگ، کمپوزٹ بونڈنگ اور قدرتی مسکراہٹ کی بحالی۔',
      ar: 'تبييض آمن للمينا داخل العيادة وقشور تجميلية مخصصة لتفتيح الابتسامة دون حساسية.',
    },
  },
  {
    id: 'braces-aligners',
    category: 'orthodontics',
    visualType: 'aligners',
    durationMins: '45 min consult',
    startingFeePKR: 65000,
    title: {
      en: 'Braces & Clear Aligners (Orthodontics)',
      ur: 'بریسز اور کلیئر الائنرز (دانت سیدھے کرنا)',
      ar: 'تقويم الأسنان والشفاف المتحرك',
    },
    categoryLabel: {
      en: 'Orthodontics',
      ur: 'آرتھوڈونٹکس',
      ar: 'تقويم الأسنان',
    },
    description: {
      en: 'Discreet removable clear aligners as well as self-ligating ceramic and metal braces for balanced bite alignment in teens and adults.',
      ur: 'بچوں اور بڑوں کے ٹیڑھے دانتوں کو سیدھا کرنے کے لیے شفاف کلیئر الائنرز اور جدید سیرامک بریسز۔',
      ar: 'قوالب التقويم الشفافة القابلة للإزالة أو التقويم المعدني والخزفي لتصحيح إطباق الأسنان.',
    },
  },
  {
    id: 'implants-crowns',
    category: 'restorative',
    visualType: 'implants',
    durationMins: '60–90 min',
    startingFeePKR: 22000,
    title: {
      en: 'Dental Implants & Crowns / Bridges',
      ur: 'ڈینٹل امپلانٹس اور کراؤن / برج',
      ar: 'زراعة الأسنان والتيجان والجسور',
    },
    categoryLabel: {
      en: 'Restorative & Prosthetics',
      ur: 'بحالی و مصنوعی دانت',
      ar: 'التركيبات والزراعة',
    },
    description: {
      en: 'Biocompatible titanium dental implants and custom shade-matched zirconia crowns or bridges that restore full chewing comfort and natural look.',
      ur: 'گمشدہ دانتوں کے لیے پائیدار ٹائٹینیم امپلانٹس اور قدرتی رنگ کے مطابق زرکونیا کراؤن اور برجز۔',
      ar: 'زراعات تيتانيوم متوافقة حيوياً وتيجان وجسور زركونيا مطابقة للون الأسنان الطبيعي.',
    },
  },
  {
    id: 'root-canal',
    category: 'restorative',
    visualType: 'rootcanal',
    durationMins: '45–60 min',
    startingFeePKR: 8500,
    title: {
      en: 'Painless Root Canal Treatment (RCT)',
      ur: 'بغیر درد روٹ کینال علاج (RCT)',
      ar: 'علاج الجذور بدون ألم',
    },
    categoryLabel: {
      en: 'Endodontics',
      ur: 'اینڈوڈونٹکس',
      ar: 'علاج الأعصاب',
    },
    description: {
      en: 'Single-visit rotary endodontics under buffered local anesthesia and digital apex guidance to relieve severe toothache and save your natural tooth.',
      ur: 'جدید روٹری آلات اور بے ہوشی کے آرام دہ انجیکشن کے ساتھ ایک ہی نشست میں روٹ کینال اور دانت کی بچت۔',
      ar: 'علاج أعصاب متطور بتقنية الروتاري وتخدير موضعي مريح لحفظ السن الطبيعي في زيارة واحدة.',
    },
  },
  {
    id: 'wisdom-pediatric',
    category: 'restorative',
    visualType: 'pediatric',
    durationMins: '30–45 min',
    startingFeePKR: 3500,
    title: {
      en: 'Wisdom Tooth Extraction & Pediatric Dentistry',
      ur: 'عقل داڑھ نکالنا اور بچوں کے دانتوں کا علاج',
      ar: 'خلع ضرس العقل وطب أسنان الأطفال',
    },
    categoryLabel: {
      en: 'Oral Surgery & Kids Care',
      ur: 'اورل سرجری و بچوں کا علاج',
      ar: 'جراحة الفم والأطفال',
    },
    description: {
      en: 'Atraumatic impacted wisdom tooth removal with swift healing protocols, plus calm, child-friendly preventive sealants and cavity care.',
      ur: 'کم تکلیف کے ساتھ عقل داڑھ کی سرجری اور بچوں کے لیے دوستانہ ماحول میں دانتوں کی حفاظت و فلنگ۔',
      ar: 'خلع لطيف لضرس العقل المنطمر مع رعاية وقائية هادئة ومحببة للأطفال.',
    },
  },
];

export interface GoogleReview {
  id: string;
  author: string;
  initials: string;
  rating: number;
  timeAgo: string;
  comment: string;
  avatarTone: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Behram Bashir',
    initials: 'BB',
    rating: 5,
    timeAgo: '3 months ago',
    comment: 'Outstanding performance.. Highly recommended in quetta .. Skilful and most competent Dentist DR Ali Ahmed Khosa',
    avatarTone: 'bg-teal-600 text-white',
  },
  {
    id: 'rev-2',
    author: 'Arz Muhammad',
    initials: 'AM',
    rating: 5,
    timeAgo: '5 months ago',
    comment: 'Great experience with skilled dentists and outstanding patient care. Highly recommended for quality dental treatment',
    avatarTone: 'bg-sky-700 text-white',
  },
  {
    id: 'rev-3',
    author: 'Paneloppe',
    initials: 'PA',
    rating: 5,
    timeAgo: '5 months ago',
    comment: 'Highly recommend this clinic! Dr. Ali Ahmad is incredibly professional, polite, and attentive. Had a wonderful experience.',
    avatarTone: 'bg-emerald-700 text-white',
  },
  {
    id: 'rev-4',
    author: 'Rana Khan Attari',
    initials: 'RK',
    rating: 5,
    timeAgo: '3 months ago',
    comment: 'Best dentist in QuettaDr ali Ahmed ❤',
    avatarTone: 'bg-indigo-700 text-white',
  },
  {
    id: 'rev-5',
    author: 'Muddabir Muddabir',
    initials: 'MM',
    rating: 5,
    timeAgo: '4 months ago',
    comment: 'The experience was tremendous,the Dr was very supportive and the overall experience was 10/10',
    avatarTone: 'bg-slate-700 text-white',
  },
];

export const TIME_SLOTS = [
  '12:00 PM – 01:30 PM',
  '01:30 PM – 03:00 PM',
  '03:00 PM – 05:00 PM',
  '05:00 PM – 07:00 PM',
  '07:00 PM – 08:30 PM',
  '08:30 PM – 10:00 PM',
];
