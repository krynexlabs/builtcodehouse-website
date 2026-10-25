import React, { useState, useEffect } from 'react';
import { BrandMonogram } from './BrandMonogram';
import { ArrowRight } from 'lucide-react';

interface NavigationProps {
  onStartProject?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const desktopNavItems = [
    { label: 'Services', href: '#capabilities', id: 'capabilities' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Philosophy', href: '#about', id: 'about' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Insights', href: '#insights', id: 'insights' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state
      setScrolled(window.scrollY > 20);

      // 2. Scroll Progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 3. Active Section Detection (Scroll Spy)
      const sectionIds = [
        'contact',
        'insights',
        'faq',
        'about',
        'engagement',
        'work',
        'process',
        'trust',
        'capabilities',
      ];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll Lock & Escape Listener for Mobile Menu Accessibility
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color var(--transition-base), border-color var(--transition-base)',
        backgroundColor: scrolled ? 'rgba(250, 250, 250, 0.92)' : 'rgba(250, 250, 250, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
      }}
    >
      {/* Precision Scroll Progress Indicator Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--brand-accent)',
          boxShadow: '0 0 8px var(--brand-accent)',
          transition: 'width 80ms linear',
          zIndex: 60,
        }}
      />
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '84px',
            position: 'relative',
          }}
        >
          {/* LEFT: Logo & BUILTCODE HOUSE Brand Mark */}
          <a
            href="/"
            onClick={handleLogoClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
            }}
          >
            <BrandMonogram size={30} showAccent={true} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
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
                  fontSize: '9px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginTop: '2px',
                }}
              >
                DIGITAL ENGINEERING
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '36px',
            }}
            className="nav-desktop"
          >
            {desktopNavItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: '-0.01em',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                    padding: '6px 0',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)';
                  }}
                >
                  {isActive && (
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--brand-accent)',
                        boxShadow: '0 0 6px var(--brand-accent)',
                      }}
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Start a Project CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onStartProject}
              className="btn-nav-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0 18px',
                height: '38px',
                backgroundColor: 'var(--text-primary)',
                color: '#FFFFFF',
                border: '1px solid transparent',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                position: 'relative',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Start a Project</span>
              <ArrowRight
                size={13}
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  transition: 'transform var(--transition-fast)',
                }}
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                background: 'var(--surface-tertiary)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  width: '16px',
                }}
              >
                <span
                  style={{
                    height: '1.5px',
                    backgroundColor: 'var(--text-primary)',
                    width: '100%',
                  }}
                />
                <span
                  style={{
                    height: '1.5px',
                    backgroundColor: 'var(--text-primary)',
                    width: '70%',
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            style={{
              padding: '24px 0 32px 0',
              borderTop: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {desktopNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  padding: '6px 0',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Drawer Dedicated CTA Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onStartProject) onStartProject();
              }}
              className="btn-primary"
              style={{ width: '100%', height: '46px', marginTop: '12px' }}
            >
              <span>Start a Project</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 860px) {
          .nav-desktop {
            display: flex !important;
          }
          .nav-mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 380px) {
          .btn-nav-cta span {
            display: none !important;
          }
          .btn-nav-cta {
            padding: 0 12px !important;
          }
        }
      `}</style>
    </header>
  );
};
