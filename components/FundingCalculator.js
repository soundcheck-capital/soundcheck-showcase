import * as React from "react"
import "./FundingCalculator.css"

const FundingCalculator = () => {
  return (
    <section className="funding-calculator">
      <div className="funding-calculator-container">
        <h2 className="funding-calculator-title">Funding Calculator</h2>
        <p className="funding-calculator-subtitle">See how much you could qualify for</p>
        <div className="funding-calculator-card">
          <div className="funding-calculator-left">
            <div className="funding-calculator-field">
              <label>Events promoted per year</label>
              <input type="range" min="0" max="100" defaultValue="12" className="funding-calculator-slider" />
              <div className="funding-calculator-labels">
                <span>0</span>
                <span className="funding-calculator-value">12</span>
                <span>100</span>
              </div>
            </div>
            <div className="funding-calculator-field">
              <label>Gross ticket sales</label>
              <input type="range" min="0" max="1000000" defaultValue="150000" className="funding-calculator-slider" />
              <div className="funding-calculator-labels">
                <span>$0</span>
                <span className="funding-calculator-value">$150K</span>
                <span>$1M</span>
              </div>
            </div>
            <div className="funding-calculator-field">
              <label>Years of operation</label>
              <input type="range" min="0" max="50" defaultValue="3" className="funding-calculator-slider" />
              <div className="funding-calculator-labels">
                <span>0</span>
                <span className="funding-calculator-value">3</span>
                <span>50</span>
              </div>
            </div>
          </div>
          <div className="funding-calculator-right">
            <h3 className="funding-calculator-result-label">Your estimated advance</h3>
            <div className="funding-calculator-result-value">$45,000</div>
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
export default FundingCalculator


