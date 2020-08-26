import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { Link } from './link.component';

describe('link component specs', () => {
  it('should display', () => {
    const props = {
      href: 'link',
      children: 'link text',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link {...props} />
      </ThemeProvider>,
    );
    const linkElement = getByTestId('link-component') as HTMLAnchorElement;

    expect(linkElement).toBeInTheDocument();
  });
  it('should render inner text', () => {
    const props = {
      href: 'link',
      children: 'link text',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link {...props} />
      </ThemeProvider>,
    );
    const linkElement = getByTestId('link-component') as HTMLAnchorElement;

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.innerHTML).toEqual('link text');
  });
  it('should have an href attribute with the given value from props', () => {
    const props = {
      href: 'link',
      children: 'link text',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link {...props} />
      </ThemeProvider>,
    );
    const linkElement = getByTestId('link-component') as HTMLAnchorElement;

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href');
    expect(linkElement.getAttribute('href')).toEqual('link');
  });
});

afterEach(cleanup);
