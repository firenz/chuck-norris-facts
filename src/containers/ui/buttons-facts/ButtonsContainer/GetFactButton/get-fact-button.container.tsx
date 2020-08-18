import * as React from 'react';
import { GetFactButtonComponent } from './get-fact-button.component';
import { SessionContext } from 'containers/core';

export const GetFactButton: React.FC = () => {
  const { updateMenuVisibility } = React.useContext(SessionContext);

  return (
    <GetFactButtonComponent
      onClick={() => updateMenuVisibility(true)}
      aria-label="Press to get a Chuck Norris fact from a category"
    >
      Get a fact!
    </GetFactButtonComponent>
  );
};
