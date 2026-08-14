import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonAsButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: 'button';
    href?: never;
  };

export type ButtonAsAnchorProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'secondary',
    size = 'md',
    className = '',
    children,
  } = props;

  const variantClass = variant !== 'secondary' ? `btn-${variant}` : 'btn-secondary';
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const combinedClassName = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (props.as === 'a') {
    const {
      as: _as,
      variant: _variant,
      size: _size,
      className: _className,
      children: _children,
      ...anchorProps
    } = props;

    return (
      <a className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    as: _as,
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    type = 'button',
    ...buttonProps
  } = props;

  return (
    <button type={type} className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
};
