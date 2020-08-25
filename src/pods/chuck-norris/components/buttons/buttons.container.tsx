import * as React from 'react';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { ButtonsWrapperLayout } from './buttons.styles';
import { Initial } from './initial';
import { GetCategoryFact } from './get-category-fact';
import { Dots } from './dots';
import { ClearFacts } from './clear-facts';

export const ButtonsContainer: React.FC = () => {
  const { facts, selectedCategory } = React.useContext(SessionContext);

  if (facts.length === 0 && selectedCategory === '') {
    return <Initial />;
  } else {
    return (
      <ButtonsWrapperLayout>
        <GetCategoryFact />
        <Dots />
        <ClearFacts />
      </ButtonsWrapperLayout>
    );
  }
};
