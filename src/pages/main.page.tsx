import * as React from 'react';
import { Header, Main, Footer, MainTitle } from 'containers';

export const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <MainTitle>Chuck Norris Facts</MainTitle>
      </Main>
      <Footer />
    </React.Fragment>
  );
};
