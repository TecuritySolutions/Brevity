'use client';
import { useState, useEffect } from 'react';
import { BRIEFS } from '@/lib/data';

export function BriefPreview({ persona, compact = false }: { persona: string; compact?: boolean }) {
  const b = BRIEFS[persona];
  return (
    <div className="brief-paper">
      <div className="bp-head">
        <div><b>THE BRIEFING</b></div>
        <div>VOL. 087</div>
      </div>
      <div className="brief-title">Good morning.</div>
      <div className="brief-meta">{b.date.toUpperCase()} · 7:04 AM IST · {b.role.toUpperCase()}</div>
      <div className="brief-meta" style={{ marginTop: 4 }}>WRITTEN FOR YOU</div>
      <div className="brief-body">
        <h4>Your day at a glance</h4>
        <p>{b.glance}</p>
        {b.meetings.slice(0, compact ? 1 : b.meetings.length).map((m, i) => (
          <div key={i}>
            <h4>{m.title}</h4>
            <p>{m.body}</p>
          </div>
        ))}
        {!compact && (
          <>
            <h4>One thing to know today</h4>
            <p>{b.oneThing}</p>
            <h4>Dinner table opener</h4>
            <p>{b.opener}</p>
          </>
        )}
        {compact && (
          <p style={{
            marginTop: 18, fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5,
            letterSpacing: '.14em', textTransform: 'uppercase', color: '#8A8A90',
            borderTop: '1px solid #D6D6CC', paddingTop: 12
          }}>
            — continues · 3 more sections —
          </p>
        )}
      </div>
    </div>
  );
}

export function IstClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!now) {
    return (
      <div className="terminal">
        <div className="terminal-head">
          <div className="term-dots">
            <span className="live" /><span /><span />
          </div>
          <div>BRVT.AI · IST · LOADING</div>
        </div>
        <div className="clock-block">
          <div className="clock-time">--:--<span className="sec">--</span></div>
          <div className="clock-meta"><div><b>—</b></div><div>—</div><div>Asia / Kolkata</div></div>
        </div>
        <div className="countdown-row">
          <div>NEXT BRIEF IN</div>
          <div><b>--:--:--</b></div>
        </div>
        <BriefPreview persona="founder" compact />
      </div>
    );
  }

  const ist = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (5.5 * 3600 * 1000));
  const hh = String(ist.getHours()).padStart(2, '0');
  const mm = String(ist.getMinutes()).padStart(2, '0');
  const ss = String(ist.getSeconds()).padStart(2, '0');
  const wd = ist.toLocaleDateString('en-US', { weekday: 'long' });
  const dd = ist.toLocaleDateString('en-US', { day: '2-digit', month: 'long' });

  const next7 = new Date(ist);
  next7.setHours(7, 0, 0, 0);
  if (ist >= next7) next7.setDate(next7.getDate() + 1);
  const diff = next7.getTime() - ist.getTime();
  const dH = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const dM = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const dS = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  return (
    <div className="terminal">
      <div className="terminal-head">
        <div className="term-dots">
          <span className="live" /><span /><span />
        </div>
        <div>BRVT.AI · IST · {wd.toUpperCase()}</div>
      </div>
      <div className="clock-block">
        <div className="clock-time">
          {hh}:{mm}<span className="sec">{ss}</span>
        </div>
        <div className="clock-meta">
          <div><b>{wd}</b></div>
          <div>{dd}</div>
          <div>Asia / Kolkata</div>
        </div>
      </div>
      <div className="countdown-row">
        <div>NEXT BRIEF IN</div>
        <div><b>{dH}:{dM}:{dS}</b></div>
      </div>
      <BriefPreview persona="founder" compact />
    </div>
  );
}
