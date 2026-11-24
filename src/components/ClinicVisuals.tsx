import React, { useState } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface ClinicalPhotoProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

export const ClinicalPhoto: React.FC<ClinicalPhotoProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-teal-50/60 to-slate-200 dark:from-slate-800 dark:via-teal-950/40 dark:to-slate-900 text-slate-600 dark:text-slate-300 p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ShieldCheck className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-2" strokeWidth={1.6} />
        <span className="text-xs font-medium text-center">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      loading="lazy"
    />
  );
};

interface TreatmentVectorProps {
  type: 'whitening' | 'aligners' | 'implants' | 'rootcanal' | 'pediatric';
}

export const TreatmentClinicalIllustration: React.FC<TreatmentVectorProps> = ({ type }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-teal-50/70 dark:from-slate-900 dark:via-slate-800/80 dark:to-teal-950/30 p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '20px 20px' }} />

      {type === 'whitening' && (
        <svg viewBox="0 0 220 150" className="w-44 h-32 text-teal-600 dark:text-teal-400" fill="none" aria-hidden="true">
          <rect x="26" y="22" width="168" height="106" rx="14" className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1.5" />
          <path d="M62 66c0-16 11-26 24-26 9 0 15 4 24 4s15-4 24-4c13 0 24 10 24 26 0 20-12 42-22 42-6 0-10-12-16-18-5-5-15-5-20 0-6 6-10 18-16 18-10 0-22-22-22-42z"
                className="fill-teal-50 dark:fill-teal-950/60 stroke-teal-600 dark:stroke-teal-400" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M84 54c4-4 10-6 16-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M168 38l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" className="fill-amber-400" />
          <text x="110" y="119" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[9px] font-medium">SHADE B1 NATURAL ENAMEL</text>
        </svg>
      )}

      {type === 'aligners' && (
        <svg viewBox="0 0 220 150" className="w-44 h-32 text-teal-600 dark:text-teal-400" fill="none" aria-hidden="true">
          <rect x="26" y="22" width="168" height="106" rx="14" className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1.5" />
          <path d="M52 88c14-30 34-44 58-44s44 14 58 44" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="12" strokeLinecap="round" />
          <path d="M52 88c14-30 34-44 58-44s44 14 58 44" className="stroke-teal-500/80 dark:stroke-teal-400/80" strokeWidth="3" strokeDasharray="8 6" strokeLinecap="round" />
          <circle cx="80" cy="56" r="5" className="fill-white dark:fill-slate-900 stroke-teal-600 dark:stroke-teal-400" strokeWidth="2" />
          <circle cx="110" cy="44" r="5" className="fill-white dark:fill-slate-900 stroke-teal-600 dark:stroke-teal-400" strokeWidth="2" />
          <circle cx="140" cy="56" r="5" className="fill-white dark:fill-slate-900 stroke-teal-600 dark:stroke-teal-400" strokeWidth="2" />
          <text x="110" y="114" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[9px] font-medium">DIGITAL ARCH ALIGNMENT</text>
        </svg>
      )}

      {type === 'implants' && (
        <svg viewBox="0 0 220 150" className="w-44 h-32 text-teal-600 dark:text-teal-400" fill="none" aria-hidden="true">
          <rect x="26" y="22" width="168" height="106" rx="14" className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1.5" />
          <path d="M88 46c0-10 10-14 22-14s22 4 22 14c0 9-4 17-9 19H97c-5-2-9-10-9-19z" className="fill-teal-50 dark:fill-teal-950/60 stroke-teal-600 dark:stroke-teal-400" strokeWidth="2" />
          <rect x="103" y="65" width="14" height="10" rx="2" className="fill-slate-200 dark:fill-slate-700 stroke-slate-500" strokeWidth="1.5" />
          <path d="M101 77h18l-2 36h-14l-2-36z" className="fill-slate-100 dark:fill-slate-800 stroke-teal-600 dark:stroke-teal-400" strokeWidth="1.8" />
          <path d="M100 84h20M101 92h18M102 100h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <text x="110" y="124" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[8.5px] font-medium">TITANIUM POST &amp; ZIRCONIA</text>
        </svg>
      )}

      {type === 'rootcanal' && (
        <svg viewBox="0 0 220 150" className="w-44 h-32 text-teal-600 dark:text-teal-400" fill="none" aria-hidden="true">
          <rect x="26" y="22" width="168" height="106" rx="14" className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1.5" />
          <path d="M78 55c0-13 9-20 19-20 6 0 10 3 13 3s7-3 13-3c10 0 19 7 19 20 0 17-8 44-16 44-5 0-8-14-16-14s-11 14-16 14c-8 0-16-27-16-44z"
                className="fill-slate-50 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.8" />
          <path d="M98 54v40M122 54v40M98 54c4-5 20-5 24 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="110" cy="52" r="4" className="fill-teal-500/20 stroke-teal-600 dark:stroke-teal-400" strokeWidth="1.5" />
          <text x="110" y="118" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[8.5px] font-medium">ROTARY ENDODONTIC SEAL</text>
        </svg>
      )}

      {type === 'pediatric' && (
        <svg viewBox="0 0 220 150" className="w-44 h-32 text-teal-600 dark:text-teal-400" fill="none" aria-hidden="true">
          <rect x="26" y="22" width="168" height="106" rx="14" className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700" strokeWidth="1.5" />
          <circle cx="92" cy="64" r="20" className="fill-teal-50 dark:fill-teal-950/60 stroke-teal-600 dark:stroke-teal-400" strokeWidth="2" />
          <path d="M84 65c3 4 13 4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M126 52l22 10v16c0 12-9 22-22 26-13-4-22-14-22-26V62l22-10z" className="fill-white dark:fill-slate-900 stroke-teal-600 dark:stroke-teal-400" strokeWidth="2" />
          <path d="M119 76l5 5 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="110" y="118" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[8.5px] font-medium">GENTLE SURGICAL &amp; KIDS CARE</text>
        </svg>
      )}
    </div>
  );
};

