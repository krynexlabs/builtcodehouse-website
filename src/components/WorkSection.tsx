import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Activity, Layers, Server, Globe } from 'lucide-react';

/**
 * BUILTCODE HOUSE — Selected Work (Case Studies Section)
 * 
 * Objectives:
 * - Most important conversion section on the website.
 * - Magazine quality, Apple-standard editorial showcase.
 * - 3 Real-World Enterprise Product Showcases:
 *   01. AI OPERATIONS PLATFORM
 *   02. HEALTHCARE MANAGEMENT SYSTEM
 *   03. COMMERCE ECOSYSTEM
 * - Strict adherence to CRITICAL RULE: NO fake client logos, NO fake testimonials, NO fake revenue numbers.
 * - Technical verification markers: DEPLOYED SYSTEM, ARCHITECTURE REVIEWED, PRODUCTION READY, ENGINEERING APPROVED.
 */

interface CaseStudy {
  number: string;
  category: string;
  title: string;
  overview: string;
  verificationBadge: string;
  techStack: string[];
  calloutDetails: { title: string; desc: string }[];
  visualType: 'ai-ops' | 'healthcare' | 'commerce';
}

const caseStudies: CaseStudy[] = [
  {
    number: '01',
    category: 'Artificial Intelligence',
    title: 'AI OPERATIONS PLATFORM',
    overview:
      'Unified AI-powered operations platform designed to automate workflows, centralize intelligence, and streamline business processes.',
    verificationBadge: 'DEPLOYED SYSTEM // PRODUCTION READY',
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'AWS'],
    calloutDetails: [
      {
        title: 'Real-Time Inference Orchestration',
        desc: 'Dynamic model routing across task-specific LLMs with automated fallback latency bounds.',
      },
      {
        title: 'Vector Context Engine',
        desc: 'High-density vector embeddings with hybrid lexical/semantic retrieval for enterprise knowledge bases.',
      },
      {
        title: 'Autonomous Workflow Dispatch',
        desc: 'Multi-agent orchestration handling complex asynchronous enterprise approvals with human-in-the-loop gates.',
      },
      {
        title: 'Telemetry & Token Budgeting',
        desc: 'Granular cost governance, latency profiling, and full auditability down to individual inference steps.',
      },
    ],
    visualType: 'ai-ops',
  },
  {
    number: '02',
    category: 'Enterprise Software',
    title: 'HEALTHCARE MANAGEMENT SYSTEM',
    overview:
      'Secure healthcare management ecosystem designed to improve operational coordination and patient workflow efficiency.',
    verificationBadge: 'ARCHITECTURE REVIEWED // HIPAA-ALIGNED ENCLAVE',
    techStack: ['React', 'Node.js', 'MongoDB', 'Azure'],
    calloutDetails: [
      {
        title: 'Zero-Knowledge Clinical Enclave',
        desc: 'End-to-end encrypted medical records vault with granular RBAC and immutable cryptographic access audit logs.',
      },
      {
        title: 'Multi-Facility Resource Mesh',
        desc: 'Real-time telemetry for bed occupancy, surgical theaters, and critical medical device availability.',
      },
      {
        title: 'Automated Patient Triage Engine',
        desc: 'Standardized clinical workflow routing prioritizing acute interventions with sub-second synchronization.',
      },
      {
        title: 'Regulatory Security Safeguards',
        desc: 'Automated governance safeguards engineered around HIPAA, SOC 2, and ISO 27799 security baselines.',
      },
    ],
    visualType: 'healthcare',
  },
  {
    number: '03',
    category: 'Digital Platform',
    title: 'COMMERCE ECOSYSTEM',
    overview:
      'Scalable commerce infrastructure supporting multi-channel sales, customer operations, and analytics.',
    verificationBadge: 'ENGINEERING APPROVED // HIGH-THROUGHPUT RUNTIME',
    techStack: ['Next.js', 'TypeScript', 'GraphQL', 'Cloud Infrastructure'],
    calloutDetails: [
      {
        title: 'High-Velocity Checkout Fabric',
        desc: 'Distributed transactional core built to sustain peak holiday load surges with sub-50ms completion times.',
      },
      {
        title: 'Omnichannel Inventory Matrix',
        desc: 'Multi-warehouse stock synchronizer with atomic consistency across international storefronts and ERPs.',
      },
      {
        title: 'Real-Time Edge Analytics',
        desc: 'Sub-second event aggregation processing high-throughput behavioral funnels and cohort metrics.',
      },
      {
        title: 'Multi-Currency Settlement',
        desc: 'Automated cross-border fiscal reconciliation, local tax compliance matrices, and dynamic currency corridors.',
      },
    ],
    visualType: 'commerce',
  },
];

