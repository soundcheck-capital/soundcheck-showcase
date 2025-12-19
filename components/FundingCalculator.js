'use client'

import { useState, useEffect } from 'react'
import { calculateAdvance } from '../utils/calculator'
import './FundingCalculator.css'

export default function FundingCalculator() {
  const [eventsPerYear, setEventsPerYear] = useState(12)
  const [grossTicketSales, setGrossTicketSales] = useState(150000)
  const [yearsOfOperation, setYearsOfOperation] = useState(3)
  const [advanceResult, setAdvanceResult] = useState(null)

  // Use minimum of 10 for years calculation if >= 10
  const yearsForCalculation = yearsOfOperation >= 10 ? 10 : yearsOfOperation
  // Use minimum of 50 for events calculation if >= 50
  const eventsForCalculation = eventsPerYear >= 50 ? 50 : eventsPerYear

  useEffect(() => {
    const result = calculateAdvance(yearsForCalculation, eventsForCalculation, grossTicketSales)
    setAdvanceResult(result)
  }, [eventsPerYear, grossTicketSales, yearsOfOperation, yearsForCalculation, eventsForCalculation])

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

  const formatEvents = (events) => {
    return `${events}`
  }

  const formatYears = (years) => {
    return `${years}`
  }

  return (
    <section className="funding-calculator">
      <div className="funding-calculator-container">
        <h2 className="funding-calculator-title">Funding Calculator</h2>
        <p className="funding-calculator-subtitle">See how much you could qualify for</p>
        <div className="funding-calculator-card">
          <div className="funding-calculator-left">
            <div className="funding-calculator-field">
              <label>Events promoted per year</label>
              <input 
                type="range" 
                min="0" 
                max="50" 
                value={eventsPerYear} 
                onChange={(e) => setEventsPerYear(parseInt(e.target.value))}
                className="funding-calculator-slider" 
              />
              <div className="funding-calculator-labels">
                <span>0</span>
                <span className="funding-calculator-value">{eventsPerYear >= 50 ? '50+' : formatEvents(eventsPerYear)}</span>
                <span>50+</span>
              </div>
            </div>
            <div className="funding-calculator-field">
              <label>Gross ticket sales</label>
              <input 
                type="range" 
                min="0" 
                max="30000000" 
                value={grossTicketSales} 
                onChange={(e) => setGrossTicketSales(parseInt(e.target.value))}
                className="funding-calculator-slider" 
              />
              <div className="funding-calculator-labels">
                <span>$0</span>
                <span className="funding-calculator-value">{formatCurrency(grossTicketSales)}</span>
                <span>$30M</span>
              </div>
            </div>
            <div className="funding-calculator-field">
              <label>Years of operation</label>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={yearsOfOperation} 
                onChange={(e) => setYearsOfOperation(parseInt(e.target.value))}
                className="funding-calculator-slider" 
              />
              <div className="funding-calculator-labels">
                <span>0</span>
                <span className="funding-calculator-value">{yearsOfOperation >= 10 ? '10+' : formatYears(yearsOfOperation)}</span>
                <span>10+</span>
              </div>
            </div>
          </div>
          <div className="funding-calculator-right">
            <h3 className="funding-calculator-result-label">Your estimated advance</h3>
            <div className="funding-calculator-result-value">
              {advanceResult ? formatCurrency(advanceResult.advanceAmount) : '$0'}
            </div>
            <div className="funding-calculator-details">
              <div className="funding-calculator-detail">
                <span>Repayment rate</span>
                <span>8-12%</span>
              </div>
              <div className="funding-calculator-detail">
                <span>Term length</span>
                <span>12-18 months</span>
              </div>
            </div>
            <button className="funding-calculator-button">Get your advance</button>
          </div>
        </div>
      </div>
    </section>
  )
}
