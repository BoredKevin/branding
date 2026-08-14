import React from 'react';
import { Badge } from '@components/common/Badge.tsx';

export const TypographySection: React.FC = () => {
  return (
    <section id="typography" className="content-block">
      <div className="editorial-grid">
        <div>
          <span className="section-label">
            01. TYPOGRAPHY <span className="accent-red">[SPECIMENS]</span>
          </span>
          <h2>Tactical Typefaces</h2>
          <p style={{ fontSize: '0.875rem' }}>
            The BKVN identity utilizes Albatross exclusively for title marks and brand sign-offs,
            paired with HS Luna Obscura for high-contrast headline structures with automatic Stylistic
            Set 01 features.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Albatross Specimen */}
          <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--bkvn-border)' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--bkvn-text-muted)',
                }}
              >
                BRAND MARK TYPEFACE — ALBATROSS <span className="accent-red">[PRIMARY]</span>
              </div>
              <Badge variant="red">OTF SPECIMEN</Badge>
            </div>

            <div
              className="brand-mark"
              style={{ fontSize: '2rem', color: '#ffffff', lineHeight: '1.2', marginBottom: '0.5rem' }}
            >
              BKVN // BoredKevin
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--bkvn-text-secondary)', margin: 0 }}>
              Primary brand mark font used for signatures, title headings, and official kit callouts.
            </p>
          </div>

          {/* HS Luna Obscura Specimen */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--bkvn-text-muted)',
                }}
              >
                DISPLAY HEADLINE TYPEFACE — HS LUNA OBSCURA <span className="accent-red">[OFL]</span>
              </div>
              <Badge>SET 01 ENABLED</Badge>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                lineHeight: '1.2',
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}
            >
              Nightfall &amp; Celestial
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--bkvn-text-secondary)', margin: 0 }}>
              Display headline font designed by Headspace. Sourced from lunaobscura.headspace.ru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
