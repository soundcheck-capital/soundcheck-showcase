import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhyChoose from '../components/WhyChoose'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export const metadata = { alternates: { canonical: '/' } }

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <FAQ />
      <Footer />
    </>
  )
}

