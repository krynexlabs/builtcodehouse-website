import React from 'react';

interface BrandMonogramProps {
  size?: number;
  className?: string;
  showAccent?: boolean;
}

/**
 * BUILTCODE HOUSE — Architectural Monogram
 * 
 * Design Concept:
 * An uncompromising, geometric architectural monogram representing structural
 * engineering, cantilevered balance, and precision systems architecture.
 * Strictly avoids coding brackets, lightning bolts, and generic AI icons.
 */
export const BrandMonogram: React.FC<BrandMonogramProps> = ({
  size = 32,
  className = '',
  showAccent = true,
}) => {
  return (
    <div
      className={`brand-monogram-wrapper ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
        aria-hidden="true"
      >
        {/* Structural Pillar 1 - Left Vertical Monolith */}
        <rect
          x="6"
          y="6"
          width="7"
          height="36"
          rx="1"
          fill="var(--text-primary)"
        />

        {/* Structural Cantilever Upper - Architectural Crossbeam */}
        <path
          d="M17 6H38C39.6569 6 41 7.34315 41 9V17C41 18.6569 39.6569 20 38 20H17V6Z"
          fill="var(--text-primary)"
        />

        {/* Precision Negative Space Core Channel */}
        <rect
          x="23"
          y="11"
          width="10"
          height="4"
          rx="0.5"
          fill="var(--bg-primary)"
        />

        {/* Structural Cantilever Lower - Foundation Stele */}
        <path
          d="M17 25H36C37.6569 25 39 26.3431 39 28V39C39 40.6569 37.6569 42 36 42H17V25Z"
          fill="var(--text-primary)"
        />

        {/* Lower Core Negative Space Channel */}
        <rect
          x="23"
          y="31"
          width="9"
          height="5"
          rx="0.5"
          fill="var(--bg-primary)"
        />

        {/* Precision Laser Datum Node (Calibrated Brand Accent #0066FF) */}
        {showAccent && (
          <circle
            cx="40"
            cy="22.5"
            r="2.2"
            fill="var(--brand-accent)"
          />
        )}
      </svg>
    </div>
  );
};
