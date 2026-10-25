import React, { useState } from 'react';
import { BrandMonogram } from './BrandMonogram';
import { ArrowUpRight } from 'lucide-react';
import { LegalModal } from './LegalModal';

/**
 * BUILTCODE HOUSE — Enterprise Footer (Phase 10 Production Ready)
 */

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ open: boolean; type: 'privacy' | 'terms' }>({
    open: false,
    type: 'privacy',
  });

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Why Us', href: '#trust' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Engagement', href: '#engagement' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'Email', href: 'mailto:contact@builtcodehouse.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/builtcode-house' },
    { label: 'GitHub', href: 'https://github.com/builtcodehouse' },
    { label: 'X (Twitter)', href: 'https://x.com/builtcodehouse' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '96px',
        paddingBottom: '48px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* --- MAIN ENTERPRISE FOOTER GRID --- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: '48px',
            paddingBottom: '80px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
          className="footer-main-grid"
        >
          {/* FOOTER LEFT: Architectural BCH logo + Brand Positioning */}
          <div style={{ gridColumn: 'span 5' }}>
            <a
              href="/"
              onClick={handleLogoClick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none',
                marginBottom: '20px',
              }}
            >
              <BrandMonogram size={32} showAccent={true} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  BUILTCODE HOUSE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginTop: '2px',
                  }}
                >
                  DIGITAL ENGINEERING COMPANY
                </span>
              </div>
            </a>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '360px',
                marginBottom: '28px',
              }}
            >
              We architect and build scalable software, AI systems, and enterprise platforms
              for ambitious companies worldwide.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--brand-accent)',
                  boxShadow: '0 0 6px var(--brand-accent)',
                }}
              />
              <span>SYSTEMS STATUS // TIER-1 OPERATIONAL</span>
            </div>
          </div>

          {/* FOOTER CENTER: Navigation Links */}
          <div style={{ gridColumn: 'span 4' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              NAVIGATION
            </span>

            <ul
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '12px 24px',
                padding: 0,
                margin: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FOOTER RIGHT: Social & Channels */}
          <div style={{ gridColumn: 'span 3' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              CHANNELS
            </span>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: 0,
                margin: 0,
              }}
            >
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '32px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
          className="footer-bottom-bar"
        >
          {/* Copyright & Legal Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
              }}
            >
              © {new Date().getFullYear()} BUILTCODE HOUSE. ALL RIGHTS RESERVED.
            </span>
            <span style={{ color: 'var(--border-subtle)', fontSize: '11px' }}>/</span>
            <button
              onClick={() => setLegalModal({ open: true, type: 'privacy' })}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              PRIVACY POLICY
            </button>
            <span style={{ color: 'var(--border-subtle)', fontSize: '11px' }}>/</span>
            <button
              onClick={() => setLegalModal({ open: true, type: 'terms' })}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              TERMS OF ENGAGEMENT
            </button>
          </div>

          {/* FINAL CLOSING LINE */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--brand-accent)',
                fontWeight: 600,
              }}
            >
              ENGINEERED WITH PRECISION.
            </span>
          </div>
        </div>
      </div>

      {/* Enterprise Legal Modal (Privacy Policy & Terms) */}
      <LegalModal
        isOpen={legalModal.open}
        type={legalModal.type}
        onClose={() => setLegalModal((prev) => ({ ...prev, open: false }))}
      />

      <style>{`
        @media (max-width: 1024px) {
          .footer-main-grid > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
};
