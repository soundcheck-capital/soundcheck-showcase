import LegalPage, { legalMetadata } from '../../components/LegalPage'

export const metadata = legalMetadata('end-user-license-agreement')

export default function Page() {
  return <LegalPage slug="end-user-license-agreement" />
}
