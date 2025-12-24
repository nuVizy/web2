import React from 'react';

interface Props {
  className?: string;
  variant?: 'soft' | 'bold';
}

const AbstractArt: React.FC<Props> = ({ className = '', variant = 'soft' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#8CFF2E" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#00A3FF" stopOpacity="0.06" />
        </linearGradient>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>

      <rect width="1200" height="800" fill="url(#g1)" />

      <g opacity={variant === 'bold' ? 0.55 : 0.28} mixBlendMode="screen">
        <path d="M-200,100 C120,200 220,0 520,100 C820,200 980,120 1300,80 L1300,900 L-200,900 Z" fill="#8CFF2E" />
        <path d="M-200,500 C180,420 360,620 720,520 C980,440 1100,620 1400,700 L1400,900 L-200,900 Z" fill="#0040FF" />
      </g>

      <g opacity="0.08" filter="url(#grain)">
        <rect width="1200" height="800" fill="#000" />
      </g>
    </svg>
  );
};

export default AbstractArt;
