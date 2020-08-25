import * as React from 'react';
import { Header, Main, Footer } from 'layouts/components';

interface Props {
  children: any;
}

export const AppLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};
