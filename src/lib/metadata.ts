/**
 * BUILTCODEHOUSE — Master Brand Metadata, SEO & Structured Data Engine
 * Official website: https://builtcodehouse.com/
 * Location: Ahmedabad, Gujarat, India
 */

export const SITE_METADATA = {
  name: 'BuiltCodeHouse',
  alternateName: 'BuiltCode House',
  legalName: 'BuiltCodeHouse',
  tagline: 'Software Development Company in Ahmedabad, India',
  title: 'BuiltCodeHouse | Software Development Company in Ahmedabad, India',
  description:
    'BuiltCodeHouse is a digital engineering studio based in Ahmedabad, India, building custom software, web applications and SaaS products for businesses.',
  canonicalUrl: 'https://builtcodehouse.com',
  deployedUrl: 'https://builtcodehouse-website.vercel.app',
  email: 'contact@builtcodehouse.com',
  location: 'Ahmedabad, Gujarat, India',
  author: 'BuiltCodeHouse Engineering Team',
  twitterHandle: '@builtcodehouse',
  themeColor: '#080808',
  keywords: [
    'BuiltCodeHouse',
    'BuiltCode House',
    'Custom Software Development',
    'Web Application Engineering',
    'SaaS Product Development',
    'Software Development Company Ahmedabad',
    'Digital Engineering Studio India',
  ],
} as const;

export interface RouteMetadata {
  title: string;
  description: string;
  canonical: string;
  h1: string;
}

export const ROUTE_METADATA: Record<string, RouteMetadata> = {
  '/': {
    title: 'BuiltCodeHouse | Software Development Company in Ahmedabad, India',
    description:
      'BuiltCodeHouse is a digital engineering studio based in Ahmedabad, India, building custom software, web applications and SaaS products for businesses.',
    canonical: 'https://builtcodehouse.com/',
    h1: 'From Complex Ideas to Exceptional Digital Products.',
  },
  '/privacy': {
    title: 'Privacy Policy | BuiltCodeHouse',
    description:
      'Privacy Policy and Data Security Standards for BuiltCodeHouse, a digital engineering studio based in Ahmedabad, Gujarat, India.',
    canonical: 'https://builtcodehouse.com/privacy',
    h1: 'Privacy Policy & Data Security',
  },
  '/terms': {
    title: 'Terms of Engagement | BuiltCodeHouse',
    description:
      'Commercial terms of engagement and software engineering standards for BuiltCodeHouse, a digital engineering studio based in Ahmedabad, Gujarat, India.',
    canonical: 'https://builtcodehouse.com/terms',
    h1: 'Terms of Engagement',
  },
  // Section-level navigations consolidate canonical authority to the primary showcase
  '/services': {
    title: 'Software Development Capabilities | BuiltCodeHouse',
    description:
      'Core engineering capabilities from BuiltCodeHouse: custom software development, SaaS platforms, web applications, and AI systems.',
    canonical: 'https://builtcodehouse.com/',
    h1: 'From Complex Ideas to Exceptional Digital Products.',
  },
  '/work': {
    title: 'Engineering Case Studies & Work | BuiltCodeHouse',
    description:
      'Architectural case studies from BuiltCodeHouse: multi-tenant SaaS analytics, autonomous customer intelligence, and fintech transaction ledgers.',
    canonical: 'https://builtcodehouse.com/',
    h1: 'From Complex Ideas to Exceptional Digital Products.',
  },
  '/about': {
    title: 'About BuiltCodeHouse | Software Engineering Studio in Ahmedabad',
    description:
      'Learn about BuiltCodeHouse and Founder Dixit Sharma in Ahmedabad, India. Direct principal-level software engineering with zero agency bureaucracy.',
    canonical: 'https://builtcodehouse.com/',
    h1: 'From Complex Ideas to Exceptional Digital Products.',
  },
  '/insights': {
    title: 'Engineering Insights & Architecture | BuiltCodeHouse',
    description:
      'Technical publications from BuiltCodeHouse on deterministic AI systems, zero-downtime database migrations, and distributed microservices.',
    canonical: 'https://builtcodehouse.com/',
    h1: 'From Complex Ideas to Exceptional Digital Products.',
  },
  '/contact': {
    title: 'Contact BuiltCodeHouse | Software Development Ahmedabad',
    description:
      'Connect directly with principal engineers at BuiltCodeHouse in Ahmedabad, Gujarat, India to discuss custom software development and technical discovery.',
    canonical: 'https://builtcodehouse.com/',
    h1: 'From Complex Ideas to Exceptional Digital Products.',
  },
};

export const getMetadataForPath = (pathname: string): RouteMetadata => {
  const normalized = pathname.toLowerCase().replace(/\/$/, '') || '/';
  return ROUTE_METADATA[normalized] || ROUTE_METADATA['/'];
};

export const updateDocumentMetadata = (pathname: string): void => {
  if (typeof document === 'undefined') return;
  const meta = getMetadataForPath(pathname);

  // 1. Update Title
  document.title = meta.title;

  // 2. Update Meta Description
  const descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (descEl) {
    descEl.content = meta.description;
  }

  // 3. Update Canonical Link Tag
  const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (canonicalEl) {
    canonicalEl.href = meta.canonical;
  }

  // 4. Update Open Graph Tags
  const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (ogTitle) ogTitle.content = meta.title;

  const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (ogDesc) ogDesc.content = meta.description;

  const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
  if (ogUrl) ogUrl.content = meta.canonical;

  // 5. Update Twitter Tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
  if (twitterTitle) twitterTitle.content = meta.title;

  const twitterDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
  if (twitterDesc) twitterDesc.content = meta.description;
};

export const STRUCTURED_DATA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://builtcodehouse.com/#organization',
      name: 'BuiltCodeHouse',
      alternateName: 'BuiltCode House',
      url: 'https://builtcodehouse.com/',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://builtcodehouse.com/#logo',
        url: 'https://builtcodehouse.com/icons/icon-512.png',
        contentUrl: 'https://builtcodehouse.com/icons/icon-512.png',
        caption: 'BuiltCodeHouse Logo',
        width: 512,
        height: 512,
      },
      image: 'https://builtcodehouse.com/og-image.jpg',
      description:
        'BuiltCodeHouse is a digital engineering studio based in Ahmedabad, India, building custom software, web applications and SaaS products for businesses.',
      email: 'contact@builtcodehouse.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      knowsAbout: [
        'Custom Software Development',
        'Web Application Development',
        'SaaS Product Development',
        'Practical AI & Automated Workflows',
        'Enterprise Software Architecture',
        'Cloud Infrastructure & DevOps',
        'Design Engineering & Design Systems',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://builtcodehouse.com/#website',
      url: 'https://builtcodehouse.com/',
      name: 'BuiltCodeHouse',
      alternateName: 'BuiltCode House',
      publisher: {
        '@id': 'https://builtcodehouse.com/#organization',
      },
      inLanguage: 'en-US',
      description:
        'Official website for BuiltCodeHouse — Software Development Company in Ahmedabad, India.',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://builtcodehouse.com/#service',
      name: 'BuiltCodeHouse',
      alternateName: 'BuiltCode House',
      url: 'https://builtcodehouse.com/',
      parentOrganization: {
        '@id': 'https://builtcodehouse.com/#organization',
      },
      logo: 'https://builtcodehouse.com/icons/icon-512.png',
      image: 'https://builtcodehouse.com/og-image.jpg',
      description:
        'BuiltCodeHouse is a digital engineering studio based in Ahmedabad, India, building custom software, web applications and SaaS products for businesses.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
  ],
} as const;
