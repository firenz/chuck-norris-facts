import * as React from 'react';
import { CategoriesLayout } from './categories.styles';
import { CategoryButton } from './components';

interface Props {
  categories: string[];
}

export const CategoriesContainer: React.FC<Props> = (props: Props) => {
  const { categories } = props;
  return (
    <CategoriesLayout>
      {categories.map((category: string, index: number) => (
        <CategoryButton key={index} category={category} />
      ))}
    </CategoriesLayout>
  );
};
