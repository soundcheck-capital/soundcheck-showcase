import fs from 'fs'
import path from 'path'

// ponytail: markdown subset parser for our own legal docs — headings, bullet
// lists, bold, links, bare URLs and emails. That is all the three documents in
// content/legal use. Swap in react-markdown if they ever grow tables or images.

const DIR = path.join(process.cwd(), 'content', 'legal')

const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(https?:\/\/[^\s)]*[^\s).,;])|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g

export function tokenize(text) {
  const tokens = []
  let last = 0
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) tokens.push({ type: 'text', text: text.slice(last, m.index) })
    if (m[1]) tokens.push({ type: 'link', text: m[1], href: m[2] })
    else if (m[3]) tokens.push({ type: 'bold', text: m[3] })
    else if (m[4]) tokens.push({ type: 'link', text: m[4], href: m[4] })
    else tokens.push({ type: 'link', text: m[5], href: `mailto:${m[5]}` })
    last = m.index + m[0].length
  }
  if (last < text.length) tokens.push({ type: 'text', text: text.slice(last) })
  return tokens
}

function parseBlocks(md) {
  return md.trim().split(/\n{2,}/).map((block) => {
    const heading = block.match(/^(#{2,4})\s+(.*)$/)
    if (heading) {
      return { type: `h${heading[1].length}`, tokens: tokenize(heading[2]) }
    }
    if (/^[*-]\s/.test(block)) {
      const items = block.split('\n').map((item) => tokenize(item.replace(/^[*-]\s+/, '')))
      return { type: 'ul', items }
    }
    return { type: 'p', tokens: tokenize(block.replace(/\n/g, ' ')) }
  })
}

/**
 * Reads content/legal/<slug>.md and returns its frontmatter plus the body
 * parsed into blocks. The leading `# Title` and `**Last Updated: …**` lines are
 * dropped: the page renders those from the frontmatter instead.
 */
export function readLegalDoc(slug) {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), 'utf8')
  const parsed = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!parsed) throw new Error(`${slug}.md is missing frontmatter`)

  const meta = Object.fromEntries(
    parsed[1].split('\n').filter(Boolean).map((line) => {
      const sep = line.indexOf(':')
      return [line.slice(0, sep).trim(), line.slice(sep + 1).trim()]
    })
  )
  if (!meta.title || !meta.lastUpdated) {
    throw new Error(`${slug}.md frontmatter needs title and lastUpdated`)
  }

  const body = parsed[2].replace(/^#\s+.*$/m, '').replace(/^\*\*Last Updated:.*$/m, '')

  return { ...meta, blocks: parseBlocks(body) }
}

export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
