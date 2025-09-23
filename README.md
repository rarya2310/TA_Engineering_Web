<div align="center">

# T.A. Engineering — Defense & Naval Systems Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Modern, production-ready static site for T.A. Engineering — a provider of mission‑critical defense and naval systems in India.

<a href="https://www.taengineering.in" target="_blank"><b>www.taengineering.in</b></a>

</div>

## At a glance

- Multipage static site (HTML/CSS/JS) optimized for performance, SEO, and Generative Engine Optimization (GEO)
- Rich structured data coverage (JSON‑LD) including Organization, WebSite, BreadcrumbList, ProfessionalService, OfferCatalog, ContactPoint, FAQPage
- Vercel‑ready file layout with consolidated assets: `styles/`, `scripts/`, `images/`
- Canonical domain: https://www.taengineering.in
- Official contact email: hr.taengineering@gmail.com

---

## Contents

1. Project structure and technologies
2. Quick start (no build)
3. Local development workflows
4. Deployment (Vercel)
5. SEO, AEO, and Generative Engine Optimization (GEO)
6. Structured data (JSON‑LD) reference
7. Asset strategy and performance
8. Accessibility and content guidelines
9. Maintenance, QA, and validation checklists
10. Troubleshooting and FAQs

---

## 1) Project structure and technologies

Directory layout:

```
.
├─ images/          # Site imagery and logos
├─ scripts/         # JavaScript (animations, carousel guards)
│  └─ app.js
├─ styles/          # CSS (global styles)
│  └─ style.css
├─ 404.html
├─ about.html
├─ contact.html
├─ disclaimer.html
├─ index.html
├─ privacy.html
├─ projects.html
├─ services.html
├─ sitemap.xml
├─ robots.txt
└─ README.md
```

Core technologies:

- HTML5, CSS3, vanilla JavaScript
- Tailwind CSS via CDN for utility classes
- Google Fonts (Inter)
- Optional Font Awesome CDN (progressively being replaced by inline SVGs)

Assumptions:

- Static hosting (no server code). Vercel serves static assets from the repo root.
- All canonical/OG/Twitter URLs use the .in domain.

---

## 2) Quick start (no build)

You can view the site locally without any tooling.

Windows (PowerShell):

```powershell
start index.html
```

macOS:

```bash
open index.html
```

Linux:

```bash
xdg-open index.html
```

---

## 3) Local development workflows

Recommended approach for quick edits:

- Edit HTML files directly and refresh the browser.
- Place images under `images/`, scripts under `scripts/`, and CSS under `styles/`.
- Keep paths relative (e.g., `images/Logo.png`, `styles/style.css`).

Optional live‑reload workflow (no frameworks):

- Use a lightweight static server such as VS Code Live Server extension.
- Or run a simple Python/Node static server if desired.

Content rules:

- Domain: always use https://www.taengineering.in in canonical/OG/JSON‑LD URLs.
- Email: hr.taengineering@gmail.com in all visible text, mailto links, and JSON‑LD contactPoint.

---

## 4) Deployment (Vercel)

This site is a pure static export.

Steps:

1. Push to your repository (branch: `main_vercel`).
2. In Vercel, create a new project from this repo.
3. Framework preset: “Other”. Build command: none. Output directory: `/` (root).
4. Set the production domain to `www.taengineering.in` and add any desired previews.
5. After deploy, verify:
   - Canonical links and OG/Twitter meta resolve to `.in`
   - `robots.txt` is accessible and references `/sitemap.xml`
   - `sitemap.xml` uses absolute `.in` locations

DNS tips:

- Point `www` to Vercel; optionally redirect apex to `www`.
- Keep one canonical hostname (prefer `https://www.taengineering.in`).

---

## 5) SEO, AEO, and Generative Engine Optimization (GEO)

What we implemented

- Distinct titles and meta descriptions per page focusing on high‑intent keywords
- Canonical URLs on every page
- Open Graph + Twitter Cards (title, description, image)
- JSON‑LD across the site (see section 6)
- Clean, semantic HTML, descriptive alt texts
- robots.txt and sitemap.xml in place

