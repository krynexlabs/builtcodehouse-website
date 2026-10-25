/**
 * BUILTCODE HOUSE — Input Validation & Sanitization Engine
 * Client & Server-side validation logic for project inquiries and forms.
 */

export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: Record<string, string>;
}

export interface InquiryFormData {
  fullName: string;
  company: string;
  email: string;
  projectType: string;
  projectGoals: string;
  timeline: string;
  projectDetails: string;
  honeypot?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function sanitizeText(input: string): string {
  return input
    .replace(/[<>]/g, '') // Strip potential script tag delimiters
    .trim();
}

export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // 1. Spam honeypot trap
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = 'Bot submission detected and rejected.';
    return { isValid: false, errors };
  }

  // 2. Full Name
  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Full name is required.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (trimmedName.length > 80) {
    errors.fullName = 'Full name cannot exceed 80 characters.';
  }

  // 3. Email
  const trimmedEmail = data.email.trim();
  if (!trimmedEmail) {
    errors.email = 'Corporate email address is required.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g., name@company.com).';
  }

  // 4. Project Type
  if (!data.projectType) {
    errors.projectType = 'Please select a project classification.';
  }

  // 5. Project Goals
  const trimmedGoals = data.projectGoals.trim();
  if (!trimmedGoals) {
    errors.projectGoals = 'Project objectives are required.';
  } else if (trimmedGoals.length < 5) {
    errors.projectGoals = 'Please describe your core project objectives (minimum 5 characters).';
  }

  // 6. Project Details
  const trimmedDetails = data.projectDetails.trim();
  if (!trimmedDetails) {
    errors.projectDetails = 'Technical requirements description is required.';
  } else if (trimmedDetails.length < 15) {
    errors.projectDetails = 'Please provide more context regarding your requirements (minimum 15 characters).';
  } else if (trimmedDetails.length > 3000) {
    errors.projectDetails = 'Description cannot exceed 3,000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateReferenceId(): string {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BCH-REQ-${rand}`;
}
