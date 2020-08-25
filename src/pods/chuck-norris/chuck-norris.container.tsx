import * as React from 'react';

import { ChuckNorrisSessionProvider } from './chuck-norris.context';
import { ChuckNorrisComponent } from './chuck-norris.component';

export const ChuckNorrisContainer: React.FC = () => {
  return (
    <ChuckNorrisSessionProvider>
      <ChuckNorrisComponent />
    </ChuckNorrisSessionProvider>
  );
};
