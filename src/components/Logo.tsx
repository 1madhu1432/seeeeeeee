import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showArabic?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showArabic = true }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const arabicSizes = {
    sm: 'text-[10px]',
    md: 'text-xs sm:text-sm',
    lg: 'text-sm sm:text-base',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Wave Emblem matching Visiting Card Design */}
      <div className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 p-0.5 shadow-lg shadow-cyan-500/25 shrink-0 flex items-center justify-center`}>
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center p-1.5 relative overflow-hidden">
          {/* Wave SVG lines */}
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M4 24C10 24 12 18 18 18C24 18 26 24 32 24C35 24 37 22 38 21" stroke="#00f2fe" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M2 30C8 30 10 24 16 24C22 24 24 30 30 30C34 30 36 27 38 26" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
            <path d="M6 18C10 18 13 12 18 12C23 12 25 16 29 16C33 16 36 13 38 11" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <circle cx="28" cy="10" r="3" fill="#00f2fe" />
          </svg>
        </div>
      </div>

      {/* Brand Text Stack: English + Arabic */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight text-white ${titleSizes[size]} leading-none flex items-center gap-1.5`}>
          <span>BLUE BAHAR</span>
          <span className="text-cyan-400 font-bold tracking-wider text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
            TRADING LLC
          </span>
        </div>
        {showArabic && (
          <div className={`font-arabic text-cyan-300/90 tracking-wide font-medium mt-0.5 ${arabicSizes[size]}`}>
            بلو بحر للتجارة ذ.م.م
          </div>
        )}
      </div>
    </div>
  );
};
