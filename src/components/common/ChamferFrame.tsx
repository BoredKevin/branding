import React from 'react';

export interface ChamferFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  cut?: 'sm' | 'md' | 'lg';
  type?: '2cut' | 'patch';
  borderColor?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

export const ChamferFrame: React.FC<ChamferFrameProps> = ({
  cut = 'md',
  type = '2cut',
  borderColor,
  bgColor,
  className = '',
  style,
  children,
  ...props
}) => {
  const baseClass = type === 'patch' ? 'chamfer-patch' : `chamfer-2cut chamfer-cut-${cut}`;
  const customStyles: React.CSSProperties = {
    ...(borderColor ? { '--chamfer-border': borderColor } as React.CSSProperties : {}),
    ...(bgColor ? { '--chamfer-bg': bgColor } as React.CSSProperties : {}),
    ...style,
  };

  return (
    <div className={`${baseClass} ${className}`.trim()} style={customStyles} {...props}>
      {children}
    </div>
  );
};
