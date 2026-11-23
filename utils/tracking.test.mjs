import { test } from 'node:test'
import assert from 'node:assert/strict'
import { clickEvent } from './tracking.js'

const ORIGIN = 'https://soundcheckcapital.com'

test('explicit data-ph-event wins', () => {
  assert.equal(clickEvent({ explicit: 'cta_get_funded_click', href: null }, ORIGIN), 'cta_get_funded_click')
})

test('HubSpot meetings links are contact clicks', () => {
  assert.equal(clickEvent({ href: 'https://meetings.hubspot.com/soberman' }, ORIGIN), 'contact_click')
})

test('/apply and the Express app are apply clicks', () => {
  assert.equal(clickEvent({ href: '/apply' }, ORIGIN), 'apply_click')
  assert.equal(clickEvent({ href: 'https://soundcheckcapital.com/apply' }, ORIGIN), 'apply_click')
  assert.equal(clickEvent({ href: 'https://express-application.soundcheckcapital.com/express' }, ORIGIN), 'apply_click')
})

test('#apply anchors are get-funded CTAs', () => {
  assert.equal(clickEvent({ href: '#apply' }, `${ORIGIN}/bem`), 'cta_get_funded_click')
})

test('other links are not tracked', () => {
  assert.equal(clickEvent({ href: '/privacy-policy' }, ORIGIN), null)
  assert.equal(clickEvent({ href: '#how-it-works' }, ORIGIN), null)
  assert.equal(clickEvent({ href: 'mailto:steve@soundcheckcapital.com' }, ORIGIN), null)
  assert.equal(clickEvent({ href: 'https://evil.example/apply' }, ORIGIN), null)
  assert.equal(clickEvent({ href: null }, ORIGIN), null)
})
