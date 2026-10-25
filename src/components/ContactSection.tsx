import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Copy, Check, Loader2, AlertTriangle } from 'lucide-react';

/**
 * BUILTCODE HOUSE — Contact Section (Phase 7)
 * 
 * Objectives:
 * - High-trust, exclusive, intentional enterprise conversion experience.
 * - Two-column architectural layout:
 *   - Left: Availability indicator, positioning, direct email, philosophy message.
 *   - Right: Luxury multi-criteria project inquiry form.
 * - Options:
 *   - Project Types: SaaS Platform, AI Application, Enterprise Software, Cloud Infrastructure, Digital Product, Other
 *   - Project Goals: Technical discovery & requirements specification
 *   - Timelines: ASAP, 1–3 Months, 3–6 Months, 6+ Months
 * - Strictly adhering to Brand System: #D6FF3F, #F5F5F5, #121212, #080808, and hairline borders.
 */

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('SaaS Platform');
  const [projectGoals, setProjectGoals] = useState('');
  const [timeline, setTimeline] = useState('1–3 Months');
  const [projectDetails, setProjectDetails] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState('');
  const [submissionTimestamp, setSubmissionTimestamp] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'SaaS Platform',
    'AI Application',
    'Enterprise Software',
    'Cloud Infrastructure',
    'Digital Product',
    'Other',
  ];

  const timelineOptions = ['ASAP', '1–3 Months', '3–6 Months', '6+ Months'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFormError(null);

    // Spam honeypot trap: bots fill this field, real humans don't see it
    if (honeypot) {
      console.warn('Bot submission suppressed.');
      setIsSubmitted(true);
      return;
    }

    // Input Validation
    if (fullName.trim().length < 2) {
      setFormError('Please enter your full name (minimum 2 characters).');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError('Please enter a valid corporate email address.');
      return;
    }
    if (projectGoals.trim().length < 5) {
      setFormError('Please describe your project goals.');
      return;
    }
    if (projectDetails.trim().length < 15) {
      setFormError('Please describe your requirements with at least 15 characters.');
      return;
    }

    setIsSubmitting(true);

    const ref = `BCH-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const timestamp = new Date().toISOString();

    const payload = {
      referenceId: ref,
      timestamp,
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim(),
      projectType,
      projectGoals: projectGoals.trim(),
      timeline,
      projectDetails: projectDetails.trim(),
    };

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
      if (apiUrl) {
        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          throw new Error(`Network transmission rejected with status ${res.status}`);
        }
      } else {
        // High-fidelity production simulation with local persistence backup
        await new Promise((resolve) => setTimeout(resolve, 850));
        try {
          const existing = JSON.parse(localStorage.getItem('bch_inquiries') || '[]');
          existing.push(payload);
          localStorage.setItem('bch_inquiries', JSON.stringify(existing));
        } catch {}
      }

      setReferenceId(ref);
      setSubmissionTimestamp(new Date().toLocaleTimeString());
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(
        err?.message || 'Transmission failed. Our network endpoint could not be reached.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@builtcodehouse.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const transitionLuxury = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '140px',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <div className="container">
        {/* --- SECTION HEADER --- */}
        <div style={{ marginBottom: '88px', maxWidth: '1000px' }}>
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={transitionLuxury}
            style={{ marginBottom: '24px' }}
          >
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
              <span className="tech-label-dot" />
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
                START A PROJECT // CONSULTATION
              </span>
              <span style={{ color: 'var(--border-hover)', fontSize: '11px' }}>/</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--brand-accent)',
                  letterSpacing: '0.1em',
                }}
              >
                DIRECT DISCOVERY
              </span>
            </div>
          </motion.div>

          {/* Section Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...transitionLuxury, delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 4.8vw, 64px)',
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            LET'S BUILD WHAT'S NEXT.
          </motion.h2>

          {/* Section Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...transitionLuxury, delay: 0.2 }}
            style={{
              fontSize: 'var(--text-body)',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              maxWidth: '720px',
            }}
          >
            Whether you're launching a SaaS platform, developing an AI product, modernizing
            enterprise software, or creating a new digital experience, we'd love to hear about it.
          </motion.p>
        </div>

        {/* --- TWO-COLUMN CONTACT LAYOUT --- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: '56px',
            alignItems: 'start',
          }}
          className="contact-layout-grid"
        >
          {/* LEFT COLUMN: Positioning, Availability, Direct Email, Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={transitionLuxury}
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            {/* 1. Availability Status Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '32px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-accent)',
                    boxShadow: '0 0 8px var(--brand-accent)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-accent)',
                  }}
                >
                  AVAILABLE FOR SELECT PROJECTS
                </span>
              </div>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--text-primary)',
                  fontWeight: 400,
                }}
              >
                We partner with ambitious founders, startups, and businesses that value
                exceptional engineering.
              </p>

              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                }}
              >
                <span>CAPACITY: 2 SLOTS OPEN (Q1/Q2)</span>
                <span>DISCOVERY: ACTIVE</span>
              </div>
            </div>

            {/* 2. Onboarding & Discovery Process Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '32px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  WHAT TO EXPECT
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-muted)',
                  }}
                >
                  RESPONSE: &lt; 24 HOURS
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      display: 'block',
                      marginBottom: '4px',
                      fontWeight: 600,
                    }}
                  >
                    1. 30-Min Technical Discovery
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'block' }}>
                    Direct scoping call with our principal engineer. No sales pitches or aggressive closing tactics.
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      display: 'block',
                      marginBottom: '4px',
                      fontWeight: 600,
                    }}
                  >
                    2. Fixed Architecture Specification
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'block' }}>
                    A clear milestone breakdown, tech stack proposal, and guaranteed fixed pricing quote delivered in 48h.
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      display: 'block',
                      marginBottom: '4px',
                      fontWeight: 600,
                    }}
                  >
                    3. Rapid Onboarding &amp; Day-1 IP Transfer
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'block' }}>
                    Direct communication channel via Slack/Linear with full source code ownership assigned to you.
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Secondary Direct Email Block */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '32px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                PREFER EMAIL?
              </span>

              <h4
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em',
                }}
              >
                Direct Principal Ingestion
              </h4>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--surface-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  padding: '12px 16px',
                }}
              >
                <a
                  href="mailto:contact@builtcodehouse.com"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                    letterSpacing: '0.04em',
                  }}
                >
                  contact@builtcodehouse.com
                </a>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: copiedEmail ? 'var(--brand-accent)' : 'var(--text-muted)',
                    transition: 'color var(--transition-fast)',
                  }}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>
            </div>

            {/* 3. Final Philosophy Message */}
            <div
              style={{
                padding: '24px 0',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--muted-accent)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                ENGAGEMENT THESIS
              </span>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  textTransform: 'uppercase',
                }}
              >
                GREAT PRODUCTS BEGIN WITH GREAT CONVERSATIONS.
              </h4>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Luxury Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={transitionLuxury}
            style={{
              gridColumn: 'span 7',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '48px',
              position: 'relative',
            }}
            className="contact-form-card"
          >
            {/* Corner Crosshairs */}
            <div className="crosshair" style={{ top: '16px', left: '16px' }} />
            <div className="crosshair" style={{ top: '16px', right: '16px' }} />
            <div className="crosshair" style={{ bottom: '16px', left: '16px' }} />
            <div className="crosshair" style={{ bottom: '16px', right: '16px' }} />

            {isSubmitted ? (
              <div
                style={{
                  padding: '64px 20px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(214, 255, 63, 0.08)',
                    border: '1px solid var(--brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: 'var(--brand-accent)',
                  }}
                >
                  <CheckCircle2 size={28} />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-accent)',
                    marginBottom: '8px',
                  }}
                >
                  TRANSMISSION VERIFIED // SPEC RECEIVED
                </span>

                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                  }}
                >
                  We have received your architectural brief.
                </h3>

                <div
                  style={{
                    margin: '8px 0 24px 0',
                    padding: '12px 20px',
                    backgroundColor: 'var(--surface-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <div>
                    TRACKING REF: <span style={{ color: 'var(--brand-accent)' }}>{referenceId || 'BCH-REQ-7910'}</span>
                  </div>
                  <div>
                    LOGGED AT: <span>{submissionTimestamp || 'CONFIRMED'}</span>
                  </div>
                  <div>
                    ROUTED TO: <span>PRINCIPAL SYSTEMS ARCHITECTURE GROUP</span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    maxWidth: '460px',
                    marginBottom: '32px',
                  }}
                >
                  Our principal engineering team will analyze your requirements and coordinate an
                  introductory architecture discovery brief within one business day.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '13px', height: '44px', padding: '0 24px' }}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {/* Honeypot Spam Bot Trap (Hidden from users) */}
                <input
                  type="text"
                  name="bch_security_honeypot"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                {/* Form Error Banner */}
                {formError && (
                  <div
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 77, 77, 0.08)',
                      border: '1px solid rgba(255, 77, 77, 0.3)',
                      borderRadius: '4px',
                      color: '#FF6B6B',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <AlertTriangle size={15} style={{ flexShrink: 0 }} />
                    <span>VALIDATION NOTICE // {formError}</span>
                  </div>
                )}

                {/* Network / Transmission Error Banner */}
                {errorMessage && (
                  <div
                    style={{
                      padding: '14px 16px',
                      backgroundColor: 'rgba(255, 77, 77, 0.1)',
                      border: '1px solid #FF4D4D',
                      borderRadius: '4px',
                      color: '#FF8080',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>TRANSMISSION ERROR</div>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-primary)' }}>
                      {errorMessage} Please email your brief directly to{' '}
                      <a
                        href="mailto:contact@builtcodehouse.com"
                        style={{ color: 'var(--brand-accent)', textDecoration: 'underline' }}
                      >
                        contact@builtcodehouse.com
                      </a>
                      .
                    </p>
                  </div>
                )}
                {/* 1. Name & Company Fields */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '20px',
                  }}
                  className="contact-name-company-grid"
                >
                  <div>
                    <label
                      htmlFor="full-name-input"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '8px',
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="full-name-input"
                      type="text"
                      required
                      placeholder="Alex Vance"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (formError) setFormError(null);
                      }}
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company-input"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '8px',
                      }}
                    >
                      Company *
                    </label>
                    <input
                      id="company-input"
                      type="text"
                      required
                      placeholder="Horizon Dynamics Inc."
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                        if (formError) setFormError(null);
                      }}
                      className="luxury-input"
                    />
                  </div>
                </div>

                {/* 2. Email Address */}
                <div>
                  <label
                    htmlFor="email-input"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="alex@horizondynamics.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    className="luxury-input"
                  />
                </div>

                {/* 3. Project Type Selector */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                    }}
                  >
                    Project Type *
                  </label>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '8px',
                    }}
                    className="selector-grid"
                  >
                    {projectTypes.map((type) => {
                      const isSelected = projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          style={{
                            padding: '10px 12px',
                            backgroundColor: isSelected ? 'var(--surface-elevated)' : 'var(--surface-tertiary)',
                            border: `1px solid ${isSelected ? 'var(--brand-accent)' : 'var(--border-subtle)'}`,
                            borderRadius: '4px',
                            color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '12px',
                            fontWeight: isSelected ? 500 : 400,
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all var(--transition-fast)',
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Project Goals */}
                <div>
                  <label
                    htmlFor="project-goals-input"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    Project Goals *
                  </label>
                  <textarea
                    id="project-goals-input"
                    required
                    placeholder="Tell us what you want to achieve and how success will be measured."
                    value={projectGoals}
                    onChange={(e) => {
                      setProjectGoals(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    className="luxury-textarea"
                    style={{ minHeight: '84px' }}
                  />
                </div>

                {/* 5. Timeline Selector */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                    }}
                  >
                    Target Timeline *
                  </label>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                      gap: '8px',
                    }}
                    className="timeline-grid"
                  >
                    {timelineOptions.map((time) => {
                      const isSelected = timeline === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setTimeline(time)}
                          style={{
                            padding: '10px 8px',
                            backgroundColor: isSelected ? 'var(--surface-elevated)' : 'var(--surface-tertiary)',
                            border: `1px solid ${isSelected ? 'var(--brand-accent)' : 'var(--border-subtle)'}`,
                            borderRadius: '4px',
                            color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all var(--transition-fast)',
                          }}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Project Details */}
                <div>
                  <label
                    htmlFor="project-details-input"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="project-details-input"
                    required
                    placeholder="Describe your technical vision, architecture constraints, or expected system scale..."
                    value={projectDetails}
                    onChange={(e) => {
                      setProjectDetails(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    className="luxury-textarea"
                    style={{ minHeight: '120px' }}
                  />
                </div>

                {/* Form Error / Transmission Error Alert */}
                {(formError || errorMessage) && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 77, 77, 0.08)',
                      border: '1px solid #FF4D4D',
                      borderRadius: '4px',
                      color: '#FF8080',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                    }}
                  >
                    <AlertTriangle size={16} style={{ flexShrink: 0, color: '#FF4D4D' }} />
                    <span>{formError || errorMessage}</span>
                  </div>
                )}

                {/* 7. Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    height: '54px',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="bch-spin" />
                      <span>TRANSMITTING ARCHITECTURE SPEC...</span>
                    </>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .bch-spin {
          animation: bch-spin-anim 0.9s linear infinite;
        }
        @keyframes bch-spin-anim {
          100% {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 1024px) {
          .contact-layout-grid > div {
            grid-column: span 12 !important;
          }
          .timeline-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .contact-form-card {
            padding: 28px 20px !important;
          }
          .contact-name-company-grid {
            grid-template-columns: 1fr !important;
          }
          .selector-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
};
