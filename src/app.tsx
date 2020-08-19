import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { SessionProvider, theme, GlobalStyle } from 'core';
import { MainPage } from 'scenes';

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
