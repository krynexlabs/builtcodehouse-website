import React from 'react';
import { motion } from 'framer-motion';

/**
 * BUILTCODE HOUSE — High-Fidelity 2D/SVG Architectural Matrix Fallback
 * Displayed when WebGL is unavailable, unsupported, or if GPU initialization fails.
 */
export const SceneFallback: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c0c0c',
        overflow: 'hidden',
      }}
      role="img"
      aria-label="Architectural CAD Geometric Matrix Visualization"
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '85%', height: '85%', maxWidth: '420px' }}
      >
        {/* Coordinate Compass Ticks */}
        <circle cx="250" cy="250" r="220" stroke="rgba(245, 245, 245, 0.08)" strokeDasharray="3 6" />
        <circle cx="250" cy="250" r="160" stroke="rgba(245, 245, 245, 0.12)" />
        <circle cx="250" cy="250" r="90" stroke="var(--brand-accent)" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* Central Geometric Icosahedral Core Wireframe */}
        <polygon
          points="250,170 320,210 320,290 250,330 180,290 180,210"
          fill="rgba(18, 18, 18, 0.9)"
          stroke="var(--brand-accent)"
          strokeWidth="1.5"
        />
        <polygon
          points="250,195 295,220 295,275 250,300 205,275 205,220"
          fill="rgba(214, 255, 63, 0.04)"
          stroke="rgba(245, 245, 245, 0.25)"
          strokeWidth="1"
        />

        {/* Diagonal Crosshair Calipers */}
        <line x1="250" y1="30" x2="250" y2="470" stroke="rgba(245, 245, 245, 0.08)" strokeDasharray="4 4" />
        <line x1="30" y1="250" x2="470" y2="250" stroke="rgba(245, 245, 245, 0.08)" strokeDasharray="4 4" />

        {/* Satellite Telemetry Nodes */}
        <g>
          <circle cx="320" cy="210" r="4" fill="var(--brand-accent)" />
          <circle cx="180" cy="290" r="4" fill="var(--brand-accent)" />
          <circle cx="250" cy="170" r="4" fill="#F5F5F5" />
          <circle cx="250" cy="330" r="4" fill="#F5F5F5" />
        </g>

        {/* Orbiting Radar Indicator Ring */}
        <motion.circle
          cx="250"
          cy="250"
          r="125"
          stroke="var(--brand-accent)"
          strokeWidth="1"
          strokeDasharray="20 180"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          style={{ transformOrigin: '250px 250px' }}
        />
      </svg>

      {/* Real-Time Telemetry HUD Label */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          right: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: 'var(--text-muted)',
          backgroundColor: 'rgba(8, 8, 8, 0.75)',
          padding: '6px 12px',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <span>SYS.FALLBACK // 2D CAD SCHEMATIC</span>
        <span style={{ color: 'var(--brand-accent)' }}>LATENCY: 0MS</span>
      </div>
    </div>
  );
};
