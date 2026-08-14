import React, { useState } from 'react';
import { ToggleSwitch } from '../controls/ToggleSwitch.tsx';
import { Input } from '../controls/FormControls.tsx';
import { ChamferFrame } from '../common/ChamferFrame.tsx';
import './TypeTester.css';

export interface TypeTesterProps {
  initialText?: string;
  className?: string;
}

export const TypeTester: React.FC<TypeTesterProps> = ({
  initialText = 'BKVN — BoredKevin Tactical Specimen 02',
  className = '',
}) => {
  const [text, setText] = useState(initialText);
  const [useBrandFont, setUseBrandFont] = useState(false);

  const displayText = text || initialText;

  return (
    <div className={`type-tester-container ${className}`.trim()}>
      <div style={{ marginBottom: '1.25rem' }}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type custom text..."
        />
      </div>

      <div className="type-tester-controls">
        <ToggleSwitch
          checked={useBrandFont}
          onChange={setUseBrandFont}
          label={
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              USE ALBATROSS BRAND FONT <span className="accent-red">[ALT]</span>
            </span>
          }
        />

        <div className="type-tester-meta">
          LENGTH: {displayText.length} CHARS
        </div>
      </div>

      <ChamferFrame
        cut="md"
        className="type-tester-output"
        style={{
          fontFamily: useBrandFont ? 'var(--font-brand)' : 'var(--font-display)',
        }}
      >
        {displayText}
      </ChamferFrame>
    </div>
  );
};
