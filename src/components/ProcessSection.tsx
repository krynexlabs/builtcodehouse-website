import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

/**
 * BUILTCODE HOUSE — Engineering Process Section (Phase 3)
 * 
 * Objectives:
 * - Show enterprise clients exactly how BUILTCODE HOUSE delivers software.
 * - Engineering command-center aesthetic, architectural workflow, continuous blueprint layout.
 * - Horizontal storytelling experience with structural connection lines, precision coordinates, and flow routes.
 * - Subtle technical annotations: FRAMEWORK V3.0, ENGINEERING STANDARD, ENTERPRISE DELIVERY MODEL, SYSTEMATIC EXECUTION.
 * - Strict adherence to Brand System (#D6FF3F, #F5F5F5, #121212, #080808, hairlines).
 */

interface ProcessStep {
  number: string;
  code: string;
  title: string;
  description: string;
  phaseTag: string;
  telemetry: string;
  deliverables: string[];
  schematicType: 'discovery' | 'strategy' | 'architecture' | 'build' | 'launch' | 'scale';
}

const steps: ProcessStep[] = [
  {
    number: '01',
    code: 'PHASE_01 // REQ_SPEC',
    title: 'DISCOVERY',
    description:
      'Understand goals, users, constraints, opportunities, competition, and business requirements.',
    phaseTag: 'FOUNDATION MATRIX',
    telemetry: 'SPRINT 01 // INPUT VALIDATION',
    deliverables: [
      'Business Requirements Specification (BRS)',
      'Technical Constraint & Risk Audit',
      'Competitive Architecture Benchmark',
      'User Journey & Entity Mapping',
    ],
    schematicType: 'discovery',
  },
  {
    number: '02',
    code: 'PHASE_02 // STRAT_DIR',
    title: 'STRATEGY',
    description:
      'Define roadmap, product requirements, architecture direction, priorities, and success metrics.',
    phaseTag: 'PLANNING & ROADMAP',
    telemetry: 'SPRINT 02 // TRAJECTORY DEFINITION',
    deliverables: [
      'Architecture Decision Records (ADRs)',
      'Phased Engineering Delivery Roadmap',
      'Key SLO, SLA & KPI Definitions',
      'Technology Stack Selection Matrix',
    ],
    schematicType: 'strategy',
  },
  {
    number: '03',
    code: 'PHASE_03 // SYS_ARCH',
    title: 'ARCHITECTURE',
    description:
      'Design scalable systems, infrastructure, data models, integrations, and technical foundations.',
    phaseTag: 'STRUCTURAL BLUEPRINT',
    telemetry: 'SPRINT 03-04 // KERNEL DESIGN',
    deliverables: [
      'C4 Multi-Tier Component Topology',
      'Relational & Distributed Data Schemas',
      'Strict API Contracts (OpenAPI & gRPC)',
      'Zero-Trust Security & Threat Model',
    ],
    schematicType: 'architecture',
  },
  {
    number: '04',
    code: 'PHASE_04 // ENG_FAB',
    title: 'BUILD',
    description:
      'Develop software using modern engineering standards, testing, security, and performance optimization.',
    phaseTag: 'SYSTEM FABRICATION',
    telemetry: 'SPRINT 05-10 // CONTINUOUS SPRINT',
    deliverables: [
      'Test-Driven Modular Codebase',
      'Automated CI/CD Test & Lint Harness',
      'Static Analysis & Vulnerability Gates',
      'Sub-100ms Latency Benchmarks',
    ],
    schematicType: 'build',
  },
  {
    number: '05',
    code: 'PHASE_05 // PROD_REL',
    title: 'LAUNCH',
    description:
      'Deploy with confidence using monitoring, observability, validation, and operational readiness.',
    phaseTag: 'DEPLOYMENT ORCHESTRATION',
    telemetry: 'RELEASE GATE // CUTOVER',
    deliverables: [
      'Blue/Green Zero-Downtime Deployment',
      'Distributed OpenTelemetry Tracing',
      'Automated Rollback Safeguards',
      'Penetration Testing Audit Clearance',
    ],
    schematicType: 'launch',
  },
  {
    number: '06',
    code: 'PHASE_06 // CONTINUOUS',
    title: 'SCALE',
    description:
      'Continuously improve, optimize, automate, and expand product capabilities.',
    phaseTag: 'EXPONENTIAL GROWTH',
    telemetry: 'POST-LAUNCH // INFINITE LOOP',
    deliverables: [
      'Horizontal Pod Auto-Scaling Topology',
      'Algorithmic Query & Cache Tuning',
      'Continuous Chaos Resilience Testing',
      'High-Velocity Iteration Pipeline',
    ],
    schematicType: 'scale',
  },
];

