'use client'

import { useState } from 'react'
import './FAQ.css'
import { FAQS as faqs } from './faqItems'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)


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
