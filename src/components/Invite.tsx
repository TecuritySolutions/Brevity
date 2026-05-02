'use client';
import { useState } from 'react';

const VALID_CODES = ['RAJAN-087', 'MEHTA-004', 'ISPIRT-001', 'INC42-HQ', 'YPOBLR'];

export default function Invite() {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState({ t: '', c: '' });
  const [emailMsg, setEmailMsg] = useState({ t: '', c: '' });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const c = code.trim().toUpperCase();
    if (!c) { setMsg({ t: 'Enter the code from your invite email.', c: 'err' }); return; }
    if (VALID_CODES.includes(c)) {
      setMsg({ t: 'Verified. Proceeding to onboarding — check WhatsApp.', c: 'ok' });
    } else {
      setMsg({ t: "Not recognised. Invites are personal — ask the friend who mentioned us.", c: 'err' });
    }
  }

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      setEmailMsg({ t: "Enter a working email — we only write to the address that walks the talk.", c: 'err' });
      return;
    }
    setEmailMsg({ t: 'Reserving your seat…', c: '' });
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: v }),
      });
      if (res.status === 409) {
        setEmailMsg({ t: "You're already on the list. We'll reach out before the next cohort opens.", c: 'ok' });
      } else if (res.ok) {
        setEmailMsg({ t: "On the list. You'll hear from us before the next cohort opens.", c: 'ok' });
        setEmail('');
      } else {
        setEmailMsg({ t: 'Something went wrong. Try again in a moment.', c: 'err' });
      }
    } catch {
      setEmailMsg({ t: 'Something went wrong. Try again in a moment.', c: 'err' });
    }
  }

  return (
    <section id="invite">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">§ 06 / ADMISSION</div>
          <h2 className="sec-title">There is no public signup. <em>There is an invite.</em></h2>
        </div>
        <div className="invite-row">
          <div className="invite-help">
            <p>
              Brevity is invitation-only. Every reader arrives through a personal link from someone already in the room — a founder, an investor, an operator who has decided you belong on the list.
            </p>
            <p style={{ marginTop: 14 }}>
              If you were sent a code, enter it on the right. If you weren&apos;t — leave your email below. We open small cohorts each month, and the list moves in the order it was joined.
            </p>
            <div className="invited-by">
              <span className="dot" />
              CURRENT SEED · 47 READERS · 6 CITIES · CLOSED COHORT
            </div>

            <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--line-soft)' }}>
              <div className="label" style={{ marginBottom: 12 }}>NO INVITE? · JOIN THE WAITLIST</div>
              <form className="invite-input" onSubmit={submitEmail}>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  type="email"
                  style={{ textTransform: 'none', letterSpacing: '.02em' }}
                />
                <button type="submit">Reserve a seat →</button>
              </form>
              <div className={`invite-msg${emailMsg.c ? ' ' + emailMsg.c : ''}`}>{emailMsg.t || '\u00a0'}</div>
            </div>
          </div>

          <div className="invite-box">
            <div className="iblabel">Enter your invitation code</div>
            <div className="ibtitle">Admission</div>
            <form className="invite-input" onSubmit={submit}>
              <input
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="e.g. RAJAN-087"
                maxLength={20}
              />
              <button type="submit">Admit →</button>
            </form>
            <div className={`invite-msg${msg.c ? ' ' + msg.c : ''}`}>{msg.t || '\u00a0'}</div>
            <div style={{
              marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--line-soft)',
              fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '.14em',
              textTransform: 'uppercase', color: 'var(--grey)'
            }}>
              Try: <span style={{ color: 'var(--gold)' }}>RAJAN-087</span>&nbsp;·&nbsp;
              <span style={{ color: 'var(--gold)' }}>ISPIRT-001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
