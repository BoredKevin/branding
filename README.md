# boredkevin/branding

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/badge/npm-%40boredkevin%2Fbranding-crimson.svg)](https://www.npmjs.com/package/@boredkevin/branding)
[![GitHub Repository](https://img.shields.io/badge/GitHub-boredkevin%2Fbranding-181717.svg?logo=github)](https://github.com/boredkevin/branding)

`boredkevin/branding` is a package containing dark theme styles, colors, fonts, and React components for building clean, fast web applications.

---

## How it works

- **Single source of truth for tokens**: Colors, spacing, and fonts are stored in `tokens.json`. This keeps CSS and TypeScript types in sync.
- **Compatible with various build setups**: Ready to use with modern bundlers (ESM and CommonJS) and includes full TypeScript types and standard CSS stylesheets.

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

Add the base stylesheet and token variables at the top of your application's entry point (e.g., `main.tsx` or `App.tsx`):

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

Raw token values ​​(such as hex codes or fonts) can be accessed programmatically within JavaScript or configuration files:

```tsx
import { BKVN_TOKENS } from '@boredkevin/branding';

console.log(BKVN_TOKENS.colors.bg);          // #050507
console.log(BKVN_TOKENS.colors.red);         // #d92626
console.log(BKVN_TOKENS.typography.primary);  // Plus Jakarta Sans, sans-serif
```


---

## What is inside

### Colors

This palette uses a deep dark background with crisp text and red accents:

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
- **JetBrains Mono**: Buttons, code blocks, and data figures.
- **Albatross & HS Luna Obscura**: Headings and logo elements.

### Components

- **ChamferFrame**: A box-shaped container with chamfered corners.
- **Button**: Buttons with various styles (`primary`, `secondary`, `ghost`) that can also function as links (`as="a"`).
- **Modal**: A popup dialog that can be closed by pressing the Escape key or clicking outside the modal area.
- **Form inputs**: Checkboxes, radio buttons, switches, and sliders.
- **Widgets**: Audio equalizer bars, number counters, and token displays.

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

- **Code and Components**: MIT License. Free to use and study.
- **Fonts**: Included under the SIL Open Font License 1.1.
- **Brand Identity**: The name "BoredKevin," the logo, and brand elements are exclusive property and are protected.

