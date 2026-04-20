# Froy

Production-oriented Vue 3 landing starter: **Vite**, **Tailwind CSS v4** (`@theme` tokens), **Pinia**, **Vue Router**, **ESLint**, and **Prettier**.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Local dev server             |
| `npm run build`   | Typecheck + production build |
| `npm run preview` | Preview the production build |
| `npm run lint`    | ESLint (zero warnings)       |
| `npm run format`  | Prettier write               |

## Project layout

```
src/
  assets/           # Static assets (images, fonts)
  components/
    layout/         # Shell: header, footer
    sections/       # Landing sections (hero, features, CTA)
    ui/             # Reusable primitives (buttons, containers)
  composables/      # Shared composition helpers
  lib/              # Constants, small pure helpers
  router/           # Vue Router setup & route definitions
  stores/           # Pinia stores
  styles/           # Global CSS (Tailwind entry + `@theme`)
  types/            # Shared TypeScript types
  views/            # Route-level views
```

Path alias: `@/` → `src/` (see `vite.config.ts` and `tsconfig.app.json`).

## Customize

- **Brand & theme:** edit `src/styles/main.css` (`@theme { ... }`).
- **Copy & nav:** `src/lib/constants.ts`.
- **New page:** add a view under `src/views/`, register the route in `src/router/index.ts`.
# Froy
