import * as React from 'react';

import { ClearFactsButtonLayout } from './clear-facts-button.styles';

interface Props {
  children: any;
  onClick: () => void;
}

export const ClearFactsButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <ClearFactsButtonLayout onClick={onClick}>
      {props.children}
    </ClearFactsButtonLayout>
  );
};