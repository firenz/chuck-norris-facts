import * as React from 'react';
import { SessionContext } from 'core/contexts';

import { FactsLayout } from './facts.styles';
import { FactsList } from './fact-list';
import { NoDisplayingFact } from './no-displaying-fact';

export const FactsContainer: React.FC = () => {
  const { facts } = React.useContext(SessionContext);

  return (
    <FactsLayout>
      {facts.length > 0 ? <FactsList facts={facts} /> : <NoDisplayingFact />}
    </FactsLayout>
  );
};
