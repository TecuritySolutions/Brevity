const tiers = [
  {
    lab: 'THE BRIEFING',
    name: 'The Briefing',
    price: '₹99',
    sub: '/month',
    blurb: 'One brief a day, at 7am, to WhatsApp and email. For the founder, the operator, the executive.',
    items: [
      'Daily 500-word brief',
      'Calendar sync · real meetings',
      'WhatsApp + email delivery',
      '90-day personalisation engine',
      'Cancel any morning',
    ],
    featured: false,
  },
  {
    lab: 'THE BRIEFING PRO',
    name: 'The Briefing Pro',
    price: '₹999',
    sub: '/month',
    blurb: 'For the reader who wants the engine wired into their entire workflow. Calendar, notes, deals, dossiers — all of it, briefed.',
    items: [
      'Everything in The Briefing',
      'Unlimited connectors · Google Calendar, Notion, Gmail, Slack, Linear',
      'Priority signal tracking (20 entities)',
      'Concierge editor on WhatsApp',
      'Invite 3 friends per quarter',
    ],
    featured: true,
  },
  {
    lab: 'THE GLOBAL',
    name: 'The Global',
    price: '$19',
    sub: '/month',
    blurb: 'For the executive abroad. Priced in dollars. Written for the conversation back home and the rooms ahead of you.',
    items: [
      'Daily 500-word brief',
      'India + global market signals',
      'Time-zone-shifted delivery',
      'Quarterly trip-prep briefs',
      'Invite 2 friends per quarter',
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">§ 07 / THE TERMS</div>
          <h2 className="sec-title">Three tiers. <em>Same discipline.</em></h2>
        </div>
        <div className="pricing">
          {tiers.map((t, i) => (
            <div key={i} className={`ptier${t.featured ? ' featured' : ''}`}>
              <div className="plab">
                <span>{t.lab}</span>
                <span className="ptag">COMING SOON</span>
              </div>
              <h3>{t.name}</h3>
              <div className="price">{t.price}<small>{t.sub}</small></div>
              <div className="pdesc">{t.blurb}</div>
              <ul>
                {t.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a className="btn btn-ghost" href="#invite" style={{ opacity: 0.85 }}>Join the waitlist</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
