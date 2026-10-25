import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  MessageSquare, 
  Cpu, 
  Handshake, 
  Layers, 
  Rocket, 
  TrendingUp, 
  Building2, 
  Network,
  ArrowRight
} from 'lucide-react';

interface TrustSectionProps {
  onStartProject?: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onStartProject }) => {
  const transitionLuxury = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const trustPillars = [
    {
      icon: FileCheck,
      number: '01',
      title: 'Clear Scope & Deliverables',
      description:
        'No ambiguous retainers or shifting timelines. Before writing a single line of code, we define concrete architecture specifications, weekly milestones, and explicit acceptance criteria.',
      badge: 'PREDICTABLE EXECUTION',
    },
    {
      icon: Layers,
      number: '02',
      title: 'Predictable Milestones',
      description:
        'Phased sprint milestones or dedicated monthly engineering pods. You always know exactly what is being built, with zero surprise invoices or markup fees.',
      badge: 'FIXED-STAGE DELIVERABLES',
    },
    {
      icon: MessageSquare,
      number: '03',
      title: 'Direct Communication',
      description:
        'You work directly with lead software engineers who build your product. No non-technical account managers, no relay communication, and no game of telephone.',
      badge: 'PRINCIPAL ACCESS',
    },
    {
      icon: Cpu,
      number: '04',
      title: 'Engineering Excellence',
      description:
        'Production-tested code written with automated test suites, type safety, and CI/CD automation. We build software designed to run stably without constant emergency patching.',
      badge: 'CLEAN ARCHITECTURE',
    },
    {
      icon: Handshake,
      number: '05',
      title: 'Long-Term Partnership',
      description:
        'We do not abandon your team post-launch. We provide comprehensive documentation, recorded technical walkthroughs, developer handoffs, and ongoing infrastructure maintenance.',
      badge: 'FULL CODE OWNERSHIP',
    },
    {
      icon: Layers,
      number: '06',
      title: 'Scalable Architecture',
      description:
        'Systems built to handle 10x user growth without rewriting your foundational database or cloud topology. We architect for operational longevity from day one.',
      badge: 'FUTURE-PROOF DESIGN',
    },
  ];

  const clientSegments = [
    {
      icon: Rocket,
      tag: 'EARLY STAGE & SERIES A',
      title: 'Startups & Founders',
      challenge: 'Need to ship an MVP or scalable V1 fast without accumulating fatal technical debt.',
      solution: 'Rapid, disciplined product engineering with clean architecture, ready for investors and paying users.',
    },
    {
      icon: TrendingUp,
      tag: 'REVENUE GENERATING',
      title: 'Growing Businesses',
      challenge: 'Outgrowing manual spreadsheets, off-the-shelf SaaS, or fragile legacy software.',
      solution: 'Custom internal software, automated client portals, and streamlined operational databases.',
    },
    {
      icon: Building2,
      tag: 'MULTI-TENANT & API',
      title: 'SaaS Companies',
      challenge: 'Need to ship core platform features, scale multi-tenant architectures, or modernize UI.',
      solution: 'Senior engineering bandwidth to build billing engines, analytics pipelines, and core product modules.',
    },
    {
      icon: Network,
      tag: 'SCALE & COMPLIANCE',
      title: 'Enterprise Teams',
      challenge: 'Internal engineering teams are bottlenecked by maintenance and lack capacity for new platforms.',
      solution: 'Dedicated high-velocity engineering pods delivering audit-ready, high-security digital systems.',
    },
  ];

  return (
    <section
      id="trust"
      style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '140px',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <div className="container">
        {/* --- SECTION HEADER: WHY CLIENTS CHOOSE US --- */}
        <div style={{ marginBottom: '88px', maxWidth: '1000px' }}>
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
                TRUST ARCHITECTURE // BUSINESS INTEGRITY
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
                PREDICTABLE DELIVERY
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...transitionLuxury, delay: 0.1 }}
            style={{
              fontSize: 'clamp(32px, 4.4vw, 56px)',
              lineHeight: 1.08,
              fontWeight: 600,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            WHY CLIENTS CHOOSE BUILTCODE HOUSE.
          </motion.h2>

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
            Building software should not be a risky gamble. We have eliminated agency fluff,
            middlemen, and vague promises to deliver disciplined engineering that accelerates your business.
          </motion.p>
        </div>

        {/* --- 6 TRUST PILLARS GRID --- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '24px',
            marginBottom: '140px',
          }}
          className="trust-pillars-grid"
        >
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...transitionLuxury, delay: idx * 0.08 }}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '36px 32px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color var(--transition-base), transform var(--transition-base)',
                }}
                className="trust-pillar-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '24px',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--surface-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-accent)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {pillar.number} // 06
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      marginBottom: '12px',
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '24px',
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--muted-accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {pillar.badge}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- PART B: WHO WE WORK WITH --- */}
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            padding: '64px 48px',
            position: 'relative',
          }}
          className="who-we-work-with-wrapper"
        >
          <div style={{ marginBottom: '48px', maxWidth: '780px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--brand-accent)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              PARTNERSHIP DOMAINS // WHO WE WORK WITH
            </span>
            <h3
              style={{
                fontSize: 'clamp(26px, 3.2vw, 40px)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Tailored Engineering for Companies at Every Stage.
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Whether you are an early founder shipping your first product or an established business
              modernizing core infrastructure, our engineering process adapts to your operational scale.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '24px',
            }}
            className="segments-grid"
          >
            {clientSegments.map((segment) => {
              const SegIcon = segment.icon;
              return (
                <div
                  key={segment.title}
                  style={{
                    backgroundColor: 'var(--surface-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(214, 255, 63, 0.08)',
                          border: '1px solid var(--border-accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--brand-accent)',
                        }}
                      >
                        <SegIcon size={16} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {segment.tag}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '12px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {segment.title}
                    </h4>

                    <div style={{ marginBottom: '16px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        THE CHALLENGE:
                      </span>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {segment.challenge}
                      </p>
                    </div>

                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--brand-accent)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        OUR SOLUTION:
                      </span>
                      <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        {segment.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: '40px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                }}
              >
                TYPICAL CLIENT ONBOARDING TIME: UNDER 5 BUSINESS DAYS
              </span>
            </div>

            <button
              onClick={onStartProject}
              className="btn-secondary"
              style={{ height: '42px', padding: '0 20px', fontSize: '13px' }}
            >
              <span>Discuss Your Use Case</span>
              <ArrowRight size={14} style={{ color: 'var(--brand-accent)' }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trust-pillars-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .segments-grid {
            grid-template-columns: 1fr !important;
          }
          .who-we-work-with-wrapper {
            padding: 36px 24px !important;
          }
        }
        @media (max-width: 640px) {
          .trust-pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
