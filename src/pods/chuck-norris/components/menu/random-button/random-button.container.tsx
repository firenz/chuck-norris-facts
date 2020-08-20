import * as React from 'react';
import { useQuery } from 'react-query';
import { SessionContext } from 'core';

import { getRandomFact } from 'pods/chuck-norris/api';
import { mapperFactApiToVm } from 'pods/chuck-norris/chuck-norris.mapper';
import { RandomButtonComponent } from './random-button.component';

export const RandomButton: React.FC = () => {
  const { updateMenuVisibility, addNewFact } = React.useContext(SessionContext);
  const { data, isFetching, refetch } = useQuery(
    `getFactRandomFact`,
    async () => {
      return mapperFactApiToVm(await getRandomFact());
    },
  );

  const getFact = () => {
    refetch();
    if (!isFetching) {
      addNewFact(data || 'Error loading fact');
      updateMenuVisibility(false);
    }
  };

  return (
    <RandomButtonComponent onClick={getFact}>
      Get a random fact!
    </RandomButtonComponent>
  );
};
