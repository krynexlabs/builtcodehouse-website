import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  badgeLabel: string;
  badgeCategory?: string;
  headline: string;
  subheadline?: string;
  maxWidth?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeLabel,
  badgeCategory,
  headline,
  subheadline,
  maxWidth = '960px',
}) => {
  const transitionLuxury = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionLuxury,
    },
  };

  return (
    <div style={{ marginBottom: '88px', maxWidth }}>
      {/* Badge / Technical Eyebrow */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ marginBottom: '24px' }}
      >
        <Badge label={badgeLabel} category={badgeCategory} />
      </motion.div>

      {/* Main Section Headline */}
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ ...transitionLuxury, delay: 0.1 }}
        style={{
          fontSize: 'var(--text-display)',
          lineHeight: 1.08,
          fontWeight: 600,
          letterSpacing: '-0.035em',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          marginBottom: subheadline ? '28px' : '0',
        }}
      >
        {headline}
      </motion.h2>

      {/* Subheadline Context */}
      {subheadline && (
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...transitionLuxury, delay: 0.2 }}
          style={{
            fontSize: 'var(--text-body)',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
            maxWidth: '680px',
          }}
        >
          {subheadline}
        </motion.p>
      )}
    </div>
  );
};
