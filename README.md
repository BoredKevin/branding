# BKVN // Tactical Brand Kit & Hardware System

Official dark stealth hardware design tokens, typography specimens, and accessible UI component system for **BoredKevin (`BKVN`)**.

Designed for high-contrast tactical dashboards, mission-critical audio telemetry interfaces, and precision CAD typography.

---

## ⚡ Quickstart

### Installation & Development

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Run automated Vitest test suite
npm run test

# Run Vitest in interactive watch mode
npm run test:watch

# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📐 Architecture & Key Concepts

```
branding/
├── public/
│   ├── tokens.json            # Single source of truth for design tokens
│   ├── albatross/             # Albatross signature cursive typography
│   ├── hs_lunaobscura_v1.0/   # HS Luna Obscura headline display typography
│   └── audio/                 # Audio assets for VOID.FM telemetry HUD
├── src/
│   ├── components/
│   │   ├── common/            # ChamferFrame, Badge, CodePreview
│   │   ├── controls/          # Button, Checkbox, ToggleSwitch, RangeSlider, FormControls
│   │   │   └── RadioKit/      # StandardRadio, SegmentedControl, RadioCardGroup
│   │   ├── feedback/          # Accessible Modal with focus trapping
│   │   └── hud/               # AudioPlayer, TelemetryGauge, SpecPatch, TypeTester, TokensTable
│   ├── hooks/                 # useAudioPlayer, useTelemetryCounter
│   ├── showcase/              # Hero, AudioTelemetry, Typography, Controls, Tokens sections
│   ├── styles/                # tokens.css, chamfer.css, global.css
│   ├── tokens/                # tokens.ts (typed schema & CSS variable bindings)
│   ├── test/                  # Vitest environment setup
│   ├── App.tsx                # Interactive system showcase application
│   └── index.ts               # Barrel export for library consumption
├── tsconfig.json              # TypeScript strict configuration & module path aliases
└── vite.config.ts             # Vite 6 configuration + Vitest runner
```

---

## 🎨 Typography Matrix

| Category | Typeface | Target Usage |
| :--- | :--- | :--- |
| **Brand Signature** | `Albatross` | Primary brand mark and stylized monograms (`.brand-mark`) |
| **Display / Headlines** | `HS Luna Obscura` | High-fashion editorial display headlines (`ss01` stylistic alternates) |
| **Body & UI** | `Plus Jakarta Sans` | Body copy, documentation paragraphs, and UI labels |
| **Technical / Actions** | `JetBrains Mono` | Action buttons, telemetry HUDs, CAD data tables, code previews |

---

## 🛰️ Color Tokens & WCAG AA Contrast Compliance

Design tokens are maintained in [public/tokens.json](file:///d:/coding/BoredKevin/branding/public/tokens.json) and mapped directly to CSS variables in [src/styles/tokens.css](file:///d:/coding/BoredKevin/branding/src/styles/tokens.css):

| Variable | Value | Role | WCAG Contrast |
| :--- | :---: | :--- | :---: |
| `--bkvn-bg` | `#050507` | Obsidian Void (Deep Background) | — |
| `--bkvn-bg-alt` | `#0a0b0e` | Tactical Slate (Surface) | — |
| `--bkvn-bg-elevated` | `#11131a` | Elevated Container Fill | — |
| `--bkvn-text-primary` | `#ffffff` | Primary Headings & Bold Text | 19.3 : 1 (AAA) |
| `--bkvn-text-secondary`| `#949ba8` | Paragraphs & Secondary Labels | 7.6 : 1 (AAA) |
| `--bkvn-text-muted` | `#787f91` | Metadata, Tags & Table Headers | **4.65 : 1 (AA)** |
| `--bkvn-red` | `#d92626` | Tactical Crimson Accent | — |
| `--bkvn-border` | `rgba(255,255,255,0.08)` | Subtle Edge Dividers | — |
| `--bkvn-border-strong` | `rgba(255,255,255,0.2)` | Interactive Borders | — |

---

## 🕹️ Component System & Features

### 1. Dual-Layer Chamfer Geometry (`ChamferFrame`)
Hardware corner cutouts implemented using pure CSS dual-layer `clip-path: polygon(...)` pseudo-elements with `isolation: isolate` to avoid z-index bleeding:
- **`chamfer-2cut`**: 45° chamfers on top-right and bottom-left corners (`cut="sm" | "md" | "lg"`).
- **`chamfer-patch`**: 45° chamfers on top-left and top-right corners for military-spec patch badges.

```tsx
import { ChamferFrame } from '@components/common/ChamferFrame';

<ChamferFrame cut="md" borderColor="rgba(255,255,255,0.2)" bgColor="#0a0b0e">
  <p>Tactical Surface Content</p>
</ChamferFrame>
```

### 2. Polymorphic Strict `Button`
Discriminated union enforcing anchor attributes (`href`, `download`) when `as="a"`, while defaulting to `type="button"` for button elements to prevent unintended form submissions:

```tsx
import { Button } from '@components/controls/Button';

// Standard action button
<Button variant="primary" onClick={handleSave}>Execute</Button>

// Polymorphic link button
<Button as="a" href="/albatross/Albatross.otf" download variant="secondary">
  Download Specimen
</Button>
```

### 3. Accessible Dialog (`Modal`)
- Full keyboard focus trapping (`Tab` and `Shift+Tab`).
- Automatic restore of keyboard focus to previous trigger on close.
- Accessible ARIA roles (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`).
- `Escape` key dismissal and backdrop overlay click dismiss.
- Automatic body scroll locking (`overflow: hidden`).

### 4. Reduced Motion Support
Every animated component and keyframe animation includes `@media (prefers-reduced-motion: reduce)` support:
- Instant counter resolution in `useTelemetryCounter`
- Static equalizer display in `AudioPlayer`
- Global zero-duration animation & smooth-scroll override for vestibular safety

---

## 🧪 Testing

The test suite runs on [Vitest](https://vitest.dev/) with JSDOM and `@testing-library/react`.

```bash
npm run test
```

Test coverage includes:
- **`Button.test.tsx`**: Discriminated unions, variants, event handling, and disabled state.
- **`Modal.test.tsx`**: Focus trapping, Escape key handling, backdrop dismissal, and body scroll locking.
- **`Checkbox.test.tsx`**: Generated unique IDs via `useId()`, accessibility labels, and change events.
- **`ChamferFrame.test.tsx`**: Geometric cuts, CSS variable overrides, and rendering.
- **`Tokens.test.ts`**: Schema validation, WCAG AA muted color verification, and CSS variable mapping.

---

## 📜 License

Private & Confidential © 2026 BoredKevin (`BKVN`). All Rights Reserved.
