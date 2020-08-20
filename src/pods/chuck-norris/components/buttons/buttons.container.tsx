import * as React from 'react';

import { ButtonsLayout } from './buttons.styles';
import { GetFactButton } from './get-fact-button';
import { ClearFactsButton } from './clear-facts-button';

export const ButtonsContainer: React.FC = () => {
  return (
    <ButtonsLayout>
      <GetFactButton />
      <ClearFactsButton />
    </ButtonsLayout>
  );
};
