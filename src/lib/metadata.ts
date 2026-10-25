/**
 * BUILTCODE HOUSE — Metadata, SEO & Structured Data Engine
 */

export const SITE_METADATA = {
  name: 'BUILTCODE HOUSE',
  tagline: 'Digital Engineering Company',
  title: 'BUILTCODE HOUSE — Digital Engineering Company',
  description:
    'BUILTCODE HOUSE is a premier digital engineering company building scalable web applications, enterprise software, AI systems, and cloud infrastructure for ambitious companies worldwide.',
  canonicalUrl: 'https://builtcodehouse.com',
  deployedUrl: 'https://builtcodehouse-website.vercel.app',
  email: 'contact@builtcodehouse.com',
  author: 'BuiltCodeHouse Engineering Team',
  twitterHandle: '@builtcodehouse',
  themeColor: '#080808',
  keywords: [
    'Digital Engineering Company',
    'Custom Software Development',
    'SaaS Engineering',
    'Enterprise Software Development',
    'AI Application Development',
    'Cloud Architecture',
    'Next.js Development',
    'TypeScript Engineering',
    'Full-Stack Development Studio',
    'High-Scale Web Applications',
  ],
} as const;

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BUILTCODE HOUSE',
  alternateName: 'BuiltCodeHouse Digital Engineering',
  url: 'https://builtcodehouse.com',
  logo: 'https://builtcodehouse.com/favicon.svg',
  description:
    'Digital engineering company architecting scalable software, AI platforms, and cloud infrastructure for businesses.',
  email: 'contact@builtcodehouse.com',
  sameAs: [
    'https://www.linkedin.com/company/builtcode-house',
    'https://github.com/builtcodehouse',
    'https://x.com/builtcodehouse',
  ],
  knowsAbout: [
    'Software Architecture',
    'Artificial Intelligence Systems',
    'Cloud-Native Computing',
    'Full-Lifecycle Product Engineering',
    'High-Concurrency Distributed Systems',
  ],
  priceRange: '$$$$',
} as const;
