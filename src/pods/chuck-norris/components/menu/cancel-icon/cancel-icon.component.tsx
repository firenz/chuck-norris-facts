import * as React from 'react';
import { closeIcon } from 'assets/icon';

import { CancelIconLayout } from './cancel-icon.styles';

interface Props {
  onClick: () => void;
}

export const CancelIconComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <CancelIconLayout
      onClick={onClick}
      aria-label="Press to close category menu"
    >
      <img src={closeIcon} aria-hidden="true" alt="close" />
    </CancelIconLayout>
  );
};
