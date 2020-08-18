import * as React from 'react';
import { RandomButtonLayout } from './random-button.styles';

interface Props {
  children: any;
  onClick: () => void;
}

export const RandomButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <RandomButtonLayout onClick={onClick}>{props.children}</RandomButtonLayout>
  );
};
