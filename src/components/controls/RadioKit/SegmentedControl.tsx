import React from 'react';
import './SegmentedControl.css';

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  name: string;
  value: string;
  options: SegmentedOption[];
  onChange: (value: string) => void;
  className?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  name,
  value,
  options,
  onChange,
  className = '',
}) => {
  return (
    <div className={`radio-segmented-group ${className}`.trim()}>
      {options.map((opt) => {
        const isChecked = opt.value === value;
        return (
          <label
            key={opt.value}
            className={`radio-segmented-item ${isChecked ? 'active' : ''} ${opt.disabled ? 'disabled' : ''}`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={isChecked}
              disabled={opt.disabled}
              onChange={() => onChange(opt.value)}
            />
            <span>{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
};
