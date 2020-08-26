import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { Main } from './main.component';

describe('main layout component specs', () => {
  it('should display', () => {
    const props = {
      children: 'main',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Main {...props} />
      </ThemeProvider>,
    );
    const mainElement = getByTestId('main-layout') as HTMLElement;

    expect(mainElement).toBeInTheDocument();
  });
  it('should render inner text', () => {
    const props = {
      children: 'main',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Main {...props} />
      </ThemeProvider>,
    );
    const mainElement = getByTestId('main-layout') as HTMLElement;

    expect(mainElement).toBeInTheDocument();
    expect(mainElement.innerHTML).toEqual('main');
  });
});

afterEach(cleanup);
