import * as React from 'react';
import { ClearFactsButtonComponent } from './clear-facts-button.component';

export const ClearFactsButton: React.FC = () => {
  const clearFacts = () => {};

  return (
    <ClearFactsButtonComponent
      onClick={clearFacts}
      aria-label="Press to clear current displaying Chuck Norris facts"
    >
      Clear facts
    </ClearFactsButtonComponent>
  );
};
