# Luna Dental Clinic

**Live site:** https://luna-dental.ammar-rajabi.com
**Vercel:** https://luna-dental-clinic-chi.vercel.app

A five-page website for **Luna Dental Clinic**, a fictional general and cosmetic dental clinic in Manchester, built for **MX AI Academy, Challenge 1**.

> Luna Dental Clinic is a fictional brand, not a real business. Team names, prices, opening hours and testimonials are demo content and are labelled as such on the site.

<p>
  <img src="docs/home-desktop.jpg" alt="Luna Dental Clinic home page on desktop" width="640">
  <img src="docs/home-mobile.jpg" alt="Luna Dental Clinic home page on mobile" width="180">
</p>

## Pages

- **Home** (`/`): hero, services, why choose us, demo testimonials, first-visit steps
- **About** (`/about`): story, team, values, the clinic
- **Services** (`/services`): six treatments with times and starting prices
- **Smile Gallery** (`/smile-gallery`): smiles, clinic, treatment rooms, equipment, team
- **Contact** (`/contact`): address, hours, map and a booking form with validation

## Tech

- Next.js 16 (App Router, TypeScript), static export
- Tailwind CSS 4
- `next/font` (Fraunces, Figtree), `lucide-react` icons
- Photos from Unsplash (credited on `/credits`)

## Run locally

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `out/`, ready for any static host.
