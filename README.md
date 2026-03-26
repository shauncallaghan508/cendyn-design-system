# Cendyn Design System

A Tailwind CSS preset, component styles, and documentation for the Cendyn product design system. Install the package in any project to get design tokens, font faces, and ready-made component classes.

## Install

```bash
npm install @cendyn/design-system tailwindcss
```

## Setup

### 1. Add the preset to your Tailwind config

In your project's `tailwind.config.js`:

```js
module.exports = {
  presets: [require('@cendyn/design-system')],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
};
```

This gives you all theme tokens: colors (`primary`, `neutrals`, `success`, `error`, `warning`, `info`), spacing (`space-4` through `space-40`), typography (`heading-1`–`heading-6`, `paragraph-1`, `paragraph-2`, `display-1`–`display-4`), border radii (`rounded-card`, `rounded-button`, `rounded-badge`), shadows (`shadow-card`, `shadow-dropdown`, `shadow-modal`), and icon/avatar sizing.

### 2. Import fonts

Add this once in your main CSS entry point (or JS/TS entry):

```css
@import "@cendyn/design-system/fonts.css";
```

This loads the Cerebri Sans font family (weights 400, 500, 600, 700) used by the preset's `font-sans` token.

### 3. Use component classes (optional)

The package includes `input.css` with pre-built component classes (buttons, modals, tooltips, forms, navigation, etc.). To include them in your Tailwind build, import it in your project's main CSS file:

```css
@import "@cendyn/design-system/fonts.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@cendyn/design-system/input.css";
```

This gives you classes like `.btn-solid-primary`, `.modal`, `.toast`, `.input-group`, `.tree-view`, `.toggle`, and many more. See the documentation for the full list and markup examples.

## Available tokens

| Category | Examples |
|---|---|
| Colors | `bg-primary`, `text-neutrals-gray-700`, `border-neutrals-gray-400`, `bg-success-10` |
| Typography | `text-heading-1`, `text-paragraph-2`, `text-display-3`, `text-smallcaps` |
| Spacing | `p-space-16`, `gap-space-24`, `mb-space-36` |
| Border radius | `rounded-card`, `rounded-button`, `rounded-input`, `rounded-badge` |
| Shadows | `shadow-card`, `shadow-card-hover`, `shadow-dropdown`, `shadow-modal` |
| Sizing | `w-icon`, `h-icon-sm`, `w-avatar-lg`, `h-avatar-xl` |

## Documentation

To view the component docs locally:

1. Build the docs CSS: `npm run build:docs`
2. Open `docs/index.html` in a browser (or use a local server).

To watch and rebuild on change: `npm run build:docs:watch`.

## Project structure

```
preset.js          — Tailwind preset (theme tokens). Published with the package.
input.css          — Component classes (@layer components). Published with the package.
fonts.css          — @font-face declarations for Cerebri Sans. Published with the package.
fonts/             — Woff font files. Published with the package.
docs/              — Static HTML documentation (overview, tokens, component pages).
tailwind.config.js — Used only to build docs/css/docs.css.
scripts/           — Helper scripts for generating doc pages.
```

## Updating tokens from Figma

Edit `preset.js` to match your Figma variables (colors, spacing, typography, border radius, shadows). You can export variables from Figma and map them into the preset manually or with a small script.
