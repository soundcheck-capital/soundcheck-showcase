/**
 * Service to send calculator data to HubSpot via Make.com webhook
 */

const MAKE_WEBHOOK_URL = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || 'https://hook.us1.make.com/83e6qglv3yxwp9v31qegl1wff52bgidq'

/**
 * Send calculator data to HubSpot via Make.com
 * @param {Object} data - Calculator data
 * @param {number} data.yearsInBusiness - Years in business
 * @param {number} data.numberOfEvents - Number of events per year
 * @param {number} data.grossTicketSales - Gross ticket sales per year
 * @param {number} data.advanceAmount - Calculated advance amount
 * @returns {Promise<Object>} Response from the webhook
 */
export const sendCalculatorDataToHubSpot = async (data) => {
  if (!MAKE_WEBHOOK_URL) {
    console.warn('Make.com webhook URL not configured')
    return { success: false, error: 'Webhook URL not configured' }
  }

  try {
    const payload = {
      yearsInBusiness: data.yearsInBusiness,
      numberOfEvents: data.numberOfEvents,
      grossTicketSales: data.grossTicketSales,
      advanceAmount: data.advanceAmount,
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json().catch(() => ({ success: true }))
    return { success: true, data: result }
  } catch (error) {
    console.error('Error sending data to HubSpot:', error)
    return { success: false, error: error.message }
  }
}

const EMAIL_WEBHOOK_URL = 'https://hook.us1.make.com/83e6qglv3yxwp9v31qegl1wff52bgidq'

/**
 * Send calculator data with email to webhook
 * @param {Object} data - Calculator data with email
 * @param {number} data.yearsInBusiness - Years in business
 * @param {number} data.numberOfEvents - Number of events per year
 * @param {number} data.grossTicketSales - Gross ticket sales per year
 * @param {number} data.advanceAmount - Calculated advance amount
 * @param {string} data.email - User email address
 * @returns {Promise<Object>} Response from the webhook
 */
export const sendCalculatorDataWithEmail = async (data) => {
  if (!EMAIL_WEBHOOK_URL) {
    console.warn('Email webhook URL not configured')
    return { success: false, error: 'Webhook URL not configured' }
  }

  try {
    const payload = {
      yearsInBusiness: data.yearsInBusiness,
      numberOfEvents: data.numberOfEvents,
      grossTicketSales: data.grossTicketSales,
      advanceAmount: data.advanceAmount,
      email: data.email,
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(EMAIL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json().catch(() => ({ success: true }))
    return { success: true, data: result }
  } catch (error) {
    console.error('Error sending data with email:', error)
    return { success: false, error: error.message }
  }
}
