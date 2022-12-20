import React from 'react';
import { CopyIcon } from '../../components/Icons';

export const CodeBlock = ({ code }: { code: string }) => {
  const codeRef = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    if (codeRef.current) {
      const textarea = document.createElement('textarea');
      textarea.style.position = 'fixed'; // prevent scrolling
      textarea.style.opacity = '0'; // make it invisible
      textarea.value = code;
      document.body.appendChild(textarea);

      // select the text and copy it to the clipboard
      textarea.select();
      document.execCommand('copy');

      // remove the temporary textarea element
      document.body.removeChild(textarea);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <pre className="express-checkout-url-block" ref={codeRef}>
      {code}

      <span onClick={copyToClipboard}>{copied ? 'Copied!' : <CopyIcon />}</span>
    </pre>
  );
};
