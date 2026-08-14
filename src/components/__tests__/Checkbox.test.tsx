import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../controls/Checkbox.tsx';

describe('Checkbox Component', () => {
  it('renders checkbox with label and associates id correctly', () => {
    render(<Checkbox checked={false} onChange={vi.fn()} label="Enable Telemetry" />);

    const checkbox = screen.getByRole('checkbox', { name: /enable telemetry/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('triggers onChange with boolean value when clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Checkbox checked={false} onChange={handleChange} label="Enable Telemetry" />);

    const checkbox = screen.getByRole('checkbox', { name: /enable telemetry/i });
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Checkbox checked={true} onChange={handleChange} disabled label="Locked Setting" />);

    const checkbox = screen.getByRole('checkbox', { name: /locked setting/i });
    expect(checkbox).toBeDisabled();
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
