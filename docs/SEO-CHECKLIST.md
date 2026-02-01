# Lume Website – SEO Checklist

## ✅ Done in Code

- **Page titles** – Unique title per page via `useSEO()` hook (e.g. "Pricing | Lume – Retail Growth").
- **Meta description** – Set per page; default in `index.html`.
- **Favicon** – `/favicon.ico` in `index.html`.
- **Apple touch icon** – Link added; add `public/apple-touch-icon.png` (180×180) for best results.
- **Image alt text** – Hero and key images have descriptive alt; decorative icons use `role="presentation"` where `alt=""`.
- **robots.txt** – Allow all; Sitemap URL added (update domain if different).
- **sitemap.xml** – In `public/`; update `https://lume.apeiros.ai` to your live domain.

## 🔧 You Should Do

### 1. Duplicate headings
- Scan pages: ensure only one `<h1>` per page and no repeated `<h2>`/`<h3>` text.
- Use headings for structure (H1 → H2 → H3), not for styling.

### 2. Sentence length
- Keep sentences under ~20 words where possible; break long copy in `LanguageContext` or CMS.

### 3. Duplicate Hindi text
- In `LanguageContext.tsx`, avoid same Hindi line in multiple keys; rephrase or reference one key.

### 4. Internal anchor text
- Use descriptive links: e.g. "Book a demo" instead of "Click here"; "View pricing plans" instead of "Learn more".
- Already improved where `Link` components use `t()` or clear text.

### 5. Apple touch icon
- Add `public/apple-touch-icon.png` (180×180 px) for iOS home screen.

### 6. Backlink building (off-site)
- Share blog posts, case studies, and guides; reach out to retail/tech sites for links.
- Submit to relevant directories (e.g. G2, Capterra, IndiaMART if applicable).
- Use consistent brand name "Lume" and "Apeiros AI" in press and guest posts.

## Domain

Replace `https://lume.apeiros.ai` in `public/robots.txt` and `public/sitemap.xml` with your actual live domain.
