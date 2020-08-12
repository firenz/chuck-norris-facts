import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #fbb04c;
    font-family: Arial, Helvetica, sans-serif;
  }

  #root {
    height: 100vh;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }
`;

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Hello from React</h1>
    </React.Fragment>
  );
};