import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

/**
 * BUILTCODE HOUSE — About & Philosophy Section (Phase 5)
 * 
 * Objectives:
 * - Establish a mature, premium, intelligent, strategic, and long-term focused presence.
 * - Magazine-level presentation, luxury whitespace, architectural monumentality.
 * - 4 Core Principles with bespoke architectural geometric schematics (Zero stock people/photos).
 * - High-impact Manifesto & Large Quote Block.
 * - Strict Brand System: #D6FF3F, #F5F5F5, #121212, #080808, and hairline borders.
 */

interface Principle {
  number: string;
  code: string;
  title: string;
  copy: string;
  annotation: string;
  schematicType: 'excellence' | 'longterm' | 'precision' | 'partnership';
}

const principles: Principle[] = [
  {
    number: '01',
    code: 'CANON_01 // FOUNDATION',
    title: 'ENGINEERING EXCELLENCE',
    copy: 'Every system begins with strong technical foundations, scalability planning, and disciplined execution.',
    annotation: 'ARCHITECTURAL RIGOR // ZERO SHORTCUTS',
    schematicType: 'excellence',
  },
  {
    number: '02',
    code: 'CANON_02 // RESILIENCE',
    title: 'LONG-TERM THINKING',
    copy: 'We design products to evolve with businesses, adapt to new challenges, and remain valuable for years.',
    annotation: 'TEMPORAL VIABILITY // 10-YEAR HORIZONS',
    schematicType: 'longterm',
  },
  {
    number: '03',
    code: 'CANON_03 // DISCIPLINE',
    title: 'PRECISION',
    copy: 'From architecture decisions to interface details, every element serves a purpose.',
    annotation: 'SUB-MILLIMETER TOLERANCE // FUNCTIONAL PURITY',
    schematicType: 'precision',
  },
  {
    number: '04',
    code: 'CANON_04 // ALIGNMENT',
    title: 'PARTNERSHIP',
    copy: 'We work alongside founders, teams, and organizations to transform ideas into sustainable technology.',
    annotation: 'COLLECTIVE TRAJECTORY // PRINCIPAL-LEVEL ENGAGEMENT',
    schematicType: 'partnership',
  },
];

// --- BESPOKE ARCHITECTURAL MONUMENT SCHEMATICS ---

