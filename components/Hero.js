'use client'

import { useState, useEffect } from 'react'
import { calculateAdvance } from '../utils/calculator'
import './Hero.css'

export default function Hero() {
  const [yearsInBusiness, setYearsInBusiness] = useState(5)
  const [numberOfEvents, setNumberOfEvents] = useState(8)
  const [grossTicketSales, setGrossTicketSales] = useState(500000)

  // Use minimum of 10 for years calculation if >= 10
  const yearsForCalculation = yearsInBusiness >= 10 ? 10 : yearsInBusiness
  // Use minimum of 50 for events calculation if >= 50
  const eventsForCalculation = numberOfEvents >= 50 ? 50 : numberOfEvents
  const [advanceResult, setAdvanceResult] = useState(null)

  useEffect(() => {
    const result = calculateAdvance(yearsForCalculation, eventsForCalculation, grossTicketSales)
    setAdvanceResult(result)
  }, [yearsInBusiness, numberOfEvents, grossTicketSales, yearsForCalculation, eventsForCalculation])

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      const millions = amount / 1000000
      return millions >= 1 ? `$${millions.toFixed(millions % 1 === 0 ? 0 : 1)}M` : `$${(amount / 1000).toFixed(0)}K`
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`
    }
    return `$${amount.toLocaleString()}`
  }

  const formatYears = (years) => {
    return `${years} year${years > 1 ? 's' : ''}`
  }

  const formatEvents = (events) => {
    return `${events} event${events > 1 ? 's' : ''}`
  }

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-gradient"></div>
      <div className="hero-gradient-bottom"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-form">
            <h3 className="hero-form-title">Calculate Your Advance</h3>
            <div className="hero-form-field">
              <label>For how long has your company been operating?</label>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={yearsInBusiness} 
                onChange={(e) => setYearsInBusiness(parseInt(e.target.value))}
                className="hero-form-slider" 
              />
              <div className="hero-form-labels">
                <span className="hero-form-value">{yearsInBusiness >= 10 ? '10+ years' : formatYears(yearsInBusiness)}</span>
              </div>
            </div>
            <div className="hero-form-field">
              <label>How many events do you promote a year?</label>
              <input 
                type="range" 
                min="0" 
                max="50" 
                value={numberOfEvents} 
                onChange={(e) => setNumberOfEvents(parseInt(e.target.value))}
                className="hero-form-slider" 
              />
              <div className="hero-form-labels">
                <span className="hero-form-value">{numberOfEvents >= 50 ? '50+ events' : formatEvents(numberOfEvents)}</span>
              </div>
            </div>
            <div className="hero-form-field">
              <label>How much gross ticket sales do you sell a year?</label>
              <input 
                type="range" 
                min="0" 
                max="5000000"
                step="100000"
                value={grossTicketSales} 
                onChange={(e) => setGrossTicketSales(parseInt(e.target.value))}
                className="hero-form-slider" 
              />
              <div className="hero-form-labels">
                <span className="hero-form-value">{formatCurrency(grossTicketSales)}</span>
              </div>
            </div>
            <div className="hero-form-result">
              <div className="hero-form-result-value">
                {advanceResult ? formatCurrency(advanceResult.advanceAmount) : '$0'}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L3 14H12L11 23L21 10H12L13 1Z" fill="#F99927" stroke="#F99927" strokeWidth="0.5"/>
            </svg>
            <span>Fast response guaranteed</span>
          </div>
          <h1 className="hero-title">
            Get Funding. Promote Shows. Grow Your Business.
          </h1>
          <p className="hero-description">
            Advances from $5,000 to $500,000 for live music promoters, venues, and entertainment entrepreneurs. No equity required.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>No credit checks</span>
                <p className="hero-feature-subtext">Placeholder text for additional information</p>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Flexible repayment</span>
                <p className="hero-feature-subtext">Placeholder text for additional information</p>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Keep 100% equity</span>
                <p className="hero-feature-subtext">Placeholder text for additional information</p>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Fast approval</span>
                <p className="hero-feature-subtext">Placeholder text for additional information</p>
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="https://meetings.hubspot.com/bpatronoff" target="_blank" rel="noopener noreferrer" className="hero-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
