import { useState, useEffect } from 'react';
import { CurrencyCode, LanguageCode, TREATMENTS, CLINIC_INFO } from './data/clinicData';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { SpecialistAndSafetySection } from './components/SpecialistAndSafetySection';
import { BookingSection } from './components/BookingSection';
import { ReviewsAndLocationSection } from './components/ReviewsAndLocationSection';
import { FooterAndPrivacy } from './components/FooterAndPrivacy';

export default function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderFading, setPreloaderFading] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [currency, setCurrency] = useState<CurrencyCode>('PKR');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(TREATMENTS[0].id);

  const t = TRANSLATIONS[language];

  // Smooth initial preloader fade
  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setPreloaderFading(true);
    }, 320);
    const removeTimer = window.setTimeout(() => {
      setPreloaderVisible(false);
    }, 720);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  // Sync Tailwind dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync RTL/LTR & lang attribute on <html>
  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'en' ? 'ltr' : 'rtl';
  }, [language]);

  const scrollToBooking = (treatmentId?: string) => {
    if (treatmentId) {
      setSelectedTreatmentId(treatmentId);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#090E17] dark:text-slate-100 transition-colors duration-200">
      {/* Sleek Loading Preloader */}
      {preloaderVisible && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#090E17] transition-opacity duration-400 ${
            preloaderFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 28 28"
              className="w-8 h-8 text-teal-600 dark:text-teal-400"
              fill="none"
            >
              <path
                d="M7.5 11.2C7.5 6.8 10.4 4.5 13.3 4.5c1.6 0 2.7.7 4.2.7s2.6-.7 4.2-.7c2.9 0 5.8 2.3 5.8 6.7 0 5.3-2.9 12.3-5.6 12.3-1.7 0-2.5-3.4-4.4-4.8-1.4-1-3.6-1-5 0-1.9 1.4-2.7 4.8-4.4 4.8-2.7 0-5.6-7-5.6-12.3z"
                transform="translate(-3.5 0)"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {CLINIC_INFO.name}
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            {CLINIC_INFO.shortLocation}
          </p>
        </div>
      )}

      <Navbar
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        onBookClick={() => scrollToBooking()}
      />

      <main className="flex-1">
        <HeroSection t={t} onBookClick={() => scrollToBooking()} />

        <TreatmentsSection
          t={t}
          language={language}
          currency={currency}
          onSelectTreatment={(id) => scrollToBooking(id)}
        />

        <SpecialistAndSafetySection t={t} onBookClick={() => scrollToBooking()} />

        <BookingSection
          t={t}
          language={language}
          selectedTreatmentId={selectedTreatmentId}
          onTreatmentChange={setSelectedTreatmentId}
        />

        <ReviewsAndLocationSection t={t} />
      </main>

      <FooterAndPrivacy t={t} />
    </div>
  );
}
