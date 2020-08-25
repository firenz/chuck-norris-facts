import { createGlobalStyle } from 'styled-components';
import { mountainBackground } from 'assets/svg';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.main.secondary};
    font-family: 
      ${({ theme }) => theme.typography.fonts[0]}, 
      ${({ theme }) => theme.typography.fonts[1]}, 
      ${({ theme }) => theme.typography.fonts[2]}, 
      sans-serif;
    font-size: ${({ theme }) => theme.typography.sizes.sizeM};
  }

  button {
    font-family: 
      ${({ theme }) => theme.typography.fonts[0]}, 
      ${({ theme }) => theme.typography.fonts[1]}, 
      ${({ theme }) => theme.typography.fonts[2]}, 
      sans-serif;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  #root {
    min-height: 100vh;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }
`;
