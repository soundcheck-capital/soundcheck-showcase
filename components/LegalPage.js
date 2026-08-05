import Footer from './Footer'
import { readLegalDoc, formatDate } from '../utils/legal'
import './LegalPage.css'

const DESCRIPTIONS = {
  'end-user-license-agreement':
    "SoundCheck Capital's End-User License Agreement, covering use of the SoundCheck application and its QuickBooks Online integration.",
  'privacy-policy':
    "How SoundCheck Capital collects, uses, protects and deletes your personal information, including data from connected accounts.",
  'terms-of-service':
    "The terms governing your use of the SoundCheck Capital website and services.",
}

export function legalMetadata(slug) {
  const { title } = readLegalDoc(slug)
  return {
    title: `${title} | SoundCheck Capital`,
    description: DESCRIPTIONS[slug],
    alternates: { canonical: `https://soundcheckcapital.com/${slug}` },
  }
}

function Inline({ tokens }) {
  return tokens.map((token, i) => {
    if (token.type === 'bold') return <strong key={i}>{token.text}</strong>
    if (token.type === 'link') {
      const external = token.href.startsWith('http')
      return (
        <a key={i} href={token.href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
          {token.text}
        </a>
      )
    }
    return token.text
  })
}

function Block({ block }) {
  if (block.type === 'ul') {
    return (
      <ul>
        {block.items.map((tokens, i) => (
          <li key={i}><Inline tokens={tokens} /></li>
        ))}
      </ul>
    )
  }
  const Tag = block.type
  return <Tag><Inline tokens={block.tokens} /></Tag>
}

export default function LegalPage({ slug }) {
  const { title, lastUpdated, blocks } = readLegalDoc(slug)

  return (
    <>
      <article className="legal">
        <div className="legal-container">
          <h1 className="legal-title">{title}</h1>
          <p className="legal-date">Last Updated: {formatDate(lastUpdated)}</p>
          {blocks.map((block, i) => <Block key={i} block={block} />)}
        </div>
      </article>
      <Footer />
    </>
  )
}
