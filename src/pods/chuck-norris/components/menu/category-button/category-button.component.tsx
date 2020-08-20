import * as React from 'react';

import {
  CategoryButtonWrapper,
  CategoryButtonLayout,
} from './category-button.styles';

interface Props {
  children: any;
  onClick: () => void;
}

export const CategoryButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <CategoryButtonWrapper>
      <CategoryButtonLayout onClick={onClick}>
        {props.children}
      </CategoryButtonLayout>
    </CategoryButtonWrapper>
  );
};
