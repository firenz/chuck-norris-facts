import * as React from 'react';
import { GetFactButtonComponent } from './get-fact-button.component';

export const GetFactButton: React.FC = () => {
  const navigateToFactsCategoriesMenu = () => {};

  return (
    <GetFactButtonComponent
      onClick={navigateToFactsCategoriesMenu}
      aria-label="Press to get a Chuck Norris fact from a category"
    >
      Get a fact!
    </GetFactButtonComponent>
  );
};
