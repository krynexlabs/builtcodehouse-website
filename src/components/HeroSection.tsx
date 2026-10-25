import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { HeroVisual3D } from './HeroVisual3D';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onViewWork,
}) => {
  // Motion curve & animation foundation
  const transitionPrecision = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionPrecision,
    },
  };

  const capabilities = [
    'SaaS Platforms',
    'AI Applications',
    'Enterprise Software',
    'Cloud Solutions',
    'Digital Products',
  ];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      {/* 1440px Grid Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Main 12-Column Hero Grid */}
        <motion.div
          className="grid-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ alignItems: 'center' }}
        >
          {/* Left Column (Span 7 on Desktop): Brand Proposition & Action */}
          <div
            className="hero-content-col"
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 5,
            }}
          >
            {/* 1. Technical Brand Identity Label */}
            <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
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
                  DIGITAL ENGINEERING COMPANY
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
                  SYSTEMS ARCHITECTURE
                </span>
              </div>
            </motion.div>

            {/* 2. Hero Headline */}
            <motion.div variants={itemVariants}>
              <h1
                style={{
                  fontSize: 'var(--text-hero)',
                  lineHeight: 1.04,
                  fontWeight: 600,
                  letterSpacing: '-0.035em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  maxWidth: '780px',
                }}
              >
                ENGINEERING DIGITAL PRODUCTS THAT DRIVE REAL BUSINESS VALUE.
              </h1>
            </motion.div>

            {/* 3. Subheadline — Answers: What do you do? Who do you help? Why trust you? */}
            <motion.div variants={itemVariants}>
              <p
                style={{
                  fontSize: 'var(--text-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  maxWidth: '580px',
                  marginBottom: '28px',
                  fontWeight: 400,
                }}
              >
                We architect and build production SaaS platforms, custom web applications,
                and practical AI systems for ambitious startups, growing businesses, and
                enterprise teams. Fixed scopes, direct senior engineering, and 100% code ownership.
              </p>
            </motion.div>

            {/* 4. Action Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={onStartProject}
                className="btn-primary"
                id="hero-cta-start-project"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onViewWork}
                className="btn-secondary"
                id="hero-cta-view-work"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
              </button>
            </motion.div>

            {/* 5. Core Trust Architecture Strip */}
            <motion.div
              variants={itemVariants}
              style={{
                marginTop: '56px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                paddingTop: '32px',
                borderTop: '1px solid var(--border-subtle)',
                maxWidth: '620px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  DIRECT SENIOR ACCESS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}
                >
                  Zero Junior Outsourcing
                </span>
              </div>

              <div
                style={{
                  width: '1px',
                  height: '24px',
                  backgroundColor: 'var(--border-subtle)',
                }}
              />

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  STRUCTURED DISCOVERY
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}
                >
                  Tailored Technical Scopes
                </span>
              </div>

              <div
                style={{
                  width: '1px',
                  height: '24px',
                  backgroundColor: 'var(--border-subtle)',
                }}
              />

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  100% IP ASSIGNMENT
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}
                >
                  Full Codebase Ownership
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Span 5 on Desktop): 3D Centerpiece Visual */}
          <div
            className="hero-visual-col"
            style={{
              gridColumn: 'span 5',
              height: '620px',
              position: 'relative',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'rgba(18, 18, 18, 0.4)',
              backdropFilter: 'blur(8px)',
              overflow: 'hidden',
            }}
          >
            <HeroVisual3D />
          </div>
        </motion.div>

        {/* Bottom Architectural Capability Horizon Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '80px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              CORE CAPABILITIES
            </span>
            <span style={{ color: 'var(--brand-accent)', fontSize: '11px' }}>//</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(16px, 2.5vw, 36px)',
              flexWrap: 'wrap',
            }}
          >
            {capabilities.map((item, idx) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--muted-accent)',
                  }}
                >
                  0{idx + 1}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-content-col {
            grid-column: span 12 !important;
          }
          .hero-visual-col {
            grid-column: span 12 !important;
            height: 480px !important;
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
};
