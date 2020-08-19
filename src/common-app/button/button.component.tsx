import * as React from 'react';
import { ButtonLayout } from './button.styles';

interface Props {
  children: any;
  onClick: any;
}

export const Button: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <ButtonLayout onClick={onClick}>
      {props.children}
    </ButtonLayout>
  );
};