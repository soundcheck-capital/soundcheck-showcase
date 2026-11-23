const BASE = 'https://soundcheckcapital.com'

export default function sitemap() {
  const lastModified = new Date()
  return [
    { url: BASE, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/end-user-license-agreement`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
