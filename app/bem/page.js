import Script from 'next/script'

// Unlisted partner page: noindex, not in the sitemap, no nav links.
// Leads are tagged by the form's sourceUrl (https://soundcheckcapital.com/bem).
export const metadata = {
  title: 'SoundCheck Capital × BEM',
  robots: { index: false, follow: false },
}

export default function BemPage() {
  return (
    <>
      {/* The widget brings its own full-height background and padding. */}
      <div data-soundcheck-widget />
      {/* ponytail: default theme; add ?theme=<partner> once BEM brand assets exist */}
      <Script src="https://finance.soundcheckcapital.com/widget.js?appearance=single-page" />
    </>
  )
}
