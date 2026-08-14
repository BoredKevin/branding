import React from 'react';
import { TelemetryGauge } from '@components/hud/TelemetryGauge.tsx';
import { AudioPlayer } from '@components/hud/AudioPlayer.tsx';

export const AudioTelemetrySection: React.FC = () => {
  return (
    <section
      id="audio-player"
      className="content-block"
      style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch',
        }}
      >
        {/* 73% Telemetry Initialization Box */}
        <TelemetryGauge targetPercent={73} />

        {/* VOID-FM Audio Frequency Player Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="section-label">
              FREQUENCY SPECTRUM <span className="accent-red">[VOID-FM]</span>
            </span>
            <h2>Audio Receiver</h2>
            <p style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              Tactical ambient frequency player broadcasting BKVN sonic identity over dark channels.
            </p>
          </div>

          <AudioPlayer trackTitle="VOID-FM // TRACK 01" totalSeconds={284} />
        </div>
      </div>
    </section>
  );
};
