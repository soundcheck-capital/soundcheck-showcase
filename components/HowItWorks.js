'use client'

import './HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <img
          src="/images/graph.svg"
          alt="Graph icon"
          width={64}
          height={64}
          className="how-it-works-icon-image"
        />
      ),
      title: "Tell us about your business",
      description: "We use data related to your business, including your historical ticket along with third party data to determine your financing eligibility"
    },
    {
      icon: (
        <img
          src="/images/graph2.svg"
          alt="Analytics icon"
          width={64}
          height={64}
          className="how-it-works-icon-image"
        />
      ),
      title: "Personalize your advance",
      description: "Our proprietary platform uses data science, developed from years of experience financing promoters and venues, to offer personalized advances against a percentage of future ticket sales"
    },
    {
      icon: (
        <img
          src="/images/stopwatch.svg"
          alt="Stopwatch icon"
          width={64}
          height={64}
          className="how-it-works-icon-image"
        />
      ),
      title: "Get Funded",
      description: "Finalize your Advance Agreement and receive funds within days"
    },
    {
      icon: (
        <img
          src="/images/dollar.svg"
          alt="Dollar icon"
          width={64}
          height={64}
          className="how-it-works-icon-image"
        />
      ),
      title: "Repay us when you sell Tickets",
      description: "With payments synchronized to your Ticket sale, repay us when you sell tickets or F&B. If sales are strong, you repay faster; if one show is soft, you repay less."
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        <p className="how-it-works-subtitle">SoundCheck Capital provides funding based on your ticket sales. Repayment is made as a fixed percentage of your ticket sales. The process is simple, fast and transparent. </p>
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
