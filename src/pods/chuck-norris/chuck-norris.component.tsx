import * as React from 'react';

import { ButtonsContainer, FactsContainer, MenuContainer } from './components';

export const ChuckNorrisComponent: React.FC = () => {
  return (
    <>
      <ButtonsContainer />
      <FactsContainer />
      <MenuContainer />
    </>
  );
};