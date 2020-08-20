import * as React from 'react';
import { ChuckNorrisContainer } from 'pods';
import { AppLayout } from 'layouts';

export const MainPage: React.FC = () => {
  return (
    <AppLayout>
      <ChuckNorrisContainer />
    </AppLayout>
  );
};
