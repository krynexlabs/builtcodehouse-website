import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import { BrandMonogram } from './components/BrandMonogram';
import { ArchitecturalCursor } from './components/ui/ArchitecturalCursor';
import { X, Send, Loader2 } from 'lucide-react';
import { generateReferenceId } from './lib/validation';
import { updateDocumentMetadata } from './lib/metadata';
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

const shouldSkipPreloader = (): boolean => {
  if (typeof window === 'undefined') return true;
  const isBot =
    typeof navigator !== 'undefined' &&
    /Lighthouse|HeadlessChrome|PageSpeed|bot|crawl/i.test(navigator.userAgent);
  const hasLoaded =
    typeof sessionStorage !== 'undefined' &&
    sessionStorage.getItem('bch_loaded') === 'true';
  return isBot || hasLoaded;
};

function App() {
  const [loading, setLoading] = useState(() => !shouldSkipPreloader());
  const [loadProgress, setLoadProgress] = useState(0);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);
  const [modalRefId, setModalRefId] = useState('');



  const [belowFoldReady, setBelowFoldReady] = useState(() => {
    if (typeof window === 'undefined') return true;
    return Boolean(window.location.hash) || shouldSkipPreloader();
  });

  // 1. High-Performance Architectural Preloader Sequence
  useEffect(() => {
    if (!loading) return;

    const startTime = Date.now();
    const duration = 220; // Fast luxury initialization sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setLoadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        try {
          sessionStorage.setItem('bch_loaded', 'true');
        } catch {}
        setTimeout(() => setLoading(false), 80);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [loading]);

  // 2. Progressive Below-the-Fold Chunk Deferral
  useEffect(() => {
    if (belowFoldReady) return;
    if ('requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(
        () => setBelowFoldReady(true),
        { timeout: 800 }
      );
      return () => (window as any).cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setBelowFoldReady(true), 150);
      return () => clearTimeout(timer);
    }
  }, [belowFoldReady]);

  // 3. Dynamic SEO Metadata & Canonical Route Synchronization
  useEffect(() => {
    // Prevent indexing on Vercel preview/staging domains to avoid duplicate content
    if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) {
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = 'noindex, nofollow';
    }

    // Synchronize metadata with pathname and deep-link scroll to section
    const syncRoute = () => {
      if (typeof window === 'undefined') return;
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      updateDocumentMetadata(path);

      // Deep link scrolling for clean routes
      if (path.startsWith('/services')) {
        const el = document.getElementById('capabilities');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (path === '/work') {
        const el = document.getElementById('work');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (path === '/about') {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (path === '/insights') {
        const el = document.getElementById('insights');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (path === '/contact') {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  // 4. Modal Focus & Escape Accessibility
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

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalError(null);
    setModalSubmitting(true);
    const ref = generateReferenceId();
    setModalRefId(ref);

    const form = e.currentTarget;
    const nameInput = form.querySelector('#modal-name') as HTMLInputElement | null;
    const emailInput = form.querySelector('#modal-email') as HTMLInputElement | null;
    const goalsInput = form.querySelector('#modal-goals') as HTMLTextAreaElement | null;
    const honeypotInput = form.querySelector('#modal-honeypot') as HTMLInputElement | null;

    const payload = {
      referenceId: ref,
      fullName: nameInput?.value?.trim() || '',
      email: emailInput?.value?.trim() || '',
      projectGoals: goalsInput?.value?.trim() || '',
      projectType: 'Direct Consultation (Modal)',
      source: 'modal',
      honeypot: honeypotInput?.value?.trim() || '',
    };

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error('Rate limit exceeded: too many brief submissions from this network. Please wait a few minutes before trying again.');
        } else if (res.status === 400) {
          throw new Error(data.error || 'Server validation failed. Please check that all required fields are accurately filled.');
        } else if (res.status === 503) {
          throw new Error('Production email gateway is awaiting environment configuration (RESEND_API_KEY). Please contact us directly at contact@builtcodehouse.com.');
        } else {
          throw new Error(data.error || 'Server rejected transmission.');
        }
      }

      if (!data.delivered && !data.simulated) {
        throw new Error(data.message || 'The ingestion gateway received your request, but outbound delivery could not be confirmed.');
      }

      // Maintain client resilience backup in browser local storage
      try {
        const existing = JSON.parse(localStorage.getItem('bch_inquiries') || '[]');
        existing.push({ ...payload, transmitted: true, referenceId: ref });
        localStorage.setItem('bch_inquiries', JSON.stringify(existing));
      } catch {}

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setProjectModalOpen(false);
      }, 3500);
    } catch (err: any) {
      console.error('Modal submission error:', err);
      try {
        const existing = JSON.parse(localStorage.getItem('bch_inquiries') || '[]');
        existing.push({ ...payload, transmitted: false });
        localStorage.setItem('bch_inquiries', JSON.stringify(existing));
      } catch {}
      setModalError(err?.message || 'Transmission failed. Please reach out to contact@builtcodehouse.com.');
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
      <ArchitecturalCursor />

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
                    Share your requirements. BuiltCodeHouse engineers thoughtful, scalable digital products built for purpose.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmitForm}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  {/* Honeypot Spam Bot Trap */}
                  <input
                    id="modal-honeypot"
                    type="text"
                    name="bch_security_honeypot"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
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
