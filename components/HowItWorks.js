'use client'

import './HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 16L12 11L16 15L21 10" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Tell us about your business",
      description: "We use data related to your business, including your historical ticket and/or POS sales along with third party data to determine your financing eligibility"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#4B5563" strokeWidth="2"/>
          <path d="M9 9H15V15H9V9Z" fill="#4B5563"/>
        </svg>
      ),
      title: "Personalize your advance",
      description: "Our proprietary platform uses data science, developed from years of experience financing promoters and venues, to offer personalized advances against a percentage of future ticket and/or POS sales"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V6M12 18V22M6 12H2M22 12H18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      ),
      title: "Get Funded",
      description: "Finalize your Advance Agreement and receive funds within days"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V6M12 18V22M6 12H2M22 12H18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      ),
      title: "Repay us when you sell Tickets",
      description: "With payments synchronized to your Ticket and/or POS Sales, repay us when you sell tickets or F&B. If sales are strong, you repay faster; if one show is soft, you repay less."
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        <p className="how-it-works-subtitle">SoundCheck Capital provides funding based on your ticket and/or POS sales. Repayment is made as a fixed percentage of your ticket sales. The process is simple, fast and transparent. </p>
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works-card">
              <div className="how-it-works-icon">{step.icon}</div>
              <h3 className="how-it-works-card-title">{step.title}</h3>
              <p className="how-it-works-card-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