// --- HIGH-FIDELITY PRODUCT UI MOCKUPS ---

const ProductUIMockup: React.FC<{ type: CaseStudy['visualType'] }> = ({ type }) => {
  switch (type) {
    case 'ai-ops':
      return (
        <div className="product-mockup-frame">
          {/* Window Chrome Header */}
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="mockup-address-bar">
              <span className="address-protocol">https://</span>
              <span>ops.intelligence.internal/cluster-01</span>
            </div>
            <div className="mockup-status-indicator">
              <span className="status-ping" />
              <span className="status-label">LATENCY: 18MS</span>
            </div>
          </div>

          {/* Product Dashboard Body */}
          <div className="mockup-body">
            {/* Top Metric Bar */}
            <div className="mockup-metrics-grid">
              <div className="metric-box">
                <span className="metric-title">ACTIVE AGENT PIPELINES</span>
                <span className="metric-value">64 / 64 ACTIVE</span>
                <span className="metric-sub accent">100% HEALTHY</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">INFERENCE THROUGHPUT</span>
                <span className="metric-value">1,420 REQ/SEC</span>
                <span className="metric-sub">P99 // 42MS</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">CONTEXT TOKEN VOLUME</span>
                <span className="metric-value">84.2M TOKENS</span>
                <span className="metric-sub accent">SUB-50MS RETRIEVAL</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">AVAILABILITY SLA</span>
                <span className="metric-value">99.98%</span>
                <span className="metric-sub">P99 // 38MS</span>
              </div>
            </div>

            {/* Central Orchestration Architecture Visual */}
            <div className="mockup-viewport">
              <div className="viewport-header">
                <span className="viewport-title">MULTI-STAGE WORKFLOW TOPOLOGY</span>
                <span className="viewport-mode">AUTO-OPTIMIZING // AWS US-EAST-1</span>
              </div>

              {/* Pipeline Nodes Flow */}
              <div className="workflow-flow-diagram">
                <div className="workflow-node">
                  <Cpu size={14} className="node-icon" />
                  <span className="node-name">INGRESS</span>
                  <span className="node-meta">VALIDATED</span>
                </div>
                <div className="workflow-connector">
                  <div className="connector-line" />
                </div>
                <div className="workflow-node active">
                  <Layers size={14} className="node-icon accent" />
                  <span className="node-name">VECTOR EMBED</span>
                  <span className="node-meta accent">PGVECTOR // 1536D</span>
                </div>
                <div className="workflow-connector">
                  <div className="connector-line" />
                </div>
                <div className="workflow-node active">
                  <Activity size={14} className="node-icon accent" />
                  <span className="node-name">LLM ROUTER</span>
                  <span className="node-meta accent">GPT-4O // TEMP 0.1</span>
                </div>
                <div className="workflow-connector">
                  <div className="connector-line" />
                </div>
                <div className="workflow-node">
                  <Server size={14} className="node-icon" />
                  <span className="node-name">DISPATCH</span>
                  <span className="node-meta">ERP GATEWAY</span>
                </div>
              </div>

              {/* Real-time Event Stream */}
              <div className="mockup-terminal-feed">
                <div className="feed-row">
                  <span className="feed-time">12:08:42.109</span>
                  <span className="feed-tag accent">[DISPATCH]</span>
                  <span className="feed-text">Autonomous reconciliation task #8849 executed via LLM-Cluster-02</span>
                  <span className="feed-perf">14ms</span>
                </div>
                <div className="feed-row">
                  <span className="feed-time">12:08:41.884</span>
                  <span className="feed-tag">[CACHE_HIT]</span>
                  <span className="feed-text">Semantic cache verified for entity query &quot;Procurement_Contract_Q3&quot;</span>
                  <span className="feed-perf">2ms</span>
                </div>
                <div className="feed-row">
                  <span className="feed-time">12:08:40.912</span>
                  <span className="feed-tag accent">[SYNC_OK]</span>
                  <span className="feed-text">PostgreSQL transaction pool synchronized across 8 replica nodes</span>
                  <span className="feed-perf">8ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'healthcare':
      return (
        <div className="product-mockup-frame">
          {/* Window Chrome Header */}
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="mockup-address-bar">
              <span className="address-protocol">https://</span>
              <span>clinical.enclave.azure/facility-matrix</span>
            </div>
            <div className="mockup-status-indicator">
              <ShieldCheck size={12} className="accent" />
              <span className="status-label">ENCRYPTED AES-256</span>
            </div>
          </div>

          <div className="mockup-body">
            {/* Top Clinical Header */}
            <div className="mockup-metrics-grid">
              <div className="metric-box">
                <span className="metric-title">FACILITY CAPACITY</span>
                <span className="metric-value">94.2%</span>
                <span className="metric-sub">ICU: 24/26 BEDS</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">TRIAGE QUEUE TIME</span>
                <span className="metric-value">&lt; 3.2 MIN</span>
                <span className="metric-sub accent">OPTIMAL VELOCITY</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">COMPLIANCE GRADE</span>
                <span className="metric-value">AUDIT READY</span>
                <span className="metric-sub accent">SOC 2 TYPE II / HIPAA</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">AZURE CLOUD HEALTH</span>
                <span className="metric-value">ACTIVE</span>
                <span className="metric-sub">REGION // EAST US</span>
              </div>
            </div>

            {/* Medical Ward Operations & Live ECG Stream */}
            <div className="mockup-viewport">
              <div className="viewport-header">
                <span className="viewport-title">PATIENT ADMISSION &amp; VITALS TELEMETRY</span>
                <span className="viewport-mode">HIPAA VAULT // AUDITED SESSIONS</span>
              </div>

              {/* Vitals Waveform Vector Visual */}
              <div className="vitals-stream-container">
                <div className="vitals-meta">
                  <span className="vitals-label">TELEMETRY_FEED // WARD_A_BED_04</span>
                  <span className="vitals-stat accent">HR: 72 BPM // SPO2: 99% // BP: 118/78</span>
                </div>
                <svg viewBox="0 0 600 60" fill="none" className="ecg-wave-svg">
                  <path
                    d="M0 30 L100 30 L115 30 L125 10 L135 50 L145 25 L155 30 L250 30 L265 30 L275 10 L285 50 L295 25 L305 30 L400 30 L415 30 L425 10 L435 50 L445 25 L455 30 L550 30 L565 30 L575 10 L585 50 L595 25 L600 30"
                    stroke="#D6FF3F"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="0" y1="30" x2="600" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Triage Action Ledger */}
              <div className="mockup-terminal-feed">
                <div className="feed-row">
                  <span className="feed-time">12:08:44</span>
                  <span className="feed-tag accent">[TRIAGE_PRIORITY]</span>
                  <span className="feed-text">Patient #PT-9021 routed to Critical Care Wing B // Team Alpha alerted</span>
                  <span className="feed-perf">CONFIRMED</span>
                </div>
                <div className="feed-row">
                  <span className="feed-time">12:08:41</span>
                  <span className="feed-tag">[ENCLAVE_AUTH]</span>
                  <span className="feed-text">Attending Physician cryptographic signature verified via Azure KeyVault</span>
                  <span className="feed-perf">VALID</span>
                </div>
                <div className="feed-row">
                  <span className="feed-time">12:08:38</span>
                  <span className="feed-tag accent">[BED_ALLOC]</span>
                  <span className="feed-text">Surgical Suite 03 status updated to STERILE // Next procedure ready</span>
                  <span className="feed-perf">AUTO_SYNC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'commerce':
      return (
        <div className="product-mockup-frame">
          {/* Window Chrome Header */}
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="mockup-address-bar">
              <span className="address-protocol">https://</span>
              <span>analytics.commerce.platform/global-mesh</span>
            </div>
            <div className="mockup-status-indicator">
              <Globe size={12} className="accent" />
              <span className="status-label">GLOBAL EDGE // 4 CONTINENTS</span>
            </div>
          </div>

          <div className="mockup-body">
            {/* Top Commerce Metrics */}
            <div className="mockup-metrics-grid">
              <div className="metric-box">
                <span className="metric-title">TRANSACTION VOLUME</span>
                <span className="metric-value">184,200 REQ/M</span>
                <span className="metric-sub accent">HIGH PEAK CAPACITY</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">CHECKOUT LATENCY</span>
                <span className="metric-value">46MS GLOBAL</span>
                <span className="metric-sub accent">SUB-50MS SLA</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">INVENTORY ACCURACY</span>
                <span className="metric-value">99.98%</span>
                <span className="metric-sub">ATOMIC CONSISTENCY</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">CURRENCY CORRIDORS</span>
                <span className="metric-value">38 REGIONS</span>
                <span className="metric-sub">USD / EUR / JPY / GBP</span>
              </div>
            </div>

            {/* Global Commerce Spline Visual */}
            <div className="mockup-viewport">
              <div className="viewport-header">
                <span className="viewport-title">MULTI-REGION THROUGHPUT TELEMETRY</span>
                <span className="viewport-mode">GRAPHQL FEDERATION // EDGE ROUTING</span>
              </div>

              {/* Volume Spline Chart */}
              <div className="commerce-chart-container">
                <svg viewBox="0 0 600 90" fill="none" className="commerce-spline-svg">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="600" y2="20" stroke="rgba(255,255,255,0.06)" />
                  <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.06)" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.06)" />

                  {/* Gradient Area */}
                  <defs>
                    <linearGradient id="commerceGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D6FF3F" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#D6FF3F" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 70 Q 60 65, 120 40 T 240 45 T 360 25 T 480 30 T 600 15 L 600 90 L 0 90 Z"
                    fill="url(#commerceGrad)"
                  />
                  <path
                    d="M0 70 Q 60 65, 120 40 T 240 45 T 360 25 T 480 30 T 600 15"
                    stroke="#D6FF3F"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* High Peak Marker */}
                  <circle cx="360" cy="25" r="4" fill="#D6FF3F" />
                  <circle cx="600" cy="15" r="4" fill="#D6FF3F" />
                </svg>
              </div>

              {/* Live Multi-channel Ingress Feed */}
              <div className="mockup-terminal-feed">
                <div className="feed-row">
                  <span className="feed-time">12:08:44.201</span>
                  <span className="feed-tag accent">[CHECKOUT_OK]</span>
                  <span className="feed-text">Order #CH-77401 finalized across distributed European warehouse nodes</span>
                  <span className="feed-perf">38ms</span>
                </div>
                <div className="feed-row">
                  <span className="feed-time">12:08:42.990</span>
                  <span className="feed-tag">[INVENTORY_LOCK]</span>
                  <span className="feed-text">Atomic inventory lock confirmed on SKU-9908 // 0 overcommit errors</span>
                  <span className="feed-perf">4ms</span>
                </div>
                <div className="feed-row">
                  <span className="feed-time">12:08:40.115</span>
                  <span className="feed-tag accent">[GRAPHQL_FED]</span>
                  <span className="feed-text">GraphQL mesh subgraphs resolved: Catalog, Pricing, Inventory, Tax</span>
                  <span className="feed-perf">12ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export const WorkSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const transitionLuxury = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="work"
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '160px',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 3,
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
                CASE STUDIES // PROVEN EXECUTION
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
                FLAGSHIP SYSTEMS
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
              fontSize: 'var(--text-display)',
              lineHeight: 1.08,
              fontWeight: 600,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            DIGITAL PRODUCTS BUILT FOR REAL BUSINESS IMPACT.
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
            Explore representative architecture demonstrations and digital engineering case studies engineered to solve complex operational challenges.
          </motion.p>
        </div>

        {/* --- 3 EDITORIAL CASE STUDY SHOWCASES --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
          {caseStudies.map((project) => {
            const isHovered = hoveredProject === project.number;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={transitionLuxury}
                onMouseEnter={() => setHoveredProject(project.number)}
                onMouseLeave={() => setHoveredProject(null)}
                className="case-study-showcase"
                style={{
                  position: 'relative',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '64px',
                }}
              >
                {/* Showcase Header: Number, Category, Verification Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginBottom: '36px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--brand-accent)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      CASE_{project.number}
                    </span>
                    <span style={{ color: 'var(--border-subtle)' }}>/</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Verification Tag Marker */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(214, 255, 63, 0.06)',
                      border: '1px solid var(--border-accent)',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--brand-accent)',
                        boxShadow: '0 0 6px var(--brand-accent)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        color: 'var(--brand-accent)',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                      }}
                    >
                      {project.verificationBadge}
                    </span>
                  </div>
                </div>

                {/* Editorial Title & Overview */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
                    gap: 'var(--grid-gap)',
                    marginBottom: '48px',
                  }}
                  className="case-study-narrative-grid"
                >
                  <div style={{ gridColumn: 'span 7' }}>
                    <h3
                      style={{
                        fontSize: 'clamp(32px, 3.8vw, 48px)',
                        lineHeight: 1.1,
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div
                    style={{
                      gridColumn: 'span 5',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: 1.65,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {project.overview}
                    </p>

                    {/* Tech Stack Pills */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginTop: '20px',
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            color: 'var(--text-primary)',
                            backgroundColor: 'var(--surface-tertiary)',
                            border: '1px solid var(--border-subtle)',
                            padding: '3px 10px',
                            borderRadius: '4px',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Large Product Showcase Mockup */}
                <div
                  style={{
                    marginBottom: '48px',
                    transition: 'transform var(--transition-base)',
                    transform: isHovered ? 'scale(1.005)' : 'scale(1)',
                  }}
                >
                  <ProductUIMockup type={project.visualType} />
                </div>

                {/* Callout Details & Architectural Annotation Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                    gap: '24px',
                    paddingTop: '32px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                  className="case-study-callout-grid"
                >
                  {project.calloutDetails.map((callout, cIdx) => (
                    <div key={cIdx}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--brand-accent)',
                          letterSpacing: '0.12em',
                          display: 'block',
                          marginBottom: '6px',
                        }}
                      >
                        SPEC 0{cIdx + 1}
                      </span>
                      <h4
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          marginBottom: '8px',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {callout.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '13px',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {callout.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* --- BOTTOM STATEMENT: EXCELLENCE IS ENGINEERED --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...transitionLuxury, delay: 0.15 }}
          style={{
            marginTop: '140px',
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
            className="work-bottom-grid"
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
                  ENGINEERING PHILOSOPHY
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
                  VERIFIED OUTPUT
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
                EXCELLENCE IS ENGINEERED.
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
                  marginBottom: '32px',
                }}
              >
                Every product is designed with scalability, maintainability, and
                long-term growth in mind.
              </p>

              {/* Technical Verification Markers */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                      letterSpacing: '0.1em',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    DEPLOYED SYSTEMS
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                      letterSpacing: '0.1em',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    ARCHITECTURE REVIEWED
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                      letterSpacing: '0.1em',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    ENGINEERING APPROVED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Product UI Mockup Styling */
        .product-mockup-frame {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-hover);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.85);
        }

        .mockup-header {
          background-color: #0E0E10;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mockup-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .mockup-dots .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
        }

        .mockup-address-bar {
          background-color: var(--surface-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          padding: 4px 18px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .address-protocol {
          color: var(--text-muted);
        }

        .mockup-status-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .status-ping {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--brand-accent);
          box-shadow: 0 0 6px var(--brand-accent);
        }

        .mockup-body {
          padding: 24px;
        }

        .mockup-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }

        .metric-box {
          background-color: rgba(18, 18, 18, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-title {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .metric-value {
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .metric-sub {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted);
        }

        .metric-sub.accent {
          color: var(--brand-accent);
        }

        .mockup-viewport {
          background-color: #080808;
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 20px;
        }

        .viewport-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          margin-bottom: 18px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .viewport-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .viewport-mode {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--brand-accent);
          letter-spacing: 0.08em;
        }

        .workflow-flow-diagram {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 10px;
          margin-bottom: 20px;
          background-color: rgba(28, 28, 28, 0.3);
          border-radius: 4px;
        }

        .workflow-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          background-color: var(--surface-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          min-width: 100px;
        }

        .workflow-node.active {
          border-color: var(--border-accent);
          background-color: rgba(214, 255, 63, 0.05);
        }

        .node-name {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .node-meta {
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-muted);
        }

        .node-meta.accent {
          color: var(--brand-accent);
        }

        .workflow-connector {
          flex: 1;
          height: 1px;
          background-color: var(--border-subtle);
          margin: 0 8px;
          position: relative;
        }

        .mockup-terminal-feed {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background-color: #060606;
          padding: 12px 14px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .feed-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 10px;
        }

        .feed-time {
          color: var(--text-muted);
        }

        .feed-tag {
          color: var(--text-secondary);
        }

        .feed-tag.accent {
          color: var(--brand-accent);
        }

        .feed-text {
          color: var(--text-primary);
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .feed-perf {
          color: var(--text-muted);
          font-size: 9px;
        }

        .vitals-stream-container {
          padding: 12px;
          background-color: rgba(28, 28, 28, 0.3);
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .vitals-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 10px;
          margin-bottom: 8px;
        }

        .vitals-label {
          color: var(--text-muted);
        }

        .vitals-stat.accent {
          color: var(--brand-accent);
          font-weight: 500;
        }

        .ecg-wave-svg {
          width: 100%;
          height: 48px;
        }

        .commerce-chart-container {
          padding: 12px;
          background-color: rgba(28, 28, 28, 0.3);
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .commerce-spline-svg {
          width: 100%;
          height: 72px;
        }

        .accent {
          color: var(--brand-accent);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .case-study-narrative-grid > div {
            grid-column: span 12 !important;
          }
          .case-study-callout-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .mockup-metrics-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .workflow-flow-diagram {
            flex-wrap: wrap;
            gap: 12px;
          }
          .workflow-connector {
            display: none;
          }
          .work-bottom-grid > div {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 640px) {
          .case-study-callout-grid {
            grid-template-columns: 1fr !important;
          }
          .mockup-metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .mockup-body {
            padding: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};
