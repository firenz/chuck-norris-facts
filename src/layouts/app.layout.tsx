import * as React from 'react';
import { Header, Main, MainTitle, Footer } from 'layouts/components';

interface Props {
  children: any;
}

export const AppLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Main>
        <MainTitle>Chuck Norris Facts</MainTitle>
        {props.children}
      </Main>
      <Footer />
    </>
  );
};
