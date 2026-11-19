# Portfolio Revamp: build TODO

The v1 design is done. This is the Vue 3 build, phase by phase. Get each phase working end to end before you start the next one.

- Design system: https://claude.ai/artifact/4Y1DYggSKuPpfHKxS5Jvgd
- Screens (desktop 1440 + mobile 390, plus the interaction states board): https://claude.ai/artifact/Kzr4Sjs8wE4WggxLyvsnoi
- Figma: Portfolio Revamp (`TjEddGajDyIiFTKW1xISoo`)
- Every value below has a token in `src/styles/tokens.css`. If one is missing, add the token first, then use it

---

## Phase 0: Project setup ✅
- [x] Scaffold Vue 3 + TypeScript + Vite (`npm create vue@latest`). Add Vue Router, leave out Pinia for now
- [x] Styling: plain modern CSS (custom properties, native nesting, `color-mix`) in Vue `<style scoped>`. No preprocessor. Add Sass later only if you really miss mixins
- [x] ESLint + Prettier, and a `type-check` script
- [x] Folder structure: `src/styles`, `src/components`, `src/pages`, `src/assets/{icons,photos,fonts}`, `src/content`
- [x] Routes: `/`, `/about`, `/projects`, `/projects/pro-zaga`, `/projects/portfolio`, `/gallery`, plus a 404
- [x] Scroll to top when the route changes (`scrollBehavior`)
- [x] Push the repo to GitHub (you'll need this link for the portfolio case study anyway)

## Phase 1: Foundations (tokens and global styles)

### `tokens.css` ✅
- [x] Colour tokens: accent, surface, surface-raised, on-accent, ink, ink-muted, line, line-strong
- [x] Type scale tokens (heading 1–6, body, small, caption)
- [x] Spacing scale, layout (`--column-width`, `--section-gap`, `--gutter`), the 2 corner styles (square and pill)
- [x] Interaction and motion tokens (focus ring, press nudge, hover mix, logo tilt, colour duration)
- [x] Fonts: JetBrains Mono (Fontsource) and Clash Display (self-hosted variable `.woff2`, `font-display: swap`), with Space Grotesk named as the fallback

### `base.css`
- [x] Type utilities: `.t-heading-1` to `.t-heading-6`, `.t-small` and `.t-caption`. Body text is styled on `body`, so there is no `.t-body`
- [x] One background colour (`--surface` on `body`)
- [ ] Reset: box sizing, default margins, media (images), form controls inheriting the font. Only keep rules you can explain
- [ ] Check the screens board: does anything break out of the column to full width? (This decides plain max-width vs a grid layout)
- [ ] Decide where the column lives: `App.vue` wrapper, per page, or a global class
- [ ] The 830px column (`--column-width`), centred, with side padding on mobile (390px). Add a mobile gutter token if the board has one
- [ ] 120px between sections (`--section-gap`). Watch the space before the first and after the last section
- [ ] Navigation and Footer use the wider `--gutter` (122px side margin), not the 830px column. Make sure the layout leaves room for that
- [ ] Bare-link styles scoped with `a:where(:not([class]))` so they never override component classes
- [ ] Global motion: 150ms colour transitions (`--duration-colour`), all turned off under `prefers-reduced-motion`
- [ ] Global focus: `:focus-visible` only, 2px solid accent, 3px offset. Never remove it
- [ ] Clean up the test markup in `HomePage.vue` once the foundations look right

## Phase 2: Components
Build them in this order, simplest first. Check each one against the interaction states board. Shells already exist for ContactRow, InfoRow, NavLink, PhotoCard, ProjectRow and SectionHeader.

- [ ] Decide on names for the single-word components (Icon, Logo, Button, Tag, Navigation, Footer). ESLint's `vue/multi-word-component-names` rejects them, and `Button`/`Footer` also clash with HTML elements. Then create their shells
- [ ] **Icon**: camera, code, git, server, mail, LinkedIn, Instagram, arrows (inline SVG, `currentColor`)
- [ ] **Logo**: the "Content" panda; rotates 6° (`--logo-tilt`) on hover so it stands upright
- [ ] **Button**: primary and filled variants
  - [ ] Hover: fill steps toward ink (`color-mix` 82/18) and the label keeps its colour. Primary gets surface-raised plus the line-strong outline
  - [ ] Pressed: `translateY(1px)`. Disabled: opacity .4, no hover
- [ ] **Tag**
- [ ] **NavLink**, including the quiet link variant (`bm-link-quiet`: muted, underline only on hover) for "← Projects"
- [ ] **Navigation**: About, Projects, Gallery (show the current page)
- [ ] **SectionHeader**
- [ ] **InfoRow**
- [ ] **ContactRow**
- [ ] **ProjectRow**
  - [ ] Clickable end to end via a stretched link (`::after`, `inset: 0`)
  - [ ] Hover: title and bottom rule go accent, status goes ink
  - [ ] Focus ring with a 6px offset (`--focus-ring-offset-row`)
- [ ] **PhotoCard**: `ratio` prop (portrait 223:267 default, landscape 3:2, square) and `position` prop (object-position)
- [ ] **Footer**
- [ ] Put Navigation and Footer in `App.vue` around `<RouterView />` so every page gets them
- [ ] Optional: a throwaway `/_components` route that shows every component in every state, so you can check it against the board

## Phase 3: Pages
Keep the copy in `src/content/*.ts` so the components stay free of hardcoded text.

- [ ] Design the content shapes for each page (what a project, a photo, a timeline entry looks like), then type them up in `src/content`

### Home
- [ ] Intro: logo, headline, "Currently" line, buttons
- [ ] 3-photo row (portrait crops): Nature (coot), Portraits, Streets (No. 28)
- [ ] Selected work: Pro-Zaga, This portfolio, Homelab (server icon, `infra` tag, **no IPs, ports or service details**), My photos
- [ ] A little about me
- [ ] Contact: email, LinkedIn, Instagram

### About
- [ ] Intro, with the "That's me" photo spot (placeholder for now)
- [ ] Where I came from
- [ ] Timeline: started coding 2018 → matric 2020 → WeThinkCode_ and GK Software 2023 → first photos 2023 → Canon R50 2024
- [ ] What I work with
- [ ] "Off the clock" line
- [ ] Book a shoot (BR Frames)

### Projects
- [ ] List page: Pro-Zaga and This portfolio
- [ ] Pro-Zaga case study (keep the current copy)
- [ ] Portfolio case study ("← Projects" quiet link back)

### Gallery
- [ ] Personal work: Still water, Steel dancers, The dam, No. 28, Cable car, Market square
- [ ] Client work (BR Frames): Matric dance, The details, 60th birthday, Family, Portraits, Celebrations. **Blocked on consent, see below**
- [ ] 2 columns of landscape photos on desktop, 1 on mobile
- [ ] "Book a shoot" call to action

### 404
- [ ] Simple page with a link back home

## Phase 4: Responsive and accessibility pass
- [ ] Check every page at 390, 768 and 1440 against the screens canvas
- [ ] Tab through every page; the focus ring is visible everywhere and the order makes sense
- [ ] Alt text on every photo
- [ ] Colour contrast check (muted text especially)
- [ ] Test with reduced motion turned on
- [ ] One `h1` per page and a sensible heading order
- [ ] Lighthouse: aim for 90+ across the board

## Phase 5: Performance and SEO
- [ ] Optimise photos: WebP/AVIF, `srcset` sizes, `loading="lazy"` below the fold, explicit width and height
- [x] Self-host fonts with `font-display: swap`
- [ ] Preload the Clash Display font file
- [ ] Page titles and meta descriptions per route
- [ ] Open Graph image (the panda) and a favicon
- [ ] Consider prerendering or SSG (e.g. `vite-ssg`) so the pages are crawlable

## Phase 6: Deploy
- [ ] Pick a host (Netlify, Vercel, Cloudflare Pages or your homelab) and set up SPA fallback routing. If it's the homelab, keep its details out of the repo
- [ ] Custom domain + HTTPS
- [ ] Deploy previews on PRs
- [ ] Final click-through on a real phone

---

## Blockers: content still to bring in
These don't block the build. Use placeholders and swap them in as they arrive.

- [ ] Photo of me for the About "That's me" spot
- [ ] Real GitHub links for Pro-Zaga and the portfolio
- [ ] CV link
- [ ] Decide on Instagram for Home: personal account or @brframes.za
- [ ] Pro-Zaga copy: revisit the "my partner and I" wording (left as is for now)
- [x] Clash Display font files
- [ ] **Consent from the people in the client photos**, including a parent or guardian for the matric dance subject if she's under 18. **Don't publish the client gallery until you have this.**
- [ ] Swap the placeholder photos for the real selection

## Copy facts (keep these consistent)
- Spell it **WeThinkCode_**, with the underscore
- Started coding in 2018, matric 2020, GK Software and WeThinkCode_ graduation in 2023
- Started taking photos in 2023, Canon R50 in 2024. Never write "over a decade"
- Bookings: brframesphotos@gmail.com · Instagram @brframes.za
- LinkedIn: https://www.linkedin.com/in/babahle/
- Pro-Zaga's front end is Vue 3
- The homelab: never publish IPs, ports or service details
