import * as React from 'react';
import { FactElementLayout } from './fact-element.styles';
import { FactElementButton } from '../FactElementButton';

interface Props {
  fact: string;
  infoText: string;
  onClick: () => void;
  onMouseLeave: () => void;
}

export const FactElementComponent: React.FC<Props> = (props: Props) => {
  const { fact, infoText, onClick, onMouseLeave } = props;

  return (
    <FactElementLayout>
      <FactElementButton
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        infoText={infoText}
      />
      <p>{fact}</p>
    </FactElementLayout>
  );
};
