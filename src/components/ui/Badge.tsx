import React from 'react';

export interface BadgeProps {
  label: string;
  category?: string;
  showDot?: boolean;
  accentColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  category,
  showDot = true,
  accentColor = 'var(--brand-accent)',
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '6px 14px',
        borderRadius: '4px',
        backgroundColor: 'var(--surface-tertiary)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      {showDot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: accentColor,
            boxShadow: `0 0 8px ${accentColor}`,
            display: 'inline-block',
          }}
        />
      )}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
        }}
      >
        {label}
      </span>
      {category && (
        <>
          <span style={{ color: 'var(--border-hover)', fontSize: '11px' }}>/</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: accentColor,
              letterSpacing: '0.1em',
            }}
          >
            {category}
          </span>
        </>
      )}
    </div>
  );
};
