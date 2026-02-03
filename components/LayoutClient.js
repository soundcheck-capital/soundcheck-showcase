'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function LayoutClient({ children }) {
  const pathname = usePathname()
  const hideHeader = pathname === '/docusign-success'

  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
    </>
  )
}
