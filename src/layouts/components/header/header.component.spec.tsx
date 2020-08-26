import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { Header } from './header.component';

describe('header layout component specs', () => {
  it('should display', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    const headerElement = getByTestId('header-layout') as HTMLElement;

    expect(headerElement).toBeInTheDocument();
  });
  it('should render alt for character image', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    const headerElement = getByTestId('header-layout') as HTMLElement;

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.children[0].getAttribute('alt')).toEqual(
      'Chuck Norris face staring at your face',
    );
  });
  it('should render alt for logo image', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    const headerElement = getByTestId('header-layout') as HTMLElement;

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.children[1].getAttribute('alt')).toEqual(
      'Chuck Norris Fact Generator',
    );
  });
});

afterEach(cleanup);
