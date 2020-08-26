import * as React from 'react';

import { ClearFactsLayout } from './clear-facts.styles';

interface Props {
  onClick: () => void;
}

export const ClearFactsComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <ClearFactsLayout data-testid="clear-facts-component" onClick={onClick}>
      {'clear facts'}
    </ClearFactsLayout>
  );
};
