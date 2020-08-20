import * as React from 'react';

import { FactElementComponent } from './fact-element.component';

interface Props {
  fact: string;
}

export const FactElement: React.FC<Props> = (props: Props) => {
  const { fact } = props;
  const [infoText, setInfoText] = React.useState<string>('Copy');

  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    navigator.clipboard
      .writeText(fact)
      .then(() => {
        setInfoText('Copied!');
      })
      .catch((error) => console.error('Failed to copy!', error));
  };
  const resetText = () => {
    setInfoText('Copy');
  };

  return (
    <FactElementComponent
      fact={fact}
      onClick={copyToClipboard}
      onMouseLeave={resetText}
      infoText={infoText}
    />
  );
};
