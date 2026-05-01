'use client';
import { useState } from 'react';
import LogoMark from './LogoMark';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <div className="brand">
          <div className="brand-mark">
            <LogoMark variant="monogram" />
          </div>
          <div className="brand-word">Brevity</div>
        </div>
        <button className="nav-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <a href="#brief" onClick={() => setOpen(false)}>Sample Brief</a>
          <a href="#engine" onClick={() => setOpen(false)}>How it works</a>
          <a href="#who" onClick={() => setOpen(false)}>Who it&apos;s for</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#invite" className="nav-cta" onClick={() => setOpen(false)}>Join the waitlist</a>
        </div>
      </div>
    </div>
  );
}
