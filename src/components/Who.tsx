const cards = [
  {
    lab: 'PRIMARY',
    role: 'Founder · Series A–C',
    name: 'The New-Money Founder',
    body: 'Three investor meetings this week. A board call Friday. Dinner with a potential acquirer on Saturday. Needs to walk into every room knowing more than the person across the table expects him to.',
    age: '28–42',
    loc: 'Bangalore · Mumbai',
    primary: true,
  },
  {
    lab: '02',
    role: 'Investor · 10–25 deals',
    name: 'The Angel',
    body: 'Meets 15 founders a week. The Briefing gives sector context before every founder call — sharper in diligence, more valuable to portfolio.',
    age: '35–48',
    loc: 'Mumbai · Delhi',
    primary: false,
  },
  {
    lab: '03',
    role: 'Global Exec · USD payer',
    name: 'The Global Executive',
    body: 'Managing a career abroad while staying close to India and the rooms that matter at home. Needs context that travels across time zones — sharp on the markets, sharper on the people.',
    age: '30–42',
    loc: 'SG · US · UK',
    primary: false,
  },
  {
    lab: '04',
    role: 'CXO · VP/CFO/CTO',
    name: 'The Senior CXO',
    body: 'Not a founder but operates at founder level. Needs to be the best-prepared person in every leadership meeting. Converts to Founder tier more readily than founders.',
    age: '38–48',
    loc: 'BLR · Delhi · Hyd',
    primary: false,
  },
];

export default function Who() {
  return (
    <section id="who">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">§ 04 / WHO IT&apos;S FOR</div>
          <h2 className="sec-title">
            Built for the people <em>who already read everything</em>&nbsp;— and still feel behind.
          </h2>
        </div>
        <div className="personas">
          {cards.map((c, i) => (
            <div key={i} className={`pcard${c.primary ? ' primary' : ''}`}>
              <div className="plabel">{c.lab}</div>
              <h4>{c.name}</h4>
              <div className="prole">{c.role}</div>
              <p>{c.body}</p>
              <div className="pfoot">
                <span>AGE · {c.age}</span>
                <span>{c.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
