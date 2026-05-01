const items = [
  { pre: 'SEBI', b: 'AIF disclosure norms enforced', post: 'Jun 1' },
  { pre: 'Sequoia', b: '9th India fund close', post: '$2.85B' },
  { pre: 'RBI', b: 'PA licensing draft circular', post: 'this week' },
  { pre: 'Accel', b: 'Q1 India SaaS benchmark', post: 'GM 74%' },
  { pre: 'Stellaris', b: 'Series A · edge-AI infra', post: 'live' },
  { pre: 'GST Council', b: 'SaaS export refund docket', post: 'Fri' },
  { pre: 'Swiggy', b: 'Instamart dark-store pullback', post: 'Q2' },
  { pre: 'TPG', b: 'climate vehicle · India mandate', post: 'filed' },
];

const row = [...items, ...items];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {row.map((x, i) => (
          <div key={i} className="tk-item">
            <span className="dot" />
            <span className="gold">{x.pre}</span>
            <b>{x.b}</b>
            <span>· {x.post}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
