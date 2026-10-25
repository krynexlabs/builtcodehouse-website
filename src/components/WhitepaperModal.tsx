import React, { useEffect } from 'react';
import { X, BookOpen, Clock, Calendar, ArrowRight, Share2, Check } from 'lucide-react';
import type { WhitepaperArticle } from '../data/whitepapers';

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
          padding: 'clamp(24px, 5vw, 48px) clamp(18px, 4vw, 40px)',
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

