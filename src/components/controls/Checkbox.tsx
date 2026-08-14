import React from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
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
    <label className={`bkvn-checkbox-wrapper ${disabled ? 'disabled' : ''} ${className}`.trim()} htmlFor={inputId}>
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="bkvn-checkbox-input"
        {...props}
      />
      <span className="bkvn-checkbox-custom" />
      {label && <span className="bkvn-checkbox-label">{label}</span>}
    </label>
  );
};
