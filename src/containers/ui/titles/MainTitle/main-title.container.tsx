import * as React from 'react';
import { MainTitleLayout } from './main-title.styles';

interface Props {
  children: any;
}

export const MainTitle: React.FC<Props> = (props: Props) => {
  return (
    <MainTitleLayout>
      {props.children}
    </MainTitleLayout>
  );
};