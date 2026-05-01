import { IstClock } from './Clock';

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 0 }}>
      <div className="bg-glyph">B</div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Invitation only · Vol. 087</div>
            <h1>
              The five minutes of reading<br />
              that replace your <em>morning scroll.</em>
            </h1>
            <p className="hero-sub">
              Brevity delivers <em>The Briefing</em> — a 500-word intelligence artifact, hand-built for you by 7am each morning. It reads your calendar, tracks the rooms you&apos;re walking into, and tells you exactly what to say before you walk in.
            </p>
            <div className="hero-cta-row">
              <a href="#invite" className="btn btn-primary">
                Request an invitation <span className="arr">→</span>
              </a>
              <a href="#brief" className="btn btn-ghost">Read a sample brief</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="k">500<span style={{ fontSize: 14, color: 'var(--grey)' }}> words</span></div>
                <div className="v">per brief · every word load-bearing</div>
              </div>
              <div className="hero-stat">
                <div className="k">7:00<span style={{ fontSize: 14, color: 'var(--grey)' }}> am IST</span></div>
                <div className="v">before you pick up the phone</div>
              </div>
              <div className="hero-stat">
                <div className="k">1:1</div>
                <div className="v">personalised · never a newsletter</div>
              </div>
            </div>
          </div>
          <div>
            <IstClock />
          </div>
        </div>
      </div>
    </section>
  );
}
