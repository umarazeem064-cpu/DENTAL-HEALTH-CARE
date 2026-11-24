import React, { useState, useEffect } from 'react';
import { CalendarCheck, MessageCircle, CheckCircle2, X, AlertCircle } from 'lucide-react';
import {
  CLINIC_INFO,
  TREATMENTS,
  TIME_SLOTS,
  LanguageCode,
} from '../data/clinicData';
import { TranslationBundle } from '../data/translations';

interface BookingSectionProps {
  t: TranslationBundle;
  language: LanguageCode;
  selectedTreatmentId: string;
  onTreatmentChange: (id: string) => void;
}

interface BookingSummary {
  fullName: string;
  phone: string;
  treatmentTitle: string;
  date: string;
  timeSlot: string;
  painLevel: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  t,
  language,
  selectedTreatmentId,
  onTreatmentChange,
}) => {
  const todayIso = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState(todayIso);
  const [preferredTime, setPreferredTime] = useState(TIME_SLOTS[2]);
  const [painLevel, setPainLevel] = useState<string>(t.booking.painRoutine);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSummary | null>(null);

  useEffect(() => {
    setPainLevel(t.booking.painRoutine);
  }, [t.booking.painRoutine]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = fullName.trim();
    const cleanedPhone = phone.replace(/[\s\-()]/g, '');

    if (!trimmedName || !preferredDate) {
      setErrorMsg(t.booking.errorRequired);
      return;
    }
    if (!/^\+?\d{10,15}$/.test(cleanedPhone)) {
      setErrorMsg(t.booking.errorPhone);
      return;
    }

    const treatmentObj = TREATMENTS.find((tr) => tr.id === selectedTreatmentId) || TREATMENTS[0];

    setConfirmedBooking({
      fullName: trimmedName,
      phone: phone.trim(),
      treatmentTitle: treatmentObj.title[language],
      date: preferredDate,
      timeSlot: preferredTime,
      painLevel,
    });
  };

  const buildWhatsappHref = (summary: BookingSummary) => {
    const message = [
      `Hello ${CLINIC_INFO.name} (${CLINIC_INFO.leadDoctor}),`,
      `I would like to book a dental appointment:`,
      `- Patient Name: ${summary.fullName}`,
      `- Phone / WhatsApp: ${summary.phone}`,
      `- Treatment: ${summary.treatmentTitle}`,
      `- Preferred Date: ${summary.date}`,
      `- Preferred Time: ${summary.timeSlot}`,
      `- Urgency / Comfort: ${summary.painLevel}`,
      `Location: ${CLINIC_INFO.shortLocation}`,
    ].join('\n');

    return `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="booking"
      className="py-16 lg:py-24 bg-slate-50 dark:bg-[#0D1320] border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {t.booking.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {t.booking.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t.booking.subheading}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 space-y-6"
        >
          {errorMsg && (
            <div
              role="alert"
              className="flex items-start gap-2.5 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="patient-name"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
              >
                {t.booking.fullNameLabel}
              </label>
              <input
                id="patient-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.booking.fullNamePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div>
              <label
                htmlFor="patient-phone"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
              >
                {t.booking.phoneLabel}
              </label>
              <input
                id="patient-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.booking.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 tabular-nums focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="booking-treatment"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
              >
                {t.booking.treatmentLabel}
              </label>
              <select
                id="booking-treatment"
                value={selectedTreatmentId}
                onChange={(e) => onTreatmentChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
              >
                {TREATMENTS.map((tr) => (
                  <option key={tr.id} value={tr.id}>
                    {tr.title[language]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="booking-date"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
              >
                {t.booking.dateLabel}
              </label>
              <input
                id="booking-date"
                type="date"
                min={todayIso}
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white tabular-nums focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div>
              <label
                htmlFor="booking-time"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
              >
                {t.booking.timeLabel}
              </label>
              <select
                id="booking-time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white tabular-nums focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Symptoms / Comfort Level */}
          <div>
            <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
              {t.booking.painLabel}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[t.booking.painRoutine, t.booking.painMild, t.booking.painUrgent].map((option) => {
                const active = painLevel === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setPainLevel(option)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border transition-colors text-start cursor-pointer ${
                      active
                        ? 'border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950/60 dark:border-teal-400 dark:text-teal-300'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              <span>{t.booking.submitButton}</span>
            </button>

            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono-tabular">
              {t.booking.whatsappDirectNote}
            </span>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4"
        >
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <h3
                  id="booking-modal-title"
                  className="font-display text-xl font-bold text-slate-900 dark:text-white"
                >
                  {t.booking.modalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                aria-label={t.booking.closeBtn}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {t.booking.modalSubtitle}
            </p>

            <dl className="mt-6 divide-y divide-slate-200 dark:divide-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-4 text-sm">
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryPatient}</dt>
                <dd className="font-semibold text-slate-900 dark:text-white text-end">
                  {confirmedBooking.fullName}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryPhone}</dt>
                <dd className="font-mono-tabular font-semibold text-slate-900 dark:text-white text-end">
                  {confirmedBooking.phone}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryTreatment}</dt>
                <dd className="font-semibold text-slate-900 dark:text-white text-end">
                  {confirmedBooking.treatmentTitle}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryDate}</dt>
                <dd className="font-mono-tabular font-semibold text-slate-900 dark:text-white text-end">
                  {confirmedBooking.date}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryTime}</dt>
                <dd className="font-mono-tabular font-semibold text-slate-900 dark:text-white text-end">
                  {confirmedBooking.timeSlot}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryUrgency}</dt>
                <dd className="font-semibold text-slate-900 dark:text-white text-end">
                  {confirmedBooking.painLevel}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsappHref(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{t.booking.sendWhatsappBtn}</span>
              </a>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {t.booking.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
