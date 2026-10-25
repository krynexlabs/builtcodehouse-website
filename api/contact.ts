/**
 * BUILTCODE HOUSE — Serverless Contact Gateway (Vercel Node.js Serverless Function)
 * 
 * Production Ingestion Pipeline:
 * 1. CORS Preflight & Request Method Filtering (POST only)
 * 2. IP Rate Limiting & Anti-abuse Protection (In-container memory cache)
 *    Note on Serverless Architecture: In-memory rate limiting applies per warm container.
 *    For distributed multi-region rate limiting across cold starts, attach Upstash Redis / Vercel KV.
 * 3. Server-Side Input Validation & RFC 5322 Email Format Enforcing
 * 4. Spam Honeypot Detection
 * 5. Ingestion Deduplication (Prevents duplicate bursts within 60 seconds)
 * 6. Production Email Dispatch (Resend / SendGrid API integration)
 * 7. Structured Server Telemetry Logging & Status Reporting
 */

interface InquiryPayload {
  referenceId?: string;
  fullName?: string;
  company?: string;
  email?: string;
  projectType?: string;
  projectGoals?: string;
  timeline?: string;
  projectDetails?: string;
  honeypot?: string;
  source?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// In-Memory Rate Limiting Cache (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 6;

// In-Memory Deduplication Cache (hash -> timestamp + referenceId)
const recentSubmissions = new Map<string, { timestamp: number; referenceId: string }>();
const DEDUPLICATION_WINDOW_MS = 60 * 1000; // 60 seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

function checkDuplicate(hash: string): { isDuplicate: boolean; referenceId?: string } {
  const now = Date.now();
  const entry = recentSubmissions.get(hash);
  if (entry && now - entry.timestamp < DEDUPLICATION_WINDOW_MS) {
    return { isDuplicate: true, referenceId: entry.referenceId };
  }
  return { isDuplicate: false };
}

export default async function handler(req: any, res: any) {
  // 1. CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Only POST is accepted.' });
  }

