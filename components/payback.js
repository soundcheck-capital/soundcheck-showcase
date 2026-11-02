// Payback estimate for the partner calculators. Pricing from Boris (Slack C08RK7YDX3L 1793178300.438189):
// a one-time fee of 10% if repaid within 6 months, 15% within 9, 20% within 12.
// amount: funded $, sales: ticket sales over 12 months $, ratePct: share of each sale that goes to repayment.
export function payback(amount, sales, ratePct) {
  const perMonth = (sales * ratePct) / 100 / 12
  const fee = (amount * 1.1) / perMonth <= 6 ? 0.1 : (amount * 1.15) / perMonth <= 9 ? 0.15 : 0.2
  const feePct = Math.round(fee * 100)
  const total = amount * (1 + fee)
  const months = total / perMonth

  // Recoupment rate that would land in the tier below.
  const r10 = Math.ceil(((amount * 1.1 * 2) / sales) * 100)
  const r15 = Math.ceil(((amount * 1.15 * 12) / (9 * sales)) * 100)
  let nudge
  if (feePct === 10) nudge = "You're in the lowest fee tier."
  else if (feePct === 15 && r10 <= 100) nudge = { rate: r10, months: 6, fee: 10 }
  else if (feePct === 20 && r15 <= 100) nudge = { rate: r15, months: 9, fee: 15 }
  else nudge = feePct === 15 ? 'Repay within 6 months to pay 10%.' : 'Repay within 9 months to pay 15%.'

  let warn = null
  if (months > 12) {
    const need = Math.ceil((total / sales) * 100)
    warn = need <= 100
      ? `Over 12 months. Advances are set up to repay within a year, so the share would need to be about ${need}% at these sales.`
      : 'Over 12 months, even at a 100% share. A smaller amount, or more ticket sales, would bring it within a year.'
  }

  return { feePct, feeAmount: amount * fee, total, months, weekly: (sales * ratePct) / 100 / 52, nudge, warn }
}
