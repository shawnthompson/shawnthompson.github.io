# Copilot Instructions — shawnthompson.ca

## Project Overview

Personal portfolio/blog for Shawn Thompson, built with **Eleventy 3.x** (static site generator) and **Bootstrap 5.3** (CDN). Compiled Sass for custom styles. Deployed to **Netlify**.

## Development Commands

- `npm start` — local dev with Eleventy + Sass watch (parallel)
- `npm run build` — production build (compressed Sass then Eleventy)
- `npm run cms` — local dev with Decap CMS proxy server
- `npm run debug` — Eleventy with full debug logging

Sass is compiled separately from Eleventy via npm scripts (`src/_scss/base.scss` → `_site/static/css/custom.css`). There is no Eleventy Sass plugin.

## Directory Structure

| Path | Purpose |
|------|---------|
| `src/` | Eleventy input directory |
| `src/_data/metadata.json` | Global site metadata (title, description, url) |
| `src/_includes/layouts/` | Nunjucks layouts: `base.njk` (primary), `pouzza.njk` (minimal, no header/toggle) |
| `src/_includes/components/` | Nunjucks partials: `head.njk`, `header.njk`, `footer.njk`, `toggle-button.njk`, `svg.njk`, `js.njk` |
| `src/_scss/base.scss` | Custom styles (Bootstrap loaded via CDN, not Sass) |
| `src/blog/{en,fr}/` | Blog posts in English and French |
| `src/pages/` | Static pages, organized by section (`a11yto/`, `mac/`, `pouzza/`) |
| `src/beers/` | Homebrew beer log (tagged `beer`) |
| `src/static/` | Passthrough-copied static assets (JS, favicons) |
| `_site/` | Build output (do not edit) |

## Content Conventions

### Front Matter

Every content section uses a **directory data file** (`.json`) to set shared `layout` and `permalink`:

- `src/blog/blog.json` — `permalink: "/{{ title | slugify }}/"` (flat URLs for both EN/FR)
- `src/pages/pages.json` — `permalink: "/{{ title | slugify }}/"`
- `src/pages/a11yto/a11yto.json` — `permalink: "/a11yto/{{ title | slugify }}/"`
- `src/pages/a11yto/fr/fr.json` — `permalink: "/fr/a11yto/{{ title | slugify }}/"`, `locale: "fr"`

Individual pages override `permalink` only when needed (e.g. home → `/`, contact → `/contact/`).

Common front matter fields: `title`, `date` (YYYY-MM-DD), `description` (doubles as meta description and visual subtitle), `layout`, `permalink`, `locale`, `otherLangLink`, `otherLangTitle`, `eleventyNavigation`.

### Bilingual (EN/FR) Pattern

Bilingual support is minimal and not a current priority. Existing French content is manual (no i18n plugin) and may not be expanded:

- **Blog**: parallel files in `src/blog/en/` and `src/blog/fr/` sharing one `blog.json`. French posts get a French-slugified URL (no `/fr/` prefix).
- **a11yTO talks**: English in `src/pages/a11yto/`, French in `src/pages/a11yto/fr/`. French directory data adds `locale: "fr"` and `/fr/` URL prefix.
- **Language switching** between pages uses `otherLangLink` (full path) on index pages or `otherLangTitle` (slugified at render time) on sub-pages.
- Set `locale: "fr"` in front matter or directory data to get `lang="fr"` on `<html>` and French labels in the theme toggle component.

New content defaults to English only unless explicitly requested.

### Permalink Style

Use trailing-slash directory-style permalinks (`/page-slug/`). Exception: Pouzza day pages use `.html` extensions.

## Templating

- **Template engine**: Nunjucks for HTML/includes, Liquid for Markdown content (see `.eleventy.js` `markdownTemplateEngine`).
- **Layouts**: always reference as `layouts/base.njk` or `layouts/pouzza.njk` in front matter.
- **Title/description cascade**: `renderData.title or title or metadata.title` — same pattern for description.
- Components use `{% include "components/name.njk" %}` syntax.

## Accessibility

This is an accessibility professional's site. When editing:

- Maintain `aria-invalid`, `aria-live`, and `aria-describedby` patterns in form validation ([src/static/js/script.js](src/static/js/script.js))
- Keep the theme toggle keyboard-accessible with proper `aria-label` attributes
- Use semantic HTML elements (`<main>`, `<header>`, `<footer>`, `<nav>`)
- Ensure all images have meaningful `alt` text
