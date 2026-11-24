import React, { useState } from 'react';
import { Moon, Sun, Phone, MessageCircle, Menu, X, Globe, Coins } from 'lucide-react';
import {
  CLINIC_INFO,
  CURRENCIES,
  CurrencyCode,
  LanguageCode,
  formatFee,
} from '../data/clinicData';
import { TranslationBundle } from '../data/translations';

interface NavbarProps {
  t: TranslationBundle;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  language,
  onLanguageChange,
  currency,
  onCurrencyChange,
  darkMode,
  onToggleDarkMode,
  onBookClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#treatments', label: t.nav.treatments },
    { href: '#specialist', label: t.nav.specialist },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#090E17]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single clean wordmark */}
          <a
            href="#home"
            className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
          >
            <svg
              viewBox="0 0 28 28"
              className="w-6 h-6 text-teal-600 dark:text-teal-400 shrink-0"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 11.2C7.5 6.8 10.4 4.5 13.3 4.5c1.6 0 2.7.7 4.2.7s2.6-.7 4.2-.7c2.9 0 5.8 2.3 5.8 6.7 0 5.3-2.9 12.3-5.6 12.3-1.7 0-2.5-3.4-4.4-4.8-1.4-1-3.6-1-5 0-1.9 1.4-2.7 4.8-4.4 4.8-2.7 0-5.6-7-5.6-12.3z"
                transform="translate(-3.5 0)"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>DENTAL HEALTH CARE</span>
          </a>

          {/* Zone 2: 5 concise single-line links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-teal-600 dark:hover:border-teal-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA + Mobile drawer button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 cursor-pointer"
            >
              {t.nav.bookVisit}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Menu"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090E17] px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer"
            >
              {t.nav.bookVisit}
            </button>
          </div>
        )}
      </header>

      {/* Non-sticky Clinic Preferences & Direct Access Toolbar */}
      <div className="bg-slate-100/80 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Quick Direct Contact Links */}
          <div className="flex flex-wrap items-center gap-4 text-slate-700 dark:text-slate-300">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{t.controls.callClinic}:</span>
              <span className="font-mono-tabular font-semibold">{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 hidden sm:inline">
              |
            </span>

            <a
              href={CLINIC_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-emerald-700 dark:text-emerald-400 hover:underline whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.controls.whatsapp}</span>
            </a>

            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 hidden md:inline">
              |
            </span>

            <span className="hidden md:inline text-slate-500 dark:text-slate-400 whitespace-nowrap">
              {t.controls.consultStarts}{' '}
              <strong className="text-slate-800 dark:text-slate-200 tabular-nums">
                {formatFee(CLINIC_INFO.consultationFeePKR, currency)}
              </strong>
            </span>
          </div>

          {/* Interactive Global Controls: Language, Currency, Light/Dark Switch */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Language Dropdown */}
            <label className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden="true" />
              <span className="sr-only">{t.controls.languageLabel}</span>
              <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                aria-label={t.controls.languageLabel}
                className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  English
                </option>
                <option value="ur" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  اردو (Urdu)
                </option>
                <option value="ar" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  العربية (Arabic)
                </option>
              </select>
            </label>

            {/* Currency Switcher */}
            <label className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              <Coins className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden="true" />
              <span className="sr-only">{t.controls.currencyLabel}</span>
              <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                aria-label={t.controls.currencyLabel}
                className="bg-transparent text-xs font-medium tabular-nums focus:outline-none cursor-pointer"
              >
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                  <option
                    key={code}
                    value={code}
                    className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  >
                    {CURRENCIES[code].label}
                  </option>
                ))}
              </select>
            </label>

            {/* Light / Dark Mode Toggle */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-600 dark:hover:border-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-medium">{t.controls.lightMode}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-600" />
                  <span className="font-medium">{t.controls.darkMode}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
