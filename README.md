# Rexera Pharma — Next.js Website

A multi-page marketing site for Rexera Pharma, built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS.

## Pages
- `/` — Home (hero, about snapshot, portfolio preview, CTA)
- `/about` — Company story and stats
- `/portfolio` — Full product portfolio by therapeutic area
- `/quality` — Certifications and manufacturing/regulatory info
- `/contact` — Contact info + functional inquiry form (client-side only — see note below)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Notes

- **Fonts**: Loaded via a standard Google Fonts `<link>` tag in `app/layout.tsx` (Fraunces, Inter, IBM Plex Mono). Requires internet access at page-load time, same as any site using Google Fonts.
- **Contact form**: Currently just flips the button to "Request sent" on submit (`app/contact/page.tsx`) — it doesn't send anywhere yet. To make it actually deliver messages, wire the `onSubmit` handler to an API route (e.g. `app/api/contact/route.ts`) that emails you or posts to a service like Resend, Formspree, or your CRM.
- **Content**: All copy, stats, product lists, and certifications are placeholders — replace with your real data in the page files under `app/`.
- **Design tokens**: Colors and fonts are defined in `tailwind.config.ts` — change them there to re-theme the whole site.

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, header/footer
  globals.css        # Base styles + custom CSS (blister-pack texture, reveal animation)
  page.tsx            # Home
  about/page.tsx
  portfolio/page.tsx
  quality/page.tsx
  contact/page.tsx
components/
  Header.tsx
  Footer.tsx
  Reveal.tsx          # Scroll-reveal animation wrapper (client component)
```
