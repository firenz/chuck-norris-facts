import * as React from 'react';
import { FactCardComponent } from './card-fact.component';

interface Props {
  id: number;
  category: string;
  fact: string;
}

export const FactCard: React.FC<Props> = (props: Props) => {
  const { id, category, fact } = props;
  const [copied, setCopied] = React.useState<boolean>(false);

  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    navigator.clipboard
      .writeText(fact)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => console.error('Failed to copy!', error));
  };

  const resetText = () => {
    setCopied(false);
  };

  return (
    <FactCardComponent
      id={id}
      category={category}
      fact={fact}
      copied={copied}
      copyToClipboard={copyToClipboard}
      resetCopiedText={resetText}
    />
  );
};
