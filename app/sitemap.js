const BASE = 'https://soundcheckcapital.com'

export default function sitemap() {
  return [
    { url: BASE, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/end-user-license-agreement`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/privacy-policy`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/terms-of-service`, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
