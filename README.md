# portfolio-v2

My personal portfolio: development work, photography (BR Frames) and a bit about me. It's a rebuild of v1, made with Vue 3, TypeScript and Vite.

## Stack

- Vue 3 (Composition API, `<script setup>`) + TypeScript
- Vue Router
- Vite
- Plain modern CSS: custom properties, native nesting, `color-mix`, all in `<style scoped>`
- ESLint + oxlint + Prettier

## Getting started

Requires Node `^22.18.0` or `>=24.12.0`.

```sh
npm install
npm run dev
```

## Scripts

| Command              | What it does                                  |
| -------------------- | --------------------------------------------- |
| `npm run dev`        | Start the dev server with hot reload          |
| `npm run build`      | Type-check and build for production (`dist/`) |
| `npm run preview`    | Serve the production build locally            |
| `npm run type-check` | Run `vue-tsc`                                 |
| `npm run lint`       | Run oxlint, then ESLint (both auto-fix)       |
| `npm run format`     | Format `src/` with Prettier                   |

## Structure

```
src/
  styles/      tokens.css, base.css (global only)
  components/  design-system components
  pages/       one file per route
  content/     page copy as typed TS objects
  assets/      icons/, photos/
  router/      route table
```

## Routes

| Path                  | Page                     |
| --------------------- | ------------------------ |
| `/`                   | `HomePage`               |
| `/about`              | `AboutPage`              |
| `/projects`           | `ProjectsPage`           |
| `/projects/pro-zaga`  | `ProZagaCaseStudyPage`   |
| `/projects/portfolio` | `PortfolioCaseStudyPage` |
| `/gallery`            | `GalleryPage`            |
| anything else         | `NotFoundPage`           |

## Design

- Design system: https://claude.ai/artifact/4Y1DYggSKuPpfHKxS5Jvgd
- Screens and interaction states: https://claude.ai/artifact/Kzr4Sjs8wE4WggxLyvsnoi
- Figma: Portfolio Revamp

The build plan is in [`TODO.md`](./TODO.md).
