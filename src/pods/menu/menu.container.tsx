import * as React from 'react';
import { useQuery } from 'react-query';
import { SessionContext } from 'core';

import { RandomButton, MenuTitle, CategoriesContainer } from './components';
import { getCategoriesApi } from './menu.api';
import { mapperCategoriesApiToVm } from './menu.mapper';
import { MenuWrapper, MenuLayout } from './menu.styles';

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