// --- BESPOKE PROCESS BLUEPRINT SCHEMATICS ---

const ProcessSchematic: React.FC<{
  type: ProcessStep['schematicType'];
  isActive: boolean;
}> = ({ type, isActive }) => {
  const accent = '#D6FF3F';
  const wire = isActive ? 'rgba(245, 245, 245, 0.45)' : 'rgba(245, 245, 245, 0.18)';
  const dimWire = 'rgba(255, 255, 255, 0.08)';

  switch (type) {
    case 'discovery':
      return (
        <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Radial Discovery Scanner & Constraint Mesh */}
          <circle cx="220" cy="100" r="85" stroke={dimWire} strokeDasharray="4 4" />
          <circle cx="220" cy="100" r="55" stroke={wire} />
          <circle cx="220" cy="100" r="25" fill="#121212" stroke={accent} strokeWidth="1.5" />
          <text x="206" y="103" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">CORE</text>

          {/* Coordinate Axis Lines */}
          <line x1="60" y1="100" x2="380" y2="100" stroke={wire} strokeDasharray="3 3" />
          <line x1="220" y1="15" x2="220" y2="185" stroke={wire} strokeDasharray="3 3" />

          {/* Satellite Requirement Probes */}
          <g>
            <rect x="50" y="45" width="80" height="26" rx="2" fill="#181818" stroke={wire} />
            <text x="58" y="61" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">USERS // CONSTRAINTS</text>
            <line x1="130" y1="58" x2="195" y2="85" stroke={accent} strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="130" cy="58" r="2.5" fill={accent} />
          </g>

          <g>
            <rect x="310" y="45" width="80" height="26" rx="2" fill="#181818" stroke={wire} />
            <text x="318" y="61" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">COMPETITIVE BENCH</text>
            <line x1="310" y1="58" x2="245" y2="85" stroke={dimWire} strokeWidth="1" />
            <circle cx="310" cy="58" r="2.5" fill="#F5F5F5" />
          </g>

          <g>
            <rect x="180" y="160" width="80" height="24" rx="2" fill="#121212" stroke={accent} />
            <text x="188" y="175" fill={accent} fontSize="7" fontFamily="var(--font-mono)">FEASIBILITY: 100%</text>
            <line x1="220" y1="125" x2="220" y2="160" stroke={accent} strokeWidth="1.2" />
          </g>
        </svg>
      );

    case 'strategy':
      return (
        <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Timeline Linear Axis */}
          <line x1="40" y1="100" x2="400" y2="100" stroke={accent} strokeWidth="1.5" />
          
          {/* Milestone Convergence Nodes */}
          {[
            { x: 70, label: 'M1: ADR SPEC', metric: 'WEEK 01' },
            { x: 180, label: 'M2: PRIORITY ARCH', metric: 'WEEK 02' },
            { x: 290, label: 'M3: TECH STACK', metric: 'WEEK 03' },
            { x: 380, label: 'M4: RELEASE PLAN', metric: 'WEEK 04' },
          ].map((m, idx) => (
            <g key={idx}>
              <circle cx={m.x} cy="100" r="5" fill="#080808" stroke={accent} strokeWidth="2" />
              <circle cx={m.x} cy="100" r="2" fill={accent} />
              <line x1={m.x} y1={idx % 2 === 0 ? 55 : 105} x2={m.x} y2={idx % 2 === 0 ? 95 : 145} stroke={wire} />
              
              <rect
                x={m.x - 45}
                y={idx % 2 === 0 ? 30 : 145}
                width="90"
                height="24"
                rx="2"
                fill="#181818"
                stroke={dimWire}
              />
              <text
                x={m.x - 38}
                y={idx % 2 === 0 ? 45 : 160}
                fill="#F5F5F5"
                fontSize="7"
                fontFamily="var(--font-mono)"
              >
                {m.label}
              </text>
            </g>
          ))}

          {/* Strategic Vector Direction Overlay */}
          <path d="M40 100 L395 100" stroke={accent} strokeWidth="1.5" />
          <polygon points="405,100 395,96 395,104" fill={accent} />
        </svg>
      );

    case 'architecture':
      return (
        <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* C4 Component Structural Matrix */}
          <rect x="40" y="30" width="360" height="140" rx="2" fill="none" stroke={dimWire} strokeDasharray="4 4" />
          <text x="50" y="45" fill="#6E747B" fontSize="8" fontFamily="var(--font-mono)">
            C4 KERNEL BOUNDARY // SYSTEM CONTEXT
          </text>

          {/* Layer 1: Ingress API Gateway */}
          <rect x="60" y="65" width="80" height="70" rx="2" fill="#181818" stroke={wire} />
          <text x="68" y="95" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">EDGE API</text>
          <text x="68" y="110" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">GATEWAY // TLS</text>

          {/* Layer 2: Core Domain Microservices */}
          <rect x="180" y="55" width="100" height="40" rx="2" fill="#121212" stroke={accent} strokeWidth="1.2" />
          <text x="190" y="78" fill={accent} fontSize="8" fontFamily="var(--font-mono)">CORE LOGIC SVC</text>

          <rect x="180" y="105" width="100" height="40" rx="2" fill="#181818" stroke={wire} />
          <text x="190" y="128" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">AI INFERENCE SVC</text>

          {/* Layer 3: Persistent Data Layer */}
          <rect x="320" y="65" width="70" height="70" rx="2" fill="#121212" stroke={wire} />
          <text x="328" y="95" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">SHARDED DB</text>
          <text x="328" y="110" fill={accent} fontSize="7" fontFamily="var(--font-mono)">ACID // REPL</text>

          {/* Interconnect Bus Lines */}
          <line x1="140" y1="85" x2="180" y2="75" stroke={accent} strokeWidth="1.2" />
          <line x1="140" y1="115" x2="180" y2="125" stroke={wire} />
          <line x1="280" y1="75" x2="320" y2="85" stroke={accent} strokeWidth="1.2" />
          <line x1="280" y1="125" x2="320" y2="115" stroke={wire} />
        </svg>
      );

    case 'build':
      return (
        <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Automated CI/CD Dual-Lane Pipeline */}
          <line x1="40" y1="80" x2="400" y2="80" stroke={wire} strokeWidth="1.2" />
          <line x1="40" y1="120" x2="400" y2="120" stroke={accent} strokeWidth="1.2" />

          {/* Gate 1: Unit & Integration Testing */}
          <rect x="60" y="65" width="85" height="70" rx="2" fill="#181818" stroke={wire} />
          <text x="68" y="92" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">TEST HARNESS</text>
          <text x="68" y="112" fill={accent} fontSize="7" fontFamily="var(--font-mono)">100% COVERAGE</text>

          {/* Gate 2: Security & Static Analysis */}
          <rect x="180" y="65" width="85" height="70" rx="2" fill="#121212" stroke={accent} strokeWidth="1.5" />
          <text x="188" y="92" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">SEC VULN SCAN</text>
          <text x="188" y="112" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">0 DEFECT POLICY</text>

          {/* Gate 3: Production Image Artifact */}
          <rect x="300" y="65" width="90" height="70" rx="2" fill="#181818" stroke={wire} />
          <text x="308" y="92" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">SIGNED IMAGE</text>
          <text x="308" y="112" fill={accent} fontSize="7" fontFamily="var(--font-mono)">HASH VERIFIED</text>

          <circle cx="145" cy="120" r="3" fill={accent} />
          <circle cx="265" cy="120" r="3" fill={accent} />
          <circle cx="390" cy="120" r="3" fill={accent} />
        </svg>
      );

    case 'launch':
      return (
        <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Blue / Green Zero-Downtime Traffic Orchestration */}
          <circle cx="80" cy="100" r="30" fill="#181818" stroke={wire} />
          <text x="62" y="103" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">TRAFFIC</text>

          {/* Blue Active Cluster */}
          <rect x="200" y="40" width="160" height="48" rx="2" fill="#121212" stroke={wire} strokeDasharray="3 3" />
          <text x="212" y="62" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">BLUE CLUSTER [OLD]</text>
          <text x="212" y="76" fill="#6E747B" fontSize="7" fontFamily="var(--font-mono)">DRAINING TRAFFIC // 0%</text>

          {/* Green Active Cluster */}
          <rect x="200" y="112" width="160" height="48" rx="2" fill="#181818" stroke={accent} strokeWidth="1.5" />
          <text x="212" y="134" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">GREEN CLUSTER [NEW]</text>
          <text x="212" y="148" fill={accent} fontSize="7" fontFamily="var(--font-mono)">100% LIVE TRAFFIC // OK</text>

          {/* Cutover Switching Tendon */}
          <path d="M110 100 Q 150 100, 200 136" stroke={accent} strokeWidth="2" />
          <circle cx="200" cy="136" r="3.5" fill={accent} />

          {/* Telemetry Indicator */}
          <text x="280" y="185" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">
            CUTOVER LATENCY: 0MS DOWNTIME
          </text>
        </svg>
      );

    case 'scale':
      return (
        <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Continuous Feedback Loop & Horizontal Pod Scaling */}
          <path
            d="M80 100 C 80 40, 200 40, 220 40 C 320 40, 360 80, 360 100 C 360 160, 240 160, 220 160 C 120 160, 80 120, 80 100"
            stroke={wire}
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Active Velocity Node */}
          <circle cx="360" cy="100" r="5" fill="#080808" stroke={accent} strokeWidth="2" />
          <circle cx="360" cy="100" r="2.5" fill={accent} />

          {/* Centerpiece: Elastic Cluster Scaling Metrics */}
          <rect x="150" y="70" width="140" height="60" rx="2" fill="#181818" stroke={accent} strokeWidth="1.2" />
          <text x="162" y="93" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">
            ELASTIC AUTOSCALER
          </text>
          <text x="162" y="110" fill={accent} fontSize="8" fontFamily="var(--font-mono)">
            PODS: 16 → 512 [DYNAMIC]
          </text>

          {/* Feedback Observation Nodes */}
          <text x="160" y="32" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">
            OBSERVABILITY &amp; APM METRICS
          </text>
          <text x="160" y="180" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">
            CONTINUOUS OPTIMIZATION LOOP
          </text>
        </svg>
      );
  }
};

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const transitionLuxury = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionLuxury,
    },
  };

  const activeStep = steps[activeStepIndex];

  return (
    <section
      id="process"
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '160px',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 4,
      }}
    >
      <div className="container">
        {/* --- SECTION HEADER & TECHNICAL ANNOTATIONS --- */}
        <div style={{ marginBottom: '80px', maxWidth: '1000px' }}>
          {/* Eyebrow Label & Technical Badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={transitionLuxury}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '24px',
            }}
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
                PROCESS // DIGITAL ENGINEERING FRAMEWORK
              </span>
            </div>

            {/* Technical Metadata Annotations */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                padding: '4px 10px',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
              }}
            >
              FRAMEWORK V3.0
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--brand-accent)',
                letterSpacing: '0.12em',
                padding: '4px 10px',
                border: '1px solid var(--border-accent)',
                borderRadius: '4px',
                backgroundColor: 'var(--brand-accent-subtle)',
              }}
            >
              ENGINEERING STANDARD
            </span>
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
            FROM IDEA TO SCALE.
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
            A proven engineering methodology designed to reduce risk, accelerate
            delivery, and create lasting business value.
          </motion.p>
        </div>

        {/* --- HORIZONTAL COMMAND-CENTER ARTERIAL CONDUIT (Step Nav Strip) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={transitionLuxury}
          style={{
            marginBottom: '48px',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-secondary)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Pipeline Arterial Track */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
              position: 'relative',
            }}
            className="process-horizontal-track"
          >
            {steps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    padding: '24px 20px',
                    textAlign: 'left',
                    position: 'relative',
                    cursor: 'pointer',
                    borderRight: idx < 5 ? '1px solid var(--border-subtle)' : 'none',
                    backgroundColor: isSelected ? 'rgba(28, 28, 28, 0.6)' : 'transparent',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {/* Active Top Accent Line Growth */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: isSelected ? 'var(--brand-accent)' : 'transparent',
                      boxShadow: isSelected ? '0 0 10px var(--brand-accent)' : 'none',
                      transition: 'all var(--transition-base)',
                    }}
                  />

                  {/* Step Number & Code Indicator */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: isSelected ? 'var(--brand-accent)' : 'var(--text-muted)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {step.number}
                    </span>

                    {/* Calibrated Pulse Node */}
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? 'var(--brand-accent)' : 'var(--border-hover)',
                        boxShadow: isSelected ? '0 0 6px var(--brand-accent)' : 'none',
                      }}
                    />
                  </div>

                  {/* Step Title */}
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                      display: 'block',
                      textTransform: 'uppercase',
                    }}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* --- ACTIVE BLUEPRINT WORKFLOW CONSOLE (Command-Center Display) --- */}
        <motion.div
          key={activeStep.number}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-secondary)',
            padding: '48px',
            position: 'relative',
          }}
          className="process-console-box"
        >
          {/* Decorative Blueprint Corner Crosshairs */}
          <div className="crosshair" style={{ top: '16px', left: '16px' }} />
          <div className="crosshair" style={{ top: '16px', right: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', left: '16px' }} />
          <div className="crosshair" style={{ bottom: '16px', right: '16px' }} />

          {/* Console Header Bar with Technical Annotations */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '24px',
              marginBottom: '36px',
              borderBottom: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--brand-accent)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {activeStep.code}
              </span>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {activeStep.phaseTag}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                ENTERPRISE DELIVERY MODEL // ACTIVE
              </span>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--brand-accent)',
                  boxShadow: '0 0 6px var(--brand-accent)',
                }}
              />
            </div>
          </div>

          {/* Console Content Grid: Details (Left) + Engineering Schematic (Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
            className="process-console-grid"
          >
            {/* Left Column (Span 5): Phase Intelligence & Deliverables */}
            <div style={{ gridColumn: 'span 5' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--muted-accent)',
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                STAGE 0{activeStepIndex + 1} OF 06
              </span>

              <h3
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '18px',
                  lineHeight: 1.15,
                }}
              >
                {activeStep.title}
              </h3>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginBottom: '32px',
                }}
              >
                {activeStep.description}
              </p>

              {/* Verified Engineering Deliverables */}
              <div
                style={{
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  SYSTEMATIC EXECUTION DELIVERABLES:
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeStep.deliverables.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          backgroundColor: 'var(--brand-accent)',
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Span 7): Large Engineering Blueprint Schematic */}
            <div
              style={{
                gridColumn: 'span 7',
                height: '320px',
                backgroundColor: 'rgba(8, 8, 8, 0.85)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                overflow: 'hidden',
              }}
            >
              <ProcessSchematic type={activeStep.schematicType} isActive={true} />

              {/* Schematic Status Footer */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '16px',
                  right: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  pointerEvents: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                >
                  CAD_LAYER: 0{activeStepIndex + 1}_V3.0
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--brand-accent)',
                    letterSpacing: '0.1em',
                  }}
                >
                  VERIFIED // ISO-25010
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- ALL 6 STAGES ARCHITECTURAL OVERVIEW (Complete Sequential Flow) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '24px',
          }}
          className="process-steps-summary-grid"
        >
          {steps.map((st, idx) => (
            <motion.div
              key={st.number}
              variants={itemVariants}
              onClick={() => setActiveStepIndex(idx)}
              style={{
                backgroundColor: 'var(--surface-glass)',
                border: `1px solid ${activeStepIndex === idx ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
                borderRadius: '6px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.backgroundColor = 'var(--surface-tertiary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  activeStepIndex === idx ? 'var(--border-accent)' : 'var(--border-subtle)';
                e.currentTarget.style.backgroundColor = 'var(--surface-glass)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: activeStepIndex === idx ? 'var(--brand-accent)' : 'var(--text-muted)',
                  }}
                >
                  {st.number}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {st.telemetry}
                </span>
              </div>

              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}
              >
                {st.title}
              </h4>

              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                {st.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM STATEMENT: PRECISION AT EVERY STAGE --- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...transitionLuxury, delay: 0.15 }}
          style={{
            marginTop: '120px',
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
            className="process-bottom-grid"
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
                  ENGINEERING ASSURANCE
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
                  SYSTEMATIC EXECUTION
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
                PRECISION AT EVERY STAGE.
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
                  marginBottom: '32px',
                }}
              >
                Every decision is guided by engineering discipline, scalable architecture, and long-term product success.
              </p>

              {/* Assurance Verification Rubric */}
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
                    PREDICTABLE VELOCITY
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
                    RESILIENT FOUNDATIONS
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
                    CONTINUOUS ASSURANCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .process-horizontal-track {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          .process-console-grid > div {
            grid-column: span 12 !important;
          }
          .process-steps-summary-grid {
            grid-template-columns: 1fr !important;
          }
          .process-bottom-grid > div {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 640px) {
          .process-horizontal-track {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .process-console-box {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
