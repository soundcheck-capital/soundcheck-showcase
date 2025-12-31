# Soundcheck Showcase - Next.js

Site vitrine Soundcheck migré de Gatsby vers Next.js.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build de production

```bash
npm run build
npm start
```

## Structure du projet

- `app/` - Pages et layout Next.js (App Router)
- `components/` - Composants React réutilisables
- `public/images/` - Images statiques
- `components/*.css` - Styles CSS pour chaque composant

## Technologies

- Next.js 14
- React 18
- CSS Modules (fichiers CSS séparés)

## Configuration HubSpot / Make.com

Pour envoyer les données du simulateur vers HubSpot via Make.com, configurez la variable d'environnement :

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez l'URL de votre webhook Make.com :

```bash
NEXT_PUBLIC_MAKE_WEBHOOK_URL=https://hook.eu1.make.com/your-webhook-url-here
```

Les données envoyées incluent :
- `yearsInBusiness` : Années d'activité
- `numberOfEvents` : Nombre d'événements par an
- `grossTicketSales` : Chiffre d'affaires annuel
- `advanceAmount` : Montant de l'avance calculé
- `timestamp` : Date et heure de l'envoi

Les données sont envoyées uniquement au clic sur le bouton "Book a call".
