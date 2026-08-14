import React, { useState } from 'react';
import { TopNav } from '@components/hud/TopNav.tsx';
import { Button } from '@components/controls/Button.tsx';
import { Modal } from '@components/feedback/Modal.tsx';
import {
  HeroSection,
  AudioTelemetrySection,
  TypographySection,
  TypeTesterSection,
  ControlsSection,
  TokensSection,
  Footer,
} from './showcase/index.ts';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bkvn-app-root">
      {/* Top Telemetry Sticky Bar */}
      <TopNav
        onVoidFmClick={() => {
          const audioSection = document.getElementById('audio-player');
          if (audioSection) audioSection.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Workspace */}
      <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 1.25rem' }}>
        <HeroSection />
        <div className="line-divider" />
        <AudioTelemetrySection />
        <TypographySection />
        <TypeTesterSection />
        <ControlsSection onOpenModal={() => setIsModalOpen(true)} />
        <TokensSection />
      </main>

      {/* System Modal Dialog */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="BKVN System Modal"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button variant="primary" as="a" href="/albatross/Albatross.otf" download>
              Download Albatross
            </Button>
          </>
        }
      >
        The BKVN brand system integrates Albatross brand mark typography, HS Luna Obscura display
        headlines with Stylistic Set 01, Plus Jakarta Sans body font, and JetBrains Mono tactical controls.
      </Modal>

      {/* Showcase Footer */}
      <Footer />
    </div>
  );
};

