import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

/**
 * BUILTCODE HOUSE — Capabilities Section (Phase 2)
 * 
 * Objectives:
 * - Convince enterprise clients that BUILTCODE HOUSE builds complex, high-scale digital products.
 * - Architectural, blueprint-inspired visuals for all 6 capabilities.
 * - Strict adherence to Brand System: #D6FF3F, #F5F5F5, #121212, #080808, and hairline borders.
 * - Linear / Stripe / Vercel level editorial luxury and negative space.
 */

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technicalMeta: string;
  schematicType: 'product' | 'ai' | 'saas' | 'enterprise' | 'cloud' | 'design';
}

const services: ServiceItem[] = [
  {
    id: 'product-engineering',
    number: '01',
    title: 'Custom Software That Drives Commercial Value',
    description:
      'End-to-end web applications and internal tools engineered to ship fast, scale reliably, and generate measurable business value.',
    technicalMeta: 'RAPID DELIVERY // PRODUCTION RESILIENCE',
    schematicType: 'product',
  },
  {
    id: 'ai-systems',
    number: '02',
    title: 'Practical AI & Automated Workflows',
    description:
      'Custom LLM integrations, retrieval pipelines, and autonomous workflows that eliminate repetitive operational bottlenecks.',
    technicalMeta: 'CUSTOM LLM PIPELINES // AUTOMATED EXECUTION',
    schematicType: 'ai',
  },
  {
    id: 'saas-platforms',
    number: '03',
    title: 'SaaS Platforms Built For Long-Term Scale',
    description:
      'Subscription platforms engineered with multi-tenant security, automated billing, and user management ready for enterprise sign-ups.',
    technicalMeta: 'SUBSCRIPTION ARCHITECTURE // HIGH CONVERSION',
    schematicType: 'saas',
  },
  {
    id: 'enterprise-software',
    number: '04',
    title: 'Enterprise Systems That Eliminate Operational Bottlenecks',
    description:
      'Mission-critical internal systems and legacy modernizations engineered to streamline business operations and unify company data.',
    technicalMeta: 'FAULT-TOLERANT WORKFLOWS // COMPLIANCE READY',
    schematicType: 'enterprise',
  },
  {
    id: 'cloud-infrastructure',
    number: '05',
    title: 'Resilient Cloud Architecture & Cost Control',
    description:
      'Cloud-native architectures that ensure 99.9%+ availability while optimizing infrastructure compute and database expenditure.',
    technicalMeta: 'HIGH AVAILABILITY // OPTIMIZED RUNTIME COSTS',
    schematicType: 'cloud',
  },
  {
    id: 'experience-design',
    number: '06',
    title: 'High-Conversion Product Design',
    description:
      'Clean, intuitive user interfaces and design systems crafted to turn visitors into active customers and reduce friction.',
    technicalMeta: 'USER RETENTION // FRICTION-FREE WORKFLOWS',
    schematicType: 'design',
  },
];

// --- ARCHITECTURAL SCHEMATIC VISUALS ---

