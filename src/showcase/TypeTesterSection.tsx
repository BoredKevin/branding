import React from 'react';
import { TypeTester } from '@components/hud/TypeTester.tsx';

export const TypeTesterSection: React.FC = () => {
  return (
    <section id="tester" className="content-block">
      <div className="editorial-grid">
        <div>
          <span className="section-label">
            02. LIVE PREVIEW <span className="accent-red">[TESTER]</span>
          </span>
          <h2>Type Tester</h2>
          <p style={{ fontSize: '0.875rem' }}>
            Test custom string rendering in real-time across BKVN brand typefaces with tactical character
            metrics.
          </p>
        </div>

        <div>
          <TypeTester initialText="BKVN — BoredKevin Tactical Specimen 02" />
        </div>
      </div>
    </section>
  );
};
