// Which PostHog event a click on a link/button maps to, or null.
// explicit = the element's data-ph-event; base = the page URL, to resolve relative hrefs.
export function clickEvent({ explicit, href }, base) {
  if (explicit) return explicit
  if (!href) return null
  if (href === '#apply') return 'cta_get_funded_click'
  let url
  try { url = new URL(href, base) } catch { return null }
  if (url.hostname === 'meetings.hubspot.com') return 'contact_click'
  if (url.hostname === 'express-application.soundcheckcapital.com') return 'apply_click'
  if (url.origin === new URL(base).origin && url.pathname === '/apply') return 'apply_click'
  return null
}
