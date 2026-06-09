Create a new page for this React/Vite website. The page name, route, and purpose will be provided as arguments.

Follow these rules:

**File placement**
- Save to `src/pages/` (or appropriate subfolder)
- Default export, `.tsx` extension
- Register the route in `src/App.tsx` inside the existing `<Routes>` block

**Page anatomy (every page must have)**
1. `<Header />` from `src/components/layout/Header.tsx` at the top
2. `<Footer />` from `src/components/layout/Footer.tsx` at the bottom
3. `<main>` wrapping the page body with `role="main"`
4. A single prominent `<h1>` with the primary keyword for this page

**SEO — critical for this marketing website**
- `<title>` tag: format `{Page Topic} | Lume — Retail Billing & Growth Platform`
- Meta description: 140–160 chars, includes primary keyword, action-oriented
- Open Graph tags: `og:title`, `og:description`, `og:type` (website), `og:url`
- Use `react-helmet` or a `<head>` injection approach consistent with how other pages handle it (check `src/pages/Index.tsx` for the pattern)
- Canonical URL if the page has a clean slug
- Heading hierarchy: `h1` → `h2` → `h3` — never skip levels
- `<section>` elements with meaningful `aria-label` or `aria-labelledby`

**Responsiveness**
- Mobile-first layout — stack on mobile, multi-column on `md:` and above
- Hero sections: full-width on mobile, constrained `max-w-7xl mx-auto` on desktop
- All images need `width` + `height` attributes or `aspect-ratio` to prevent layout shift (CLS)
- Lazy-load below-the-fold images: `loading="lazy"`

**Performance**
- Heavy sections below the fold: consider lazy imports with `React.lazy` + `Suspense`
- No layout shift: reserve space for images, avoid font-size jumps

**Translations**
- All user-visible text must use `const { t } = useLanguage()` from `@/contexts/LanguageContext`
- Add the new translation keys for both `EN` and `HI` entries in `LanguageContext.tsx`

After generating the page file, also output the exact `<Route>` line to add to `App.tsx`, and list every new translation key added.
