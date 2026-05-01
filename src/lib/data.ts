export const BRIEFS: Record<string, {
  role: string;
  date: string;
  glance: string;
  meetings: { title: string; body: string }[];
  oneThing: string;
  opener: string;
}> = {
  founder: {
    role: 'SaaS Founder · Series B · Bangalore',
    date: 'Tuesday, 21 April 2026',
    glance:
      'You have a 3pm call with the Sequoia team re: Series B, and dinner with Vikram at Masque tonight.',
    meetings: [
      {
        title: 'Before your Sequoia call',
        body: "Sequoia India closed their 9th fund last month — $2.85B, largest yet. Their last three SaaS bets have all been infra plays. The question they will quietly be asking: is your product layer or infrastructure? Frame your defensibility in infra terms. One sharp question to open with: "How are you thinking about the India-to-global GTM playbook differently in this fund vs the last?"",
      },
      {
        title: 'Before dinner with Vikram',
        body: "Vikram's edtech company had a rough Q — down 22% on revenue. Don't bring it up. But if he does: the right frame is cohort quality over volume. He'll feel understood, not pitied.",
      },
    ],
    oneThing:
      "RBI's draft circular on payment aggregator licensing drops this week. If you have fintech on your cap table, read it before Friday. Three things it likely changes: onboarding timelines, KYC requirements, and cross-border settlement windows.",
    opener:
      'Masque changed their head chef last month. The new kitchen is doing Kerala-Japanese fusion. Mention it when you arrive — works as an opener with anyone at the table.',
  },
  angel: {
    role: 'Angel · 22 investments · Mumbai',
    date: 'Tuesday, 21 April 2026',
    glance:
      'Four founder calls today. A check-signing meeting at 4pm. Drinks with two LPs at Soho House tonight.',
    meetings: [
      {
        title: 'Before your 11am with Sharma (climate-tech)',
        body: "His thesis note leans heavy on carbon credits. As of last Thursday, India's VCM volume is down 34% YoY. Don't disagree — ask him what his fallback revenue line is if credits stay dead for another 18 months. You'll learn more from the answer than from the pitch.",
      },
      {
        title: 'Before drinks with the LPs',
        body: "The Hiranandani family office shifted allocation away from VC late last year. If Sanjay is there, assume the room has cooled. Lead with DPI, not MOIC. One warm reference: his son's new fund did its first close in February — congratulate quietly.",
      },
    ],
    oneThing:
      "SEBI's new AIF disclosure norms move from optional to enforced on June 1. If any of your portfolio GPs haven't flagged this, they're already behind. Ask about it Thursday at the quarterly.",
    opener:
      "The Taj Lands End reopened the Chambers after the refit — Champa is back running the floor. Worth a mention; half the room you're with tonight has a story about her.",
  },
  global: {
    role: 'Global Executive · Head of Product · Singapore',
    date: 'Tuesday, 21 April 2026',
    glance:
      "Quarterly with your India team at 6pm SGT. Dad's 70th in Ahmedabad next month — the family dinner is Sunday.",
    meetings: [
      {
        title: 'Before your India team sync',
        body: "Two of your three leads took promotions internally last week. Start the call by naming them — nothing reads more disconnected than a Singapore manager who missed the HR email. And yes, the Bengaluru monsoon is early; WFH days this week are defensible, not a red flag.",
      },
      {
        title: 'Before Sunday dinner',
        body: "Your cousin Neil just raised a Series A. His fund: Stellaris. Read the TechCrunch piece before dinner so you can skip the small talk and go straight to asking him what he actually worries about. Family reads preparation as love.",
      },
    ],
    oneThing:
      "The RBI just loosened LRS limits for startup employees with international ESOPs — $500k ceiling from $250k. If you've been sitting on ISO paperwork for India hires, this unblocks it.",
    opener:
      'Burma Burma opened in the UB City mall last Thursday. Tea-leaf salad on the menu. Worth booking for the Ahmedabad trip\'s Bangalore stopover.',
  },
  cxo: {
    role: 'CFO · Series C SaaS · Delhi',
    date: 'Tuesday, 21 April 2026',
    glance: 'Board prep at 10. One-on-one with your CEO at 2. Offsite planning Thursday.',
    meetings: [
      {
        title: 'Before board prep',
        body: "Accel published their Q1 India benchmark yesterday. Median gross margin for Series C SaaS in India is now 74% — three points up from Q4. If yours is below 70, pre-empt the question. If above 76, lead with it. The room reads silence on margins as softness.",
      },
      {
        title: 'Before the CEO 1:1',
        body: "He had dinner with Kunal Shah last Thursday. Expect a 'why aren't we more like CRED' moment. Pre-empt with one honest slide on what CRED got right that you haven't copied — and one on why you shouldn't. Agreement is weak. Considered disagreement is strong.",
      },
    ],
    oneThing:
      'The GST Council meets Friday. Expect movement on SaaS export GST refunds — unprocessed refund pile is now ₹11,400Cr. This line item is in your cash-flow slide.',
    opener:
      "Olive Qutub moved their Sunday brunch to the terrace this month. Board dinner is booked for Saturday — worth flagging to Rakesh; it's his anniversary.",
  },
};

export const PERSONAS = [
  { k: 'founder', name: 'The Founder', role: 'Series A–C · CEO' },
  { k: 'angel', name: 'The Angel', role: 'Active investor' },
  { k: 'global', name: 'The Global Exec', role: 'US/UK/SG' },
  { k: 'cxo', name: 'The CXO', role: 'VP / CFO / CTO' },
];
