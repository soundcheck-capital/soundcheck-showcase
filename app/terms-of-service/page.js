import LegalPage, { legalMetadata } from '../../components/LegalPage'

export const metadata = legalMetadata('terms-of-service')

export default function Page() {
  return <LegalPage slug="terms-of-service" />
}
