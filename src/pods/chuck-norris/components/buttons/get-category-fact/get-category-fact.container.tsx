import * as React from 'react';
import { useQuery } from 'react-query';
import { generateRandomNumber } from 'common';
import { SessionContext } from 'pods/chuck-norris/chuck-norris.context';

import { FactVm } from 'pods/chuck-norris/chuck-norris.vm';
import { mapperFactApiToVm } from 'pods/chuck-norris/chuck-norris.mapper';
import { fetchFactFromCategory, fetchRandomFact } from 'pods/chuck-norris/api';
import { GetCategoryFactComponent } from './get-category-fact.component';

export const GetCategoryFact: React.FC = () => {
  const { selectedCategory, addNewFact } = React.useContext(SessionContext);
  const { data, isFetching, refetch } = useQuery(
    `getFactFromCategory${selectedCategory}`,
    async () => {
      if (selectedCategory === '' || selectedCategory === 'random') {
        return mapperFactApiToVm(await fetchRandomFact());
      } else {
        return mapperFactApiToVm(await fetchFactFromCategory(selectedCategory));
      }
    },
  );

  const getFact = () => {
    refetch();
    if (!isFetching) {
      const newFactVm: FactVm = {
        id: generateRandomNumber(4),
        category: selectedCategory,
        fact: data?.fact || `Couldn't get ${selectedCategory} fact from api`,
      };
      console.log(newFactVm);
      addNewFact(newFactVm);
    }
  };

  return (
    <GetCategoryFactComponent
      currentCategory={selectedCategory === '' ? 'random' : selectedCategory}
      onClick={() => getFact()}
    />
  );
};
