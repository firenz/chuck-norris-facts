import * as React from 'react';
import { FactElementLayout } from './fact-element.styles';
import { FactElementButton } from './FactElementButton';

interface Props {
  fact: string;
}

export const FactElement: React.FC<Props> = (props: Props) => {
  const { fact } = props;
  const [infoTextBtn, setInfoTextBtn] = React.useState<string>('Copy');

  const copyToClipboardBtn = async () => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    navigator.clipboard
      .writeText(fact)
      .then(() => {
        setInfoTextBtn('Copied!');
      })
      .catch(error => console.error('Failed to copy!', error));
  };
  const resetTextBtn = () => {
    setInfoTextBtn('Copy');
  };

  return (
    <FactElementLayout>
      <FactElementButton
        copyToClipboard={copyToClipboardBtn}
        resetText={resetTextBtn}
        infoText={infoTextBtn}
      />
      <p>{fact}</p>
    </FactElementLayout>
  );
};
