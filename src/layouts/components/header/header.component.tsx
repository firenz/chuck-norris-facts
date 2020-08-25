import * as React from 'react';
import { HeaderLayout, Character, Logo } from './header.styles';
import { chuckCharacter, chuckLogo } from 'assets/svg';

export const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <Character
        src={chuckCharacter}
        alt="Chuck Norris face staring at your face"
      />
      <Logo src={chuckLogo} alt="Chuck Norris Fact Generator" />
    </HeaderLayout>
  );
};
