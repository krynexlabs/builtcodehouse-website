import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import { BrandMonogram } from './components/BrandMonogram';
import { X, Send, Loader2 } from 'lucide-react';
import './App.css';

// React Code Splitting & Lazy Loading for Performance
const CapabilitiesSection = lazy(() =>
  import('./components/CapabilitiesSection').then((m) => ({ default: m.CapabilitiesSection }))
);
const TrustSection = lazy(() =>
  import('./components/TrustSection').then((m) => ({ default: m.TrustSection }))
);
const ProcessSection = lazy(() =>
  import('./components/ProcessSection').then((m) => ({ default: m.ProcessSection }))
);
const WorkSection = lazy(() =>
  import('./components/WorkSection').then((m) => ({ default: m.WorkSection }))
);
const EngagementSection = lazy(() =>
  import('./components/EngagementSection').then((m) => ({ default: m.EngagementSection }))
);
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const FaqSection = lazy(() =>
  import('./components/FaqSection').then((m) => ({ default: m.FaqSection }))
);
const InsightsSection = lazy(() =>
  import('./components/InsightsSection').then((m) => ({ default: m.InsightsSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);

function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);
  const [modalRefId, setModalRefId] = useState('');

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // 1. Initial 1.2s Architectural Preloader Sequence
  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // 1.2s (< 2s maximum)

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setLoadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // 2. Custom Architectural Cursor Tracking (Desktop Pointer Only)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let targetX = -100;
    let targetY = -100;
    let currentTrailingX = -100;
    let currentTrailingY = -100;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setCursorPos({ x: targetX, y: targetY });

      // Detect hover on interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('capability-item') ||
          target.classList.contains('case-study-showcase'))
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    const renderLoop = () => {
      // Buttery smooth lerp for trailing cursor ring
      currentTrailingX += (targetX - currentTrailingX) * 0.18;
      currentTrailingY += (targetY - currentTrailingY) * 0.18;
      setTrailingPos({ x: currentTrailingX, y: currentTrailingY });
      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // 3. Modal Focus & Escape Accessibility
  useEffect(() => {
    if (projectModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && projectModalOpen) {
        setProjectModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectModalOpen]);

  const handleStartProject = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setProjectModalOpen(true);
    }
  };

  const handleViewWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError(null);
    setModalSubmitting(true);
    const ref = `BCH-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setModalRefId(ref);

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
      if (apiUrl) {
        // Real API invocation
        await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ref }) });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setProjectModalOpen(false);
      }, 3000);
    } catch (err: any) {
      setModalError('Transmission failed. Please reach out to contact@builtcodehouse.com.');
    } finally {
      setModalSubmitting(false);
    }
  };

  return (
    <div className="app-wrapper">
      {/* --- PRELOADER (ARCHITECTURAL LOADING SEQUENCE) --- */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#080808',
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Monogram with subtle pulse */}
            <div style={{ marginBottom: '28px' }}>
              <BrandMonogram size={48} showAccent={true} />
            </div>

            {/* Brand Title */}
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#F5F5F5',
                marginBottom: '4px',
              }}
            >
              BUILTCODE HOUSE
            </span>

            {/* Subtitle */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              DIGITAL ENGINEERING COMPANY
            </span>

            {/* Progress Bar Track */}
            <div
              style={{
                width: '180px',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: `${loadProgress}%`,
                  backgroundColor: 'var(--brand-accent)',
                  boxShadow: '0 0 8px var(--brand-accent)',
                  transition: 'width 25ms linear',
                }}
              />
            </div>

            {/* Telemetry Status */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--brand-accent)',
                letterSpacing: '0.12em',
              }}
            >
              INITIALIZING RUNTIME // {loadProgress}%
            </div>

            {/* Quick Skip Control for Testing & Fast Ingestion */}
            <button
              onClick={() => setLoading(false)}
              style={{
                marginTop: '14px',
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                opacity: 0.7,
                transition: 'opacity var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            >
              [ SKIP INITIALIZATION ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP CUSTOM ARCHITECTURAL CURSOR --- */}
      <div
        className="architectural-cursor-dot"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
      <div
        className={`architectural-cursor-ring ${isHoveringInteractive ? 'hovering' : ''}`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      />

      {/* Background Architectural Coordinate Grid */}
      <div className="architectural-bg-grid" />

      {/* Ambient Radial Header Glow */}
      <div className="ambient-glow" />

      {/* Global Navigation with Scroll Spy */}
      <Navigation onStartProject={handleStartProject} />

      {/* Global Layout: Full BUILTCODE HOUSE Website Experience with Code Splitting */}
      <main style={{ flex: 1, position: 'relative', zIndex: 2 }}>
        <HeroSection
          onStartProject={handleStartProject}
          onViewWork={handleViewWork}
        />
        <Suspense fallback={<div style={{ minHeight: '600px', backgroundColor: 'var(--bg-primary)' }} />}>
          <CapabilitiesSection />
          <TrustSection onStartProject={handleStartProject} />
          <ProcessSection />
          <WorkSection />
          <EngagementSection onStartProject={handleStartProject} />
          <AboutSection />
          <FaqSection />
          <InsightsSection />
          <ContactSection />
        </Suspense>
      </main>

      {/* Enterprise-Grade Global Footer */}
      <Footer />

      {/* Interactive Project Ingestion Modal */}
      {projectModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setProjectModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setProjectModalOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                color: 'var(--text-muted)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(214, 255, 63, 0.1)',
                    border: '1px solid var(--brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'var(--brand-accent)',
                  }}
                >
                  <BrandMonogram size={24} showAccent={true} />
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    marginBottom: '10px',
                    color: 'var(--text-primary)',
                  }}
                >
                  TRANSMISSION RECEIVED
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.12em',
                    marginBottom: '14px',
                  }}
                >
                  REF // {modalRefId || 'BCH-REQ-7910'}
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                  Our principal engineering team will review your specifications
                  and schedule an architecture discovery brief.
                </p>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '28px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--brand-accent)',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    <span>INITIATE ENGAGEMENT</span>
                    <span>//</span>
                    <span>TECHNICAL DISCOVERY</span>
                  </div>
                  <h3
                    style={{
                      fontSize: '28px',
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                    }}
                  >
                    Start a Project
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                    Share your requirements. We engineer scalable systems built for
                    enduring enterprise performance.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmitForm}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  <div>
                    <label
                      htmlFor="modal-name"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      Name &amp; Organization
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Vance, Horizon Corp"
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      Work Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="alex@horizon.com"
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-goals"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      Scope &amp; Engineering Goals
                    </label>
                    <textarea
                      id="modal-goals"
                      required
                      placeholder="Briefly describe your product, technical requirements, or platform scale..."
                      className="luxury-textarea"
                    />
                  </div>

                  {modalError && (
                    <div
                      style={{
                        padding: '10px 14px',
                        backgroundColor: 'rgba(255, 77, 77, 0.1)',
                        border: '1px solid #FF4D4D',
                        borderRadius: '4px',
                        color: '#FF8080',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                      }}
                    >
                      {modalError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={modalSubmitting}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      marginTop: '8px',
                      opacity: modalSubmitting ? 0.75 : 1,
                      cursor: modalSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {modalSubmitting ? (
                      <>
                        <Loader2 size={15} className="bch-spin" />
                        <span>TRANSMITTING BRIEF...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Architecture Brief</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
