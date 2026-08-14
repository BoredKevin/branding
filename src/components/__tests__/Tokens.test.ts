import { describe, it, expect } from 'vitest';
import { tokens, themeVars } from '../../tokens/tokens.ts';

describe('Design Tokens System', () => {
  it('loads valid token metadata and name', () => {
    expect(tokens.name).toBe('BKVN (BoredKevin) Design Tokens');
    expect(tokens.version).toBeDefined();
    expect(tokens.tokens.color).toBeDefined();
  });

  it('contains expected color tokens with WCAG AA compliant muted text', () => {
    expect(tokens.tokens.color.bg.deep.value).toBe('#050507');
    expect(tokens.tokens.color.accent.red.value).toBe('#d92626');
    expect(tokens.tokens.color.text.muted.value).toBe('#787f91');
  });

  it('maps theme variables to valid CSS custom properties', () => {
    expect(themeVars.bgDeep).toBe('var(--bkvn-bg)');
    expect(themeVars.textMuted).toBe('var(--bkvn-text-muted)');
    expect(themeVars.accentRed).toBe('var(--bkvn-red)');
    expect(themeVars.fontBrand).toBe('var(--font-brand)');
    expect(themeVars.fontDisplay).toBe('var(--font-display)');
    expect(themeVars.fontSans).toBe('var(--font-sans)');
    expect(themeVars.fontMono).toBe('var(--font-mono)');
  });
});
