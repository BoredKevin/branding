# BKVN // BOREDKEVIN BRAND SYSTEM DOCUMENT
**Version:** 5.4.0  
**Brand Name:** BKVN (Short for BoredKevin)  
**Theme:** Stealth Dark Hardware & Unified Button System  
**Brand Typeface:** Albatross (`albatross/Albatross.otf`)  
**Display Typeface:** HS Luna Obscura (`hs_lunaobscura_v1.0/HS_LunaObscura.woff2`)  
**Action Button & Telemetry Typeface:** JetBrains Mono (`'JetBrains Mono', monospace`)

---

## 1. Unified Sci-Fi Button System (Asymmetrical Cut-Corner Hardware Controls)

All buttons share the **exact same baseline styling**: 38px height (standard), top-right and bottom-left angled cut-corner chamfer geometry (`clip-path`), `0 1.25rem` horizontal padding, uppercase JetBrains Mono font (`var(--font-mono)`), `letter-spacing: 0.06em`, font-weight 600, sci-fi drop-shadow hover glow, and tactile press micro-interactions (`translateY(1px)`). 

### Asymmetrical Clip-Path Geometry
The button uses an asymmetrical 2-cut polygon layer structure:
- Top-Right Cut: `calc(100% - var(--btn-cut)) 0` to `100% var(--btn-cut)`
- Bottom-Left Cut: `var(--btn-cut) 100%` to `0 calc(100% - var(--btn-cut))`
- `::after`: Inner background surface fill (`inset: 1px` with parallel inner clip-path creating a 1px border stroke).

### Variants (Color-Only Overrides)
1. **Default & Primary Button (`.btn` / `.btn-primary`)**:
   - Solid Stark White surface fill (`#ffffff`, text `#050507`, hover `#e2e4e8`, press `#cbd0d8`).
   - Baseline style for main call-to-action elements.

2. **Secondary Button (`.btn-secondary`)**:
   - Dark Slate hardware surface (`background: var(--bkvn-bg-elevated)`, text `#ffffff`, border `var(--bkvn-border-strong)`, hover surface `#1c202d`).

3. **Danger Button (`.btn-danger`)**:
   - Crimson Red hardware tint (`background: var(--bkvn-red-subtle)`, text `var(--bkvn-red)`, border `var(--bkvn-red-border)`, hover solid `var(--bkvn-red)` with `#ffffff` text).

4. **Ghost Button (`.btn-ghost`)**:
   - Transparent tactical fill (`background: transparent`, text `var(--bkvn-text-secondary)`, hover background `var(--bkvn-bg-elevated)`, hover text `#ffffff`).

### Size Modifiers (Uniform Dimensions Across All Variants)
- **Small Button (`.btn-sm`)**: 30px height, `0 0.85rem` padding, 6px corner cut.
- **Large Button (`.btn-lg`)**: 46px height, `0 1.65rem` padding, 10px corner cut.

```html
<!-- Primary Solid Action -->
<button class="btn btn-primary">Primary Action</button>

<!-- Secondary Dark Slate Surface -->
<button class="btn btn-secondary">Secondary Action</button>

<!-- Danger Crimson Red Action -->
<button class="btn btn-danger">Danger Action</button>

<!-- Ghost Transparent Glass Action -->
<button class="btn btn-ghost" data-open-modal>[ Ghost Action ]</button>

<!-- Size Modifiers -->
<button class="btn btn-primary btn-sm">Small Action</button>
<button class="btn btn-primary btn-lg">Large Action</button>
```

---

## 2. Tactical Radio Button UI Kit

The BKVN Radio Button UI Kit provides three distinct selection patterns designed for dark hardware interfaces:

### 2.1 Standard Tactical Radio Controls (`.radio-wrapper`, `.radio-button`)
- **Structure**: Native `<input type="radio">` is visually hidden inside `.radio-wrapper`, rendering a custom 18px circular indicator (`.radio-button`).
- **States**: Checked state displays a crimson red (`#d92626`) inner dot with a subtle red glow; keyboard focus displays a `#ffffff` outline ring.
- **Usage**:
```html
<label class="radio-wrapper">
  <input type="radio" name="telemetry-mode" value="1" checked>
  <span class="radio-button"></span>
  <span>Continuous Stream</span>
</label>
```

### 2.2 Segmented Option Selector (`.radio-segmented-group`, `.radio-segmented-item`)
- **Structure**: Compact horizontal bar (`.radio-segmented-group`) featuring asymmetrical top-right & bottom-left cut-corner chamfer geometry (`clip-path`).
- **States**: Checked item elevates with stark white text, elevated slate fill, and chamfered border stroke.
- **Usage**:
```html
<div class="radio-segmented-group">
  <label class="radio-segmented-item">
    <input type="radio" name="spec" value="otf" checked>
    <span>.OTF FULL</span>
  </label>
  <label class="radio-segmented-item">
    <input type="radio" name="spec" value="woff2">
    <span>.WOFF2 WEB</span>
  </label>
</div>
```

### 2.3 Tactical Radio Card Group (`.radio-card-group`, `.radio-card`)
- **Structure**: Interactive hardware option cards using BKVN asymmetrical cut-corner chamfer frame polygon geometry (top-right & bottom-left 12px chamfer cuts).
- **States**: Active card highlights with crimson red border stroke, subtle red glow (`box-shadow`), and activated radio indicator.
- **Usage**:
```html
<div class="radio-card-group">
  <label class="radio-card">
    <input type="radio" name="license" value="op" checked>
    <div class="radio-card-indicator"></div>
    <div class="radio-card-body">
      <div class="radio-card-header">
        <span class="radio-card-title">OPERATOR SUITE</span>
        <span class="badge badge-red">SINGLE KEY</span>
      </div>
      <div class="radio-card-desc">Personal workstation license.</div>
    </div>
  </label>
</div>
```

---

## 3. File Index

1. `index.html` – BKVN Brand Kit & Hardware System page with live specimens.
2. `lunar-theme.css` – Core stylesheet with unified buttons, toggles, checkboxes, and radio UI kit styles.
3. `app.js` – Interactive HUD scripts.
4. `tokens.json` – Design tokens JSON payload.
5. `design-system.md` – Brand system documentation (this file).

