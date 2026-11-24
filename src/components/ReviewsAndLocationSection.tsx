import React from 'react';
import { Star, Clock, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SCHEDULE, GOOGLE_REVIEWS } from '../data/clinicData';
import { TranslationBundle } from '../data/translations';

interface ReviewsAndLocationSectionProps {
  t: TranslationBundle;
}

export const ReviewsAndLocationSection: React.FC<ReviewsAndLocationSectionProps> = ({ t }) => {
  const todayIndex = new Date().getDay();

  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 bg-white dark:bg-[#090E17] border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Verified Google Reviews */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
                {t.reviewsLocation.eyebrow}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                {t.reviewsLocation.heading}
              </h2>
            </div>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
            >
              <span className="inline-flex items-center gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </span>
              <span className="tabular-nums">{t.reviewsLocation.verifiedBadge}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOOGLE_REVIEWS.map((review) => (
              <article
                key={review.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${review.avatarTone}`}
                        aria-hidden="true"
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {review.author}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Google Maps Review · {review.timeAgo}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-500 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <blockquote className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    “{review.comment}”
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Clinic Timings & Embedded Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Consultation Hours Table */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 text-xs font-semibold mb-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{t.reviewsLocation.openDailyNote}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t.reviewsLocation.hoursHeading}
              </h3>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {CLINIC_SCHEDULE.map((row) => {
                  const isToday = row.dayIndex === todayIndex;
                  return (
                    <div
                      key={row.dayKey}
                      className={`py-3 flex items-center justify-between text-sm ${
                        isToday
                          ? 'font-bold text-teal-700 dark:text-teal-400'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{t.reviewsLocation.days[row.dayKey]}</span>
                        {isToday && (
                          <span className="text-[11px] font-semibold">
                            · {t.reviewsLocation.todayTag}
                          </span>
                        )}
                      </span>
                      <span className="font-mono-tabular">{row.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono-tabular ps-6">
                Plus Code: {CLINIC_INFO.plusCode}
              </p>
            </div>
          </div>

          {/* Embedded Google Map Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col">
            <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {t.reviewsLocation.mapHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {CLINIC_INFO.shortLocation}
                </p>
              </div>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>{t.reviewsLocation.directionsBtn}</span>
              </a>
            </div>

            <div className="flex-1 min-h-[320px] w-full bg-slate-200 dark:bg-slate-800">
              <iframe
                title="DENTAL HEALTH CARE Quetta Google Map Location"
                src={CLINIC_INFO.googleEmbedUrl}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
