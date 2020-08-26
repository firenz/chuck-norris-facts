import * as React from 'react';

import { InitialLayout } from './initial.styles';

interface Props {
  onClick: () => void;
}

export const InitialComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <InitialLayout
      data-testid="initial-component"
      onClick={onClick}
      aria-label="Press to open category menu to choose a new category to get facts"
    >
      Get a fact{' '}
      <span role="img" aria-label="explosion">
        💥
      </span>
      <span role="img" aria-label="fist">
        👊
      </span>
    </InitialLayout>
  );
};
