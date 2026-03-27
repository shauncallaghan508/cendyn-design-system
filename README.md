# Cendyn Design System

Tailwind CSS preset (design tokens), Cerebri Sans font assets, and a shared `input.css` of component patterns for Cendyn product UIs.

## Install in your project

### 1. Add the package and Tailwind

Install this repo with npm (package name **`@cendyn/design-system`**) and the Tailwind v3 toolchain:

```bash
npm install github:shauncallaghan508/cendyn-design-system#master
npm install -D tailwindcss@3 postcss autoprefixer
```

**Repository:** [github.com/shauncallaghan508/cendyn-design-system](https://github.com/shauncallaghan508/cendyn-design-system)

Use **`#main`** instead of **`#master`** if that is your default branch. Pin a tag for repeatable builds, e.g. `#v1.0.0`.

HTTPS-equivalent install:

```bash
npm install https://github.com/shauncallaghan508/cendyn-design-system.git#master
npm install -D tailwindcss@3 postcss autoprefixer
```

**Monorepo / local checkout:** point `package.json` at a folder:

```json
"@cendyn/design-system": "file:../cendyn-design-system"
```

Then `npm install`.

### 2. Initialize Tailwind (new apps)

```bash
npx tailwindcss init -p
```

If you see **`could not determine executable to run`**, you have Tailwind v4 selected. Use v3 for this design system: `npm install -D tailwindcss@3 postcss autoprefixer` ([Tailwind v4 CLI changes](https://github.com/tailwindlabs/tailwindcss/discussions/16992)).

### 3. Wire up the preset

In **`tailwind.config.js`**:

```js
module.exports = {
  presets: [require('@cendyn/design-system')],
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
};
```

Expand `content` so every file that uses utility classes is included.

### 4. CSS entry

**Recommended — tokens + fonts + component layer (buttons, modals, forms, etc.):**

Use a single import in your main CSS file processed by Tailwind:

```css
@import "@cendyn/design-system/input.css";
```

**Minimal — tokens and fonts only** (you build your own components):

```css
@import "@cendyn/design-system/fonts.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Build your CSS as usual, for example:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css
```

Add a `build:css` script if you like.

## Why Tailwind CSS v3 (not the latest v4)?

**Latest Tailwind is v4**, but this design system is built on the **v3** model on purpose:

- **`preset.js`** is a classic **`tailwind.config.js` preset** (`theme.extend`, etc.). Tailwind v4 moves toward CSS-first configuration and a different plugin/tooling surface; this preset is not ported to that model yet.
- **`input.css`** relies on **`@tailwind base/components/utilities`** and **`@layer`**, which match the v3 PostCSS CLI flow you get with `tailwindcss@3`.
- Upgrading to v4 would mean reworking the preset, rebuilding how global and component styles are loaded, and re-validating every utility and custom component class — it is a separate migration, not a version bump.

Until that migration exists in this repo, use **`tailwindcss@3`** in apps that consume this package so the CLI, config, and CSS entry behave as documented.

## Tokens you get from the preset

| Category | Examples |
|---|---|
| Colors | `bg-primary`, `text-neutrals-gray-700`, `border-neutrals-gray-400`, `bg-success-10` |
| Typography | `text-heading-1`, `text-paragraph-2`, `text-display-3`, `text-smallcaps` |
| Spacing | `p-space-16`, `gap-space-24`, `mb-space-36` |
| Border radius | `rounded-card`, `rounded-button`, `rounded-input`, `rounded-badge` |
| Shadows | `shadow-card`, `shadow-card-hover`, `shadow-dropdown`, `shadow-modal` |
| Sizing | `w-icon`, `h-icon-sm`, `w-avatar-lg`, `h-avatar-xl` |

## Component reference (this repository)

To browse static HTML examples and copy markup: clone this repo, run **`npm install`**, then **`npm run build:docs`**, and open **`docs/index.html`** in a browser (or serve the `docs` folder). Use **`npm run build:docs:watch`** while editing.
