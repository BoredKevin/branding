import React from 'react';
import './ToggleSwitch.css';

export interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  className = '',
  disabled,
  id,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <label className={`toggle-wrapper ${disabled ? 'disabled' : ''} ${className}`.trim()} htmlFor={inputId}>
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        {...props}
      />
      <span className="toggle-switch" />
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
};
