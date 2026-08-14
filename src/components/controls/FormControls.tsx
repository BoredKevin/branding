import React, { useState, useRef, useEffect, useId } from 'react';
import { ChamferFrame } from '../common/ChamferFrame.tsx';
import './FormControls.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, className = '', ...props }) => (
  <label className={`bkvn-label ${className}`.trim()} {...props}>
    {children}
  </label>
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  className = '',
  wrapperClassName = '',
  id,
  ...props
}) => {
  return (
    <div className={`bkvn-input-frame ${wrapperClassName}`.trim()}>
      <input
        id={id}
        className={`bkvn-input ${className}`.trim()}
        {...props}
      />
    </div>
  );
};

export interface SelectOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options?: (string | SelectOption)[];
  children?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
  id?: string;
  name?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  defaultValue,
  onChange,
  options,
  children,
  placeholder = 'Select an option...',
  disabled = false,
  className = '',
  wrapperClassName = '',
  id,
  name,
}) => {
  const generatedId = useId();
  const selectId = id || generatedId;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Normalize options from either options prop or option children
  const parsedOptions: SelectOption[] = React.useMemo(() => {
    if (options && options.length > 0) {
      return options.map((opt) =>
        typeof opt === 'string'
          ? { value: opt, label: opt }
          : opt
      );
    }

    const items: SelectOption[] = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as { value?: string; children?: React.ReactNode; disabled?: boolean };
        const val = childProps.value ?? (typeof childProps.children === 'string' ? childProps.children : '');
        items.push({
          value: String(val),
          label: childProps.children ?? val,
          disabled: childProps.disabled,
        });
      }
    });
    return items;
  }, [options, children]);

  // Internal selection state
  const [selectedValue, setSelectedValue] = useState<string>(
    value !== undefined ? value : (defaultValue || (parsedOptions[0]?.value ?? ''))
  );

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  // Close on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const handleSelect = (val: string) => {
    if (disabled) return;
    setSelectedValue(val);
    if (onChange) {
      onChange(val);
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      const currentIndex = parsedOptions.findIndex((opt) => opt.value === selectedValue);
      const nextIndex = (currentIndex + 1) % parsedOptions.length;
      handleSelect(parsedOptions[nextIndex].value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      const currentIndex = parsedOptions.findIndex((opt) => opt.value === selectedValue);
      const prevIndex = (currentIndex - 1 + parsedOptions.length) % parsedOptions.length;
      handleSelect(parsedOptions[prevIndex].value);
    }
  };

  const currentOption = parsedOptions.find((opt) => opt.value === selectedValue);
  const displayLabel = currentOption ? currentOption.label : placeholder;

  return (
    <div
      ref={containerRef}
      className={`bkvn-custom-select-container ${disabled ? 'disabled' : ''} ${wrapperClassName}`.trim()}
    >
      {/* Hidden input for form integrations */}
      {name && <input type="hidden" name={name} value={selectedValue} />}

      {/* Chamfered Trigger Button */}
      <div
        id={selectId}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`bkvn-select-frame ${isOpen ? 'active-open' : ''} ${className}`.trim()}
      >
        <div className="bkvn-select-display">
          <span className="bkvn-select-text">{displayLabel}</span>
          <span className={`bkvn-select-chevron ${isOpen ? 'open' : ''}`}>▼</span>
        </div>
      </div>

      {/* Custom Tactical Dropdown Menu */}
      {isOpen && (
        <ChamferFrame cut="sm" className="bkvn-dropdown-menu">
          <div role="listbox" className="bkvn-dropdown-list">
            {parsedOptions.map((opt) => {
              const isSelected = opt.value === selectedValue;
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={`bkvn-dropdown-item ${isSelected ? 'selected' : ''} ${opt.disabled ? 'disabled' : ''}`}
                  onClick={() => !opt.disabled && handleSelect(opt.value)}
                >
                  <span className="bkvn-dropdown-item-indicator" />
                  <span className="bkvn-dropdown-item-label">{opt.label}</span>
                  {isSelected && <span className="bkvn-dropdown-item-check">✓</span>}
                </div>
              );
            })}
          </div>
        </ChamferFrame>
      )}
    </div>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperClassName?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  className = '',
  wrapperClassName = '',
  id,
  ...props
}) => {
  return (
    <div className={`bkvn-textarea-frame ${wrapperClassName}`.trim()}>
      <textarea
        id={id}
        className={`bkvn-textarea ${className}`.trim()}
        {...props}
      />
    </div>
  );
};
