import * as React from 'react';
import { ButtonsLayout } from './buttons.styles';
import { ClearFactsButton, GetFactButton } from './components';

export const ButtonsContainer: React.FC = () => {
  return (
    <ButtonsLayout>
      <GetFactButton />
      <ClearFactsButton />
    </ButtonsLayout>
  );
};
