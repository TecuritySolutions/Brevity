const usps: [string, string][] = [
  [
    'Built around your calendar, not the news cycle',
    'Every other tool tells you what happened to the world. The Briefing tells you what matters to you today — based on who you\'re meeting and what rooms you\'re walking into.',
  ],
  [
    'WhatsApp-native',
    'No app. No dashboard. No new habit. The brief arrives where you already live — on the thread you already open 47 times a day.',
  ],
  [
    '500 words. Never 5,000.',
    'Brevity is not a limit. It is the product. Every sentence is load-bearing. You can read a brief in the car, the lift, or between meetings.',
  ],
  [
    'India-context-native',
    'Knows who Shailendra Singh is. Knows what SEBI\'s latest circular means for fintech founders. Knows Masque changed its head chef last month.',
  ],
  [
    'Gets smarter each day',
    'Day 1 it knows your profile. Day 90 it knows your patterns. A competitor can copy the product. They cannot copy 90 days of your data.',
  ],
  [
    'Invitation only',
    'Every user arrives via a personal link from someone in their network. The invite is a status signal before the brief delivers a word.',
  ],
];

export default function USP() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">§ 03 / WHY</div>
          <h2 className="sec-title">
            Six reasons it&apos;s <em>irreplaceable</em> — and one reason it&apos;s rare.
          </h2>
        </div>
        <div className="usps">
          {usps.map(([t, b], i) => (
            <div className="usp" key={i}>
              <div className="usp-ix">0{i + 1}</div>
              <div>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
