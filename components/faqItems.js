// Shared by the visible FAQ (components/FAQ.js) and the home page's FAQPage
// JSON-LD (app/page.js), so the structured data always matches what's shown.
// Plain module, not 'use client', so the server page can read the data.
export const FAQS = [
  {
    question: "How do you determine my advance?",
    answer: "Advance eligibility is based on a variety of factors related to your business, including your ticketing, time in business and type of events you promote."
  },
  {
    question: "How can I use my advance?",
    answer: "SoundCheck advances can be use for business needs, including but not limited to artist deposits, sales and marketing expenses, and other operational expenses related to promoting events and selling tickets."
  },
  {
    question: "How much does it cost?",
    answer: "SoundCheck charges a single, flat fee that never changes. There is no compounding interest and no hidden fees—no application or prepayment fees."
  },
  {
    question: "How do I repay my advance?",
    answer: "Payments are made as a fixed percentage of your tickets sales until the total balance is paid. If sales are strong, you repay faster; if one show is soft, you repay less."
  },

  {
    question: "Can I prepay my advance?",
    answer: "Yes, there are no fees for early repayment."
  },
  {
    question: "Can I stay with my current ticketing partner?",
    answer: "Yes. We will never tell you that you have to work with a specific ticketing company. We work with most of the leading ticketing platforms but in some cases, if your partner isn't able to meet our criteria we might not be able to provide funding."
  },
  {
    question: "Does applying for an advance affect my credit score?",
    answer: "No. This is not a loan. Applying for an advance doesn't affect your credit score."
  }
]

export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
