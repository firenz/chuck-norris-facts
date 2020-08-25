import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { ClearFactsComponent } from './clear-facts.component';

export const ClearFacts: React.FC = () => {
  const { clearFacts } = React.useContext(SessionContext);

  return (
    <ClearFactsComponent
      onClick={clearFacts}
      aria-label="Press to clear current displaying Chuck Norris facts"
    />
  );
};
