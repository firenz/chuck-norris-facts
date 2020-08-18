import * as React from 'react';
import { useQuery } from 'react-query';
import { getRandomFact } from 'api';
import { SessionContext } from 'containers/core';
import { RandomButtonComponent } from './random-button.component';

export const RandomButton: React.FC = () => {
  const { updateMenuVisibility, addNewFact } = React.useContext(SessionContext);
  const { data, isFetching, refetch } = useQuery(
    `getFactRandomFact`,
    async () => getRandomFact()
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
