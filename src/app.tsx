import * as React from 'react';
import { ThemeProvider} from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import { MainPage } from 'pages';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Hello from React</h1>
    </React.Fragment>
  );
};