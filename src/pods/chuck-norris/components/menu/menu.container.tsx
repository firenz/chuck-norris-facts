import * as React from 'react';
import { useQuery } from 'react-query';
import { SessionContext } from 'core';

import { getCategoriesApi } from 'pods/chuck-norris/api';
import { mapperCategoriesApiToVm } from 'pods/chuck-norris/chuck-norris.mapper';
import { MenuWrapper, MenuLayout } from './menu.styles';
import { RandomButton } from './random-button';
import { MenuTitle } from './menu-title';
import { CategoriesContainer } from './categories';

export const MenuContainer: React.FC = () => {
  const { showMenu } = React.useContext(SessionContext);
  const { data } = useQuery('getCategories', async () => {
    return mapperCategoriesApiToVm(await getCategoriesApi());
  });

  if (!showMenu) return null;

  return (
    <MenuWrapper>
      <MenuLayout>
        <RandomButton />
        <MenuTitle>Categories</MenuTitle>
        <CategoriesContainer categories={data || []} />
      </MenuLayout>
    </MenuWrapper>
  );
};
