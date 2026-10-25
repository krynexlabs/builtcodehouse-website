import React, { useEffect } from 'react';
import { X, BookOpen, Clock, Calendar, ArrowRight, Share2, Check } from 'lucide-react';

export interface WhitepaperArticle {
  id: string;
  code: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  abstract: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    keyTakeaway?: string;
  }[];
}

interface WhitepaperModalProps {
  article: WhitepaperArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ article, isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whitepaper-title"
      style={{ zIndex: 1100, padding: '24px' }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '840px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '48px 40px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-hover)',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '4px',
            transition: 'color var(--transition-fast)',
          }}
          aria-label="Close article"
        >
          <X size={20} />
        </button>

        {/* Paper Metadata Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '4px',
              backgroundColor: 'rgba(214, 255, 63, 0.08)',
              border: '1px solid var(--border-accent)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--brand-accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <BookOpen size={13} />
            <span>{article.code}</span>
          </div>

          <span style={{ color: 'var(--border-subtle)' }}>/</span>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {article.category}
          </span>
        </div>

        {/* Paper Title */}
        <h1
          id="whitepaper-title"
          style={{
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}
        >
          {article.title}
        </h1>

        {/* Reading Time & Date Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '24px',
            marginBottom: '32px',
            borderBottom: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={13} /> {article.date}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} /> {article.readTime}
            </span>
            <span>•</span>
            <span style={{ color: 'var(--text-secondary)' }}>BUILTCODE HOUSE ARCHITECTURE GROUP</span>
          </div>

          <button
            onClick={handleShare}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: copied ? 'var(--brand-accent)' : 'var(--text-muted)',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: '4px 8px',
            }}
          >
            {copied ? <Check size={13} /> : <Share2 size={13} />}
            <span>{copied ? 'LINK COPIED' : 'SHARE PUBLICATION'}</span>
          </button>
        </div>

        {/* Abstract Executive Callout */}
        <div
          style={{
            padding: '24px 28px',
            backgroundColor: 'var(--surface-tertiary)',
            borderLeft: '3px solid var(--brand-accent)',
            borderRadius: '0 6px 6px 0',
            marginBottom: '40px',
          }}
        >
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
            EXECUTIVE ABSTRACT
          </span>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.65,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            {article.abstract}
          </p>
        </div>

        {/* Detailed Sections Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {article.content.map((sec, idx) => (
            <div key={idx}>
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '14px',
                }}
              >
                {sec.sectionTitle}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                    {p}
                  </p>
                ))}
              </div>

              {sec.keyTakeaway && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '14px 18px',
                    backgroundColor: 'rgba(214, 255, 63, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <ArrowRight size={14} style={{ color: 'var(--brand-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>KEY PRINCIPLE:</strong> {sec.keyTakeaway}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Paper Footer Action */}
        <div
          style={{
            marginTop: '56px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>
              NEED SIMILAR ARCHITECTURE FOR YOUR PRODUCT?
            </span>
            <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>
              Schedule a 30-minute discovery conversation with our principals.
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{ height: '44px', padding: '0 24px', fontSize: '13px' }}
          >
            <span>Start a Project Brief</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const WHITEPAPER_ARTICLES: Record<string, WhitepaperArticle> = {
  'PUB_2026.01': {
    id: 'ai-era',
    code: 'PUB_2026.01 // RESEARCH PAPER',
    category: 'Artificial Intelligence',
    date: 'OCTOBER 2026',
    readTime: '8 MIN READ',
    title: 'THE NEXT ERA OF AI PRODUCT ENGINEERING',
    abstract:
      'In 2026, AI is no longer a superficial chatbot widget bolted onto legacy software. Production-grade AI systems demand deterministic routing, semantic context caching, vector pipeline hygiene, and rigorous cost governance.',
    content: [
      {
        sectionTitle: '1. Beyond Generic Wrapper APIs',
        paragraphs: [
          'The first wave of AI adoption was marked by simple wrappers around commercial completion APIs. While suitable for prototypes, this approach quickly disintegrates at production scale due to latency spikes, hallucinations, and compounding token costs.',
          'Modern software platforms require purpose-built inference routing engines. By classifying incoming user queries at the edge, systems can dynamically dispatch simple categorization tasks to lightweight fine-tuned models while reserving frontier reasoning models for complex analytical workflows.',
        ],
        keyTakeaway:
          'Dynamic model routing reduces inference expenditures by 60–80% while bringing median P50 response times down below 120ms.',
      },
      {
        sectionTitle: '2. Vector Context Engines and Hybrid Retrieval',
        paragraphs: [
          'Pure cosine similarity search across dense vector spaces often struggles with exact keyword matches, regulatory codes, and SKU identifiers. High-accuracy enterprise software combines dense vector retrieval with sparse lexical scoring (BM25) and reciprocal rank fusion.',
          'Furthermore, continuous vector re-indexing must be isolated from transactional database workloads using asynchronous CDC (Change Data Capture) pipelines to prevent query degradation on primary workloads.',
        ],
        keyTakeaway:
          'Hybrid search architectures deliver 35% higher context relevance for specialized business domains compared to naive semantic vector lookups.',
      },
      {
        sectionTitle: '3. Human-in-the-Loop Workflow Dispatch',
        paragraphs: [
          'Autonomous software agents are most effective when bounded by explicit validation checkpoints. For sensitive business actions—such as financial disbursements, medical triage updates, or schema modifications—the system should construct the execution payload autonomously but require explicit human authorization before commitment.',
        ],
        keyTakeaway:
          'Fail-safe systems do not replace human operators; they amplify high-leverage decision makers with verified, structured recommendations.',
      },
    ],
  },
  'PUB_2026.02': {
    id: 'saas-arch',
    code: 'PUB_2026.02 // ARCHITECTURE',
    category: 'Software Engineering',
    date: 'SEPTEMBER 2026',
    readTime: '12 MIN READ',
    title: 'SCALABLE SAAS ARCHITECTURE IN 2027',
    abstract:
      'Designing SaaS platforms capable of compounding revenue over 5 to 10 years without requiring expensive, high-risk ground-up rewrites.',
    content: [
      {
        sectionTitle: '1. Multi-Tenant Isolation Strategies',
        paragraphs: [
          'Selecting a tenancy model is the single most defining architectural decision in a SaaS platform. While pooled database schemas with Row-Level Security (RLS) offer optimal infrastructure utilization for SMB customers, enterprise tiers require tenant-dedicated schemas or isolated databases.',
          'A modular tenancy router abstracts the underlying connection pool, allowing individual enterprise accounts to seamlessly transition from shared infrastructure to dedicated single-tenant clusters without modifying core business application code.',
        ],
        keyTakeaway:
          'Abstract database tenancy behind a logical tenant context provider early to preserve compliance pathways for Fortune 500 prospects.',
      },
      {
        sectionTitle: '2. Event-Driven Transactional Consistency',
        paragraphs: [
          'As SaaS platforms scale beyond simple CRUD operations, monolithic database transactions become concurrency bottlenecks. Implementing the Transactional Outbox pattern guarantees that state updates and outbound event dispatches occur atomically.',
          'By leveraging Postgres CDC or lightweight Kafka/SQS streams, downstream notification, billing, and telemetry pipelines can process events asynchronously without delaying the critical user request-response lifecycle.',
        ],
        keyTakeaway:
          'Decouple heavy integrations from primary HTTP endpoints to ensure sub-100ms user interaction responses under peak traffic.',
      },
      {
        sectionTitle: '3. Observability and Cost-Per-Tenant Visibility',
        paragraphs: [
          'High-performing SaaS companies track infrastructure consumption down to individual tenant accounts. By tagging database queries, storage buckets, and serverless compute invocations with tenant identifiers, engineering leaders can accurately calculate gross margins per client.',
        ],
        keyTakeaway:
          'Tenant-level unit economics empower executive leadership to set profitable enterprise contract minimums and prevent margin erosion.',
      },
    ],
  },
  'PUB_2026.03': {
    id: 'enterprise-org',
    code: 'PUB_2026.03 // SYSTEMS',
    category: 'Enterprise Systems',
    date: 'AUGUST 2026',
    readTime: '10 MIN READ',
    title: 'DESIGNING SOFTWARE FOR COMPLEX ORGANIZATIONS',
    abstract:
      'Balancing user clarity, robust enterprise security, and legacy interoperability in mission-critical corporate environments.',
    content: [
      {
        sectionTitle: '1. De-Risking Legacy System Modernization',
        paragraphs: [
          'Enterprise software projects frequently fail when teams attempt monolithic "big bang" rewrites of decades-old legacy applications. The Strangler Fig application pattern remains the gold standard for enterprise modernization.',
          'By positioning an intelligent reverse proxy in front of legacy software, modern micro-frontends and microservices can selectively intercept and re-implement critical business workflows one module at a time with zero operational downtime.',
        ],
        keyTakeaway:
          'Incremental phased deployments reduce project risk to near zero while delivering tangible business ROI within the first 60 days.',
      },
      {
        sectionTitle: '2. Role-Based Access Control and Zero-Trust Compliance',
        paragraphs: [
          'Enterprise organizations demand sophisticated role and attribute-based permissions (RBAC / ABAC) that integrate cleanly with Okta, Azure AD, and SAML 2.0 / SCIM identity providers.',
          'Permissions must be validated at both the presentation gateway and deep within service domain boundaries to ensure that compromised frontend sessions cannot execute privileged business operations.',
        ],
        keyTakeaway:
          'Centralized cryptographic identity validation guarantees audit-readiness for SOC 2 Type II, ISO 27001, and HIPAA compliance reviews.',
      },
    ],
  },
  'PUB_2026.04': {
    id: 'longterm-win',
    code: 'PUB_2026.04 // PHILOSOPHY',
    category: 'Product Strategy',
    date: 'JULY 2026',
    readTime: '6 MIN READ',
    title: 'WHY LONG-TERM THINKING WINS',
    abstract:
      'Why intentional engineering, clean code boundaries, and disciplined product scope consistently outperform hyperactive feature bloat.',
    content: [
      {
        sectionTitle: '1. The Compounding Interest of Clean Architecture',
        paragraphs: [
          'In the race to ship minimum viable products, many development teams accumulate toxic technical shortcuts that double future feature delivery times. While speed to market is essential, engineering teams must distinguish between product scope trade-offs and structural architectural rot.',
          'Building with explicit domain boundaries, strict TypeScript typing, and automated testing suites allows teams to maintain rapid shipping velocity in year three and year five, rather than slowing to a painful crawl.',
        ],
        keyTakeaway:
          'Discipline during the initial build phase is not an unnecessary expense—it is an investment that preserves organizational agility as team size expands.',
      },
      {
        sectionTitle: '2. Direct Senior Engineering Over Agency Overhead',
        paragraphs: [
          'Traditional digital agencies rely on large hierarchies of junior developers, account managers, and project coordinators. Every layer of communication introduces misinterpretation, delays, and diluted accountability.',
          'At BUILTCODE HOUSE, we align our business model around direct senior engineering partnerships. When founders and enterprise stakeholders discuss technical challenges directly with principal architects who write production code, solutions are engineered faster, cleaner, and with complete accountability.',
        ],
        keyTakeaway:
          'Small pods of elite senior engineers consistently outperform large, unfocused agency teams in both quality and time-to-market.',
      },
    ],
  },
};
