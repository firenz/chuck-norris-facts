import * as React from 'react';
import { TitleLayout } from './title.styles';

interface Props {
  children: any;
}

export const Title: React.FC<Props> = (props: Props) => {
  return (
    <TitleLayout>
      {props.children}
    </TitleLayout>
  );
};