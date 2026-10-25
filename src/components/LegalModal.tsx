import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms';
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      style={{ zIndex: 1000 }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '720px',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: 'clamp(24px, 5vw, 44px) clamp(18px, 4vw, 36px)',
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
            transition: 'color var(--transition-fast)',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '6px',
              backgroundColor: 'rgba(214, 255, 63, 0.08)',
              border: '1px solid var(--border-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-accent)',
            }}
          >
            {isPrivacy ? <ShieldCheck size={20} /> : <FileText size={20} />}
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--brand-accent)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              GOVERNANCE // {isPrivacy ? 'DATA INTEGRITY' : 'LEGAL FRAMEWORK'}
            </div>
            <h2
              id="legal-modal-title"
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginTop: '4px',
              }}
            >
              {isPrivacy ? 'Privacy Policy & Data Security' : 'Terms of Engagement'}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div
          style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            lineHeight: 1.7,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {isPrivacy ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026. BUILTCODE HOUSE ("we," "our," or "the Company") is committed to protecting confidential engineering briefs, personal data, and proprietary systems requirements in compliance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </p>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  1. Information Ingestion &amp; Scope
                </h4>
                <p>
                  When you submit an architecture brief via our consultation forms or communicate directly with our engineering principals, we collect: full name, corporate email address, organization identity, project domain, estimated budget scope, and submitted technical specifications.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  2. Purpose of Data Processing
                </h4>
                <p>
                  Information collected is strictly utilized to conduct feasibility analysis, coordinate technical discovery discussions, and execute preliminary architecture scoping. We never sell, lease, or monetize client project information to any third party.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  3. Mutual Non-Disclosure &amp; Confidentiality
                </h4>
                <p>
                  All project briefs received through BUILTCODE HOUSE channels are treated under default strict confidentiality. Mutual Non-Disclosure Agreements (NDAs) are executed prior to deep architectural data inspection or codebase access.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  4. Data Rights &amp; Erasure
                </h4>
                <p>
                  You retain the right to request full export or permanent cryptographic deletion of your project briefs and contact metadata at any time by emailing <code>contact@builtcodehouse.com</code>.
                </p>
              </div>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026. These Terms of Engagement govern initial consultations, technical discovery briefs, and software engineering proposals facilitated by BUILTCODE HOUSE.
              </p>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  1. Scope of Consultations
                </h4>
                <p>
                  Preliminary project estimations, architecture briefs, and consultation calls are advisory in nature. Formal engineering deliverables, milestones, SLAs, and commercial commitments are governed exclusively by definitive Master Services Agreements (MSAs) and Statements of Work (SOWs).
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  2. Intellectual Property Rights
                </h4>
                <p>
                  All custom software engineering, proprietary algorithms, database schemas, and digital artifacts delivered to our clients under executed Statements of Work become the exclusive, unencumbered intellectual property of the client upon final milestone remuneration.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  3. Warranties &amp; Engineering Standards
                </h4>
                <p>
                  We build to rigorous commercial engineering standards, incorporating comprehensive automated test suites, CI/CD deployment pipelines, and modern infrastructure governance.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', marginBottom: '8px' }}>
                  4. Jurisdiction
                </h4>
                <p>
                  These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
                </p>
              </div>
            </>
          )}

          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
            }}
          >
            <span>BUILTCODE HOUSE // LEGAL OPERATIONS</span>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ height: '36px', padding: '0 18px', fontSize: '12px' }}
            >
              Acknowledge &amp; Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
