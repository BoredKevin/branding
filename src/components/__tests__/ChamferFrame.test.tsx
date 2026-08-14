import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChamferFrame } from '../common/ChamferFrame.tsx';

describe('ChamferFrame Component', () => {
  it('renders default 2cut frame with md cut', () => {
    render(<ChamferFrame data-testid="frame">Frame Content</ChamferFrame>);
    const frame = screen.getByTestId('frame');
    expect(frame).toBeInTheDocument();
    expect(frame).toHaveClass('chamfer-2cut', 'chamfer-cut-md');
    expect(frame).toHaveTextContent('Frame Content');
  });

  it('renders patch type frame', () => {
    render(<ChamferFrame type="patch" data-testid="frame">Patch</ChamferFrame>);
    const frame = screen.getByTestId('frame');
    expect(frame).toHaveClass('chamfer-patch');
  });

  it('passes custom inline style variables for border and background', () => {
    render(
      <ChamferFrame
        borderColor="#d92626"
        bgColor="#11131a"
        data-testid="frame"
      >
        Custom
      </ChamferFrame>
    );
    const frame = screen.getByTestId('frame');
    expect(frame.style.getPropertyValue('--chamfer-border')).toBe('#d92626');
    expect(frame.style.getPropertyValue('--chamfer-bg')).toBe('#11131a');
  });
});
