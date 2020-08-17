import * as React from 'react';
import { Header, Main, Footer, MainTitle, ButtonsContainer } from 'containers';

export const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <MainTitle>Chuck Norris Facts</MainTitle>
        <ButtonsContainer />
      </Main>
      <Footer />
    </React.Fragment>
  );
};