const PrincipleSchematic: React.FC<{
  type: Principle['schematicType'];
  isHovered: boolean;
}> = ({ type, isHovered }) => {
  const accent = '#D6FF3F';
  const wire = isHovered ? 'rgba(245, 245, 245, 0.45)' : 'rgba(245, 245, 245, 0.2)';
  const dim = 'rgba(255, 255, 255, 0.08)';

  switch (type) {
    case 'excellence':
      // 01: Monolithic Structural Plinth & Foundation Tension Grid
      return (
        <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Foundation Bedrock Coordinate Ticks */}
          <line x1="40" y1="160" x2="340" y2="160" stroke={wire} strokeWidth="1" />
          <line x1="40" y1="175" x2="340" y2="175" stroke={dim} strokeDasharray="4 4" />
          
          {/* Foundation Stele 1: Deep Bedrock Anchor */}
          <rect x="70" y="110" width="60" height="50" rx="1" fill="#121212" stroke={wire} />
          <line x1="100" y1="110" x2="100" y2="160" stroke={accent} strokeDasharray="2 2" />

          {/* Foundation Stele 2: Central Megalith Spine */}
          <rect
            x="160"
            y="45"
            width="60"
            height="115"
            rx="1"
            fill="#181818"
            stroke={isHovered ? accent : wire}
            strokeWidth={isHovered ? '1.5' : '1'}
          />
          <line x1="190" y1="20" x2="190" y2="160" stroke={accent} strokeWidth="1" />
          <circle cx="190" cy="45" r="3" fill={accent} />

          {/* Foundation Stele 3: Counter-Lever Wing */}
          <rect x="250" y="85" width="60" height="75" rx="1" fill="#121212" stroke={wire} />

          {/* Architectural Tie-Beam Truss */}
          <line x1="70" y1="110" x2="310" y2="85" stroke={dim} strokeWidth="1" />
          <circle cx="100" cy="110" r="2.5" fill="#F5F5F5" />
          <circle cx="280" cy="85" r="2.5" fill="#F5F5F5" />

          {/* Precision Load Vector Annotation */}
          <text x="210" y="35" fill={accent} fontSize="8" fontFamily="var(--font-mono)">
            STRUCTURAL INTEGRITY: 100%
          </text>
        </svg>
      );

    case 'longterm':
      // 02: Temporal Horizon Expansion & Modular Decoupled Axis
      return (
        <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Horizontal Temporal Trajectory Horizon */}
          <line x1="30" y1="100" x2="350" y2="100" stroke={dim} strokeDasharray="4 4" />

          {/* Epoch Horizons */}
          <g>
            {/* Decade 1 Horizon Plane */}
            <rect x="50" y="55" width="70" height="90" rx="1" fill="#121212" stroke={wire} />
            <text x="60" y="75" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">YEAR 01-03</text>
            <text x="60" y="90" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">FOUNDATION</text>

            {/* Decade 2 Modular Evolution Plane */}
            <rect
              x="155"
              y="40"
              width="70"
              height="120"
              rx="1"
              fill="#181818"
              stroke={isHovered ? accent : wire}
              strokeWidth={isHovered ? '1.5' : '1'}
            />
            <text x="165" y="60" fill={accent} fontSize="7" fontFamily="var(--font-mono)">YEAR 03-07</text>
            <text x="165" y="75" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">EVOLUTION</text>

            {/* Decade 3 Enduring Enterprise Horizon */}
            <rect x="260" y="25" width="70" height="150" rx="1" fill="#121212" stroke={wire} />
            <text x="270" y="45" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">YEAR 07-10+</text>
            <text x="270" y="60" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">SCALE KERNEL</text>
          </g>

          {/* Continuous Architectural Growth Curve */}
          <path
            d="M50 140 Q 150 120, 190 70 T 330 30"
            stroke={accent}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="190" cy="70" r="3" fill={accent} />
          <circle cx="330" cy="30" r="3" fill={accent} />
        </svg>
      );

    case 'precision':
      // 03: Golden Caliper & Sub-Millimeter Spatial Mesh
      return (
        <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Precision Micrometer Caliper Frame */}
          <rect x="50" y="40" width="280" height="120" rx="1" fill="none" stroke={dim} />

          {/* Concentric Calibration Reticle */}
          <circle cx="190" cy="100" r="60" stroke={dim} strokeDasharray="3 3" />
          <circle cx="190" cy="100" r="40" stroke={wire} />
          <circle cx="190" cy="100" r="18" fill="#121212" stroke={isHovered ? accent : wire} strokeWidth="1.5" />
          <circle cx="190" cy="100" r="2.5" fill={accent} />

          {/* Coordinate Caliper Crosshairs */}
          <line x1="90" y1="100" x2="290" y2="100" stroke={accent} strokeWidth="1" strokeDasharray={isHovered ? 'none' : '4 4'} />
          <line x1="190" y1="20" x2="190" y2="180" stroke={accent} strokeWidth="1" strokeDasharray={isHovered ? 'none' : '4 4'} />

          {/* Sub-Millimeter Vernier Scale Ticks */}
          {[130, 150, 170, 190, 210, 230, 250].map((x) => (
            <line key={x} x1={x} y1="36" x2={x} y2="44" stroke={wire} />
          ))}

          <text x="210" y="65" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">
            ΔTOLERANCE // 0.0001MM
          </text>
          <text x="210" y="78" fill={accent} fontSize="7" fontFamily="var(--font-mono)">
            CALIBRATION // ABSOLUTE
          </text>
        </svg>
      );

    case 'partnership':
      // 04: Symbiotic Cantilever Span & Structural Tie-Truss
      return (
        <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Client Monolith Pillar (Left) */}
          <rect x="50" y="60" width="80" height="110" rx="1" fill="#121212" stroke={wire} />
          <text x="60" y="85" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">FOUNDER / ORG</text>
          <text x="60" y="100" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">VISION &amp; GOALS</text>

          {/* Engineering Monolith Pillar (Right) */}
          <rect x="250" y="60" width="80" height="110" rx="1" fill="#181818" stroke={isHovered ? accent : wire} />
          <text x="260" y="85" fill={accent} fontSize="8" fontFamily="var(--font-mono)">BUILTCODE HOUSE</text>
          <text x="260" y="100" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">EXECUTION CORE</text>

          {/* Cantilever Interlocking Bridge Beam */}
          <rect x="110" y="90" width="160" height="24" rx="1" fill="#121212" stroke={isHovered ? accent : wire} strokeWidth={isHovered ? '1.5' : '1'} />
          <text x="140" y="105" fill="#F5F5F5" fontSize="7" fontFamily="var(--font-mono)">
            SUSTAINED ALIGNMENT
          </text>

          {/* Diagonal Structural Tension Cables */}
          <line x1="50" y1="60" x2="190" y2="90" stroke={accent} strokeWidth="1.2" />
          <line x1="330" y1="60" x2="190" y2="90" stroke={accent} strokeWidth="1.2" />

          {/* Central Keystone Node */}
          <circle cx="190" cy="90" r="4" fill="#080808" stroke={accent} strokeWidth="2" />
          <circle cx="190" cy="90" r="1.5" fill={accent} />
        </svg>
      );
  }
};

