import * as React from 'react';
import { Header, Main, Footer, MainTitle, ButtonsContainer, FactsContainer, MenuContainer } from 'containers';

export const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <MainTitle>Chuck Norris Facts</MainTitle>
        <ButtonsContainer />
        <FactsContainer />
      </Main>
      <Footer />
      <MenuContainer />
    </React.Fragment>
  );
};
