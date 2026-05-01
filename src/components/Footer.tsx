import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <div className="brand-mark"><LogoMark variant="monogram" /></div>
              <div className="brand-word">Brevity</div>
            </div>
            <div style={{
              fontFamily: "'Libre Baskerville',serif", fontSize: 13.5,
              color: '#8A8A90', maxWidth: 320, lineHeight: 1.6
            }}>
              Your personal AI intelligence officer. Delivered at 7am. Never longer than 500 words. For the rooms you&apos;re walking into.
            </div>
          </div>
          <div>
            <h6>The Briefing</h6>
            <a href="#brief">Sample brief</a>
            <a href="#engine">How it works</a>
            <a href="#who">Who it&apos;s for</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <h6>Admission</h6>
            <a href="#invite">Enter invitation code</a>
            <a href="#invite">Request an invite</a>
            <a href="#">Press kit</a>
            <a href="#">Concierge</a>
          </div>
          <div>
            <h6>Legal</h6>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Data handling</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 BREVITY INTELLIGENCE · MUMBAI · BANGALORE</div>
          <div>ISO 8601 · FOUNDED APR 2026</div>
        </div>
      </div>
    </footer>
  );
}