export const AboutSection: React.FC = () => {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  const transitionLuxury = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionLuxury,
    },
  };

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '160px',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <div className="container">
        {/* --- SECTION HEADER --- */}
        <div style={{ marginBottom: '100px', maxWidth: '1000px' }}>
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
                PHILOSOPHY // ENGINEERING WITH PURPOSE
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
                CORE PRINCIPLES
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
              marginBottom: '32px',
            }}
          >
            WE DON'T JUST BUILD SOFTWARE.
            <br />
            WE ENGINEER LONG-TERM DIGITAL VALUE.
          </motion.h2>

          {/* Section Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...transitionLuxury, delay: 0.2 }}
            style={{
              maxWidth: '740px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                fontWeight: 400,
              }}
            >
              Technology should create opportunity, remove complexity, and help
              businesses move forward with confidence.
            </p>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
              }}
            >
              BUILTCODE HOUSE exists to design and engineer digital products that
              deliver meaningful impact at scale.
            </p>
          </motion.div>
        </div>

        {/* --- LARGE MONUMENTAL QUOTE BLOCK --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={transitionLuxury}
          style={{
            marginBottom: '140px',
            padding: '64px 56px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            position: 'relative',
          }}
          className="philosophy-quote-block"
        >
          {/* Architectural Crosshair Corners */}
          <div className="crosshair" style={{ top: '16px', left: '16px' }} />
          <div className="crosshair" style={{ top: '16px', right: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', left: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', right: '16px' }} />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '28px',
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
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-accent)',
              }}
            >
              THE BUILTCODE CANON // PRIMARY THESIS
            </span>
          </div>

          <blockquote
            style={{
              fontSize: 'clamp(28px, 3.6vw, 44px)',
              lineHeight: 1.2,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              maxWidth: '920px',
              margin: '0 0 32px 0',
            }}
          >
            &ldquo;Great products are not discovered by accident.
            <br />
            They are engineered with intention.&rdquo;
          </blockquote>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              DISCIPLINE
            </span>
            <span style={{ color: 'var(--border-subtle)' }}>/</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              THOUGHTFUL DESIGN
            </span>
            <span style={{ color: 'var(--border-subtle)' }}>/</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              TECHNICAL RIGOR
            </span>
          </div>
        </motion.div>

        {/* --- 4 CORE PRINCIPLES (Architectural Composition) --- */}
        <div style={{ marginBottom: '140px' }}>
          <div style={{ marginBottom: '56px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              FOUNDATIONAL TENETS
            </span>
            <h3
              style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                lineHeight: 1.15,
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
            >
              FOUR PILLARS OF SYSTEMIC DISCIPLINE.
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '32px',
            }}
            className="principles-grid"
          >
            {principles.map((principle) => {
              const isHovered = hoveredPrinciple === principle.number;

              return (
                <motion.div
                  key={principle.number}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredPrinciple(principle.number)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '440px',
                    position: 'relative',
                    transition:
                      'border-color var(--transition-base), transform var(--transition-base)',
                    borderColor: isHovered ? 'var(--border-hover)' : 'var(--border-subtle)',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  {/* Top Hairline Active Growth Line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '24px',
                      right: '24px',
                      height: '1px',
                      backgroundColor: isHovered ? 'var(--brand-accent)' : 'transparent',
                      boxShadow: isHovered ? '0 0 10px var(--brand-accent)' : 'none',
                      transition: 'all var(--transition-base)',
                    }}
                  />

                  {/* Header: Number & Code */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: isHovered ? 'var(--brand-accent)' : 'var(--text-muted)',
                        }}
                      >
                        {principle.number}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.12em',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {principle.annotation}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: '24px',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        color: 'var(--text-primary)',
                        marginBottom: '14px',
                      }}
                    >
                      {principle.title}
                    </h4>

                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.65,
                        color: 'var(--text-secondary)',
                        maxWidth: '500px',
                      }}
                    >
                      {principle.copy}
                    </p>
                  </div>

                  {/* Architectural Blueprint Schematic */}
                  <div
                    style={{
                      marginTop: '32px',
                      padding: '16px',
                      backgroundColor: 'rgba(8, 8, 8, 0.65)',
                      borderRadius: '4px',
                      border: '1px solid var(--border-subtle)',
                      height: '180px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <PrincipleSchematic type={principle.schematicType} isHovered={isHovered} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* --- MANIFESTO SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={transitionLuxury}
          style={{
            padding: '72px 56px',
            backgroundColor: 'var(--surface-tertiary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            position: 'relative',
            marginBottom: '140px',
          }}
          className="manifesto-card"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
            className="manifesto-grid"
          >
            {/* Left Column (Span 5): Headline & Badge */}
            <div style={{ gridColumn: 'span 5' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--brand-accent)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                THE ARCHITECTURAL MANIFESTO
              </span>

              <h3
                style={{
                  fontSize: 'clamp(32px, 3.6vw, 48px)',
                  lineHeight: 1.08,
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                }}
              >
                THE STANDARD WE HOLD OURSELVES TO.
              </h3>
            </div>

            {/* Right Column (Span 7): Manifesto Statements */}
            <div
              style={{
                gridColumn: 'span 7',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: 'var(--text-primary)',
                  fontWeight: 400,
                }}
              >
                We believe exceptional products are created through discipline, thoughtful
                design, technical rigor, and relentless attention to detail.
              </p>

              <div
                style={{
                  height: '1px',
                  backgroundColor: 'var(--border-subtle)',
                  width: '100%',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--brand-accent)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '16px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    Every decision contributes to a larger system.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--brand-accent)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '16px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    Every system should create measurable value.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- FOUNDER AUTHORITY & PROVENANCE --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={transitionLuxury}
          style={{
            marginBottom: '140px',
            padding: '56px',
            backgroundColor: 'var(--surface-tertiary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            position: 'relative',
          }}
          className="founder-authority-card"
        >
          {/* Architectural Crosshair Corners */}
          <div className="crosshair" style={{ top: '16px', left: '16px' }} />
          <div className="crosshair" style={{ top: '16px', right: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', left: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', right: '16px' }} />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: '48px',
              alignItems: 'start',
            }}
            className="founder-grid"
          >
            {/* Left Col (Span 5): Founder Persona & Credentials */}
            <div style={{ gridColumn: 'span 5' }}>
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
                  marginBottom: '16px',
                }}
              >
                <span>LEADERSHIP // FOUNDER PERSPECTIVE</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 38px)',
                  fontWeight: 600,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                  lineHeight: 1.15,
                  marginBottom: '12px',
                }}
              >
                DIXIT SHARMA
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                FOUNDER &amp; PRINCIPAL ARCHITECT
              </div>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '28px',
                }}
              >
                With over a decade of hands-on software engineering experience across
                distributed systems, high-scale SaaS architectures, and cloud infrastructure,
                Dixit leads every BUILTCODE HOUSE engagement from technical discovery through
                production deployment.
              </p>

              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: 'var(--brand-accent)', fontWeight: 600 }}>CAPACITY POLICY:</span>
                <br />
                We deliberately cap concurrent client engagements to ensure senior engineering
                leadership on every project.
              </div>
            </div>

            {/* Right Col (Span 7): Mission & Why BuiltCode House Exists */}
            <div
              style={{
                gridColumn: 'span 7',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                borderLeft: '1px solid var(--border-subtle)',
                paddingLeft: '48px',
              }}
              className="founder-right-col"
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
                    marginBottom: '8px',
                  }}
                >
                  WHY BUILTCODE HOUSE EXISTS
                </span>
                <h4
                  style={{
                    fontSize: '22px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.35,
                    marginBottom: '16px',
                  }}
                >
                  &ldquo;The traditional agency model is built around layers of non-technical
                  middlemen. We built an engineering firm focused strictly on craftsmanship.&rdquo;
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}
                >
                  Most agencies pitch clients using their most senior founders, then hand the
                  actual code off to junior developers or offshore contractors. The result is
                  accumulated technical debt, misaligned business objectives, and blown budgets.
                  <br /><br />
                  BUILTCODE HOUSE exists to give ambitious startups and companies an alternative:
                  direct partnership with experienced engineers who take personal pride in your system&apos;s
                  reliability, scalability, and commercial outcome.
                </p>
              </div>

              {/* 3 Core Principles */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
                className="founder-commitments-grid"
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--brand-accent)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    01 // DIRECT ACCESS
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5, display: 'block' }}>
                    Direct communication with the engineers building your software.
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--brand-accent)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    02 // 100% IP RIGHTS
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5, display: 'block' }}>
                    Full source code and infrastructure ownership transferred to you.
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--brand-accent)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    03 // FIXED MILESTONES
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5, display: 'block' }}>
                    Transparent scope and milestone billing with zero hidden fees.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- BOTTOM SECTION: BUILT FOR WHAT COMES NEXT --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...transitionLuxury, delay: 0.15 }}
          style={{
            paddingTop: '64px',
            borderTop: '1px solid var(--border-subtle)',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: 'var(--grid-gap)',
              alignItems: 'flex-start',
            }}
            className="about-bottom-grid"
          >
            {/* Left Column (Span 6): Headline & Architectural Datum */}
            <div style={{ gridColumn: 'span 6' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '18px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  FUTURE CONTINUITY
                </span>
                <span style={{ color: 'var(--brand-accent)', fontSize: '11px' }}>//</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: 'var(--text-secondary)',
                  }}
                >
                  HORIZON PERSPECTIVE
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 60px)',
                  lineHeight: 1.05,
                  fontWeight: 600,
                  letterSpacing: '-0.035em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                }}
              >
                BUILT FOR WHAT COMES NEXT.
              </h3>
            </div>

            {/* Right Column (Span 6): Editorial Statement */}
            <div
              style={{
                gridColumn: 'span 6',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '8px',
              }}
            >
              <p
                style={{
                  fontSize: '20px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '16px',
                }}
              >
                Technology changes rapidly.
                <br />
                The principles behind exceptional engineering do not.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.1em',
                  }}
                >
                  ENDURING ARCHITECTURE
                </span>
                <span style={{ color: 'var(--border-subtle)' }}>/</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                >
                  ZERO COMPROMISE
                </span>
                <span style={{ color: 'var(--border-subtle)' }}>/</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-primary)',
                    letterSpacing: '0.1em',
                  }}
                >
                  ESTABLISHED 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .principles-grid {
            grid-template-columns: 1fr !important;
          }
          .manifesto-grid > div {
            grid-column: span 12 !important;
          }
          .founder-grid > div {
            grid-column: span 12 !important;
          }
          .founder-right-col {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--border-subtle);
            padding-top: 32px !important;
          }
          .about-bottom-grid > div {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 768px) {
          .founder-commitments-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .philosophy-quote-block {
            padding: 32px 24px !important;
          }
          .manifesto-card {
            padding: 36px 24px !important;
          }
          .founder-authority-card {
            padding: 32px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
