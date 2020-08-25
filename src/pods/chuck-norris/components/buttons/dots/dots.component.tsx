import * as React from 'react';

import { DotsLayout } from './dots.styles';

interface Props {
  onClick: () => void;
}

export const DotsComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <DotsLayout
      onClick={onClick}
      aria-label="Press to open category menu to choose a new category to get facts"
    >
      <span aria-hidden="true">{`...`}</span>
    </DotsLayout>
  );
};
