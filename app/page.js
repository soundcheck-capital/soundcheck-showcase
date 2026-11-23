import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhyChoose from '../components/WhyChoose'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export const metadata = { alternates: { canonical: '/' } }

// FAQPage schema is pending a terms review (approval timing, fees, amounts are
// under review), so only Organization is published for now.
const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SoundCheck Capital',
  url: 'https://soundcheckcapital.com',
  logo: 'https://soundcheckcapital.com/images/logo_half_maj.svg',
  description: 'SoundCheck Capital provides revenue-based ticket sales advances to independent promoters, venues and festivals in the United States, repaid as a share of future ticket sales.',
  foundingDate: '2024',
  founder: { '@type': 'Person', name: 'Boris Patronoff' },
  areaServed: 'US',
  sameAs: ['https://www.linkedin.com/company/soundcheck-capital'],
  knowsAbout: ['ticket sales advances', 'revenue-based financing', 'live event financing', 'festival financing', 'venue financing', 'artist deposit financing'],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }} />
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <FAQ />
      <Footer />
    </>
  )
}

