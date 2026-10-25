import React, { useState } from 'react';
import { BrandMonogram } from './BrandMonogram';
import { ArrowUpRight } from 'lucide-react';
import { LegalModal } from './LegalModal';

/**
 * BUILTCODE HOUSE — Enterprise Footer (Phase 10 Production Ready)
 */

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ open: boolean; type: 'privacy' | 'terms' }>({
    open: false,
    type: 'privacy',
  });

  // Sync modal state with URL hash (#privacy, #terms) for direct deep-linking
  React.useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash === '#privacy' || path === '/privacy') {
        setLegalModal({ open: true, type: 'privacy' });
      } else if (hash === '#terms' || path === '/terms') {
        setLegalModal({ open: true, type: 'terms' });
      }
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ open: true, type });
    history.pushState(null, '', `/${type}`);
    window.dispatchEvent(new Event('popstate'));
  };

  const handleCloseLegal = () => {
    setLegalModal((prev) => ({ ...prev, open: false }));
    const path = window.location.pathname.toLowerCase();
    if (path === '/privacy' || path === '/terms') {
      history.replaceState(null, '', '/');
      window.dispatchEvent(new Event('popstate'));
    } else if (window.location.hash === '#privacy' || window.location.hash === '#terms') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

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
    { label: 'Email: contact@builtcodehouse.com', href: 'mailto:contact@builtcodehouse.com' },
    { label: 'Technical Discovery Brief', href: '#contact' },
    { label: 'Studio: Ahmedabad, India', href: '#about' },
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
                  DIGITAL ENGINEERING STUDIO
                </span>
              </div>
            </a>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '380px',
                marginBottom: '16px',
              }}
            >
              BuiltCodeHouse is a digital engineering studio based in Ahmedabad, India, helping businesses and founders turn ambitious ideas into thoughtfully engineered digital products.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                marginBottom: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
              }}
            >
              <div>
                <span style={{ color: 'var(--brand-accent)' }}>LOCATION:</span> Ahmedabad, Gujarat, India
              </div>
              <div>
                <span style={{ color: 'var(--brand-accent)' }}>REACH:</span> Serving businesses locally &amp; globally
              </div>
            </div>

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
              © {CURRENT_YEAR} BUILTCODE HOUSE. BASED IN AHMEDABAD, INDIA. ALL RIGHTS RESERVED.
            </span>
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                handleOpenLegal('privacy');
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              PRIVACY POLICY
            </a>
            <span style={{ color: 'var(--border-subtle)', fontSize: '11px' }}>/</span>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                handleOpenLegal('terms');
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              TERMS OF ENGAGEMENT
            </a>
          </div>

          {/* FINAL CLOSING LINE */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-accent)',
                fontWeight: 600,
              }}
            >
              THOUGHTFUL ENGINEERING // SOFTWARE BUILT WITH PURPOSE.
            </span>
          </div>
        </div>
      </div>

      {/* Enterprise Legal Modal (Privacy Policy & Terms) */}
      <LegalModal
        isOpen={legalModal.open}
        type={legalModal.type}
        onClose={handleCloseLegal}
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
