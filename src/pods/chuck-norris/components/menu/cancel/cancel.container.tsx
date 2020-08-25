import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { CancelComponent } from './cancel.component';

export const Cancel: React.FC = () => {
  const { updateMenuVisibility } = React.useContext(SessionContext);

  return <CancelComponent onClick={() => updateMenuVisibility(false)} />;
};
