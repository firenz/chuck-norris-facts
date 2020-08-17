import * as React from 'react';
import { ButtonsLayout } from './buttons.styles';
import { GetFactButton } from './GetFactButton';
import { ClearFactsButton } from './ClearFactsButton';

export const ButtonsContainer: React.FC = () => {
  return (
    <ButtonsLayout>
      <GetFactButton />
      <ClearFactsButton />
    </ButtonsLayout>
  );
};