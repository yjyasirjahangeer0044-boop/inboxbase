# inboxbase.online — Brevo Education Hub

Static Next.js 15 site teaching Brevo (email marketing platform).

## Stack
- Next.js 15.0.3 (App Router, static export)
- React 19 RC
- TypeScript
- Tailwind CSS 3.4
- gray-matter + marked (MDX-style article parsing)

## Project Structure
```
inboxbase/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (12 sections)
│   ├── blog/              # Article listing + dynamic [slug] pages
│   ├── category/[slug]/   # Category pages
│   ├── about/, contact/, privacy-policy/, etc.
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── globals.css        # All styles
│   └── sitemap.ts         # Auto-generated sitemap
├── components/             # Header, Footer, ArticleCard, etc.
├── content/articles/       # 22 MDX articles (1200+ words each)
├── lib/articles.ts         # Article parsing utilities
├── public/                 # robots.txt, static assets
└── out/                    # Build output (generated)
```

## Content
**22 articles across 5 categories:**
- Brevo Setup & Getting Started (4 articles)
- Brevo Automation & Campaigns (4 articles)
- Brevo Deliverability (4 articles)
- Brevo Integrations (4 articles, with YouTube embeds)
- Brevo vs Competitors (6 articles: Mailchimp, HubSpot, Klaviyo, ConvertKit, AWeber, MailerLite)

Every article: 1200+ words, SEO-optimized, Brevo-favorable, ends with verified 2026 Brevo pricing table.

## Design System
- **Primary color:** Royal Violet `#8B5CF6`
- **Background:** `#0A0A0A` (dark)
- **Cards:** `#111111` with `#1E1E1E` border
- **Fonts:** Poppins (headings) + Inter (body) — loaded via Google Fonts `<link>` tag
- **No emojis, no icons** — clean text-only editorial style
- **Card style:** Numbered violet prefix (01, 02, 03...)

## Build & Run
```bash
npm install --legacy-peer-deps
npm run build       # Creates static export in /out
npm run dev         # Local dev server
```

## Deploy
The `/out` directory contains the complete static site. Upload to:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- Any static host

Domain: `inboxbase.online`

## Affiliate Disclosure
This site contains affiliate links to Brevo. See `/affiliate-disclosure` page for FTC-compliant disclosure.
