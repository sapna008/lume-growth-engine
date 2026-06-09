Do a comprehensive UI/UX quality review of the file or component provided as an argument. If no argument given, review the active file.

You are reviewing as a senior UI designer and frontend engineer. Be opinionated and specific.

**Visual design**
- [ ] Spacing consistent with the 4px grid (Tailwind scale: 1=4px, 2=8px, 4=16px, 6=24px, 8=32px)
- [ ] Color usage follows the design system — no arbitrary hex values in className
- [ ] Typography hierarchy clear — headings visually distinct from body text
- [ ] Sufficient contrast — text on colored backgrounds passes WCAG AA (4.5:1 for normal text)
- [ ] Shadows consistent with the rest of the site (`shadow-sm`, `shadow-md` — no custom box-shadow inline)
- [ ] Border radii consistent (`rounded-lg`, `rounded-xl` — pick one convention per component type)

**Motion & animation**
- [ ] Animations use Framer Motion, not CSS transitions alone (for complex sequences)
- [ ] Entrance animations: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` pattern
- [ ] Scroll-triggered: `whileInView` with `viewport={{ once: true }}` so they don't repeat
- [ ] Duration appropriate — 200–400ms for UI feedback, 500–700ms for entrance animations
- [ ] No animation on elements that are above the fold on initial load (causes jarring flash)

**Component quality**
- [ ] Reusing shadcn/ui primitives from `src/components/ui/` where applicable
- [ ] No copy-pasted styling blocks — abstract into shared component if used 3+ times
- [ ] Loading/empty/error states handled (not just the happy path)
- [ ] No layout shift when content loads

**Interaction design**
- [ ] Hover states on all interactive elements
- [ ] Focus ring visible (not `outline-none` without a replacement)
- [ ] Disabled states styled differently from enabled
- [ ] CTAs (buttons) have clear visual hierarchy — one primary CTA per section

**Content & copy**
- [ ] Headlines are action/benefit-oriented (not just descriptive)
- [ ] CTAs use action verbs ("Book a Demo", "See Features" — not "Learn More")
- [ ] No Lorem ipsum or placeholder text left

For each issue: quote the exact JSX snippet, explain the visual/UX impact, provide the fix.

End with: Top 3 highest-impact improvements for this component.
