'use client'

import './WhyChoose.css'

export default function WhyChoose() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Sans dilution",
      description: "Keep 100% ownership of your business and creative control."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Décision rapide",
      description: "Get approved and funded in as little as 48 hours."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      ),
      title: "Transparence totale",
      description: "No hidden fees, clear terms, and transparent pricing."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#4B5563" strokeWidth="2"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Accompagnement dédié",
      description: "Personal support from industry experts who understand live music."
    }
  ]

  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Why Choose SoundCheck Capital</h2>
        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-choose-card">
              <div className="why-choose-icon">{feature.icon}</div>
              <h3 className="why-choose-card-title">{feature.title}</h3>
              <p className="why-choose-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
