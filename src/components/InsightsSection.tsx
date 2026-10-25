import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { WhitepaperModal } from './WhitepaperModal';
import { WHITEPAPER_ARTICLES, type WhitepaperArticle } from '../data/whitepapers';

/**
 * BUILTCODE HOUSE — Insights Section (Phase 6)
 * 
 * Objectives:
 * - Position BUILTCODE HOUSE as a premier technology and architectural authority.
 * - Linear Blog / Stripe Publications / Vercel Resources aesthetic.
 * - Magazine-grade editorial broadsheet layout, generous whitespace, publication typography.
 * - No generic blog card templates.
 * - Strict adherence to brand system (#D6FF3F, #F5F5F5, #121212, #080808, and hairline borders).
 */

interface Article {
  number: string;
  code: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  annotation: string;
  schematicType?: 'ai-era' | 'saas-arch' | 'enterprise-org' | 'longterm-win';
}

const leadArticle: Article = {
  number: '01',
  code: 'PUB_2026.01 // RESEARCH PAPER',
  title: 'THE NEXT ERA OF AI PRODUCT ENGINEERING',
  category: 'Artificial Intelligence',
  readTime: '8 MIN READ',
  summary:
    'How modern engineering teams are integrating AI into workflows, products, and business systems.',
  annotation: 'FOUNDATIONAL BRIEF // DISTRIBUTED AGENTS',
  schematicType: 'ai-era',
};

const secondaryArticles: Article[] = [
  {
    number: '02',
    code: 'PUB_2026.02 // ARCHITECTURE',
    title: 'SCALABLE SAAS ARCHITECTURE IN 2027',
    category: 'Software Engineering',
    readTime: '12 MIN READ',
    summary:
      'Principles for designing SaaS platforms capable of supporting long-term growth.',
    annotation: 'SYSTEM BLUEPRINT // MULTI-TENANT ISOLATION',
    schematicType: 'saas-arch',
  },
  {
    number: '03',
    code: 'PUB_2026.03 // SYSTEMS',
    title: 'DESIGNING SOFTWARE FOR COMPLEX ORGANIZATIONS',
    category: 'Enterprise Systems',
    readTime: '10 MIN READ',
    summary:
      'Balancing usability, security, and operational requirements in enterprise environments.',
    annotation: 'ORGANIZATIONAL MATRIX // ZERO-TRUST',
    schematicType: 'enterprise-org',
  },
  {
    number: '04',
    code: 'PUB_2026.04 // PHILOSOPHY',
    title: 'WHY LONG-TERM THINKING WINS',
    category: 'Product Strategy',
    readTime: '6 MIN READ',
    summary:
      'Building systems that remain valuable as businesses evolve.',
    annotation: 'STRATEGIC THESIS // SUSTAINED VALUE',
    schematicType: 'longterm-win',
  },
];

// --- BESPOKE EDITORIAL SCHEMATIC GRAPHICS ---

const EditorialSchematic: React.FC<{ type: Article['schematicType']; isHovered: boolean }> = ({
  type,
  isHovered,
}) => {
  const accent = '#D6FF3F';
  const wire = isHovered ? 'rgba(245, 245, 245, 0.45)' : 'rgba(245, 245, 245, 0.2)';
  const dim = 'rgba(255, 255, 255, 0.08)';

  switch (type) {
    case 'ai-era':
      return (
        <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Radial Tensor Bus & Pipeline Coordinate Grid */}
          <line x1="40" y1="120" x2="460" y2="120" stroke={wire} strokeDasharray="3 3" />
          <line x1="250" y1="20" x2="250" y2="220" stroke={dim} strokeDasharray="3 3" />

          {/* Model Context Shell */}
          <circle cx="250" cy="120" r="75" stroke={dim} strokeDasharray="4 4" />
          <circle cx="250" cy="120" r="50" stroke={wire} />
          <circle cx="250" cy="120" r="24" fill="#121212" stroke={accent} strokeWidth="1.5" />
          <text x="235" y="124" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">AGENT</text>

          {/* Workflow Ingestion & Dispatch Nodes */}
          <rect x="60" y="95" width="85" height="50" rx="2" fill="#181818" stroke={wire} />
          <text x="70" y="118" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">WORKFLOW</text>
          <text x="70" y="132" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">INPUT STAGE</text>

          <rect x="355" y="95" width="85" height="50" rx="2" fill="#181818" stroke={isHovered ? accent : wire} />
          <text x="365" y="118" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">BUSINESS SYS</text>
          <text x="365" y="132" fill={accent} fontSize="7" fontFamily="var(--font-mono)">DISPATCH</text>

          {/* Interconnect Vectors */}
          <path d="M145 120 L226 120" stroke={accent} strokeWidth="1.5" />
          <path d="M274 120 L355 120" stroke={accent} strokeWidth="1.5" />
          <circle cx="226" cy="120" r="3" fill={accent} />
          <circle cx="274" cy="120" r="3" fill={accent} />

          {/* Calibrated Telemetry Markers */}
          <text x="60" y="55" fill={accent} fontSize="8" fontFamily="var(--font-mono)">
            FIG 1.0 // SYSTEMIC AGENT ROUTING
          </text>
          <text x="340" y="200" fill="#6E747B" fontSize="8" fontFamily="var(--font-mono)">
            LATENCY BOUND: &lt;50MS
          </text>
        </svg>
      );

    default:
      return null;
  }
};

