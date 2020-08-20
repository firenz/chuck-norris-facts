import * as React from 'react';

import { FactElementButtonLayout } from './fact-element-button.styles';

interface Props {
  onClick: () => void;
  onMouseLeave: () => void;
  infoText: string;
}

export const FactElementButton: React.FC<Props> = (props: Props) => {
  const { onClick: copyToClipboard, onMouseLeave: resetText, infoText } = props;

  const updateInfo = () => {
    copyToClipboard();
  };

  return (
    <FactElementButtonLayout
      onClick={updateInfo}
      onMouseLeave={resetText}
      aria-label="Press to copy fact to clipboard"
    >
      {infoText}
    </FactElementButtonLayout>
  );
};
