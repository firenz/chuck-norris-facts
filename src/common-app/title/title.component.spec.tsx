import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { Title } from './title.component';

describe('Title component specs', () => {
  it('should display', () => {
    const props = {
      children: 'title',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Title {...props} />
      </ThemeProvider>,
    );
    const titleElement = getByTestId('title-component') as HTMLElement;

    expect(titleElement).toBeInTheDocument();
  });
  it('should render inner text', () => {
    const props = {
      children: 'title',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Title {...props} />
      </ThemeProvider>,
    );
    const titleElement = getByTestId('title-component') as HTMLElement;

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.innerHTML).toEqual('title');
  });
});

afterEach(cleanup);
