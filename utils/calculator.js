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
 * Returns the maximum advance percentage based on total risk score and customer type.
 * Source: Application Offer - New Model 3-9-26.csv (Pre Qual section).
 */
const PRE_QUAL_ADVANCE_MATRIX = [
  {
    min: 0,
    max: 5,
    percentages: {
      venue: 14.00,
      promoter: 20.00,
      festival: 26.00,
    },
  },
  {
    min: 5.1,
    max: 11,
    percentages: {
      venue: 11.00,
      promoter: 15.00,
      festival: 19.00,
    },
  },
  {
    min: 11.1,
    max: 15,
    percentages: {
      venue: 8.00,
      promoter: 10.00,
      festival: 12.00,
    },
  },
  {
    min: 15,
    max: 20,
    percentages: {
      venue: 5.00,
      promoter: 5.00,
      festival: 5.00,
    },
  },
]

const normalizeCustomerType = (customerType) => {
  if (customerType === 'festival' || customerType === 'promoter' || customerType === 'venue') {
    return customerType
  }

  return 'venue'
}

const getAdvancePercentage = (totalRiskScore, customerType) => {
  const normalizedCustomerType = normalizeCustomerType(customerType)
  const matchingBand = PRE_QUAL_ADVANCE_MATRIX.find(
    ({ min, max }) => totalRiskScore >= min && totalRiskScore <= max
  )

  if (!matchingBand) return 0

  return matchingBand.percentages[normalizedCustomerType] ?? matchingBand.percentages.venue
}

/**
 * Calculate the advance amount
 * @param {number} yearsInBusiness - Years the company has been operating
 * @param {number} numberOfEvents - Number of events promoted per year
 * @param {number} grossTicketSales - Gross ticket sales per year
 * @param {'promoter'|'venue'|'festival'|'others'} [customerType] - Customer type (others uses venue scale)
 * @returns {object} Object containing risk scores, advance percentage, and calculated advance
 */
export const calculateAdvance = (yearsInBusiness, numberOfEvents, grossTicketSales, customerType) => {
  // Calculate individual risk scores
  const yearsRiskScore = yearsInBusinessRiskScore(yearsInBusiness)
  const eventsRiskScore = numberOfEventsRiskScore(numberOfEvents)
  
  // Total risk score
  const totalRiskScore = yearsRiskScore + eventsRiskScore
  
  // Advance % from pre-qual score band and customer type.
  const advancePercentage = getAdvancePercentage(totalRiskScore, customerType)
  
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
