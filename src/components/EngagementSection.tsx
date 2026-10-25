import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, Layers, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EngagementSectionProps {
  onStartProject?: () => void;
}

export const EngagementSection: React.FC<EngagementSectionProps> = ({ onStartProject }) => {
  const transitionLuxury = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const blocks = [
    {
      number: '01',
      icon: Compass,
      tag: 'PHASE 01 // ANALYSIS',
      title: 'Discovery',
      deliverable: 'Alignment Brief & Success Criteria',
      description:
        'We immerse ourselves in your business context, operational constraints, and commercial goals. We identify key user workflows, evaluate legacy dependencies, and clarify exactly what success looks like before writing code.',
      focusPoints: [
        'Commercial & product objectives',
        'User personas & critical workflows',
        'Operational & regulatory constraints',
        'Success metrics & KPI baselines',
      ],
    },
    {
      number: '02',
      icon: Cpu,
      tag: 'PHASE 02 // ARCHITECTURE',
      title: 'Architecture Review',
      deliverable: 'System Topology & Tech Stack Plan',
      description:
        'Our principal engineers analyze technical feasibility, data modeling, API boundaries, and infrastructure scalability. We evaluate security standards, multi-tenant isolation, and performance bottlenecks to de-risk the build.',
      focusPoints: [
        'Database schemas & data modeling',
        'API & service integration boundaries',
        'Cloud infrastructure & compute topology',
        'Security, auth & compliance standards',
      ],
    },
    {
      number: '03',
      icon: Layers,
      tag: 'PHASE 03 // SPECIFICATION',
      title: 'Scope Definition',
      deliverable: 'Milestone Roadmap & Acceptance Criteria',
      description:
        'We translate architectural decisions into explicit, phased deliverables. Every sprint milestone is defined with clear acceptance criteria, removing ambiguity so you always know what is being delivered and when.',
      focusPoints: [
        'Feature prioritization & MVP boundaries',
        'Weekly sprint deliverable breakdowns',
        'Objective acceptance verification criteria',
        'Risk mitigation & fallback pathways',
      ],
    },
    {
      number: '04',
      icon: GitBranch,
      tag: 'PHASE 04 // EXECUTION',
      title: 'Delivery Planning',
      deliverable: 'Staging Environment & Production Runbook',
      description:
        'We establish your dedicated development environment, CI/CD automated test pipelines, and direct collaboration channels. You have live staging visibility, weekly recorded Loom walkthroughs, and direct access to senior engineers.',
      focusPoints: [
        'Automated CI/CD deployment pipelines',
        'Live staging environments for reviews',
        'Direct Slack/Linear communication',
        '100% intellectual property transfer',
      ],
    },
  ];

  const handleScrollToContact = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="engagement"
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
        <div style={{ marginBottom: '88px', maxWidth: '980px' }}>
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
                ENGAGEMENT MODEL
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
                DISCOVERY FIRST
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
            EVERY PROJECT STARTS WITH DISCOVERY.
          </motion.h2>

          {/* Section Body */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...transitionLuxury, delay: 0.2 }}
            style={{
              fontSize: 'var(--text-body)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '740px',
            }}
          >
            Every organization has unique goals, constraints, and opportunities. We begin with a
            technical discovery process to understand your business, users, and requirements
            before recommending an engagement approach.
          </motion.p>
        </div>

        {/* --- 4 ENGAGEMENT BLOCKS GRID --- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: '24px',
            marginBottom: '72px',
          }}
          className="engagement-grid"
        >
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...transitionLuxury, delay: index * 0.1 }}
                style={{
                  gridColumn: 'span 6',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'border-color var(--transition-base), transform var(--transition-base)',
                }}
                className="engagement-card"
              >
                {/* Crosshairs */}
                <div className="crosshair" style={{ top: '14px', left: '14px' }} />
                <div className="crosshair" style={{ top: '14px', right: '14px' }} />
                <div className="crosshair" style={{ bottom: '14px', left: '14px' }} />
                <div className="crosshair" style={{ bottom: '14px', right: '14px' }} />

                <div>
                  {/* Top Meta Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '28px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '4px',
                          backgroundColor: 'var(--surface-tertiary)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--brand-accent)',
                        }}
                      >
                        <Icon size={16} />
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--brand-accent)',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {block.tag}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                      }}
                    >
                      {block.number}
                    </span>
                  </div>

                  {/* Block Title */}
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                    }}
                  >
                    {block.title}
                  </h3>

                  {/* Block Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '24px',
                    }}
                  >
                    {block.description}
                  </p>

                  {/* Focus Checkpoints */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginBottom: '28px',
                    }}
                  >
                    {block.focusPoints.map((point) => (
                      <div
                        key={point}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '13px',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <span
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--brand-accent)',
                            flexShrink: 0,
                          }}
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Badge */}
                <div
                  style={{
                    padding: '12px 16px',
                    backgroundColor: 'var(--surface-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: 'var(--brand-accent)', flexShrink: 0 }} />
                  <span>
                    <strong style={{ color: 'var(--text-primary)' }}>OUTCOME:</strong> {block.deliverable}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM CALLOUT & ACTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={transitionLuxury}
          style={{
            padding: '48px 40px',
            backgroundColor: 'var(--surface-tertiary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            position: 'relative',
          }}
          className="engagement-cta-box"
        >
          <div style={{ maxWidth: '640px' }}>
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
              NO SALES PITCHES // DIRECT SENIOR SCOPING
            </span>
            <h4
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              Ready to begin technical discovery?
            </h4>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
              Schedule a 30-minute discovery conversation with our principal engineer to review your technical
              requirements, constraints, and architecture pathways.
            </p>
          </div>

          <button
            onClick={handleScrollToContact}
            className="btn-primary"
            style={{ height: '48px', padding: '0 28px', fontSize: '13px' }}
          >
            <span>Start Technical Discovery</span>
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>

      <style>{`
        .engagement-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .engagement-grid > div {
            grid-column: span 12 !important;
          }
          .engagement-cta-box {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
