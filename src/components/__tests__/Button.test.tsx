import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../controls/Button.tsx';

describe('Button Component', () => {
  it('renders button element with text and default type="button" and secondary variant', () => {
    render(<Button>Click Me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('type', 'button');
    expect(btn).toHaveClass('btn', 'btn-secondary');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Action</Button>);

    await user.click(screen.getByRole('button', { name: /action/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders primary, danger, ghost variants and sizes correctly', () => {
    const { rerender } = render(<Button variant="primary" size="lg">Primary Action</Button>);
    let btn = screen.getByRole('button', { name: /primary action/i });
    expect(btn).toHaveClass('btn', 'btn-primary', 'btn-lg');

    rerender(<Button variant="danger" size="sm">Danger Action</Button>);
    btn = screen.getByRole('button', { name: /danger action/i });
    expect(btn).toHaveClass('btn', 'btn-danger', 'btn-sm');

    rerender(<Button variant="ghost">Ghost Action</Button>);
    btn = screen.getByRole('button', { name: /ghost action/i });
    expect(btn).toHaveClass('btn', 'btn-ghost');
  });

  it('disables interactions when disabled is true', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);

    const btn = screen.getByRole('button', { name: /disabled/i });
    expect(btn).toBeDisabled();

    await user.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders polymorphic anchor when as="a"', () => {
    render(
      <Button as="a" variant="primary" href="/download/font.otf" download="font.otf">
        Download Font
      </Button>
    );

    const link = screen.getByRole('link', { name: /download font/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/download/font.otf');
    expect(link).toHaveAttribute('download', 'font.otf');
    expect(link).toHaveClass('btn', 'btn-primary');
  });
});
