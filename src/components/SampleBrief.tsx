'use client';
import { useState } from 'react';
import { BRIEFS, PERSONAS } from '@/lib/data';
import { BriefPreview } from './Clock';

export default function SampleBrief() {
  const [k, setK] = useState('founder');

  return (
    <section id="brief">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">§ 01 / SAMPLE BRIEF</div>
          <h2 className="sec-title">A real brief, written <em>for a real person.</em></h2>
        </div>
        <div className="sample-wrap">
          <div>
            <div className="persona-pick">
              <div className="pp-head">
                <span>READER · PROFILE</span><b>LIVE</b>
              </div>
              <div className="persona-row">
                {PERSONAS.map(pp => (
                  <button
                    key={pp.k}
                    className={`persona-tab${pp.k === k ? ' active' : ''}`}
                    onClick={() => setK(pp.k)}
                  >
                    <div className="pt-name">{pp.name}</div>
                    <div className="pt-role">{pp.role}</div>
                  </button>
                ))}
              </div>
              <div className="persona-body">
                <div style={{ color: 'var(--gold)', fontFamily: "'Fraunces',serif", fontSize: 16 }}>
                  {BRIEFS[k].role}
                </div>
                <p style={{ marginTop: 10 }}>
                  Every brief is generated from four layers of personal context: static profile, calendar sync, signal tracking across the sectors you follow, and a 90-day feedback loop that weighs what you actually read.
                </p>
                <div className="tags">
                  <span className="tag">Calendar sync</span>
                  <span className="tag">Sector signals</span>
                  <span className="tag">Meeting prep</span>
                  <span className="tag">Social context</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 28, paddingLeft: 2 }}>
              <div className="label" style={{ marginBottom: 10 }}>THE DISCIPLINE</div>
              <p className="whisper" style={{ maxWidth: 420, lineHeight: 1.7, fontSize: 15 }}>
                Every sentence earns its place. The brief ends before you&apos;re bored.
                500 words. Never more. We&apos;ve cut more than we&apos;ve kept.
              </p>
            </div>
          </div>
          <BriefPreview persona={k} />
        </div>
      </div>
    </section>
  );
}
