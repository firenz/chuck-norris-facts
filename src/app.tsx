import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import { MainPage } from 'pages';
import { SessionProvider } from 'containers/core';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <GlobalStyle />
        <MainPage />
      </SessionProvider>
    </ThemeProvider>
  );
};
