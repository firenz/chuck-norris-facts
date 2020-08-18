import * as React from 'react';
import { SessionContext } from 'containers/core';
import { CategoryButtonComponent } from './category-button.component';

interface Props {
  category: string;
}

export const CategoryButton: React.FC<Props> = (props: Props) => {
  const { updateMenuVisibility, addNewFact } = React.useContext(SessionContext);
  const { category } = props;
  const getFactFromCategory = (category: string) => {
    // Code for getting a random fact for the category given in the Chuck Norris API...
    const mockFact: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet\
    elementum risus non semper. Nullam tristique ullamcorper eros, vitae\
    euismod dolor mattis a. Fusce in lectus a elit consectetur tincidunt.\
    Phasellus ac eleifend leo, et dictum nibh. Phasellus feugiat pulvinar\
    consectetur. Quisque eleifend erat nec facilisis aliquet. Nam eget\
    ullamcorper enim.';
    addNewFact(mockFact);
    updateMenuVisibility(false);
  };

  return (
    <CategoryButtonComponent onClick={() => getFactFromCategory(category)}>
      {category}
    </CategoryButtonComponent>
  );
};
