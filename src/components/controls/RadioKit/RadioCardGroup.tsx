import React from 'react';
import { Badge } from '../../common/Badge.tsx';
import './RadioCardGroup.css';

export interface RadioCardItem {
  value: string;
  title: string;
  badge?: string;
  badgeVariant?: 'default' | 'red';
  description: string;
  disabled?: boolean;
}

export interface RadioCardGroupProps {
  name: string;
  value: string;
  options: RadioCardItem[];
  onChange: (value: string) => void;
  className?: string;
}

export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  name,
  value,
  options,
  onChange,
  className = '',
}) => {
  return (
    <div className={`radio-card-group ${className}`.trim()}>
      {options.map((opt) => {
        const isChecked = opt.value === value;
        return (
          <label
            key={opt.value}
            className={`radio-card ${isChecked ? 'active' : ''} ${opt.disabled ? 'disabled' : ''}`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={isChecked}
              disabled={opt.disabled}
              onChange={() => onChange(opt.value)}
            />
            <div className="radio-card-indicator" />
            <div className="radio-card-body">
              <div className="radio-card-header">
                <span className="radio-card-title">{opt.title}</span>
                {opt.badge && (
                  <Badge variant={opt.badgeVariant || 'default'}>{opt.badge}</Badge>
                )}
              </div>
              <div className="radio-card-desc">{opt.description}</div>
            </div>
          </label>
        );
      })}
    </div>
  );
};
