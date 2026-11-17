# Portfolio Revamp: build TODO

The v1 design is done. This is the Vue 3 build, phase by phase. Get each phase working end to end before you start the next one.

- Design system: https://claude.ai/artifact/4Y1DYggSKuPpfHKxS5Jvgd
- Screens (desktop 1440 + mobile 390, plus the interaction states board): https://claude.ai/artifact/Kzr4Sjs8wE4WggxLyvsnoi
- Figma: Portfolio Revamp (`TjEddGajDyIiFTKW1xISoo`)

---

## Phase 0: Project setup
- [ ] Scaffold Vue 3 + TypeScript + Vite (`npm create vue@latest`). Add Vue Router, leave out Pinia for now
- [ ] Styling: plain modern CSS (custom properties, native nesting, `color-mix`) in Vue `<style scoped>`. No preprocessor. Add Sass later only if you really miss mixins
- [ ] ESLint + Prettier, and a `type-check` script
- [ ] Folder structure: `src/styles`, `src/components`, `src/pages`, `src/assets/{icons,photos}`, `src/content`
- [ ] Routes: `/`, `/about`, `/projects`, `/projects/pro-zaga`, `/projects/portfolio`, `/gallery`, plus a 404
- [ ] Scroll to top when the route changes (`scrollBehavior`)
- [ ] Push the repo to GitHub (you'll need this link for the portfolio case study anyway)

## Phase 1: Foundations (tokens and global styles)
- [ ] `styles/tokens.css`: the 8 colour tokens as CSS custom properties (ink, muted, accent, surface, surface-raised, line, line-strong, etc.)
- [ ] Type scale: the 9 type styles as utility classes (e.g. `.t-display`, `.t-mono-sm`)
- [ ] Spacing scale, and the 2 corner styles (square and pill)
- [ ] Fonts: JetBrains Mono, plus Clash Display with a **Space Grotesk fallback** until you have the font files
- [ ] `styles/base.css`: reset, one background colour, and the 830px single column with 120px between sections
- [ ] Scope bare-link styles with `a:where(:not([class]))` so they never override component classes
- [ ] Global motion: 150ms colour transitions, all turned off under `prefers-reduced-motion`
- [ ] Global focus: `:focus-visible` only, 2px solid accent, 3px offset. Never remove it

## Phase 2: Components
Build them in this order, simplest first. Check each one against the interaction states board.

- [ ] **Icon**: camera, code, git, server, mail, LinkedIn, Instagram, arrows (inline SVG, `currentColor`)
- [ ] **Logo**: the "Content" panda; rotates 6° on hover so it stands upright
- [ ] **Button**: primary and filled variants
  - [ ] Hover: fill steps toward ink (`color-mix` 82/18) and the label keeps its colour. Primary gets surface-raised plus the line-strong outline
  - [ ] Pressed: `translateY(1px)`. Disabled: opacity .4, no hover
- [ ] **Tag**
- [ ] **NavLink**, including the quiet link variant (`bm-link-quiet`: muted, underline only on hover) for "← Projects"
- [ ] **Navigation**: About, Projects, Gallery
- [ ] **SectionHeader**
- [ ] **InfoRow**
- [ ] **ContactRow**
- [ ] **ProjectRow**
  - [ ] Clickable end to end via a stretched link (`::after`, `inset: 0`)
  - [ ] Hover: title and bottom rule go accent, status goes ink
  - [ ] Focus ring with a 6px offset
- [ ] **PhotoCard**: `ratio` prop (portrait 223:267 default, landscape 3:2, square) and `position` prop (object-position)
- [ ] **Footer**
- [ ] Optional: a throwaway `/_components` route that shows every component in every state, so you can check it against the board

## Phase 3: Pages
Keep the copy in `src/content/*.ts` so the components stay free of hardcoded text.

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
- [ ] Portfolio case study

### Gallery
- [ ] Personal work: Still water, Steel dancers, The dam, No. 28, Cable car, Market square
- [ ] Client work (BR Frames): Matric dance, The details, 60th birthday, Family, Portraits, Celebrations
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
- [ ] Self-host fonts with `font-display: swap`, and preload the display face
- [ ] Page titles and meta descriptions per route
- [ ] Open Graph image (the panda) and a favicon
- [ ] Consider prerendering or SSG (e.g. `vite-ssg`) so the pages are crawlable

## Phase 6: Deploy
- [ ] Pick a host (Netlify, Vercel, Cloudflare Pages or your homelab) and set up SPA fallback routing
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
- [ ] Clash Display font files
- [ ] **Consent from the people in the client photos**, including a parent or guardian for the matric dance subject if she's under 18. **Don't publish the client gallery until you have this.**
- [ ] Swap the placeholder photos for the real selection

## Copy facts (keep these consistent)
- Spell it **WeThinkCode_**, with the underscore
- Started taking photos in 2023, Canon R50 in 2024. Never write "over a decade"
- Bookings: brframesphotos@gmail.com · Instagram @brframes.za
- LinkedIn: https://www.linkedin.com/in/babahle/
- Pro-Zaga's front end is Vue 3
