import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TranslationBundle } from '../data/translations';

interface FooterAndPrivacyProps {
  t: TranslationBundle;
}

export const FooterAndPrivacy: React.FC<FooterAndPrivacyProps> = ({ t }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-50 dark:bg-[#060A12] text-slate-600 dark:text-slate-400 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-200 dark:border-slate-800">
            <div className="md:col-span-5">
              <div className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {CLINIC_INFO.name}
              </div>
              <p className="mt-3 text-sm leading-relaxed max-w-md">{t.footer.tagline}</p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#home" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                    {t.nav.treatments}
                  </a>
                </li>
                <li>
                  <a href="#specialist" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                    {t.nav.specialist}
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                    {t.nav.reviews}
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                    {t.nav.bookVisit}
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3 text-sm">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                {t.footer.contactTitle}
              </h4>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                >
                  {CLINIC_INFO.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="font-mono-tabular font-semibold text-slate-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  WhatsApp: {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="font-medium text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 underline underline-offset-4 cursor-pointer"
              >
                {t.footer.privacyPolicy}
              </button>
              <span>{t.footer.credit}</span>
            </div>
          </div>
        </div>
      </footer>

      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4"
        >
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400 shrink-0" />
                <h3
                  id="privacy-modal-title"
                  className="font-display text-lg font-bold text-slate-900 dark:text-white"
                >
                  {t.privacyModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label={t.privacyModal.close}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <p>{t.privacyModal.body1}</p>
              <p>{t.privacyModal.body2}</p>
              <p>{t.privacyModal.body3}</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 transition-colors cursor-pointer"
              >
                {t.privacyModal.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