const SchematicVisual: React.FC<{
  type: ServiceItem['schematicType'];
  isHovered: boolean;
}> = ({ type, isHovered }) => {
  const accentColor = '#D6FF3F';
  const primaryWire = isHovered ? 'rgba(245, 245, 245, 0.45)' : 'rgba(245, 245, 245, 0.2)';
  const secondaryWire = isHovered ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)';
  const nodeFill = isHovered ? accentColor : '#F5F5F5';

  switch (type) {
    case 'product':
      // 01: Full-Lifecycle Product Pipeline Schematic
      return (
        <svg
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="capability-schematic-svg"
        >
          {/* Coordinate Grid Plane */}
          <line x1="20" y1="140" x2="360" y2="140" stroke={secondaryWire} strokeDasharray="3 3" />
          <line x1="20" y1="90" x2="360" y2="90" stroke={secondaryWire} strokeDasharray="3 3" />
          <line x1="20" y1="40" x2="360" y2="40" stroke={secondaryWire} strokeDasharray="3 3" />

          {/* Vertical Architectural Struts */}
          <line x1="60" y1="20" x2="60" y2="160" stroke={secondaryWire} />
          <line x1="190" y1="20" x2="190" y2="160" stroke={secondaryWire} />
          <line x1="320" y1="20" x2="320" y2="160" stroke={secondaryWire} />

          {/* Architectural Layer Slabs */}
          <rect
            x="40"
            y="120"
            width="280"
            height="24"
            rx="2"
            fill="#121212"
            stroke={primaryWire}
            strokeWidth="1"
          />
          <text x="50" y="136" fill="#A8ADB2" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.1em">
            L1 // FOUNDATION SPECIFICATION
          </text>

          <rect
            x="60"
            y="75"
            width="240"
            height="24"
            rx="2"
            fill="#181818"
            stroke={isHovered ? accentColor : primaryWire}
            strokeWidth={isHovered ? '1.5' : '1'}
          />
          <text x="70" y="91" fill={isHovered ? '#F5F5F5' : '#A8ADB2'} fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.1em">
            L2 // DISTRIBUTED ARCHITECTURE
          </text>

          <rect
            x="90"
            y="30"
            width="180"
            height="24"
            rx="2"
            fill="#121212"
            stroke={primaryWire}
            strokeWidth="1"
          />
          <text x="100" y="46" fill="#A8ADB2" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.1em">
            L3 // CONTINUOUS SCALE
          </text>

          {/* Laser-Calibrated Datum Interconnect Lines */}
          <path
            d="M60 132 L190 87 L320 42"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeDasharray={isHovered ? 'none' : '4 4'}
            opacity={isHovered ? 1 : 0.6}
          />
          <circle cx="60" cy="132" r="3" fill={nodeFill} />
          <circle cx="190" cy="87" r="3" fill={accentColor} />
          <circle cx="320" cy="42" r="3" fill={nodeFill} />

          {/* Coordinate Stamp */}
          <text x="290" y="165" fill="#6E747B" fontSize="8" fontFamily="var(--font-mono)">
            TOL // 0.001
          </text>
        </svg>
      );

    case 'ai':
      // 02: Neural Pipeline & Workflow Graph Schematic
      return (
        <svg
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="capability-schematic-svg"
        >
          {/* Background Bus Lines */}
          <line x1="30" y1="90" x2="350" y2="90" stroke={primaryWire} strokeWidth="1" />
          
          {/* Branching Neural Routing Paths */}
          <path
            d="M30 90 C 90 90, 110 45, 170 45 L 230 45 C 270 45, 300 90, 350 90"
            stroke={secondaryWire}
            strokeWidth="1.2"
          />
          <path
            d="M30 90 C 90 90, 110 135, 170 135 L 230 135 C 270 135, 300 90, 350 90"
            stroke={isHovered ? accentColor : secondaryWire}
            strokeWidth={isHovered ? '1.5' : '1.2'}
            opacity={isHovered ? 1 : 0.5}
          />

          {/* Processing Nodes */}
          {/* Ingestion Node */}
          <rect x="30" y="76" width="36" height="28" rx="2" fill="#121212" stroke={primaryWire} />
          <text x="36" y="93" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">INPUT</text>

          {/* Core Latent Matrix Node */}
          <rect
            x="160"
            y="28"
            width="80"
            height="34"
            rx="2"
            fill="#181818"
            stroke={primaryWire}
          />
          <text x="170" y="49" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">
            LLM // CONTEXT
          </text>

          {/* Automated Inference Node */}
          <rect
            x="160"
            y="118"
            width="80"
            height="34"
            rx="2"
            fill="#121212"
            stroke={isHovered ? accentColor : primaryWire}
          />
          <text x="168" y="139" fill={isHovered ? '#F5F5F5' : '#A8ADB2'} fontSize="8" fontFamily="var(--font-mono)">
            WORKFLOW ENGINE
          </text>

          {/* Feedback Caliper Arc */}
          <circle cx="350" cy="90" r="4" fill={accentColor} />
          <circle cx="30" cy="90" r="3" fill="#F5F5F5" />
          
          {/* Micro Telemetry Ticks */}
          <text x="280" y="30" fill="#6E747B" fontSize="8" fontFamily="var(--font-mono)">
            LATENCY // &lt;42MS
          </text>
        </svg>
      );

    case 'saas':
      // 03: Multi-Tenant Architecture & Modular Platform Schematic
      return (
        <svg
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="capability-schematic-svg"
        >
          {/* API Gateway Ingress */}
          <rect x="30" y="40" width="45" height="100" rx="2" fill="#121212" stroke={primaryWire} />
          <text x="38" y="93" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)" transform="rotate(-90 44 93)">
            GATEWAY
          </text>

          {/* Multi-Tenant Partition Shards */}
          <g>
            <rect
              x="120"
              y="30"
              width="100"
              height="32"
              rx="2"
              fill="#181818"
              stroke={primaryWire}
            />
            <text x="130" y="50" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">TENANT_SHARD_A</text>

            <rect
              x="120"
              y="74"
              width="100"
              height="32"
              rx="2"
              fill="#121212"
              stroke={isHovered ? accentColor : primaryWire}
            />
            <text x="130" y="94" fill={isHovered ? '#F5F5F5' : '#A8ADB2'} fontSize="8" fontFamily="var(--font-mono)">
              TENANT_SHARD_B
            </text>

            <rect
              x="120"
              y="118"
              width="100"
              height="32"
              rx="2"
              fill="#181818"
              stroke={primaryWire}
            />
            <text x="130" y="138" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">TENANT_SHARD_C</text>
          </g>

          {/* Interconnect Bus */}
          <line x1="75" y1="90" x2="120" y2="46" stroke={secondaryWire} />
          <line x1="75" y1="90" x2="120" y2="90" stroke={isHovered ? accentColor : secondaryWire} />
          <line x1="75" y1="90" x2="120" y2="134" stroke={secondaryWire} />

          {/* Shared Data Engine Hub */}
          <rect
            x="260"
            y="45"
            width="85"
            height="90"
            rx="2"
            fill="#121212"
            stroke={primaryWire}
          />
          <text x="272" y="85" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">
            HIGH-THRUPUT
          </text>
          <text x="272" y="100" fill={accentColor} fontSize="8" fontFamily="var(--font-mono)">
            EVENT BUS
          </text>

          {/* Outbound Sync Lines */}
          <line x1="220" y1="46" x2="260" y2="70" stroke={secondaryWire} />
          <line x1="220" y1="90" x2="260" y2="90" stroke={accentColor} strokeWidth="1.2" />
          <line x1="220" y1="134" x2="260" y2="110" stroke={secondaryWire} />

          <circle cx="260" cy="90" r="3" fill={accentColor} />
        </svg>
      );

    case 'enterprise':
      // 04: Mission-Critical Fault-Tolerant Enterprise Systems
      return (
        <svg
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="capability-schematic-svg"
        >
          {/* Security & Cryptographic Perimeter Outer Ring */}
          <rect
            x="25"
            y="25"
            width="330"
            height="130"
            rx="2"
            fill="none"
            stroke={secondaryWire}
            strokeDasharray="4 4"
          />
          <text x="35" y="40" fill="#6E747B" fontSize="8" fontFamily="var(--font-mono)">
            ZERO-TRUST ENCLAVE // SOC2 + ISO COMPLIANT
          </text>

          {/* Active Primary Core */}
          <rect
            x="50"
            y="60"
            width="115"
            height="65"
            rx="2"
            fill="#181818"
            stroke={isHovered ? accentColor : primaryWire}
            strokeWidth={isHovered ? '1.5' : '1'}
          />
          <text x="62" y="86" fill="#F5F5F5" fontSize="9" fontFamily="var(--font-mono)">
            PRIMARY RUNTIME
          </text>
          <text x="62" y="102" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">
            STATUS: ACTIVE // 99.999%
          </text>

          {/* Standby Secondary Failover Core */}
          <rect
            x="215"
            y="60"
            width="115"
            height="65"
            rx="2"
            fill="#121212"
            stroke={primaryWire}
          />
          <text x="227" y="86" fill="#F5F5F5" fontSize="9" fontFamily="var(--font-mono)">
            STANDBY REPLICA
          </text>
          <text x="227" y="102" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">
            HOT FAILOVER SYNC
          </text>

          {/* Heartbeat Sync Dual Tendons */}
          <line
            x1="165"
            y1="85"
            x2="215"
            y2="85"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeDasharray={isHovered ? 'none' : '3 3'}
          />
          <line x1="165" y1="100" x2="215" y2="100" stroke={primaryWire} strokeWidth="1" />

          {/* Synchronized Core Nodes */}
          <circle cx="165" cy="85" r="2.5" fill={accentColor} />
          <circle cx="215" cy="85" r="2.5" fill={accentColor} />

          <text x="172" y="78" fill={accentColor} fontSize="7" fontFamily="var(--font-mono)">
            RAID-SYNC
          </text>
        </svg>
      );

    case 'cloud':
      // 05: Multi-Region Cloud Infrastructure Topology
      return (
        <svg
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="capability-schematic-svg"
        >
          {/* Global Anycast Edge Router */}
          <circle cx="70" cy="90" r="32" fill="#121212" stroke={primaryWire} />
          <circle cx="70" cy="90" r="22" fill="#181818" stroke={isHovered ? accentColor : secondaryWire} />
          <text x="54" y="93" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">EDGE</text>

          {/* Region 1 Node Cluster */}
          <rect
            x="160"
            y="35"
            width="170"
            height="45"
            rx="2"
            fill="#121212"
            stroke={isHovered ? accentColor : primaryWire}
          />
          <text x="172" y="55" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">
            REGION_US_EAST // AUTO-SCALED
          </text>
          <text x="172" y="70" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">
            K8S CLUSTER [PODS: 128]
          </text>

          {/* Region 2 Node Cluster */}
          <rect
            x="160"
            y="100"
            width="170"
            height="45"
            rx="2"
            fill="#121212"
            stroke={primaryWire}
          />
          <text x="172" y="120" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">
            REGION_EU_WEST // RESILIENT
          </text>
          <text x="172" y="135" fill="#A8ADB2" fontSize="8" fontFamily="var(--font-mono)">
            K8S CLUSTER [PODS: 64]
          </text>

          {/* Ingress Distribution Lines */}
          <path
            d="M92 75 L 160 58"
            stroke={isHovered ? accentColor : secondaryWire}
            strokeWidth="1.2"
          />
          <path
            d="M92 105 L 160 122"
            stroke={secondaryWire}
            strokeWidth="1.2"
          />

          {/* Inter-Region Dark Fiber Link */}
          <line
            x1="245"
            y1="80"
            x2="245"
            y2="100"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          <circle cx="245" cy="80" r="2" fill={accentColor} />
          <circle cx="245" cy="100" r="2" fill={accentColor} />
        </svg>
      );

    case 'design':
      // 06: Spatial Matrix & Design System Engine
      return (
        <svg
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="capability-schematic-svg"
        >
          {/* Spatial 8pt Grid Wireframe */}
          <g stroke={secondaryWire} strokeWidth="0.75">
            <line x1="30" y1="30" x2="350" y2="30" />
            <line x1="30" y1="60" x2="350" y2="60" />
            <line x1="30" y1="90" x2="350" y2="90" />
            <line x1="30" y1="120" x2="350" y2="120" />
            <line x1="30" y1="150" x2="350" y2="150" />

            <line x1="60" y1="20" x2="60" y2="160" />
            <line x1="120" y1="20" x2="120" y2="160" />
            <line x1="180" y1="20" x2="180" y2="160" />
            <line x1="240" y1="20" x2="240" y2="160" />
            <line x1="300" y1="20" x2="300" y2="160" />
          </g>

          {/* Component Layout Bounding Frames */}
          <rect
            x="60"
            y="30"
            width="120"
            height="60"
            rx="1"
            fill="#121212"
            stroke={isHovered ? accentColor : primaryWire}
            strokeWidth="1"
          />
          <text x="70" y="55" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">
            COMPONENT // NAVIGATION
          </text>
          <text x="70" y="72" fill="#A8ADB2" fontSize="7" fontFamily="var(--font-mono)">
            VARIANTS: FIXED / COLLAPSED
          </text>

          {/* Secondary Component Frame */}
          <rect
            x="200"
            y="60"
            width="130"
            height="60"
            rx="1"
            fill="#181818"
            stroke={primaryWire}
            strokeWidth="1"
          />
          <text x="210" y="85" fill="#F5F5F5" fontSize="8" fontFamily="var(--font-mono)">
            DATA TOKEN // MATRIX
          </text>
          <text x="210" y="102" fill={accentColor} fontSize="7" fontFamily="var(--font-mono)">
            COLOR / TYPE / SPACING
          </text>

          {/* Measurement Calipers & Dimension Lines */}
          <line x1="60" y1="22" x2="180" y2="22" stroke={accentColor} strokeWidth="1" />
          <circle cx="60" cy="22" r="2" fill={accentColor} />
          <circle cx="180" cy="22" r="2" fill={accentColor} />
          <text x="105" y="18" fill={accentColor} fontSize="7" fontFamily="var(--font-mono)">
            120PX
          </text>

          {/* Crosshair Registration Points */}
          <circle cx="60" cy="30" r="1.5" fill="#F5F5F5" />
          <circle cx="180" cy="90" r="1.5" fill="#F5F5F5" />
          <circle cx="330" cy="120" r="1.5" fill="#F5F5F5" />
        </svg>
      );
  }
};

