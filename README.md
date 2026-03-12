# Cendyn Design System

A Tailwind preset and documentation for the Cendyn product design system. Use the preset in any codebase; copy component markup from the docs.

## Install

```bash
npm install @cendyn/design-system tailwindcss
```

## Usage

In your `tailwind.config.js`:

```js
module.exports = {
  presets: [require('@cendyn/design-system')],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
};
```

You get theme tokens (colors, spacing, typography, radius, shadow). Use classes like `bg-primary`, `text-primary`, `rounded-card`, `shadow-modal`, etc. Component markup is not included — copy HTML and class names from the documentation.

## Documentation

To view the docs locally:

1. Build the docs CSS: `npm run build:docs`
2. Open `docs/index.html` in a browser (or use a local server).

To watch and rebuild on change: `npm run build:docs:watch`.

## Project structure

- `preset.js` — Tailwind preset (theme tokens). This is the published package.
- `docs/` — Static HTML documentation (overview, tokens reference, component pages with copyable snippets).
- `tailwind.config.js` — Used only to build `docs/css/docs.css`.

## Updating tokens from Figma

Edit `preset.js` to match your Figma variables (colors, spacing, typography, border radius, shadows). You can export variables from Figma and map them into the preset manually or with a small script.
