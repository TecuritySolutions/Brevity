import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/lib/supabase';
import { SUPPLEMENTAL_BLOCKED_DOMAINS } from '@/lib/blocked-domains';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const BLOCKED_DOMAINS = new Set<string>([
  ...(require('disposable-email-domains') as string[]),
  ...SUPPLEMENTAL_BLOCKED_DOMAINS,
]);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();
  const domain = normalized.split('@')[1];

  if (BLOCKED_DOMAINS.has(domain)) {
    return NextResponse.json({ error: 'temp_email' }, { status: 400 });
  }

  const token = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: normalized, verification_token: token, token_expires_at: expiresAt });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'already_registered' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to save. Try again.' }, { status: 500 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  const verifyUrl = `${appUrl}/verify?token=${token}`;

  try {
    await transporter.sendMail({
      from: `"Brevity (no-reply)" <${process.env.GMAIL_USER}>`,
      replyTo: false as unknown as string,
      to: normalized,
      subject: 'Confirm your spot on the Brevity waitlist',
      html: `<!DOCTYPE html>
<html lang="en">
<body style="background:#000000;color:#E8E8E4;font-family:system-ui,sans-serif;margin:0;padding:48px 24px;">
  <div style="max-width:480px;margin:0 auto;">
    <div style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#8A8478;margin-bottom:36px;">
      BREVITY &middot; INTELLIGENCE BRIEF
    </div>
    <h1 style="font-family:Georgia,serif;font-weight:400;font-size:30px;margin:0 0 16px;color:#F5F1E6;line-height:1.25;">
      Confirm your seat.
    </h1>
    <p style="font-size:15px;line-height:1.65;color:#C8C8C0;margin:0 0 32px;">
      You asked to join the Brevity waitlist. Click below to verify your email &mdash;
      this link expires in 24&nbsp;hours.
    </p>
    <a href="${verifyUrl}"
       style="display:inline-block;background:#C9A84C;color:#000000;text-decoration:none;
              padding:13px 26px;font-size:13px;letter-spacing:.06em;font-weight:600;
              font-family:system-ui,sans-serif;">
      Verify my email &rarr;
    </a>
    <p style="font-size:12px;color:#6C6760;margin-top:36px;line-height:1.6;">
      Or copy this link into your browser:<br/>
      <span style="color:#8A8478;word-break:break-all;">${verifyUrl}</span>
    </p>
    <p style="font-size:12px;color:#6C6760;margin-top:24px;line-height:1.5;">
      If you didn&apos;t request this, ignore this email &mdash; nothing will be added to your address.
      <br/>This is an automated message &mdash; please do not reply.
    </p>
    <div style="margin-top:44px;padding-top:20px;border-top:1px solid #1A1814;
                font-family:'Courier New',monospace;font-size:10px;letter-spacing:.12em;
                text-transform:uppercase;color:#6C6760;">
      BREVITY &middot; INVITE-ONLY INTELLIGENCE
    </div>
  </div>
</body>
</html>`,
    });
  } catch (err) {
    console.error('SMTP error:', err);
  }

  return NextResponse.json({ ok: true });
}
