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
  const pageTitle = `${title} | SoundCheck Capital`
  const description = DESCRIPTIONS[slug]
  // openGraph/twitter replace the root layout's objects wholesale, so without
  // these a shared legal page would show the home page's title and URL.
  return {
    title: pageTitle,
    description,
    alternates: { canonical: `https://soundcheckcapital.com/${slug}` },
    openGraph: { type: 'website', siteName: 'SoundCheck Capital', locale: 'en_US', url: `/${slug}`, title: pageTitle, description, images: ['/opengraph-image'] },
    twitter: { card: 'summary_large_image', title: pageTitle, description, images: ['/opengraph-image'] },
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
