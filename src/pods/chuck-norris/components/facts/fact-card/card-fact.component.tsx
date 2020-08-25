import * as React from 'react';
import { Card } from 'common-app';

import { FactCardHeader, FactCardContentLayout } from './card-fact.styles';
import { FactCardCopyButton } from './card-fact-copy-button.component';

interface Props {
  id: number;
  category: string;
  fact: string;
  copied: boolean;
  copyToClipboard: () => void;
  resetCopiedText: () => void;
}

export const FactCardComponent: React.FC<Props> = (props: Props) => {
  const {
    id,
    category,
    fact,
    copied,
    copyToClipboard,
    resetCopiedText,
  } = props;
  return (
    <Card
      title={<FactCardHeader>{`Fact # ${id} • ${category}`}</FactCardHeader>}
      content={<FactCardContentLayout>{fact}</FactCardContentLayout>}
      action={
        <FactCardCopyButton
          copied={copied}
          copyToClipboard={copyToClipboard}
          resetCopiedText={resetCopiedText}
        />
      }
    />
  );
};
