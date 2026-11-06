# MX AI Academy · Challenge 1 · Luna Dental Clinic

**Live site:** https://luna-dental.ammar-rajabi.com
**Vercel:** https://luna-dental-clinic-chi.vercel.app
**GitHub:** https://github.com/fante123456/luna-dental-clinic

**Screenshots:** `luna-home-desktop.png` (1440px) and `luna-home-mobile.png` (375px), with full-page versions in the same folder.

## Design explanation

1. I chose a calm "quiet editorial" direction so the site feels like a private clinic rather than a template: soft Fraunces headings, Figtree for body text, only the five brief colours and plenty of white space.
2. The brand's one signature is a soft crescent "luna" shape, used with restraint in the logo, the curved edge of the hero photo and the map pin.
3. Trust comes first: a large real photo, two clear calls to action, three trust facts, and every fictional price, hour, team member and testimonial labelled as demo content.
4. Each page ends with something useful instead of a repeated banner: first-visit steps, a "say hello first" map, a treatment finder and a short FAQ.
5. It is built mobile-first with Next.js and Tailwind, meets WCAG AA, and scores 100 for Accessibility, Best Practices and SEO in Lighthouse (93–96 Performance on mobile).

## Hardest part

1. Putting a Next.js 16 site on ordinary shared hosting: the static export loses Next's image optimiser and security headers.
2. I moved image resizing to Unsplash's CDN with a custom loader, wrote the headers into `.htaccess`, and added a post-build script to fix prefetch files that Next 16 names differently from what the browser requests.
3. Keeping a very light palette readable was the other challenge: Sky and Mint never carry text, and the scroll motion never fades text below AA contrast.
