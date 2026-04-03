# LaunchAIProduct.com

Production-ready marketing site: **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**. Dark theme, brand colors (`#030f0f`, `#03624c`, `#00df82`), SEO metadata, `robots.txt`, `sitemap.xml`, and dynamic Open Graph image.

## Folder structure

```
launchaiproduct.com/
├── app/
│   ├── globals.css          # Tailwind layers + base styles
│   ├── icon.svg             # Favicon (App Router)
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── opengraph-image.tsx  # OG image (ImageResponse)
│   ├── page.tsx             # Home page composition
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── BudgetsSection.tsx
│   ├── AudienceSection.tsx
│   ├── CaseStudySection.tsx
│   ├── CTASection.tsx
│   ├── DifferentiatorSection.tsx
│   ├── FAQSection.tsx
│   ├── HowWeWorkSection.tsx
│   ├── FloatingWhatsAppButton.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MobileStickyCta.tsx
│   ├── Navbar.tsx
│   ├── OutcomesSection.tsx
│   ├── ProblemSection.tsx
│   ├── ProcessSection.tsx
│   ├── Reveal.tsx
│   ├── ServicesSection.tsx
│   └── TrustStrip.tsx
├── lib/
│   └── site.ts              # Site name, URLs, nav links (edit for production)
├── public/                  # Static assets (add files as needed)
├── instruction.md           # Original brief
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

Global styles live under `app/` (common for Next.js App Router). There is no separate `styles/` folder unless you prefer moving `globals.css` to `styles/globals.css` and importing it from `layout.tsx`.

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

This project uses **`output: 'export'`** (static HTML in `out/`).

```bash
npm run build
```

Preview the static site locally:

```bash
npx serve out
```

## Deploy

### GitHub Pages (this repo)

1. Create a new repository on GitHub (e.g. `launchaiproduct-com`) **without** initializing with a README.
2. Push this project (see [Git — first push](#git--first-push) below).
3. In the repo: **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
4. The workflow **Deploy to GitHub Pages** runs on push to `main` (or `master`). First run may need you to approve workflow permissions once.
5. Your site will be at `https://<username>.github.io/<repo>/`. The workflow sets `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL` automatically.

For a **custom domain** later, point DNS to GitHub Pages and set the custom domain in repo Settings → Pages; update `NEXT_PUBLIC_SITE_URL` / `lib/site.ts` if needed.

### Vercel

Import the repo and deploy as a Next.js app. You may remove `output: 'export'` in `next.config.ts` if you prefer SSR on Vercel (not required for this static site).

### `site.url` / SEO

Default canonical URL is `https://launchaiproduct.com`. GitHub Actions sets `NEXT_PUBLIC_SITE_URL` during deploy so `robots.txt` / `sitemap.xml` match the GitHub Pages URL.

## Git — first push

**Do not copy placeholder text literally.** Use your real GitHub username and the exact repository name you created.

1. On [github.com/new](https://github.com/new), create an empty repository (e.g. name: `launchaiproduct-com`). Do **not** add a README if you already have code locally.
2. On the new repo page, click the green **Code** button and copy the HTTPS URL. It looks like:
   - `https://github.com/YourActualUsername/launchaiproduct-com.git`
3. In your project folder (if you already ran `git init` and committed):

```bash
git remote remove origin
git remote add origin https://github.com/YourActualUsername/launchaiproduct-com.git
git branch -M main
git push -u origin main
```

Replace `YourActualUsername` with **your** GitHub username (profile URL is `github.com/ThatName`).

If you never added a bad remote, skip `git remote remove origin` and only run `git remote add origin ...` once.

First-time checklist:

- Repo **exists** on GitHub before you push (otherwise: `repository not found`).
- URL uses **your** account name, not `YOUR_USER` or `YOUR_USERNAME`.
- You are logged in (`git push` may prompt for a [personal access token](https://github.com/settings/tokens) if HTTPS password auth is disabled).

## Placeholders to replace manually

Edit **`lib/site.ts`**:

| Field          | What to set |
|----------------|-------------|
| `url`          | Defaults in `lib/site.ts`; override with env `NEXT_PUBLIC_SITE_URL` (GitHub Actions sets this for Pages) |
| `whatsappUrl`  | Full WhatsApp link (`wa.me` + country code + number, no `+`) |
| `bookingUrl`   | Booking link (currently also WhatsApp to the same number with a pre-filled message) |
| `email`        | Contact email |

Optional content updates:

- **Testimonials / case studies:** `components/CaseStudySection.tsx` and footer social placeholders in `components/Footer.tsx`.
- **Pricing:** copy in `components/ServicesSection.tsx` (kept non-specific on purpose).

---

Business copy and structure follow `instruction.md`.
"# launchaiproduct-com" 
