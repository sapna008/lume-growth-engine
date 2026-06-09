Perform a thorough SEO audit of the file(s) or page provided as an argument. If no argument is given, audit the currently open/active file.

Check every item in this list and report pass ✅ / fail ❌ / warning ⚠️:

**On-page fundamentals**
- [ ] Single `<h1>` per page — keyword-rich, not generic
- [ ] Heading hierarchy respected (h1 → h2 → h3, no skips)
- [ ] `<title>` tag present and follows format: `{Topic} | Lume — Retail Billing & Growth Platform`
- [ ] Meta description: 140–160 chars, includes primary keyword, action-oriented
- [ ] No duplicate headings on the same page

**Technical SEO**
- [ ] `og:title`, `og:description`, `og:type`, `og:url` Open Graph tags
- [ ] Images have descriptive `alt` text (not empty, not "image", not filename)
- [ ] Images have explicit `width` + `height` OR use `aspect-ratio` CSS (prevents CLS)
- [ ] Lazy-load (`loading="lazy"`) on below-the-fold images
- [ ] No orphan `<div>` where semantic element fits (`<section>`, `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`)
- [ ] Links have descriptive text — no "click here" or "read more"

**Translations (this project)**
- [ ] All text uses `t('key')` from `useLanguage()` — no hardcoded English strings in JSX
- [ ] Both EN and HI keys exist for every `t()` call in `src/contexts/LanguageContext.tsx`

**Performance signals (affects Core Web Vitals / rankings)**
- [ ] No layout shifts from unsized images or dynamic content insertion
- [ ] Fonts loaded with `font-display: swap` or preloaded in `index.html`
- [ ] No blocking scripts in `<head>` without `defer` or `async`

**For each failure or warning**, provide:
1. The exact line/element with the problem
2. Why it hurts SEO
3. The corrected code snippet

At the end, give a priority-sorted fix list (critical → important → nice-to-have).
