import * as React from 'react';

import { GetCategoryFactLayout } from './get-category-fact.styles';

interface Props {
  onClick: () => void;
  currentCategory: string;
}

export const GetCategoryFactComponent: React.FC<Props> = (props: Props) => {
  const { onClick, currentCategory } = props;

  const correctArticle = (category: string): string => {
    if (category != null && category === '') {
      return 'a';
    } else {
      const firstLetter = category[0];
      if (
        firstLetter === 'a' ||
        firstLetter === 'e' ||
        firstLetter === 'i' ||
        firstLetter === 'o' ||
        firstLetter === 'u'
      ) {
        return 'an';
      } else {
        return 'a';
      }
    }
  };

  return (
    <GetCategoryFactLayout
      data-testid="get-category-fact-component"
      onClick={onClick}
      aria-label="Press to get a fact from the selected category"
    >
      {`Get ${correctArticle(currentCategory)} `}
      <span aria-hidden="true">{`[`}</span>
      {currentCategory.length > 0 ? currentCategory : 'random'}
      <span aria-hidden="true">{`]`}</span>
      {` fact`}
    </GetCategoryFactLayout>
  );
};
