import * as React from 'react';
import { useQuery } from 'react-query';
import { SessionContext } from 'core/contexts';

import { CategoryButtonComponent } from './category-button.component';
import { getFactFromCategory } from '../../../../menu.api';
import { mapperFactApiToVm } from '../../../../menu.mapper';

interface Props {
  category: string;
}

export const CategoryButton: React.FC<Props> = (props: Props) => {
  const { updateMenuVisibility, addNewFact } = React.useContext(SessionContext);
  const { category } = props;
  const { data, isFetching } = useQuery(
    `getFactFromCategory${category}`,
    async () => {
      return mapperFactApiToVm(await getFactFromCategory(category));
    },
  );

  const getFact = (category: string) => {
    if (!isFetching) {
      addNewFact(data || 'Error loading fact');
      updateMenuVisibility(false);
    }
  };

  return (
    <CategoryButtonComponent onClick={() => getFact(category)}>
      {category}
    </CategoryButtonComponent>
  );
};
