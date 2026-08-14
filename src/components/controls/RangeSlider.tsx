import React from 'react';
import './RangeSlider.css';

export interface RangeSliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  label?: string;
  showReadout?: boolean;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  value,
  min = 0,
  max = 100,
  onChange,
  label,
  showReadout = true,
  className = '',
  id,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div className={`range-slider-container ${className}`.trim()}>
      {(label || showReadout) && (
        <div className="range-slider-header">
          {label && <span className="range-slider-label">{label}</span>}
          {showReadout && <span className="range-slider-readout accent-red">{Math.round(percentage)}%</span>}
        </div>
      )}
      <input
        type="range"
        id={inputId}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="range-slider"
        style={{
          background: `linear-gradient(to right, #ffffff ${percentage}%, var(--bkvn-bg-elevated) ${percentage}%)`,
        }}
        {...props}
      />
    </div>
  );
};
