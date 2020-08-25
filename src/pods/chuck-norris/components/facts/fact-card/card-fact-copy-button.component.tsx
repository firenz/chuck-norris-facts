import * as React from 'react';
import { copyIcon, checkIcon } from 'assets/icon';

import {
  CopyLayout,
  IconLayout,
  CopiedLayout,
} from './card-fact-copy-button.styles';

interface Props {
  copied: boolean;
  copyToClipboard: () => void;
  resetCopiedText: () => void;
}

export const FactCardCopyButton: React.FC<Props> = (props: Props) => {
  const { copied, copyToClipboard, resetCopiedText } = props;
  if (!copied) {
    return (
      <CopyLayout onClick={copyToClipboard}>
        <IconLayout src={copyIcon} aria-hidden="true" />
        {`Copy to clipboard`}
      </CopyLayout>
    );
  } else {
    return (
      <CopiedLayout onMouseLeave={resetCopiedText}>
        <IconLayout src={checkIcon} aria-hidden="true" />
        {`Copied!`}
      </CopiedLayout>
    );
  }
};
