# T.A. Engineering - Defense & Naval Systems Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

This repository contains the source code for the official website of T.A. Engineering, a leading provider of mission-critical defense and naval systems in India. The website is a modern, multi-page static site designed to showcase the company's expertise, projects, and services.

## SEO and Generative Engine Optimization (GEO)

This site is optimized for both traditional search engines and AI-driven generative engines.

### What we implemented

- Descriptive, unique titles and meta descriptions on every page
- Canonical URLs to avoid duplicate content
- Open Graph and Twitter Card metadata for rich previews
- JSON-LD structured data:
  - Organization (index)
  - WebSite with SearchAction (index)
  - FAQPage (index)
  - BreadcrumbList (inner pages)
- Clean, semantic HTML with accessible alt text and headings
- Root-absolute favicons and sitemap/robots

### Content guidance for GEO

- Keep headlines specific (who/what/where/impact). Avoid vague marketing copy.
- Use concise paragraphs (2–4 sentences) with strong nouns/verbs over adjectives.
- Add concrete facts and numbers (dates, counts, locations, standards, model names).
- Prefer lists and tables for specs; use clear section headings (H2/H3).
- Maintain consistent terminology (e.g., “PINAKA,” “AKASH,” “Steering Gear Systems”).

### Optional future enhancements

- Add “How we work” process page with stepwise schema (HowTo)
- Add case studies as Articles with author/date and schema
- Add multilingual alternate hreflang if you localize content

## Production Tailwind plan

You may see a console warning about cdn.tailwindcss.com. For production, plan to self-host Tailwind via CLI or PostCSS in a future iteration.

Quick path (no framework):

1. Add Tailwind config and dependencies
2. Build a minified CSS bundle from your HTML sources
3. Replace the CDN `script` with a `link` to the built CSS

We can wire this up when you’re ready; meanwhile, the CDN is acceptable for a static brochure site.

## Vercel deployment notes

- Project is a static site; no build step required (unless self-hosting Tailwind later)
- Ensure your production domain is consistent (we use <https://www.taengineering.in> in canonical/OG)
- Verify social cards render by sharing URLs in Slack/WhatsApp/Twitter (they cache OG images)

## Project Overview

T.A. Engineering is a key partner in India's 'Make in India' and 'Aatma-Nirbhar' initiatives, with over 17 years of experience in delivering high-stakes engineering solutions. The company specializes in the technical testing, analysis, and integration of complex systems for the defense and naval sectors, including projects like the PINAKA multi-barrel rocket launcher and advanced steering gear systems for the Indian Navy.

This website serves as a comprehensive digital brochure, providing detailed information about the company's history, capabilities, and contributions to national security.

## Key Features

- Multi-page Architecture: The website includes several pages to provide detailed information about the company.
- Responsive Design: The layout is fully responsive and optimized for viewing on various devices, including desktops, tablets, and smartphones.
- Modern UI/UX: The website features a clean, modern design with a professional look and feel.
- Animations and Effects: Subtle animations and scroll-based reveal effects are used to enhance the user experience.
- Project Portfolio: A dedicated section to showcase the company's successfully delivered projects.
- SEO & GEO Optimized: Includes comprehensive meta tags, structured data (JSON-LD), and clear, semantically structured content to enhance visibility for both traditional search engines and generative AI models.
- Well-Commented Code: HTML files now include comments for better understanding of sections and elements.

## Pages

- Home: `index.html` — An overview of the company with key statistics and featured projects.
- About Us: `about.html` — Detailed information about the company's history, team, and values.
- Services: `services.html` — A comprehensive list of the engineering services offered.
- Projects: `projects.html` — A portfolio of the company's major projects.
- Contact: `contact.html` — Contact information and a form to get in touch.
- Privacy Policy: `privacy.html` — The company's privacy policy.
- Terms of Use: `terms.html` — The terms of use for the website.
- Disclaimer: `disclaimer.html` — The disclaimer for the website.

## Technologies and Dependencies

- HTML5: For the structure and content of the web pages.
- CSS3: For custom styling and animations, located in `styles/style.css`.
- JavaScript: For interactive elements like the image carousel and scroll animations, located in `scripts/app.js`.
- Tailwind CSS: Utility-first styling via CDN for now.
- Google Fonts: The 'Inter' font family for typography.
- Font Awesome: Icons via CDN link.

## Design and Styling

### Typography

- Font Family: 'Inter', sans-serif
- Weights: 400, 500, 700, 900

### Color Palette

- Primary Red: `#dc2626` (accents and CTAs)
- Primary Blue: `#2563eb` (accents)
- Dark Gray: `#111827` (backgrounds)
- Medium Gray: `#4b5563` (text)
- Light Gray: `#f3f4f6` (content backgrounds)

### Animations

The website uses custom animations to enhance the user experience:

- Reveal on Scroll: Elements fade and slide into view as the user scrolls down the page, powered by the `.reveal-on-scroll` class.
- Project Animations: The projects page features staggered animations for project cards, using the `.project-animate` class.

## Getting Started

To view the website, simply open any of the `.html` files in your web browser. No special setup or dependencies are required.

```bash
# For example, on Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

## File Structure

The project is organized into the following directory structure:

```text
.
├── images/         # Contains all the images used in the website
├── scripts/        # Contains JavaScript files
│   └── app.js
├── styles/         # Contains CSS files
│   └── style.css
├── .gitignore      # Git ignore file
├── 404.html        # 404 error page
├── about.html      # About Us page
├── contact.html    # Contact page
├── disclaimer.html # Disclaimer page
├── index.html      # Home page
├── privacy.html    # Privacy Policy page
├── projects.html   # Projects page
├── README.md       # This file
├── services.html   # Services page
├── sitemap.xml     # Sitemap for search engines
├── terms.html      # Terms of Use page
└── ... and other miscellaneous files
```

---

© 2024 T.A. Engineering. All Rights Reserved.
