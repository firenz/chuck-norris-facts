import * as React from 'react';

import { CategoriesLayout } from './categories.styles';
import { CategoryItem } from '../category-item';

interface Props {
  categories: string[];
}

export const CategoriesContainer: React.FC<Props> = (props: Props) => {
  const { categories } = props;
  return (
    <CategoriesLayout>
      <CategoryItem key={0} category={'random'} />
      {categories.map((category: string, index: number) => (
        <CategoryItem key={index + 1} category={category} />
      ))}
    </CategoriesLayout>
  );
};
