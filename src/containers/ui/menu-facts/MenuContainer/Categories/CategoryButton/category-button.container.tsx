import * as React from 'react';
import { useQuery } from 'react-query';
import { getFactFromCategory } from 'api';
import { SessionContext } from 'containers/core';
import { CategoryButtonComponent } from './category-button.component';

interface Props {
  category: string;
}

export const CategoryButton: React.FC<Props> = (props: Props) => {
  const { updateMenuVisibility, addNewFact } = React.useContext(SessionContext);
  const { category } = props;
  const { data, isFetching } = useQuery(
    `getFactFromCategory${category}`,
    async () => getFactFromCategory(category)
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
