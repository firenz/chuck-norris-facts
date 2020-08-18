import * as React from 'react';
import { FactElementButtonLayout } from './fact-element-button.styles';

interface Props {
  copyToClipboard: () => void;
  resetText: () => void;
  infoText: string;
}

export const FactElementButton: React.FC<Props> = (props: Props) => {
  const { copyToClipboard, resetText, infoText } = props;

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
