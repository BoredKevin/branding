# boredkevin/branding

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/badge/npm-%40boredkevin%2Fbranding-crimson.svg)](https://www.npmjs.com/package/@boredkevin/branding)
[![GitHub Repository](https://img.shields.io/badge/GitHub-boredkevin%2Fbranding-181717.svg?logo=github)](https://github.com/boredkevin/branding)

`boredkevin/branding` is a package of dark-theme styles, colors, fonts, and React components for building clean, fast web apps.

---

## How it works

- **One place for all tokens**: Colors, spacing, and fonts are stored in `tokens.json`. This keeps the CSS and TypeScript types in sync.
- **Works with any build setup**: Ready to use with modern bundlers (ESM and CommonJS) and comes with full TypeScript types and a plain CSS stylesheet.

---

## Quick start

### Install the package

```bash
# npm
npm install @boredkevin/branding

# pnpm
pnpm add @boredkevin/branding

# yarn
yarn add @boredkevin/branding
```

### 1. Import the stylesheet

Add the base stylesheet and token variables near the top of the application entry point (such as `main.tsx` or `App.tsx`):

```tsx
import '@boredkevin/branding/style.css';
```

### 2. Use the React components

Components can be imported directly:

```tsx
import { ChamferFrame, Button, Badge } from '@boredkevin/branding';

export function StatusCard() {
  return (
    <ChamferFrame cut="md">
      <Badge variant="red" size="sm">ONLINE</Badge>
      <h2>System Monitor</h2>
      <p>All background workers running normally.</p>
      <Button variant="primary" onClick={() => console.log('Action triggered')}>
        Run Diagnostics
      </Button>
    </ChamferFrame>
  );
}
```

### 3. Access design tokens directly

Raw token values (such as hex codes or font stacks) can be accessed programmatically in JavaScript or configuration files:

```tsx
import { BKVN_TOKENS } from '@boredkevin/branding';

console.log(BKVN_TOKENS.colors.bg);          // #050507
console.log(BKVN_TOKENS.colors.red);         // #d92626
console.log(BKVN_TOKENS.typography.primary);  // Plus Jakarta Sans, sans-serif
```


---

## What is inside

### Colors

The palette uses deep dark backgrounds with crisp text and red accents:

| Token | Value | Use case |
| :--- | :--- | :--- |
| `--bkvn-bg` | `#050507` | Main page background |
| `--bkvn-bg-alt` | `#0a0b0e` | Cards and panels |
| `--bkvn-bg-elevated` | `#11131a` | Modals and popups |
| `--bkvn-text-primary` | `#ffffff` | Headings and white text |
| `--bkvn-text-secondary` | `#949ba8` | Paragraphs and body text |
| `--bkvn-text-muted` | `#787f91` | Labels and small captions |
| `--bkvn-red` | `#d92626` | Buttons and highlights |
| `--bkvn-border` | `rgba(255, 255, 255, 0.08)` | Card borders |

### Fonts

- **Plus Jakarta Sans**: Body text and labels.
- **JetBrains Mono**: Buttons, code blocks, and data numbers.
- **Albatross & HS Luna Obscura**: Headers and logo marks.

### Components

- **ChamferFrame**: A box container with cut-corner angles.
- **Button**: A button with different styles (`primary`, `secondary`, `ghost`) that can also work as a link (`as="a"`).
- **Modal**: A popup dialog that closes with the Escape key or by clicking outside.
- **Form inputs**: Checkboxes, radio buttons, switches, and sliders.
- **Widgets**: Audio equalizer bars, number counters, and token viewers.

---

## Local Development

To run the demo site on your own computer:

```bash
# Clone the repository
git clone https://github.com/boredkevin/branding.git
cd branding

# Install dependencies
npm install

# Start the demo site on localhost:3000
npm run dev

# Run the test suite
npm run test

# Build the package for publishing
npm run build
```

---

## Testing

Tests run using Vitest and React Testing Library to make sure components render properly, handle clicks, and support keyboard navigation.

```bash
npm run test
```

---

## License

- **Code and Components**: MIT License. Free to use and learn from.
- **Fonts**: Bundled under the SIL Open Font License 1.1.
- **Brand Identity**: The "BoredKevin" name, logos, and brand marks are proprietary and remain reserved.

