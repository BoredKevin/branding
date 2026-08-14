import React from 'react';
import { useTelemetryCounter } from '../../hooks/useTelemetryCounter.ts';
import { Badge } from '../common/Badge.tsx';
import { ChamferFrame } from '../common/ChamferFrame.tsx';
import './TelemetryGauge.css';

export interface TelemetryGaugeProps {
  targetPercent?: number;
  className?: string;
}

export const TelemetryGauge: React.FC<TelemetryGaugeProps> = ({
  targetPercent = 73,
  className = '',
}) => {
  const { count, isComplete } = useTelemetryCounter(targetPercent);

  return (
    <ChamferFrame cut="lg" className={`telemetry-gauge-card ${className}`.trim()}>
      <span className="telemetry-card-tag">[ TELEMETRY SECTOR 02 ]</span>
      <div className="telemetry-gauge-header">
        <div>
          <span className="telemetry-sublabel">INITIALIZATION SEQUENCE</span>
          <div className="digit-73">
            <span>{count}</span>
            <span className="percent-symbol">%</span>
          </div>
        </div>
        <Badge variant={isComplete ? 'red' : 'default'}>
          {isComplete ? 'SYSTEM ACTIVE' : 'INITIALIZING...'}
        </Badge>
      </div>

      <ChamferFrame cut="sm" className="console-terminal">
        <div>INITIALIZATION ::</div>
        <div>&gt; LUNAOBSCURA ACCESS PROTOCOL [ONLINE]</div>
        <div>&gt; ESTABLISHING QUANTUM LINK... [OK]</div>
        <div>&gt; SCANNING RADIATION LEVEL: 0.04... [NORMAL]</div>
        <div>&gt; AUTHENTICATING BIOMETRIC ID... [COMPLETE]</div>
        <div style={{ color: '#ffffff' }}>&gt; SYSTEM ONLINE — DARK SIDE SECTOR ACTIVE</div>
      </ChamferFrame>
    </ChamferFrame>
  );
};
