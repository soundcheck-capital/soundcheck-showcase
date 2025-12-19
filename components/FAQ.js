'use client'

import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do you determine my advance?",
      answer: "Advance eligibility is based on a variety of factors related to your business, including your ticketing and POS volume, time in business and type of events you promote."
    },
    {
      question: "How can I use my advance?",
      answer: "SoundCheck advances can be used for any business need, including covering short-term cash flow, paying artists deposit, marketing a show, purchasing equipment, refinancing and paying off debt, renovating an existing venue, opening a new venue, among many other options."
    },
    {
      question: "How do I repay my advance?",
      answer: "Payments are made as a fixed percentage of your tickets and/or POS sales until your advance is fully repaid. If sales are strong, you repay faster; if one show is soft, you repay less."
    },
    {
      question: "How much does it cost?",
      answer: "SoundCheck charges a fixed fee per ticket or POS transaction until the Advance is recouped. This fee will not change regardless of how long it takes to repay the advance. There is no compounding interest or hidden fees, e.g. no application, prepayment, late fees"
    },
    {
      question: "Can I prepay my advance?",
      answer: "Yes, there are no fees for early repayment."
    },
    {
      question: "Can I stay with my current ticketing and POS partners?",
      answer: "Yes. We will never tell you that you have to work with a specific ticketing company or POS vendor. We work with most of the leading ticketing and POS platforms but in some cases, if your partner isn't able to meet our criteria we might not be able to provide funding."
    },
    {
      question: "Does applying for an advance affect my credit score?",
      answer: "No. This is not a loan. Applying for an advance doesn't affect your credit score."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" data-open={openIndex === index}>
              <button 
                className="faq-button"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  className={openIndex === index ? "faq-icon-open" : "faq-icon"}
                >
                  <path d="M8 4L8 12M4 8L12 8" stroke="#9CA3AF" strokeWidth="2"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
