import * as React from 'react';
import { CategoriesLayout } from './categories.styles';
import { CategoryButton } from './CategoryButton';

export const CategoriesContainer: React.FC = () => {
  const categories: string[] = [
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock', 
    'mock',
  ];

  return (
    <CategoriesLayout>
      {categories.map((category: string, index: number) => (
        <CategoryButton key={index} category={category} />
      ))}
    </CategoriesLayout>
  );
};