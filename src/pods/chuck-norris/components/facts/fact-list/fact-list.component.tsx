import * as React from 'react';

import { FactListLayout } from './fact-list.styles';
import { FactElement } from '../fact-item';

interface Props {
  facts: string[];
}

export const FactsList: React.FC<Props> = (props: Props) => {
  const { facts } = props;

  return (
    <FactListLayout>
      {facts.map((fact: string, index: number) => (
        <FactElement key={index} fact={fact} />
      ))}
    </FactListLayout>
  );
};
