import * as React from 'react';
import { SessionContext } from 'containers/core';
import { FactsLayout } from './facts.styles';
import { NoDisplayingFact } from './NoDisplayingFact';
import { FactsList } from './FactList';

export const FactsContainer: React.FC = () => {
  const { facts } = React.useContext(SessionContext);

  return (
    <FactsLayout>
      {facts.length > 0 ? <FactsList facts={facts} /> : <NoDisplayingFact />}
    </FactsLayout>
  );
};
