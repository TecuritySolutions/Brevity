const layers = [
  {
    n: '01',
    t: 'Static profile',
    b: 'Industry, portfolio, tracked sectors, key relationships, city, travel. A six-question conversational onboarding builds your intelligence DNA in two minutes.',
  },
  {
    n: '02',
    t: 'Calendar sync',
    b: 'One-tap OAuth. The brief references today\'s real meetings and the people walking into them. This is where it stops feeling like a newsletter.',
  },
  {
    n: '03',
    t: 'Signal tracking',
    b: 'Second-order signals from the companies, funds, and operators you care about. Not headlines. The CTO who just left. The fund that just closed.',
  },
  {
    n: '04',
    t: 'Feedback loop',
    b: 'One tap per brief. After 30 briefs the system knows what you read versus skim. At 90, it knows you. This is the moat a competitor cannot shortcut.',
  },
];

export default function Engine() {
  return (
    <section id="engine">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">§ 02 / THE ENGINE</div>
          <h2 className="sec-title">Four layers of context. <em>Compounded daily.</em></h2>
        </div>
        <div className="layers">
          {layers.map(l => (
            <div key={l.n} className="layer">
              <div className="layer-num">LAYER · {l.n}</div>
              <div className="layer-arrow">↘</div>
              <div className="layer-title">{l.t}</div>
              <div className="layer-body">{l.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
