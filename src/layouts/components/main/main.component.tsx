import * as React from 'react';
import { MainLayout } from './main.styles';

interface Props {
  children: any;
}

export const Main: React.FC<Props> = (props: Props) => {
  return <MainLayout>{props.children}</MainLayout>;
};