export const InsightsSection: React.FC = () => {
  const [leadHovered, setLeadHovered] = useState(false);
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<WhitepaperArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenArticle = (fullCode: string) => {
    const codeKey = fullCode.split(' ')[0];
    const found = WHITEPAPER_ARTICLES[codeKey];
    if (found) {
      setSelectedArticle(found);
      setIsModalOpen(true);
    }
  };

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
      id="insights"
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
        <div style={{ marginBottom: '96px', maxWidth: '1000px' }}>
          {/* Section Label */}
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
                INSIGHTS // KNOWLEDGE SYSTEM
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
                EDITORIAL PAPERS
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
            THINKING BEYOND THE BUILD.
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
              maxWidth: '680px',
            }}
          >
            Perspectives on engineering, product development, AI systems, architecture,
            and the future of digital products.
          </motion.p>
        </div>

        {/* --- LEAD FEATURED ARTICLE (Broadsheet Publication Showcase) --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={transitionLuxury}
          onMouseEnter={() => setLeadHovered(true)}
          onMouseLeave={() => setLeadHovered(false)}
          onClick={() => handleOpenArticle(leadArticle.code)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpenArticle(leadArticle.code);
            }
          }}
          style={{
            marginBottom: '72px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            padding: '56px',
            position: 'relative',
            transition: 'border-color var(--transition-base), transform var(--transition-base)',
            borderColor: leadHovered ? 'var(--border-hover)' : 'var(--border-subtle)',
            transform: leadHovered ? 'translateY(-2px)' : 'translateY(0)',
            cursor: 'pointer',
          }}
          className="lead-article-card"
        >
          {/* Active Accent Hairline Growth */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '32px',
              right: '32px',
              height: '1px',
              backgroundColor: leadHovered ? 'var(--brand-accent)' : 'transparent',
              boxShadow: leadHovered ? '0 0 10px var(--brand-accent)' : 'none',
              transition: 'all var(--transition-base)',
            }}
          />

          {/* Corner Crosshairs */}
          <div className="crosshair" style={{ top: '16px', left: '16px' }} />
          <div className="crosshair" style={{ top: '16px', right: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', left: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', right: '16px' }} />

          {/* Publication Metadata Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--brand-accent)',
                  letterSpacing: '0.12em',
                }}
              >
                {leadArticle.code}
              </span>
              <span style={{ color: 'var(--border-subtle)' }}>/</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}
              >
                {leadArticle.category}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                }}
              >
                {leadArticle.readTime}
              </span>
              <ArrowUpRight
                size={16}
                style={{
                  color: leadHovered ? 'var(--brand-accent)' : 'var(--text-muted)',
                  transition: 'transform var(--transition-fast), color var(--transition-fast)',
                  transform: leadHovered ? 'translate(2px, -2px)' : 'none',
                }}
              />
            </div>
          </div>

          {/* Lead Content Grid: Title + Summary + Schematic */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
            className="lead-article-grid"
          >
            <div style={{ gridColumn: 'span 6' }}>
              <h3
                style={{
                  fontSize: 'clamp(32px, 3.6vw, 44px)',
                  lineHeight: 1.1,
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                {leadArticle.title}
              </h3>

              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginBottom: '32px',
                }}
              >
                {leadArticle.summary}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-accent)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  {leadArticle.annotation}
                </span>
              </div>
            </div>

            {/* Right Column: High-Fidelity Architectural Schematic */}
            <div
              style={{
                gridColumn: 'span 6',
                height: '240px',
                backgroundColor: 'rgba(8, 8, 8, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <EditorialSchematic type={leadArticle.schematicType} isHovered={leadHovered} />
            </div>
          </div>
        </motion.div>

        {/* --- 3 SECONDARY EDITORIAL ARTICLES (Triptych Publication List) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '32px',
            marginBottom: '140px',
          }}
          className="secondary-articles-grid"
        >
          {secondaryArticles.map((article) => {
            const isHovered = hoveredArticle === article.number;

            return (
              <motion.div
                key={article.number}
                variants={itemVariants}
                onMouseEnter={() => setHoveredArticle(article.number)}
                onMouseLeave={() => setHoveredArticle(null)}
                onClick={() => handleOpenArticle(article.code)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenArticle(article.code);
                  }
                }}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition:
                    'border-color var(--transition-base), transform var(--transition-base)',
                  borderColor: isHovered ? 'var(--border-hover)' : 'var(--border-subtle)',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                {/* Active Top Accent Line Growth */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '20px',
                    right: '20px',
                    height: '1px',
                    backgroundColor: isHovered ? 'var(--brand-accent)' : 'transparent',
                    boxShadow: isHovered ? '0 0 10px var(--brand-accent)' : 'none',
                    transition: 'all var(--transition-base)',
                  }}
                />

                {/* Article Header: Number, Category, Read Time */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '24px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: isHovered ? 'var(--brand-accent)' : 'var(--text-muted)',
                        }}
                      >
                        {article.number}
                      </span>
                      <span style={{ color: 'var(--border-subtle)' }}>/</span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {article.category}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {article.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h4
                    style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '16px',
                    }}
                  >
                    {article.title}
                  </h4>

                  {/* Article Summary */}
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {article.summary}
                  </p>
                </div>

                {/* Article Footer with Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    marginTop: '28px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {article.annotation}
                  </span>

                  <ArrowUpRight
                    size={15}
                    style={{
                      color: isHovered ? 'var(--brand-accent)' : 'var(--text-muted)',
                      transition: 'transform var(--transition-fast), color var(--transition-fast)',
                      transform: isHovered ? 'translate(2px, -2px)' : 'none',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- FEATURED QUOTE BLOCK: KNOWLEDGE COMPOUNDS --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={transitionLuxury}
          style={{
            marginBottom: '140px',
            padding: '64px 56px',
            backgroundColor: 'var(--surface-tertiary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            position: 'relative',
          }}
          className="insights-quote-card"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
            className="insights-quote-grid"
          >
            {/* Left Column (Span 5): Headline */}
            <div style={{ gridColumn: 'span 5' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}
              >
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
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  INTELLECTUAL FOUNDATION
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 48px)',
                  lineHeight: 1.08,
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                }}
              >
                KNOWLEDGE COMPOUNDS.
              </h3>
            </div>

            {/* Right Column (Span 7): Body */}
            <div style={{ gridColumn: 'span 7' }}>
              <p
                style={{
                  fontSize: '20px',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                The best engineering decisions are informed by continuous learning, careful
                observation, and long-term thinking.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                >
                  PEER-REVIEWED ARCHITECTURE
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
                  EMPIRICAL DISCOVERY
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- BOTTOM SECTION: ALWAYS LEARNING. ALWAYS BUILDING. --- */}
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
            className="insights-bottom-grid"
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
                  CONTINUOUS EVOLUTION
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
                  RESEARCH VELOCITY
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
                ALWAYS LEARNING.
                <br />
                ALWAYS BUILDING.
              </h3>
            </div>

            {/* Right Column (Span 6): Statement & Verification Markers */}
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
                Technology evolves every day.
                <br />
                Great engineering evolves with it.
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
                  RESEARCH PIPELINE ACTIVE
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
                  OPEN ARCHITECTURE
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
                  Q1/Q2 EDITION
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .lead-article-grid > div {
            grid-column: span 12 !important;
          }
          .secondary-articles-grid {
            grid-template-columns: 1fr !important;
          }
          .insights-quote-grid > div {
            grid-column: span 12 !important;
          }
          .insights-bottom-grid > div {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 640px) {
          .lead-article-card {
            padding: 32px 24px !important;
          }
          .insights-quote-card {
            padding: 36px 24px !important;
          }
        }
      `}</style>
      {/* Technical Paper Reader Modal */}
      <WhitepaperModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
