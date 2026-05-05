import Link from 'next/link';
import { supabase } from '@/lib/supabase';

type SearchParams = { [key: string]: string | string[] | undefined };

type Status = 'success' | 'already' | 'expired' | 'invalid' | 'missing';

const messages: Record<Status, { heading: string; body: string; ok: boolean }> = {
  success: {
    heading: "You're verified.",
    body: "Your seat is confirmed. We'll reach out before the next cohort opens.",
    ok: true,
  },
  already: {
    heading: "Already verified.",
    body: "This email is already confirmed on the waitlist.",
    ok: true,
  },
  expired: {
    heading: "Link expired.",
    body: "Verification links are valid for 24 hours. Submit your email again from the homepage to get a fresh one.",
    ok: false,
  },
  invalid: {
    heading: "Invalid link.",
    body: "This verification link isn't recognised. Try submitting your email again from the homepage.",
    ok: false,
  },
  missing: {
    heading: "No token found.",
    body: "This page requires a verification link. Head back and submit your email.",
    ok: false,
  },
};

async function getStatus(token: string | undefined): Promise<Status> {
  if (!token) return 'missing';

  const { data, error } = await supabase
    .from('waitlist')
    .select('token_expires_at, verified')
    .eq('verification_token', token)
    .single();

  if (error || !data) return 'invalid';
  if (data.verified) return 'already';
  if (new Date(data.token_expires_at) < new Date()) return 'expired';

  await supabase
    .from('waitlist')
    .update({ verified: true, verification_token: null })
    .eq('verification_token', token);

  return 'success';
}

export default async function VerifyPage({ searchParams }: { searchParams: SearchParams }) {
  const raw = searchParams.token;
  const token = Array.isArray(raw) ? raw[0] : raw;
  const status = await getStatus(token);
  const { heading, body, ok } = messages[status];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{ maxWidth: 440, width: '100%' }}>
        <div className="label" style={{ marginBottom: 32 }}>
          Brevity &middot; Email Verification
        </div>

        <div style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: ok ? 'var(--gold)' : 'var(--red)',
          marginBottom: 20,
        }} />

        <h1 className="serif" style={{
          fontSize: 32,
          fontWeight: 400,
          margin: '0 0 14px',
          color: 'var(--paper)',
          lineHeight: 1.2,
        }}>
          {heading}
        </h1>

        <p style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: 'var(--grey)',
          margin: '0 0 32px',
        }}>
          {body}
        </p>

        <Link href="/" className="label" style={{ color: 'var(--gold)' }}>
          &larr; Back to Brevity
        </Link>
      </div>
    </div>
  );
}