export const CapabilitiesSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Framer Motion Animation Foundation
  const transitionLuxury = {
    duration: 0.8,
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
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionLuxury,
    },
  };

  return (
    <section
      id="capabilities"
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '160px',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 5,
      }}
    >
      <div className="container">
        {/* --- SECTION HEADER --- */}
        <div style={{ marginBottom: '88px', maxWidth: '960px' }}>
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
                CAPABILITIES // 01 — 06
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
                CORE SPECIALIZATIONS
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
              marginBottom: '28px',
            }}
          >
            DIGITAL ENGINEERING FOR AMBITIOUS COMPANIES.
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
            From AI applications and SaaS platforms to enterprise systems and cloud
            architecture, we build technology designed for growth.
          </motion.p>
        </div>

        {/* --- CAPABILITIES EDITORIAL GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="capabilities-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '32px',
          }}
        >
          {services.map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="capability-item"
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '440px',
                  transition: 'border-color var(--transition-base), background-color var(--transition-base), transform var(--transition-base)',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  borderColor: isHovered ? 'var(--border-hover)' : 'var(--border-subtle)',
                }}
              >
                {/* Top Hairline Accent Line (Animates on hover) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '24px',
                    right: '24px',
                    height: '1px',
                    backgroundColor: isHovered ? 'var(--brand-accent)' : 'transparent',
                    boxShadow: isHovered ? '0 0 12px var(--brand-accent)' : 'none',
                    transition: 'all var(--transition-base)',
                  }}
                />

                {/* Header: Number & Technical Specification Tag */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '28px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: isHovered ? 'var(--brand-accent)' : 'var(--text-secondary)',
                          letterSpacing: '0.08em',
                          transition: 'color var(--transition-fast)',
                        }}
                      >
                        {service.number}
                      </span>
                      <span
                        style={{
                          width: '1px',
                          height: '12px',
                          backgroundColor: 'var(--border-subtle)',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {service.technicalMeta}
                      </span>
                    </div>

                    {/* Micro Calibrated State Indicator */}
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? 'var(--brand-accent)' : 'var(--border-hover)',
                        boxShadow: isHovered ? '0 0 8px var(--brand-accent)' : 'none',
                        transition: 'all var(--transition-fast)',
                      }}
                    />
                  </div>

                  {/* Service Title */}
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      marginBottom: '14px',
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      maxWidth: '520px',
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Architectural Schematic Visual Container */}
                <div
                  style={{
                    marginTop: '36px',
                    padding: '16px',
                    backgroundColor: 'rgba(8, 8, 8, 0.65)',
                    borderRadius: '4px',
                    border: '1px solid var(--border-subtle)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <SchematicVisual type={service.schematicType} isHovered={isHovered} />

                  {/* Precision Corner Crosshair Accent */}
                  <div
                    className="crosshair"
                    style={{ top: '6px', right: '6px', opacity: isHovered ? 0.7 : 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- BOTTOM SECTION: PREMIUM ARCHITECTURAL SCALE STATEMENT --- */}
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
            className="capabilities-bottom-grid"
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
                  SYSTEMS INTEGRITY
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
                  GUARANTEE
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
                BUILT FOR SCALE.
              </h3>
            </div>

            {/* Right Column (Span 6): Editorial Statement & Architectural Benchmarks */}
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
                  marginBottom: '36px',
                }}
              >
                Every system we design is engineered for growth, performance, and
                long-term business value.
              </p>

              {/* Engineering Benchmarks Metric Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '24px',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
                className="capabilities-benchmarks"
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    CODEBASE
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--brand-accent)',
                    }}
                  >
                    MAINTAINABLE ARCHITECTURE
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    AVAILABILITY
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    HIGH AVAILABILITY (99.9%+)
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    SCALABILITY
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    ELASTIC CLUSTERS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
          .capabilities-bottom-grid > div {
            grid-column: span 12 !important;
          }
          .capabilities-benchmarks {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
