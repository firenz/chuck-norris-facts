import * as React from 'react';
import { AppLayout } from 'layouts';
import { ChuckNorrisContainer } from 'pods';

export const MainPage: React.FC = () => {
  return (
    <AppLayout>
      <ChuckNorrisContainer />
    </AppLayout>
  );
};
