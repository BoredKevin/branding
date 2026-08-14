import React from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'red';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const badgeClass = variant === 'red' ? 'badge badge-red' : 'badge';
  return (
    <span className={`${badgeClass} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
};
