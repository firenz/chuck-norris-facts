import * as React from 'react';
import { Header, Main, MainTitle, Footer } from 'layouts';
import { ButtonsContainer, FactsContainer, MenuContainer } from 'pods';

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <MainTitle>Chuck Norris Facts</MainTitle>
        <ButtonsContainer />
        <FactsContainer />
      </Main>
      <Footer />
      <MenuContainer />
    </>
  );
};
