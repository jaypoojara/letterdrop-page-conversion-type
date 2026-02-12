# The Weekly Dispatch — Newsletter Landing Page

> A conversion-optimized landing page template for newsletter creators. Built to turn visitors into subscribers.

## Template Type

**LetterDrop** — Newsletter conversion page

## Brand Identity

- **Personality:** Editorial, warm, trustworthy
- **Primary Color:** Amber/honey (`#B45309`) — warm and editorial
- **Background:** Warm cream (`#FAF9F6`)
- **Text:** Warm near-black (`#1A1714`)
- **Display Font:** Space Grotesk — modern, geometric
- **Body Font:** DM Sans — clean, readable
- **Dark Mode:** Fully supported with adapted colors

## Pages

- **Homepage** (`/`) — The complete newsletter landing page with all sections

## Sections (in order)

1. **Sticky Navbar** — Newsletter name + "Past Issues" and "Sponsor" links + Subscribe button
2. **Hero** — Large headline, description, email capture form, animated subscriber counter
3. **Social Proof Bar** — "Read by professionals from" with company names
4. **Benefits** — "What You'll Get" with 3 value cards (Curated Analysis, Practical Takeaways, Expert Perspectives)
5. **Featured Issue** — Preview of the latest newsletter issue with category tag, read time, excerpt, and "Read this issue" link
6. **Past Issues Archive** — Searchable, filterable grid of past issues with category tags
7. **Testimonials** — 3 reader testimonials with quotes and names
8. **Format Details** — 4 icons showing frequency, read time, quality, and price (Every Wednesday, 5-Min Read, Hand-Picked, Always Free)
9. **Sponsor Section** — Inverted dark section with audience stats and "Become a Sponsor" CTA
10. **Footer** — Final email capture + navigation links + copyright

## Components

- **NewsletterForm** — Email subscription form with loading and success states. Has two sizes: large (hero) and compact (footer)
- **AnimatedCounter** — Counts up to the subscriber number when scrolled into view
- **IssueArchive** — Past issues with search bar and category filter tags (Technology, Design, Business, Culture, Startups)
- **ScrollReveal** — Makes sections fade in smoothly as you scroll down the page

## How to Customize

### Change the newsletter name and details
Open `app/page.tsx` and edit the `NEWSLETTER` object at the top:
```
const NEWSLETTER = {
  name: "Your Newsletter Name",
  tagline: "Your Catchy Tagline",
  description: "Your description here...",
  subscriberCount: 12847,
};
```

### Change the colors
Open `app/globals.css` and edit the color values:
- `--accent` changes the main highlight color (buttons, links, tags)
- `--background` changes the page background
- `--surface` changes the alternating section backgrounds

### Change the benefits
Edit the `BENEFITS` array in `app/page.tsx` — each item has a `title` and `description`.

### Change the testimonials
Edit the `TESTIMONIALS` array in `app/page.tsx` — each item has a `quote`, `name`, and `title`.

### Change the past issues
Edit the `ISSUES` array in `components/IssueArchive.tsx` — each issue has a title, date, category, excerpt, and read time.

### Change the featured issue
Edit the `FEATURED_ISSUE` object in `app/page.tsx`.

### Change the sponsor stats
Edit the `SPONSOR_STATS` array in `app/page.tsx`.

### Change the company names in social proof
Edit the `COMPANIES` array in `app/page.tsx`.

## Technical Details

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + CSS animations
- **Fonts:** Google Fonts (Space Grotesk + DM Sans)
- **Dark Mode:** Automatic via `prefers-color-scheme`

## Recent Changes

- Initial build: Created complete LetterDrop newsletter landing page template with all 10 sections, interactive issue archive, animated subscriber counter, and email capture forms.
