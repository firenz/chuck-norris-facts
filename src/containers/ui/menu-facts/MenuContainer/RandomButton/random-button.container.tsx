import * as React from 'react';
import { SessionContext } from 'containers/core';
import { RandomButtonComponent } from './random-button.component';

export const RandomButton: React.FC = () => {
  const { updateMenuVisibility, addNewFact } = React.useContext(SessionContext);
  const getRandomFact = () => {
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
    <RandomButtonComponent onClick={getRandomFact}>
      Get a random fact!
    </RandomButtonComponent>
  );
};
