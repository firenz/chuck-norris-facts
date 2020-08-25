import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { DotsComponent } from './dots.component';

export const Dots: React.FC = () => {
  const { updateMenuVisibility } = React.useContext(SessionContext);

  return <DotsComponent onClick={() => updateMenuVisibility(true)} />;
};
