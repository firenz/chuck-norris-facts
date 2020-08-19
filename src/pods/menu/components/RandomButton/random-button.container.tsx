import * as React from 'react';
import { useQuery } from 'react-query';
import { SessionContext } from 'core';

import { RandomButtonComponent } from './random-button.component';
import { getRandomFact } from './random-button.api';
import { mapperFactApiToVm } from './random-button.mapper';

export const RandomButton: React.FC = () => {
  const { updateMenuVisibility, addNewFact } = React.useContext(SessionContext);
  const { data, isFetching, refetch } = useQuery(
    `getFactRandomFact`,
    async () => {
      return mapperFactApiToVm(await getRandomFact()); 
    }
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
