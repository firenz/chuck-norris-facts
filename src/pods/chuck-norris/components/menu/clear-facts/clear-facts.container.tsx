import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { ClearFactsComponent } from './clear-facts.component';

export const MenuClearFacts: React.FC = () => {
  const { clearFacts, updateMenuVisibility } = React.useContext(SessionContext);

  const onClick = () => {
    clearFacts();
    updateMenuVisibility(false);
  };

  return (
    <ClearFactsComponent
      onClick={onClick}
      aria-label="Press to clear current displaying Chuck Norris facts and close menu"
    />
  );
};
