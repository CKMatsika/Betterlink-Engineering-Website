import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@betterlinkengineering.co.zw';
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ||
  'Betterlink Engineering Website <website@betterlinkengineering.co.zw>';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_DESCRIPTION_LEN = 5000;

// In-memory, per-instance rate limiter. Adequate for a single-instance
// deployment; a shared store (e.g. Redis/Upstash) is needed to enforce the
// limit across multiple serverless instances.
const hits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

function asString(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function isValidEmail(email: string): boolean {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string
  );
}

type Body = Record<string, unknown>;

interface Enquiry {
  fullName: string;
  organisation: string;
  position: string;
  email: string;
  phone: string;
  country: string;
  serviceRequired: string;
  projectDescription: string;
  estimatedTimeline: string;
}

const REQUIRED_FIELDS: (keyof Enquiry)[] = [
  'fullName',
  'organisation',
  'email',
  'serviceRequired',
  'projectDescription',
];

export async function POST(request: Request) {
  let body: Body = {};
  try {
    const parsed: unknown = await request.json();
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      body = parsed as Body;
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: legitimate users never populate this hidden field. Bots that do
  // are accepted with a success response so they receive no feedback.
  if (asString(body.companyWebsite, 200)) {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many enquiries sent. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  const enquiry: Enquiry = {
    fullName: asString(body.fullName, 200),
    organisation: asString(body.organisation, 200),
    position: asString(body.position, 200),
    email: asString(body.email, 254),
    phone: asString(body.phone, 50),
    country: asString(body.country, 100),
    serviceRequired: asString(body.serviceRequired, 200),
    projectDescription: asString(body.projectDescription, MAX_DESCRIPTION_LEN),
    estimatedTimeline: asString(body.estimatedTimeline, 200),
  };

  const fieldErrors: Partial<Record<keyof Enquiry, string>> = {};
  for (const field of REQUIRED_FIELDS) {
    if (!enquiry[field]) fieldErrors[field] = 'This field is required.';
  }
  if (enquiry.email && !isValidEmail(enquiry.email)) {
    fieldErrors.email = 'Enter a valid email address.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: 'Please correct the highlighted fields.', fields: fieldErrors },
      { status: 400 }
    );
  }

  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set; enquiry was not delivered.');
    return NextResponse.json(
      {
        ok: false,
        error:
          'The enquiry service is temporarily unavailable. Please email info@betterlinkengineering.co.zw directly.',
      },
      { status: 503 }
    );
  }

  const subject = `Project enquiry — ${enquiry.serviceRequired} — ${enquiry.fullName}${
    enquiry.organisation ? ` (${enquiry.organisation})` : ''
  }`;

  const rows: [string, string][] = [
    ['Name', enquiry.fullName],
    ['Organisation', enquiry.organisation],
    ['Position', enquiry.position || '—'],
    ['Email', enquiry.email],
    ['Phone', enquiry.phone || '—'],
    ['Country', enquiry.country || '—'],
    ['Service required', enquiry.serviceRequired],
    ['Estimated timeline', enquiry.estimatedTimeline || '—'],
  ];

  const text =
    rows.map(([label, value]) => `${label}: ${value}`).join('\n') +
    `\n\nProject description:\n${enquiry.projectDescription}`;

  const html = `
    <h2 style="margin:0 0 16px">New project enquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;vertical-align:top">${escapeHtml(
              label
            )}</td><td>${escapeHtml(value)}</td></tr>`
        )
        .join('')}
    </table>
    <h3 style="margin:20px 0 8px">Project description</h3>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(enquiry.projectDescription)}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: enquiry.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[contact] Resend API responded with', res.status, detail);
      return NextResponse.json(
        {
          ok: false,
          error:
            'We could not send your enquiry right now. Please try again or email info@betterlinkengineering.co.zw directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Failed to reach the email service:', error);
    return NextResponse.json(
      {
        ok: false,
        error:
          'We could not send your enquiry right now. Please try again or email info@betterlinkengineering.co.zw directly.',
      },
      { status: 502 }
    );
  }
}
