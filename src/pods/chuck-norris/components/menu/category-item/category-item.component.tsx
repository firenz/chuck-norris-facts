import * as React from 'react';

import { CategoryItemLayout } from './category-item.styles';

interface Props {
  category: string;
  onClick: () => void;
}

export const CategoryItemComponent: React.FC<Props> = (props: Props) => {
  const { category, onClick } = props;

  return (
    <CategoryItemLayout
      onClick={onClick}
      aria-label={`press to select ${category} as current category when pressing the fact generator button and exit menu`}
    >
      {category}
    </CategoryItemLayout>
  );
};
