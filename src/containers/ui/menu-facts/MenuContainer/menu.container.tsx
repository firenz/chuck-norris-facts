import * as React from 'react';
import { useQuery } from 'react-query';
import { getCategoriesApi } from 'api';

import { SessionContext } from 'containers/core';
import { MenuWrapper, MenuLayout } from './menu.styles';
import { MenuTitle } from './MenuTitle';
import { CategoriesContainer } from './Categories';
import { RandomButton } from './RandomButton';

export const MenuContainer: React.FC = () => {
  const { showMenu } = React.useContext(SessionContext);
  const { data } = useQuery('getCategories', async () => getCategoriesApi());

  if (!showMenu) return null;

  return (
    <MenuWrapper>
      <MenuLayout>
        <RandomButton />
        <MenuTitle>Categories</MenuTitle>
        <CategoriesContainer categories={data || []}/>
      </MenuLayout>
    </MenuWrapper>
  );
};
