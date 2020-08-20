import * as React from 'react';

import { GetFactButtonLayout } from './get-fact-button.styles';

interface Props {
  children: any;
  onClick: () => void;
}

export const GetFactButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <GetFactButtonLayout onClick={onClick}>
      {props.children}
    </GetFactButtonLayout>
  );
};