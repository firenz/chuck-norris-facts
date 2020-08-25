import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { InitialComponent } from './initial.component';

export const Initial: React.FC = () => {
  const { updateMenuVisibility } = React.useContext(SessionContext);

  return <InitialComponent onClick={() => updateMenuVisibility(true)} />;
};
