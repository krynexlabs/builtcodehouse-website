/**
 * BUILTCODE HOUSE — Centralized TypeScript Domain Contracts
 * Strict types for all components, data models, telemetry, and business workflows.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly id: string;
}

export interface ServiceCapability {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly technicalMeta: string;
  readonly schematicType: 'product' | 'ai' | 'saas' | 'enterprise' | 'cloud' | 'design';
}

export interface ProcessStage {
  readonly number: string;
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly phaseTag: string;
  readonly telemetry: string;
  readonly deliverables: readonly string[];
  readonly schematicType: 'discovery' | 'strategy' | 'architecture' | 'build' | 'launch' | 'scale';
}

export interface CaseStudyProject {
  readonly number: string;
  readonly category: string;
  readonly title: string;
  readonly overview: string;
  readonly verificationBadge: string;
  readonly techStack: readonly string[];
  readonly calloutDetails: readonly {
    readonly title: string;
    readonly desc: string;
  }[];
  readonly visualType: 'ai-ops' | 'healthcare' | 'commerce';
}

export interface PhilosophyPrinciple {
  readonly number: string;
  readonly code: string;
  readonly title: string;
  readonly copy: string;
  readonly annotation: string;
  readonly schematicType: 'excellence' | 'longterm' | 'precision' | 'partnership';
}

export interface WhitepaperDoc {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly abstract: string;
  readonly category: string;
  readonly readTime: string;
  readonly date: string;
  readonly author: string;
  readonly downloadCount: number;
  readonly keyTakeaways: readonly string[];
  readonly sections: readonly {
    readonly heading: string;
    readonly content: string;
  }[];
}

export interface ProjectInquiryPayload {
  readonly referenceId: string;
  readonly timestamp: string;
  readonly fullName: string;
  readonly company: string;
  readonly email: string;
  readonly projectType: string;
  readonly projectGoals: string;
  readonly timeline: string;
  readonly projectDetails: string;
}

export interface ThreeTelemetryNode {
  readonly id: string;
  readonly label: string;
  readonly status: 'ACTIVE' | 'STANDBY' | 'SYNCING';
  readonly latency: string;
  readonly concurrency: string;
  readonly uptime: string;
}
