import React from 'react';

interface WaveDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fromColor = 'hsl(var(--background))',
  toColor = 'hsl(var(--secondary) / 0.2)',
  flip = false,
}) => {
  return (
    <div 
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}
      style={{ marginTop: '-1px', marginBottom: '-1px' }}
    >
      <svg
        className="relative block w-full h-16 md:h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`waveGradient${flip ? 'Flip' : ''}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
          fill={toColor}
        />
        <path
          d="M0,20 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          fill={toColor}
          opacity="0.5"
        />
      </svg>
    </div>
  );
};
