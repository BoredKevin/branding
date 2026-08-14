import React, { useState } from 'react';
import { Button } from '../controls/Button.tsx';
import { ChamferFrame } from './ChamferFrame.tsx';
import './CodePreview.css';

export interface CodePreviewProps {
  jsxCode: string;
  htmlCode?: string;
  className?: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  jsxCode,
  htmlCode,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<'jsx' | 'html'>('jsx');

  const activeCode = mode === 'jsx' ? jsxCode : (htmlCode || jsxCode);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ChamferFrame cut="sm" className={`code-preview-container ${className}`.trim()}>
      <div className="code-preview-header">
        <div className="code-preview-tabs">
          <Button
            variant={mode === 'jsx' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setMode('jsx')}
            className="code-tab-btn"
          >
            [ REACT JSX ]
          </Button>
          {htmlCode && (
            <Button
              variant={mode === 'html' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setMode('html')}
              className="code-tab-btn"
            >
              [ HTML ]
            </Button>
          )}
        </div>
        <Button
          variant={copied ? 'primary' : 'ghost'}
          size="sm"
          onClick={handleCopy}
          className="code-copy-btn"
        >
          {copied ? 'COPIED ✓' : '[ COPY SNIPPET ]'}
        </Button>
      </div>
      <pre className="code-preview-block">
        <code>{activeCode}</code>
      </pre>
    </ChamferFrame>
  );
};
