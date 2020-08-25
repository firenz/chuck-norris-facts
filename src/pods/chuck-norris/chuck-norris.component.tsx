import * as React from 'react';

import { ButtonsContainer, FactsContainer, MenuContainer } from './components';
import { BackgroundImage } from './chuck-norris.styles';
import { mountainBackground } from 'assets/svg';

export const ChuckNorrisComponent: React.FC = () => {
  return (
    <>
      <BackgroundImage
        src={mountainBackground}
        alt="mountain background"
        aria-hidden="true"
      />
      <ButtonsContainer />
      <MenuContainer />
      <FactsContainer />
    </>
  );
};
