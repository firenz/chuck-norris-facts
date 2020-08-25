import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { CancelIconComponent } from './cancel-icon.component';

export const CancelIcon: React.FC = () => {
  const { updateMenuVisibility } = React.useContext(SessionContext);

  return <CancelIconComponent onClick={() => updateMenuVisibility(false)} />;
};
