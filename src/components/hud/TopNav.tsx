import React from 'react';

export interface TopNavProps {
  onVoidFmClick?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onVoidFmClick }) => {
  return (
    <div className="top-telemetry-bar">
      <div className="top-telemetry-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a href="#" className="brand-mark" style={{ fontSize: '1.35rem', color: '#ffffff', textDecoration: 'none' }}>
            BKVN
          </a>
          <span className="telemetry-tag">LUNAOBSCURA [FREE FONT]</span>
        </div>

        <div className="nav-telemetry-links">
          <a href="/hs_lunaobscura_v1.0/HS_LunaObscura.otf" download style={{ fontSize: '0.72rem' }}>
            DOWNLOAD FONT [↓8023]
          </a>
          <a href="#typography">SPECIMENS</a>
          <a href="#elements">INTERFACE KIT</a>
          <a href="#tokens">TOKENS</a>
          <a
            href="#audio-player"
            className="void-fm-pill"
            onClick={() => {
              if (onVoidFmClick) {
                onVoidFmClick();
              }
            }}
          >
            VOID-FM ►
          </a>
        </div>
      </div>
    </div>
  );
};
