# Soundcheck Showcase

Site vitrine créé avec Gatsby.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

Lancez le serveur de développement :

```bash
npm run develop
```

Le site sera accessible sur [http://localhost:8000](http://localhost:8000)

### Build

Pour créer une version de production :

```bash
npm run build
```

### Serve

Pour tester la version de production localement :

```bash
npm run serve
```

## 📁 Structure du projet

```
soundcheck-showcase/
├── src/
│   ├── components/     # Composants React réutilisables
│   ├── pages/          # Pages du site
│   └── images/         # Images statiques
├── gatsby-config.js    # Configuration Gatsby
└── package.json
```

## 🛠 Technologies

- **Gatsby** - Framework React pour sites statiques
- **React** - Bibliothèque JavaScript
- **GraphQL** - Requêtes de données


## Environment variables (Next.js app)

Copy `.env.example` to `.env.local` for local work; set the same keys in Netlify → Site configuration → Environment variables.

| Variable | Effect when set |
|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | Loads PostHog (US cloud) through the `/ingest` proxy. Cookieless: `persistence: 'memory'`, no cookie or localStorage, so no consent banner is needed. Tracks pageviews, page leaves and the custom events `cta_get_funded_click`, `contact_click`, `apply_click` (each with a `location` property), plus `express_form_submitted` (with `partner`) when an embedded partner form posts `soundcheck-express:submitted`. Unset = PostHog is never loaded. |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Loads the HubSpot tracking code (`afterInteractive`). **It sets cookies**: before setting this variable, enable the cookie consent banner in HubSpot → Settings → Privacy & Consent, so visitors are asked first. Our portal is on `app.hubspot.com` (US data center). |
| `NEXT_PUBLIC_HUBSPOT_SCRIPT_HOST` | Optional script host, default `js.hs-scripts.com`. Use `js-eu1.hs-scripts.com` for an EU-hosted portal. |
