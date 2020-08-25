import * as React from 'react';

import { ClearFactsLayout } from './clear-facts.styles';

interface Props {
  onClick: () => void;
}

export const ClearFactsComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return <ClearFactsLayout onClick={onClick}>{'clear all facts'}</ClearFactsLayout>;
};
