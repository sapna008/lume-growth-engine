Create a new React component for this project. The component name and any props/description will be provided as arguments.

Follow these rules strictly:

**File & structure**
- Place in `src/components/` (or a relevant subfolder if provided)
- Use `.tsx` extension, named export, PascalCase filename matching the component name
- Import from `@/` alias, never relative `../../`

**Responsiveness — non-negotiable**
- Mobile-first Tailwind classes: start with base (mobile), then `sm:`, `md:`, `lg:`, `xl:`
- Never hardcode pixel widths; use Tailwind's fluid sizing (`w-full`, `max-w-*`, `container`)
- Touch targets minimum `44px` — use `min-h-[44px]` or `p-3` on interactive elements
- Test mentally: does this look correct at 375px, 768px, and 1280px?

**Tailwind & design system**
- Use design tokens from `tailwind.config` — no arbitrary values unless unavoidable
- Spacing scale: `4, 6, 8, 12, 16, 24` are the common steps — stay on the scale
- Typography: use `font-display` for headings, `font-body` for body text (per project config)
- Shadows and radii: match existing component patterns from `src/components/ui/`

**shadcn/ui**
- Always check `src/components/ui/` first — if a primitive exists (Button, Card, Dialog, etc.), use it
- Never re-implement what shadcn already provides

**Accessibility**
- Semantic HTML: `<section>`, `<article>`, `<nav>`, `<header>`, `<main>` over generic `<div>`
- Interactive elements need accessible labels: `aria-label`, `aria-labelledby`, or visible text
- Images need descriptive `alt` text (empty string `alt=""` only for decorative images)
- Keyboard navigable — no click-only interactions

**SEO (for page-level or content components)**
- Use heading hierarchy: one `<h1>` per page, then `<h2>` / `<h3>` in order
- Avoid `<div>` where a semantic element fits
- If the component contains a primary heading, expose it as a prop so pages can pass the right keyword-rich text

**Code quality**
- No `console.log`
- No inline `style={{}}` unless absolutely required (Framer Motion exceptions are fine)
- TypeScript: define a `Props` interface above the component
- Framer Motion: use `motion.*` for entrance animations — `initial`, `animate`, `viewport` + `once: true` for scroll-triggered

Generate the full file content ready to save, then confirm the file path.
