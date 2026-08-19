// Run: node utils/legal.test.mjs
import assert from 'node:assert/strict'
import { readLegalDoc, tokenize, formatDate } from './legal.js'

const SLUGS = ['end-user-license-agreement', 'privacy-policy', 'terms-of-service']

for (const slug of SLUGS) {
  const doc = readLegalDoc(slug)
  assert.ok(doc.title, `${slug}: title`)
  assert.match(doc.lastUpdated, /^\d{4}-\d{2}-\d{2}$/, `${slug}: lastUpdated`)
  assert.ok(doc.blocks.length > 5, `${slug}: parsed blocks`)

  const texts = doc.blocks.flatMap((b) => (b.type === 'ul' ? b.items.flat() : b.tokens))
  // Nothing may reach the page as raw markdown, and no HTML survived the source.
  for (const token of texts) {
    assert.doesNotMatch(token.text, /\*\*|\]\(|^#|<[a-z/]/, `${slug}: unrendered markdown in "${token.text.slice(0, 60)}"`)
  }
  // The h1 and the "Last Updated" line come from the frontmatter, not the body.
  assert.equal(doc.blocks.filter((b) => b.type === 'h1').length, 0)
  assert.ok(!texts.some((t) => t.text.startsWith('Last Updated')), `${slug}: duplicate date`)
  assert.ok(doc.blocks.some((b) => b.type === 'h2'), `${slug}: has headings`)
}

// Every inline form, in one line.
assert.deepEqual(
  tokenize('See **this** at [docs](/terms-of-service) or https://example.com/a, or mail a.b@x.co.'),
  [
    { type: 'text', text: 'See ' },
    { type: 'bold', text: 'this' },
    { type: 'text', text: ' at ' },
    { type: 'link', text: 'docs', href: '/terms-of-service' },
    { type: 'text', text: ' or ' },
    { type: 'link', text: 'https://example.com/a', href: 'https://example.com/a' },
    { type: 'text', text: ', or mail ' },
    { type: 'link', text: 'a.b@x.co', href: 'mailto:a.b@x.co' },
    { type: 'text', text: '.' },
  ]
)

// A bare URL wrapped in parentheses must not swallow the closing paren.
assert.deepEqual(tokenize('(https://example.com/x)'), [
  { type: 'text', text: '(' },
  { type: 'link', text: 'https://example.com/x', href: 'https://example.com/x' },
  { type: 'text', text: ')' },
])

assert.equal(formatDate('2026-08-04'), 'August 4, 2026')

console.log('legal content OK:', SLUGS.join(', '))
