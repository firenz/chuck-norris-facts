import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { Card } from './card.component';

describe('card component specs', () => {
  it('should display', () => {
    const props = {
      title: 'title',
      content: 'content',
      action: 'action',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>,
    );
    const cardElement = getByTestId('card-component') as HTMLElement;

    expect(cardElement).toBeInTheDocument();
  });
});

afterEach(cleanup);
