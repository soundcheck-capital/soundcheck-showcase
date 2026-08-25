import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateAdvance } from './calculator.js'

// Validation cases from the "new model" sheet, TEST 8/24/26 rows.
const cases = [
  // [years, events, gts, type, expectedAdvance]
  [1, 8, 2500000, 'venue', 250000],      // score 14 -> 10%
  [6, 25, 1000000, 'venue', 150000],     // score 7 -> 15%
  [6, 25, 1000000, 'festival', 180000],  // score 7 -> 18%
  [10, 50, 1000000, 'promoter', 200000], // score 0 -> 20%
  [3, 2, 500000, 'venue', 50000],        // score 13 -> 10%
  [1, 1, 200000, 'venue', 10000],        // score 18 -> 5%
  [10, 1, 15000000, 'venue', 1000000],   // score 10 -> 15%, capped at $1M
  [10, 50, 2700000, 'venue', 540000],    // score 0 -> 20%
  [10, 50, 2700000, 'festival', 675000], // score 0 -> 25%
]

test('new model advance amounts match sheet validation rows', () => {
  for (const [years, events, gts, type, expected] of cases) {
    const { advanceAmount } = calculateAdvance(years, events, gts, type)
    assert.equal(advanceAmount, expected, `years=${years} events=${events} gts=${gts} type=${type}`)
  }
})
