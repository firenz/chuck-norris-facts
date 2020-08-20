import * as React from 'react';
import { ChuckNorrisContainer } from 'pods';
import { AppLayout } from 'layouts';

export const NewPage: React.FC = () => {
  return (
    <AppLayout>
      <ChuckNorrisContainer />
    </AppLayout>
  );
};
