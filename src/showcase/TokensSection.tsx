import React from 'react';
import { Button } from '@components/controls/Button.tsx';
import { TokensTable } from '@components/hud/TokensTable.tsx';

export const TokensSection: React.FC = () => {
  return (
    <section id="tokens" className="content-block" style={{ borderBottom: 'none', paddingBottom: '4rem' }}>
      <div className="editorial-grid">
        <div>
          <span className="section-label">
            04. MANIFEST <span className="accent-red">[TOKENS JSON]</span>
          </span>
          <h2>Hardware Specifications</h2>
          <p style={{ fontSize: '0.875rem' }}>
            Color variables, font families, and layout tokens dynamically bound from tokens.json.
          </p>
          <Button as="a" href="/tokens.json" target="_blank" style={{ marginTop: '0.5rem' }}>
            View tokens.json
          </Button>
        </div>

        <div>
          <TokensTable />
        </div>
      </div>
    </section>
  );
};
