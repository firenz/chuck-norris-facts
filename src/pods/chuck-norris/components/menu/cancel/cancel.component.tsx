import * as React from 'react';

import { CancelLayout } from './cancel.styles';

interface Props {
  onClick: () => void;
}

export const CancelComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <CancelLayout onClick={onClick} aria-label="Press to close category menu">
      {'cancel'}
    </CancelLayout>
  );
};
