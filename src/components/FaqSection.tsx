import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const transitionLuxury = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const faqs = [
    {
      question: 'Who owns the code and intellectual property once a project is finished?',
      answer:
        'You own 100% of all intellectual property, source code, database architectures, and design files upon final milestone completion. We do not use proprietary vendor lock-in frameworks, and we hand over full administrative ownership of your GitHub repositories and cloud infrastructure.',
    },
    {
      question: 'How do you structure project milestones and engagement agreements?',
      answer:
        'We work on fixed-milestone scopes or dedicated monthly engineering pods. Before development begins, we conduct technical discovery and co-create a detailed architecture specification with clear deliverables and acceptance criteria. Invoicing is tied to verified software demos—never speculative hourly billing.',
    },
    {
      question: 'How do you communicate during development?',
      answer:
        'You communicate directly with our engineering principals. We set up a shared Slack or Discord channel for daily asynchronous communication, provide weekly recorded Loom video walkthroughs of deployed features, and host bi-weekly sprint planning calls. You have real-time access to the codebase and staging environments at all times.',
    },
    {
      question: 'What happens if we need adjustments or scope changes during the build?',
      answer:
        'Software evolves as it meets users. If you need to pivot a feature or expand functionality mid-flight, we document the impact on scope and timeline transparently. Minor adjustments are absorbed within sprint buffers; larger expansions are scoped as modular add-ons so your project investment remains completely predictable.',
    },
    {
      question: 'Do you provide post-launch maintenance and technical support?',
      answer:
        'Yes. Every project includes a 30-day post-launch warranty period where any emergent bugs or configuration issues are resolved immediately at zero cost. After launch, we offer flexible ongoing engineering retainer pods for continuous feature releases, security updates, and infrastructure scaling.',
    },
    {
      question: 'What technology stack do you specialize in?',
      answer:
        'We build with modern, industry-standard technologies proven for performance and longevity: TypeScript, React, Next.js, Node.js, Python, Go, PostgreSQL, Redis, and Tailwind/Vanilla CSS, hosted on AWS, Google Cloud, or Cloudflare. We select tools based on your business requirements, not personal hype.',
    },
  ];

  return (
    <section
      id="faq"
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
        {/* Section Header */}
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
              <HelpCircle size={14} style={{ color: 'var(--brand-accent)' }} />
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
                FREQUENTLY ASKED QUESTIONS // BUSINESS &amp; DELIVERY
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
            STRAIGHT ANSWERS FOR DECISION MAKERS.
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
            Clear communication is fundamental to successful engineering partnerships.
            Here is how we operate, govern IP, and manage delivery.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: `1px solid ${isOpen ? 'var(--border-hover)' : 'var(--border-subtle)'}`,
                  borderRadius: '6px',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '18px',
                      fontWeight: 500,
                      color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--surface-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--brand-accent)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        style={{
                          padding: '0 28px 28px 28px',
                          color: 'var(--text-secondary)',
                          fontSize: '15px',
                          lineHeight: 1.7,
                          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                          paddingTop: '20px',
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
