'use client'

import { useState, useEffect } from 'react'
import { calculateAdvance } from '../utils/calculator'
import { sendCalculatorDataWithEmail } from '../services/hubspot'
import './Hero.css'

export default function Hero() {
  const [yearsInBusiness, setYearsInBusiness] = useState(5)
  const [numberOfEvents, setNumberOfEvents] = useState(25)
  const [grossTicketSales, setGrossTicketSales] = useState(2500000)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [emailError, setEmailError] = useState('')

  // Initialize advanceResult with calculated value to avoid hydration mismatch
  const [advanceResult, setAdvanceResult] = useState(() => {
    const yearsForCalc = 1 >= 10 ? 10 : 1
    const eventsForCalc = 1 >= 50 ? 50 : 1
    return calculateAdvance(yearsForCalc, eventsForCalc, 100000)
  })

  // Use minimum of 10 for years calculation if >= 10
  const yearsForCalculation = yearsInBusiness >= 10 ? 10 : yearsInBusiness
  // Use minimum of 50 for events calculation if >= 50
  const eventsForCalculation = numberOfEvents >= 50 ? 50 : numberOfEvents

  // Calculate advance amount
  useEffect(() => {
    const result = calculateAdvance(yearsForCalculation, eventsForCalculation, grossTicketSales)
    setAdvanceResult(result)
  }, [yearsInBusiness, numberOfEvents, grossTicketSales, yearsForCalculation, eventsForCalculation])

  // Handle Book a call click - open HubSpot link only
  const handleBookCallClick = (e) => {
    e.preventDefault()
    window.open('https://meetings.hubspot.com/bpatronoff', '_blank', 'noopener,noreferrer')
  }

  // Handle Start now click - send data to HubSpot with email
  const handleStartNowClick = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.')
      return
    }

    setEmailError('')
    setIsLoading(true)
    setIsSuccess(false)

    if (advanceResult) {
      try {
        console.log('Sending calculator data with email to HubSpot...', {
          yearsInBusiness,
          numberOfEvents,
          grossTicketSales,
          advanceAmount: advanceResult.advanceAmount,
          email,
        })

        const result = await sendCalculatorDataWithEmail({
          yearsInBusiness,
          numberOfEvents,
          grossTicketSales,
          advanceAmount: advanceResult.advanceAmount,
          email,
        })

        if (result.success == true) {
          console.log('Data with email sent successfully')
          setIsLoading(false)
          setIsSuccess(true)
          setEmail('') // Clear email field on success
          
          // Réafficher les barres après 2 secondes
          setTimeout(() => {
            setIsSuccess(false)
          }, 2000)
        } else {
          throw new Error(`Request failed with status ${result.status}`)
        }
      } catch (error) {
        console.error('Error sending data with email:', error)
        setIsLoading(false)
        alert('Failed to send data. Please try again later.')
      }
    }
  }

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

  // Handle gross ticket sales change with variable steps
  const handleGrossTicketSalesChange = (e) => {
    const value = parseInt(e.target.value)
    
    // Round to nearest 100K for all values
    const adjustedValue = Math.round(value / 100000) * 100000
    
    // Ensure value is within bounds (min 100K, max 5M)
    const finalValue = Math.max(100000, Math.min(adjustedValue, 5000000))
    
    setGrossTicketSales(finalValue)
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
        <div className="hero-right">
          {/* <div className="hero-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L3 14H12L11 23L21 10H12L13 1Z" fill="#F99927" stroke="#F99927" strokeWidth="0.5"/>
            </svg>
            <span>Fast response guaranteed</span>
          </div> */}
          <h1 className="hero-title">
            Get Funding. Promote Shows. Grow Your Business.
          </h1>
          <p className="hero-description">
          Advances from $5,000 to $500,000 for promoters, festivals, venues, sports teams and event organizers.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Personalized & flexible advance</span>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Repayment that adjusts with your ticket sales</span>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Fixed and transparent pricing</span>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Approval in 3-5 days</span>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Use cash how you choose</span>
              </div>
            </div>
            <div className="hero-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#4ADE80"/>
                <path d="M11.5 5L6.5 10L4.5 8" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="hero-feature-content">
                <span>Retain 100% control</span>
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <a 
              href="https://meetings.hubspot.com/bpatronoff" 
              className="hero-button"
              onClick={handleBookCallClick}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              Book a call
            </a>
          </div>
        </div>
        <div className="hero-left">
          <div className="hero-form">
            <h3 className="hero-form-title">Get Funded</h3>
            <div className="hero-form-field">
              <label>How long have you been in business?</label>
              <input 
                type="range" 
                min="1" 
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
                min="1" 
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
                min="100000" 
                max="5000000"
                step="100000"
                value={grossTicketSales} 
                onChange={handleGrossTicketSalesChange}
                className="hero-form-slider" 
              />
              <div className="hero-form-labels">
                <span className="hero-form-value">{grossTicketSales >= 5000000 ? '$5M+' : formatCurrency(grossTicketSales)}</span>
              </div>
            </div>
            <span className="hero-form-email-text">Unlock your offer with your email</span>
            <div className="hero-form-email">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError('') // Clear error when user types
                }}
                className="hero-form-email-input"
                suppressHydrationWarning
              />
      
              <button
                className={`hero-form-email-button ${isLoading ? 'hero-form-email-button-loading' : ''} ${isSuccess ? 'hero-form-email-button-success' : ''}`}
                onClick={handleStartNowClick}
                disabled={isLoading || isSuccess}
              >
                {isLoading ? (
                  <div className="hero-form-email-button-spinner"></div>
                ) : isSuccess ? (
                  <svg className="hero-form-email-button-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <div className="hero-form-email-button-animation">
                    <div className="hero-form-email-button-bar" style={{ animationDelay: '0.3s', animationDuration: '1.5s' }} />
                    <div className="hero-form-email-button-bar hero-form-email-button-bar-tall" style={{ animationDelay: '0.4s', animationDuration: '1.1s' }} />
                    <div className="hero-form-email-button-bar hero-form-email-button-bar-medium" style={{ animationDelay: '0.5s', animationDuration: '0.9s' }} />
                    <div className="hero-form-email-button-bar hero-form-email-button-bar-small" style={{ animationDelay: '0.6s', animationDuration: '1.3s' }} />
                  </div>
                )}
              </button>
            </div>
            {emailError && (
              <div className="hero-form-email-error">
                {emailError}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
