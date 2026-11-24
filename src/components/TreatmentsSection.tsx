import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import {
  TREATMENTS,
  TreatmentCategory,
  LanguageCode,
  CurrencyCode,
  formatFee,
} from '../data/clinicData';
import { TranslationBundle } from '../data/translations';
import { ClinicalPhoto, TreatmentClinicalIllustration } from './ClinicVisuals';

interface TreatmentsSectionProps {
  t: TranslationBundle;
  language: LanguageCode;
  currency: CurrencyCode;
  onSelectTreatment: (treatmentId: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  t,
  language,
  currency,
  onSelectTreatment,
}) => {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');

  const filters: { key: TreatmentCategory; label: string }[] = [
    { key: 'all', label: t.treatments.filterAll },
    { key: 'preventive', label: t.treatments.filterPreventive },
    { key: 'cosmetic', label: t.treatments.filterCosmetic },
    { key: 'orthodontics', label: t.treatments.filterOrthodontics },
    { key: 'restorative', label: t.treatments.filterRestorative },
  ];

  const visibleTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="treatments"
      className="py-16 lg:py-24 bg-slate-50 dark:bg-[#0D1320] border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
              {t.treatments.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {t.treatments.heading}
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              {t.treatments.subheading}
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter dental treatments"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 self-start"
          >
            {filters.map((f) => {
              const isActive = activeCategory === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(f.key)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTreatments.map((item, idx) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                {item.visualType === 'photo' && item.imageUrl ? (
                  <ClinicalPhoto
                    src={item.imageUrl}
                    alt={item.title[language]}
                    fallbackTitle={item.title[language]}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <TreatmentClinicalIllustration
                    type={item.visualType as 'whitening' | 'aligners' | 'implants' | 'rootcanal' | 'pediatric'}
                  />
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Clean unboxed metadata row */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                  <span className="tabular-nums">0{idx + 1}.</span>
                  <span>{item.categoryLabel[language]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 tabular-nums">
                    <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    {item.durationMins}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {item.title[language]}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-1">
                  {item.description[language]}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {t.treatments.startingFrom}
                    </div>
                    <div className="font-display text-base font-bold text-slate-900 dark:text-white tabular-nums">
                      {formatFee(item.startingFeePKR, currency)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTreatment(item.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{t.treatments.bookThis}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
