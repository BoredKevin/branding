import tokensData from './tokens.json';

export interface DesignTokens {
  name: string;
  version: string;
  description: string;
  tokens: {
    color: {
      bg: {
        deep: { value: string; comment?: string };
        alt: { value: string; comment?: string };
        elevated: { value: string; comment?: string };
      };
      text: {
        primary: { value: string };
        secondary: { value: string };
        muted: { value: string };
      };
      accent: {
        primary: { value: string };
        red: { value: string; comment?: string };
      };
      border: {
        subtle: { value: string };
        strong: { value: string };
      };
    };
    typography: {
      fontFamily: {
        brand: { value: string };
        display: { value: string };
        sans: { value: string };
        mono: { value: string; comment?: string };
      };
    };
  };
}

export const tokens: DesignTokens = tokensData as unknown as DesignTokens;

export const themeVars = {
  bgDeep: 'var(--bkvn-bg)',
  bgAlt: 'var(--bkvn-bg-alt)',
  bgElevated: 'var(--bkvn-bg-elevated)',
  textPrimary: 'var(--bkvn-text-primary)',
  textSecondary: 'var(--bkvn-text-secondary)',
  textMuted: 'var(--bkvn-text-muted)',
  accentRed: 'var(--bkvn-red)',
  accentRedSubtle: 'var(--bkvn-red-subtle)',
  accentRedBorder: 'var(--bkvn-red-border)',
  borderSubtle: 'var(--bkvn-border)',
  borderStrong: 'var(--bkvn-border-strong)',
  fontBrand: 'var(--font-brand)',
  fontDisplay: 'var(--font-display)',
  fontSans: 'var(--font-sans)',
  fontMono: 'var(--font-mono)',
} as const;
