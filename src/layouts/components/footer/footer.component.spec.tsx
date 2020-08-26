import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { Footer } from './footer.component';

describe('footer layout component specs', () => {
  it('should display', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    );
    const footerElement = getByTestId('footer-layout') as HTMLElement;

    expect(footerElement).toBeInTheDocument();
  });
});

afterEach(cleanup);
