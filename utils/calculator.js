/**
 * Risk Scoring Criteria
 */

// Years in Business -> Risk Score
const yearsInBusinessRiskScore = (years) => {
  if (years === 0) return 10
  if (years >= 1 && years <= 2) return 8
  if (years >= 3 && years <= 5) return 5
  if (years >= 6 && years <= 9) return 3
  if (years >= 10) return 0
  return 10 // Default to highest risk
}

// Number of Events -> Risk Score
const numberOfEventsRiskScore = (events) => {
  if (events === 1) return 10
  if (events >= 2 && events <= 3) return 8
  if (events >= 4 && events <= 6) return 7
  if (events >= 7 && events <= 10) return 6
  if (events >= 11 && events <= 20) return 5
  if (events >= 21 && events <= 49) return 4
  if (events >= 50) return 0
  return 10 // Default to highest risk
}

/**
 * Pre Qual Advance Percentages
 * Returns the maximum advance percentage based on total risk score
 */
const getAdvancePercentage = (totalRiskScore) => {
  if (totalRiskScore >= 0 && totalRiskScore <= 5) return 10.00
  if (totalRiskScore >= 5.1 && totalRiskScore <= 11) return 7.50
  if (totalRiskScore >= 11.1 && totalRiskScore <= 15) return 5.00
  if (totalRiskScore >= 15 && totalRiskScore <= 20) return 2.50
  return 0 // No advance if score is too high
}

/** Max advance % by customer type: Festival 25%, Promoter 20%, Venue 10% */
const CUSTOMER_TYPE_CAP = { festival: 25, promoter: 20, venue: 10 }

/**
 * Calculate the advance amount
 * @param {number} yearsInBusiness - Years the company has been operating
 * @param {number} numberOfEvents - Number of events promoted per year
 * @param {number} grossTicketSales - Gross ticket sales per year
 * @param {'promoter'|'venue'|'festival'} [customerType] - Customer type (cap: promoter 20%, venue 10%, festival 25%)
 * @returns {object} Object containing risk scores, advance percentage, and calculated advance
 */
export const calculateAdvance = (yearsInBusiness, numberOfEvents, grossTicketSales, customerType) => {
  // Calculate individual risk scores
  const yearsRiskScore = yearsInBusinessRiskScore(yearsInBusiness)
  const eventsRiskScore = numberOfEventsRiskScore(numberOfEvents)
  
  // Total risk score
  const totalRiskScore = yearsRiskScore + eventsRiskScore
  
  // Base advance % from risk; cap by customer type if provided
  let advancePercentage = getAdvancePercentage(totalRiskScore)
  if (customerType && CUSTOMER_TYPE_CAP[customerType] != null) {
    advancePercentage = Math.min(advancePercentage, CUSTOMER_TYPE_CAP[customerType])
  }
  
  // Advance amount (capped at $500,000 max)
  const calculatedAdvance = grossTicketSales * (advancePercentage / 100)
  const advanceAmount = Math.min(calculatedAdvance, 500000)
  
  return {
    yearsRiskScore,
    eventsRiskScore,
    totalRiskScore,
    advancePercentage,
    advanceAmount: Math.round(advanceAmount)
  }
}

