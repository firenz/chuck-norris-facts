import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';
import { FactVm } from 'pods/chuck-norris/chuck-norris.vm';

import { FactsWrapper } from './facts.styles';
import { FactCard } from './fact-card';

export const FactsContainer: React.FC = () => {
  const { facts } = React.useContext(SessionContext);

  return (
    <FactsWrapper>
      {facts.map((fact: FactVm, index: number) => (
        <FactCard
          key={index}
          id={fact.id}
          category={fact.category}
          fact={fact.fact}
        />
      ))}
    </FactsWrapper>
  );
};
