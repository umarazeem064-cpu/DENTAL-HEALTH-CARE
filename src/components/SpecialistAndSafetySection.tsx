import React from 'react';
import { ShieldCheck, Sparkles, ScanLine, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TranslationBundle } from '../data/translations';
import { ClinicalPhoto, DoctorPortraitVisual, SmileShowcaseIllustration } from './ClinicVisuals';

interface SpecialistAndSafetySectionProps {
  t: TranslationBundle;
  onBookClick: () => void;
}

export const SpecialistAndSafetySection: React.FC<SpecialistAndSafetySectionProps> = ({
  t,
  onBookClick,
}) => {
  return (
    <section
      id="specialist"
      className="py-16 lg:py-24 bg-white dark:bg-[#090E17] border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Dentist Profile Feature Block */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5">
            <DoctorPortraitVisual />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
              {t.specialist.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {t.specialist.heading}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              {t.specialist.doctorRole}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t.specialist.doctorBio}
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{t.specialist.cred1}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{t.specialist.cred2}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{t.specialist.cred3}</span>
              </li>
            </ul>

            <div className="mt-8">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {t.hero.primaryCta}
              </button>
            </div>
          </div>
        </div>

        {/* Sterilization & Painless Anesthesia Standards */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
            {t.specialist.safetyHeading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-3" />
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {t.specialist.safety1Title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.specialist.safety1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-3" />
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {t.specialist.safety2Title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.specialist.safety2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <ScanLine className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-3" />
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {t.specialist.safety3Title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.specialist.safety3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Smile Gallery & Sterilization Suite */}
        <div id="gallery" className="pt-4">
          <div className="max-w-2xl mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {t.specialist.galleryHeading}
            </h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              {t.specialist.gallerySubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <ClinicalPhoto
                  src={CLINIC_INFO.sterilizationImage}
                  alt="Class-B steam autoclave and sealed dental instrument pouches"
                  fallbackTitle={t.specialist.gal1Title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {t.specialist.gal1Title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {t.specialist.gal1Desc}
                </p>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <SmileShowcaseIllustration variant="cosmetic" />
              </div>
              <div className="p-5">
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {t.specialist.gal2Title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {t.specialist.gal2Desc}
                </p>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <SmileShowcaseIllustration variant="orthodontic" />
              </div>
              <div className="p-5">
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {t.specialist.gal3Title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {t.specialist.gal3Desc}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
