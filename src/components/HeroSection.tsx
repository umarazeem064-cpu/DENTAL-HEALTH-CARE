import React from 'react';
import { Star, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TranslationBundle } from '../data/translations';
import { ClinicalPhoto } from './ClinicVisuals';

interface HeroSectionProps {
  t: TranslationBundle;
  onBookClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t, onBookClick }) => {
  return (
    <section id="home" className="pt-10 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column equal-height hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-400 mb-4">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{t.hero.locationLine}</span>
            </div>

            <h1 className="font-display text-[clamp(2.15rem,4vw,3.4rem)] leading-[1.12] font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {t.hero.headline}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* Google Rating Inline Proof */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
              <div className="inline-flex items-center gap-1 text-amber-500" aria-label="5.0 out of 5 stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-semibold tabular-nums">{t.hero.ratingText}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <CalendarCheck className="w-4 h-4 shrink-0" />
                <span>{t.hero.primaryCta}</span>
              </button>

              <a
                href={`${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hello DENTAL HEALTH CARE Quetta, I would like to inquire about a dental appointment.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[280px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <ClinicalPhoto
                src={CLINIC_INFO.heroImage}
                alt="Modern bright treatment suite at DENTAL HEALTH CARE Quetta"
                fallbackTitle="DENTAL HEALTH CARE Treatment Suite"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Clinic KPI Strip Below Split */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {t.hero.kpi1Label}
            </div>
            <div className="mt-1 font-display text-base font-bold text-slate-900 dark:text-white tabular-nums">
              {t.hero.kpi1Value}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {t.hero.kpi2Label}
            </div>
            <div className="mt-1 font-display text-base font-bold text-slate-900 dark:text-white tabular-nums">
              {t.hero.kpi2Value}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {t.hero.kpi3Label}
            </div>
            <div className="mt-1 font-display text-base font-bold text-slate-900 dark:text-white">
              {t.hero.kpi3Value}
            </div>
          </div>

          <a
            href={CLINIC_INFO.phoneHref}
            className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-600 dark:hover:border-teal-400 transition-colors block"
          >
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {t.hero.kpi4Label}
            </div>
            <div className="mt-1 font-mono-tabular text-base font-bold text-teal-700 dark:text-teal-400">
              {t.hero.kpi4Value}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
