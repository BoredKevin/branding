import React from 'react';
import './StandardRadio.css';

export interface StandardRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
}

export const StandardRadio: React.FC<StandardRadioProps> = ({
  label,
  className = '',
  disabled,
  id,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <label className={`radio-wrapper ${disabled ? 'disabled' : ''} ${className}`.trim()} htmlFor={inputId}>
      <input
        type="radio"
        id={inputId}
        disabled={disabled}
        {...props}
      />
      <span className="radio-button" />
      <span>{label}</span>
    </label>
  );
};
