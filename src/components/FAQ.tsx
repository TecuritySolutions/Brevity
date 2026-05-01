'use client';
import { useState } from 'react';

const qs: [string, string][] = [
  [
    'Why only 500 words?',
    "Because 500 words is what your morning can bear. Anything more goes unread, and an unread brief is a broken product. The discipline of brevity is the product — every sentence has to earn its place before it makes the cut. We cut more than we keep.",
  ],
  [
    "Why is it invitation-only?",
    "Because the right readers filter for the right readers. Public signup brings noise, and noise dilutes the intelligence. Every reader arrives through someone already in the room, which keeps the signal — and the social capital of being on the list — compounding.",
  ],
  [
    "How does calendar sync work?",
    "Google Calendar OAuth, one tap, read-only. We see today's meetings and attendees. We never share or store anything past the moment your brief is generated. You can revoke access from the dashboard or your Google account in one click.",
  ],
  [
    "What if I miss a day?",
    "Then you miss a day. We don't back-fill yesterday's briefs because yesterday's context is already dead. The next brief you read is tomorrow's — written for tomorrow's meetings.",
  ],
  [
    "Can my assistant read it?",
    "Yes, but we'd gently push back. The brief is calibrated for you — the phrases, the assumed context, the social notes. An intermediary flattens it. If you want the facts summarised further, that is a different product.",
  ],
  [
    "Is my data used to train models?",
    "No. Your profile and calendar context are used to write your brief, and nothing else. We do not share, sell, or train on reader data. Our moat is discipline, not your data.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">§ 08 / Q &amp; A</div>
          <h2 className="sec-title">Questions we get <em>at dinner.</em></h2>
        </div>
        <div className="faq">
          {qs.map(([q, a], i) => (
            <div className="faq-item" key={i} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="faq-q">
                <h4>{q}</h4>
                <span className="pm">{open === i ? '—' : '+'}</span>
              </div>
              {open === i && <div className="faq-a">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