  // 2. IP Rate Limiting
  const clientIp =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'anonymous';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      error: 'Submission rate limit exceeded. Please wait 10 minutes before submitting again.',
    });
  }

  // 3. Body Extraction
  let body: InquiryPayload;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  } catch {
    return res.status(400).json({ error: 'Malformed JSON payload.' });
  }

  // 4. Honeypot check (Silently discard spam bots)
  if (body.honeypot && body.honeypot.trim().length > 0) {
    return res.status(200).json({
      success: true,
      referenceId: 'BCH-REQ-0000',
      message: 'Transmission processed.',
    });
  }

  // 5. Server-side validation
  const errors: Record<string, string> = {};
  const fullName = (body.fullName || '').trim();
  const email = (body.email || '').trim().toLowerCase();
  const company = (body.company || '').trim();
  const projectType = (body.projectType || 'General Engineering Inquiry').trim();
  const projectGoals = (body.projectGoals || '').trim();
  const timeline = (body.timeline || 'Flexible').trim();
  const projectDetails = (body.projectDetails || '').trim();
  const referenceId = body.referenceId || `BCH-REQ-${Math.floor(1000 + Math.random() * 9000)}`;

  if (!fullName || fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (fullName.length > 80) {
    errors.fullName = 'Full name exceeds 80 characters.';
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = 'A valid corporate email address is required.';
  }

  if (!projectGoals) {
    errors.projectGoals = 'Project objectives must be specified.';
  }

  if (!projectDetails && body.source !== 'modal') {
    errors.projectDetails = 'Technical requirements must be provided.';
  } else if (projectDetails.length > 3000) {
    errors.projectDetails = 'Project details cannot exceed 3,000 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  // 6. Deduplication Check (Filter identical submissions within 60s)
  const submissionKey = `${email}::${projectGoals}::${projectDetails.slice(0, 100)}`;
  const duplicateCheck = checkDuplicate(submissionKey);
  if (duplicateCheck.isDuplicate) {
    return res.status(200).json({
      success: true,
      delivered: true,
      deduplicated: true,
      referenceId: duplicateCheck.referenceId,
      message: 'Inquiry brief already received. Duplicate submission acknowledged.',
    });
  }

  // 7. External Email Dispatch via Configured Provider
  let deliveredToMailbox = false;
  const targetEmail = process.env.CONTACT_TO_EMAIL || 'contact@builtcodehouse.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'inquiries@builtcodehouse.com';

  const emailSummary = `
BUILTCODE HOUSE // INCOMING ARCHITECTURE BRIEF
--------------------------------------------------
Studio Location: Ahmedabad, Gujarat, India
Reference ID:    ${referenceId}
Timestamp:       ${new Date().toISOString()}
Client Name:     ${fullName}
Company:         ${company || 'Not provided'}
Email Address:   ${email}
Project Type:    ${projectType}
Timeline:        ${timeline}
Source:          ${body.source || 'Contact Section Form'}

CORE OBJECTIVES:
${projectGoals || 'Not specified (Direct modal inquiry)'}

TECHNICAL SPECIFICATIONS:
${projectDetails || 'Consultation requested via modal'}
--------------------------------------------------
Origin IP:       ${clientIp}
`.trim();

  // A. Resend Provider Integration
  if (process.env.RESEND_API_KEY) {
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [targetEmail],
          reply_to: email,
          subject: `[BCH Architecture Brief] ${projectType} - ${fullName} (${company || 'Direct'})`,
          text: emailSummary,
        }),
      });

      if (resendRes.ok) {
        deliveredToMailbox = true;
        recentSubmissions.set(submissionKey, { timestamp: Date.now(), referenceId });
      } else {
        const resendErr = await resendRes.json().catch(() => ({}));
        console.error('[Resend Error Response]', resendErr);
        return res.status(502).json({
          error: 'Email delivery failed at email service provider (Resend).',
          delivered: false,
          referenceId,
          details: resendErr,
        });
      }
    } catch (e: any) {
      console.error('[Resend Network Exception]', e);
      return res.status(502).json({
        error: 'Network error connecting to email service provider.',
        delivered: false,
        referenceId,
      });
    }
  }

  // B. SendGrid Provider Fallback Integration
  else if (process.env.SENDGRID_API_KEY) {
    try {
      const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: targetEmail }] }],
          from: { email: fromEmail },
          reply_to: { email },
          subject: `[BCH Architecture Brief] ${projectType} - ${fullName}`,
          content: [{ type: 'text/plain', value: emailSummary }],
        }),
      });

      if (sgRes.ok) {
        deliveredToMailbox = true;
        recentSubmissions.set(submissionKey, { timestamp: Date.now(), referenceId });
      } else {
        const sgErr = await sgRes.json().catch(() => ({}));
        console.error('[SendGrid Error Response]', sgErr);
        return res.status(502).json({
          error: 'Email delivery failed at email service provider (SendGrid).',
          delivered: false,
          referenceId,
          details: sgErr,
        });
      }
    } catch (e: any) {
      console.error('[SendGrid Network Exception]', e);
      return res.status(502).json({
        error: 'Network error connecting to email service provider.',
        delivered: false,
        referenceId,
      });
    }
  }

  // C. Unconfigured Provider Handler (Graceful Telemetry & Serverless Log Fallback)
  else {
    console.warn(
      `[BCH Ingestion Gateway - AWAITING RESEND_API_KEY] Inquiry ${referenceId} recorded securely to serverless logs:\n`,
      JSON.stringify(
        {
          referenceId,
          timestamp: new Date().toISOString(),
          fullName,
          email,
          company,
          projectType,
          timeline,
          projectGoals,
          projectDetails,
          clientIp,
        },
        null,
        2
      )
    );

    recentSubmissions.set(submissionKey, { timestamp: Date.now(), referenceId });
    return res.status(200).json({
      success: true,
      delivered: false,
      simulated: true,
      referenceId,
      timestamp: new Date().toISOString(),
      message: 'Inquiry received and securely logged to engineering gateway.',
    });
  }

  // 8. Successful Delivery Response
  return res.status(200).json({
    success: true,
    referenceId,
    timestamp: new Date().toISOString(),
    delivered: deliveredToMailbox,
    message: 'Inquiry successfully transmitted to engineering principals.',
  });
}
