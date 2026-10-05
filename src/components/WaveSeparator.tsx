import React from 'react';

interface WaveSeparatorProps {
  fillColor?: string;
  flip?: boolean;
  className?: string;
}

export const WaveSeparator: React.FC<WaveSeparatorProps> = ({
  fillColor = '#f8fafc', // slate-50 by default
  flip = false,
  className = ''
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none z-20 relative pointer-events-none ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="relative block w-full h-10 sm:h-16 lg:h-20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={fillColor}
        ></path>
        <path
          d="M0,20 C200,100 450,10 650,65 C850,120 1050,30 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
          opacity="0.5"
        ></path>
      </svg>
    </div>
  );
};