export const DoctorPortraitVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-between bg-gradient-to-b from-teal-50/80 via-white to-slate-100 dark:from-teal-950/40 dark:via-slate-900 dark:to-slate-950 p-8 border-b lg:border-b-0 lg:border-e border-slate-200 dark:border-slate-800">
      <div className="w-full flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
        <span>BDS · Dental Surgeon</span>
        <span className="font-mono-tabular">Quetta, PK</span>
      </div>

      <div className="my-6 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full bg-teal-600/10 dark:bg-teal-400/10 border border-teal-600/25 dark:border-teal-400/25 flex items-center justify-center mb-4">
          <svg viewBox="0 0 80 80" className="w-20 h-20 text-teal-700 dark:text-teal-300" fill="none" aria-hidden="true">
            <circle cx="40" cy="27" r="13" stroke="currentColor" strokeWidth="2.2" />
            <path d="M17 65c2-13 11-20 23-20s21 7 23 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M34 49l6 9 6-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-display text-lg font-bold text-slate-900 dark:text-white">Dr. Ali Ahmed Khosa</p>
        <p className="text-xs text-teal-700 dark:text-teal-400 mt-1">Lead Cosmetic &amp; Restorative Dentist</p>
      </div>

      <div className="w-full pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
        <span>5.0★ Google Rated</span>
        <span className="tabular-nums">12 PM – 10 PM</span>
      </div>
    </div>
  );
};

export const SmileShowcaseIllustration: React.FC<{ variant: 'cosmetic' | 'orthodontic' }> = ({ variant }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-slate-50 via-white to-teal-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-teal-950/30 p-6">
      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400">
        <span>{variant === 'cosmetic' ? 'Veneer & Shade Guide' : 'Clear Aligner Progression'}</span>
        <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
      </div>

      {variant === 'cosmetic' ? (
        <div className="my-auto py-4">
          <div className="grid grid-cols-4 gap-2 mb-3">
            {['A3', 'A2', 'A1', 'B1'].map((shade, idx) => (
              <div key={shade} className="text-center">
                <div
                  className="h-12 rounded-lg border border-slate-200 dark:border-slate-700 mb-1"
                  style={{
                    backgroundColor: ['#E7DEC8', '#EFE8D8', '#F6F3EB', '#FCFBF8'][idx],
                  }}
                />
                <span className="text-[11px] font-mono-tabular text-slate-600 dark:text-slate-300">{shade}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
            Enamel-safe shade lift up to 3 natural Vita levels
          </p>
        </div>
      ) : (
        <div className="my-auto py-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            {['Month 1', 'Month 4', 'Month 8'].map((stage, i) => (
              <div
                key={stage}
                className="flex-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-3 text-center"
              >
                <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 tabular-nums">
                  {['Stage 01', 'Stage 08', 'Final'][i]}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{stage}</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
            Custom digital bite symmetry planning
          </p>
        </div>
      )}

      <div className="text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-700/80 pt-2.5 flex items-center justify-between">
        <span>Clinical Case Outcome</span>
        <span>DENTAL HEALTH CARE</span>
      </div>
    </div>
  );
};
