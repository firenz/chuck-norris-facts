import * as React from 'react';
import { useQuery } from 'react-query';
import { generateRandomNumber } from 'common';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { FactVm } from 'pods/chuck-norris/chuck-norris.vm';
import { mapperFactApiToVm } from 'pods/chuck-norris/chuck-norris.mapper';
import { fetchFactFromCategory, fetchRandomFact } from 'pods/chuck-norris/api';
import { CategoryItemComponent } from './category-item.component';

interface Props {
  category: string;
}

export const CategoryItem: React.FC<Props> = (props: Props) => {
  const {
    updateSelectedCategory,
    updateMenuVisibility,
    addNewFact,
    facts,
  } = React.useContext(SessionContext);
  const { category } = props;
  const { data, isFetching, refetch } = useQuery(
    `getFactFromCategory${category}`,
    async () => {
      if (category === 'random') {
        return mapperFactApiToVm(await fetchRandomFact());
      } else {
        return mapperFactApiToVm(await fetchFactFromCategory(category));
      }
    },
  );

  const getFact = () => {
    refetch();
    if (!isFetching) {
      const newFactVm: FactVm = {
        id: generateRandomNumber(4),
        category: category,
        fact: data?.fact || `Couldn't get ${category} fact from api`,
      };
      console.log(newFactVm);
      addNewFact(newFactVm);
    }
  };

  const onClick = () => {
    if (facts.length === 0) getFact();
    updateSelectedCategory(category);
    updateMenuVisibility(false);
  };

  return <CategoryItemComponent onClick={onClick} category={category} />;
};
