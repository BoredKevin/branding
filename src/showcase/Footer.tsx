import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: '2.5rem 0',
        background: 'var(--bkvn-bg-alt)',
        borderTop: '1px solid var(--bkvn-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '0 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <div className="brand-mark" style={{ fontSize: '1.5rem', color: '#ffffff' }}>
            BKVN
          </div>
          <p style={{ fontSize: '0.8125rem', margin: 0, color: 'var(--bkvn-text-muted)' }}>
            BoredKevin Brand System &amp; Hardware Specimen (React Edition).
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <a
            href="/design-system.md"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--bkvn-text-secondary)', textDecoration: 'none' }}
          >
            design-system.md
          </a>
          <a
            href="/tokens.json"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--bkvn-text-secondary)', textDecoration: 'none' }}
          >
            tokens.json
          </a>
          <a
            href="/lunar-theme.css"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--bkvn-text-secondary)', textDecoration: 'none' }}
          >
            lunar-theme.css
          </a>
        </div>
      </div>
    </footer>
  );
};
