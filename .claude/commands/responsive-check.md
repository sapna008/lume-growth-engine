Audit the file or component provided as an argument for responsive design issues. If no argument given, audit the active file.

**Breakpoints to verify** (Tailwind defaults used in this project):
- `sm` — 640px (large phones, landscape)
- `md` — 768px (tablets)
- `lg` — 1024px (small laptops)
- `xl` — 1280px (desktop)

Go through every layout element and check:

**Layout**
- [ ] No hardcoded pixel widths on containers (`w-[500px]` etc.) — use fluid sizing
- [ ] Flex/grid containers stack correctly on mobile (`flex-col` on base, `flex-row` on `md:`)
- [ ] Grid columns collapse properly (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- [ ] `overflow-hidden` used where needed to prevent horizontal scroll on mobile
- [ ] Padding/margin scales down on mobile (not the same as desktop)

**Typography**
- [ ] Font sizes scale: smaller base, larger on `md:` and `lg:` (`text-2xl md:text-4xl lg:text-5xl`)
- [ ] Line lengths stay readable — `max-w-prose` or `max-w-2xl` on body text
- [ ] No text overflow/truncation unintentionally on small screens

**Images & media**
- [ ] Images use `w-full` or a fluid width, not fixed pixels
- [ ] `object-cover`/`object-contain` set appropriately
- [ ] Hero images: different aspect ratios considered for mobile vs desktop (use `aspect-video` or `aspect-square` conditionally)

**Interactive elements**
- [ ] Touch targets ≥ 44px — buttons/links should have `min-h-[44px]` or sufficient padding
- [ ] Hover states have tap equivalents (no hover-only functionality)
- [ ] Modals/drawers sized correctly on mobile (avoid `w-[600px]` on mobile — use `w-full sm:w-[600px]`)

**Navigation (if present)**
- [ ] Mobile nav exists and is accessible (hamburger menu or drawer)
- [ ] Desktop nav hidden on mobile (`hidden md:flex`)

For each issue found:
1. Show the problematic Tailwind class or JSX snippet
2. Explain the breakpoint where it breaks
3. Provide the corrected responsive classes

End with a summary table: Component | Issues Found | Severity (High/Med/Low)
