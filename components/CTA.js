'use client'

import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-gradient"></div>
      <div className="cta-container">
        <h2 className="cta-title">Ready to grow your next show?</h2>
        <p className="cta-description">
          Join hundreds of creators who've already accelerated their growth with SoundCheck Capital.
        </p>
        <a href="https://meetings.hubspot.com/bpatronoff" target="_blank" rel="noopener noreferrer" className="cta-button">Ask for an advance now</a>
      </div>
    </section>
  )
}
