import React from 'react';
import { tokens } from '../../tokens/tokens.ts';

export interface TokensTableProps {
  className?: string;
}

export const TokensTable: React.FC<TokensTableProps> = ({ className = '' }) => {
  const tokenRows = [
    {
      component: 'Crimson Accent',
      tokenName: '--bkvn-red',
      value: tokens.tokens.color.accent.red.value,
      isRed: true,
    },
    {
      component: 'Background Void',
      tokenName: '--bkvn-bg',
      value: tokens.tokens.color.bg.deep.value,
      isRed: false,
    },
    {
      component: 'Action Buttons',
      tokenName: '--font-mono',
      value: tokens.tokens.typography.fontFamily.mono.value,
      isRed: false,
    },
    {
      component: 'Brand Signature',
      tokenName: '--font-brand',
      value: tokens.tokens.typography.fontFamily.brand.value,
      isRed: false,
    },
    {
      component: 'Display Headlines',
      tokenName: '--font-display',
      value: tokens.tokens.typography.fontFamily.display.value,
      isRed: false,
    },
  ];

  return (
    <table className={`bkvn-table ${className}`.trim()}>
      <thead>
        <tr>
          <th>Component</th>
          <th>Token Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {tokenRows.map((row) => (
          <tr key={row.tokenName}>
            <td>{row.component}</td>
            <td
              style={{
                fontFamily: 'var(--font-mono)',
                color: row.isRed ? 'var(--bkvn-red)' : '#ffffff',
              }}
            >
              {row.tokenName}
            </td>
            <td
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8em',
                color: row.isRed ? 'var(--bkvn-red)' : 'var(--bkvn-text-secondary)',
              }}
            >
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
