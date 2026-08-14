import React from 'react';
import { Button } from '@components/controls/Button.tsx';
import { SpecPatch } from '@components/hud/SpecPatch.tsx';

export const HeroSection: React.FC = () => {
  return (
    <section className="content-block" style={{ paddingTop: '3.5rem', paddingBottom: '3rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {/* Left Stencil Header */}
        <div>
          <span className="section-label">
            BOREDKEVIN HARDWARE PROGRAM <span className="accent-red">[BKVN-02]</span>
          </span>

          <div className="kit-badge-large" style={{ marginBottom: '1.25rem' }}>
            KIT — 02
          </div>

          <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
            <span className="brand-mark">bkvn</span> Brand Kit
          </h1>

          <p
            className="lead"
            style={{
              marginBottom: '1.75rem',
              fontSize: '1rem',
              color: 'var(--bkvn-text-secondary)',
            }}
          >
            Comprehensive industrial design and editorial identity system for BoredKevin. Containing a
            curated selection of precision hardware typography, electronic prototyping modules, and
            dark stealth telemetry.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" as="a" href="#typography">
              EXPLORE SPECIMENS
            </Button>
            <Button variant="secondary" as="a" href="#elements">
              INTERFACE KIT
            </Button>
            <Button variant="ghost" as="a" href="#tokens">
              TOKENS JSON
            </Button>
          </div>
        </div>

        {/* Right Side: Specification Patch */}
        <div>
          <SpecPatch />
        </div>
      </div>
    </section>
  );
};
