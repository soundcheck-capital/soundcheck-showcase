import test from 'node:test'
import assert from 'node:assert/strict'
import { FAQS, faqPageSchema } from '../components/faqItems.js'

// Steve, Slack #product 2026-11-24: never say whether we charge late fees.
test('no FAQ answer mentions late fees', () => {
  for (const { answer } of FAQS) assert.doesNotMatch(answer, /\blate\b/i)
})

test('the cost answer is one flat fee (Boris)', () => {
  const cost = FAQS.find((f) => /cost/i.test(f.question))
  assert.match(cost.answer, /single, flat fee/)
})

test('FAQPage schema mirrors the visible FAQ', () => {
  const schema = faqPageSchema(FAQS)
  assert.equal(schema['@type'], 'FAQPage')
  assert.equal(schema.mainEntity.length, FAQS.length)
  assert.deepEqual(schema.mainEntity[0], {
    '@type': 'Question',
    name: FAQS[0].question,
    acceptedAnswer: { '@type': 'Answer', text: FAQS[0].answer },
  })
})
