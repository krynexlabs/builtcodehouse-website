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

  const navItems = [
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Why Us', href: '#trust', id: 'trust' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Engagement', href: '#engagement', id: 'engagement' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Insights', href: '#insights', id: 'insights' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const desktopNavItems = [
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Engagement', href: '#engagement', id: 'engagement' },
    { label: 'Insights', href: '#insights', id: 'insights' },
    { label: 'About', href: '#about', id: 'about' },
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
        backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.92)' : 'rgba(8, 8, 8, 0.45)',
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
            title="BuiltCodeHouse | Software Development Company in Ahmedabad, India"
            aria-label="BuiltCodeHouse — Software Development Company in Ahmedabad, India"
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
                padding: '0 20px',
                height: '42px',
                backgroundColor: 'var(--surface-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.backgroundColor = 'var(--surface-elevated)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(214, 255, 63, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.backgroundColor = 'var(--surface-tertiary)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>Start a Project</span>
              <ArrowRight
                size={14}
                style={{
                  color: 'var(--brand-accent)',
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
                width: '42px',
                height: '42px',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                background: 'var(--surface-tertiary)',
                color: 'var(--text-primary)',
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
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: 'var(--text-secondary)',
                  padding: '4px 0',
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
              style={{ width: '100%', height: '48px', marginTop: '12px' }}
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
