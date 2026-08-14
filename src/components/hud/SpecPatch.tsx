import React from 'react';
import { ChamferFrame } from '../common/ChamferFrame.tsx';
import './SpecPatch.css';

export interface SpecPatchProps {
  className?: string;
}

export const SpecPatch: React.FC<SpecPatchProps> = ({ className = '' }) => {
  return (
    <ChamferFrame type="patch" className={`spec-patch ${className}`.trim()}>
      <h4>PROTOTYPE HARDWARE</h4>
      <ul>
        <li>• MICROCONTROLLER: ESP32</li>
        <li>• 802.11 B/G/N WI-FI &amp; BLE MODULE</li>
        <li>• DISPLAY: OLED 128x64 I2C</li>
        <li>• JUMPER WIRES, CONNECTORS</li>
        <li>• TACTILE SWITCHES x6</li>
      </ul>

      <h4 style={{ marginTop: '0.8rem' }}>MATERIALS &amp; SAMPLES</h4>
      <ul>
        <li>• PRECISION BIT SET</li>
        <li>• FEELER GAUGES</li>
        <li>• TECHNICAL FEATHER PEN</li>
      </ul>

      <div className="spec-patch-footer">
        LUNAR PROGRAM // SEC-02 SPECIFICATION
      </div>
      <span className="spec-patch-mark">⊕ ⊝ ⊞</span>
    </ChamferFrame>
  );
};
