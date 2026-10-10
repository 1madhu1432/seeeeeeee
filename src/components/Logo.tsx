import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showArabic?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
  }[size];

  return (
    <div className="flex items-center select-none">
      <img
        src="/images/logo.png"
        alt="Blue Bahar Trading LLC Dubai"
        className={`${heightClass} w-auto object-contain`}
      />
    </div>
  );
};