Content guidance (GEO/AEO)

- Be concrete: state platforms, standards, quantities, and outcomes (e.g., “HAT/SAT,” “EMI/EMC”).
- Prefer short sentences and active voice; avoid fluff.
- Use lists for specs and procedures; use consistent terminology (e.g., “PINAKA,” “Akash,” “Steering Gear”).
- For AEO, ensure Organization contactPoint includes phone, email, and languages.

Monitoring and validation

- Validate structured data with Google Rich Results Test.
- Inspect meta tags via browser devtools or sharing debuggers (FB/Twitter).
- Check indexation with Google Search Console; submit `sitemap.xml`.

---

## 6) Structured data (JSON‑LD) reference

Pages and schemas:

- index.html
  - Organization
  - WebSite with SearchAction
  - FAQPage (as relevant)
- services.html
  - ProfessionalService + OfferCatalog (services with Offer entries)
  - BreadcrumbList
- about.html, projects.html, contact.html, policy pages
  - BreadcrumbList
  - Organization contactPoint (AEO) where applicable
  - ContactPage (on `contact.html`)
  - FAQPage entries where useful

OfferCatalog guidance

- Keep Offer names short and consistent with UI sections.
- Use descriptive but factual Offer descriptions; avoid marketing clichés.

Organization contactPoint (AEO)

- Example attributes: `telephone`, `email`, `contactType`, `areaServed`, `availableLanguage`.
- Use the official email: hr.taengineering@gmail.com.

---

## 7) Asset strategy and performance

Current setup

- Tailwind via CDN for rapid iteration. For a static brochure site, this is acceptable.
- Deferred `scripts/app.js` and optimized images where possible.

Migration path to self‑hosted CSS (optional)

1. Add Tailwind tooling (CLI or PostCSS with `tailwind.config.js`).
2. Scan HTML for class usage and purge unused utilities.
3. Build a minified CSS bundle and replace the CDN `<script>` with `<link rel="stylesheet">` to the built CSS.

Images and caching

- Use appropriately sized images with modern formats where feasible.
- Keep file names stable for long‑cache headers; update query strings on changes if using a CDN.

---

## 8) Accessibility and content guidelines

- Provide descriptive `alt` text for images; avoid repeating nearby captions.
- Maintain heading hierarchy (one H1 per page; meaningful H2/H3).
- Ensure link text is descriptive (no “click here”).
- Keep color contrast adequate; avoid relying on color alone.

---

## 9) Maintenance, QA, and validation checklists

Before each release

- [ ] Titles and meta descriptions reviewed for each page
- [ ] Canonical URLs point to `https://www.taengineering.in/...`
- [ ] OG/Twitter tags present and consistent
- [ ] JSON‑LD validates without errors/warnings
- [ ] robots.txt references `sitemap.xml`; sitemap URLs are absolute `.in`
- [ ] Footer contact info: phone numbers and hr.taengineering@gmail.com
- [ ] Internal links work; anchors resolve; no 404s
- [ ] Images load; alt text present; layout OK on mobile

Periodic tasks

- [ ] Review Services OfferCatalog for alignment with UI content
- [ ] Replace remaining icon fonts with inline SVGs
- [ ] Consider self‑hosting Tailwind for production hardening

---

## 10) Troubleshooting and FAQs

Why do I see a Tailwind CDN warning in console?

- Tailwind’s CDN build warns for production. It’s fine for a brochure site, but plan a self‑hosted build if you want maximum control and no warnings. See section 7.

OG/Twitter card not updating after I change content

- Social platforms cache aggressively. Use their sharing debuggers to refresh caches, or change the image URL (e.g., add a query parameter) to bust cache.

Structured data shows warnings

- Warnings are often optional fields. Ensure required fields are correct, especially Organization, WebSite, and OfferCatalog. Use Google’s Rich Results Test to verify.

Where do I change the email/domain everywhere?

- Search and replace across the repo for `taengineering.in` or `hr.taengineering@gmail.com`. Ensure updates reflect in JSON‑LD, visible text, and mailto links.

---

© 2025 T.A. Engineering. All Rights Reserved.
