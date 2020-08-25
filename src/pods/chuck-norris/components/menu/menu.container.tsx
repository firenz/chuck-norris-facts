import * as React from 'react';
import { useQuery } from 'react-query';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { fetchCategoriesApi } from 'pods/chuck-norris/api';
import { mapperCategoriesApiToVm } from 'pods/chuck-norris/chuck-norris.mapper';
import { MenuLayout, MenuBackground, MenuBottomLayout } from './menu.styles';
import { CategoriesContainer } from './categories';
import { MenuClearFacts } from './clear-facts';
import { Cancel } from './cancel';
import { CancelIcon } from './cancel-icon';

export const MenuContainer: React.FC = () => {
  const { showMenu } = React.useContext(SessionContext);
  const { data } = useQuery('getCategories', async () => {
    return mapperCategoriesApiToVm(await fetchCategoriesApi());
  });

  if (!showMenu) return null;

  return (
    <>
      <MenuBackground aria-hidden="true" />
      <MenuLayout>
        <MenuClearFacts />
        <CancelIcon />
        <h1>choose a category</h1>
        <CategoriesContainer categories={data || []} />
        <MenuBottomLayout>
          <Cancel />
        </MenuBottomLayout>
      </MenuLayout>
    </>
  );
};
