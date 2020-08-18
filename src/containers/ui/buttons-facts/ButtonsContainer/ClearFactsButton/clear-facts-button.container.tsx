import * as React from 'react';
import { SessionContext } from 'containers/core';
import { ClearFactsButtonComponent } from './clear-facts-button.component';

export const ClearFactsButton: React.FC = () => {
  const { clearFacts } = React.useContext(SessionContext);

  return (
    <ClearFactsButtonComponent
      onClick={clearFacts}
      aria-label="Press to clear current displaying Chuck Norris facts"
    >
      Clear facts
    </ClearFactsButtonComponent>
  );
};
