import * as React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { ClearFactsComponent } from './clear-facts.component';

describe('Clear Facts menu component specs', () => {
  it('should display', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ClearFactsComponent {...props} />
      </ThemeProvider>,
    );
    const clearFactsElement = getByTestId(
      'clear-facts-component',
    ) as HTMLInputElement;

    expect(clearFactsElement).toBeInTheDocument();
  });
  it('should call onClick function when clicked', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ClearFactsComponent {...props} />
      </ThemeProvider>,
    );
    const clearFactsElement = getByTestId(
      'clear-facts-component',
    ) as HTMLInputElement;

    act(() => {
      fireEvent.click(clearFactsElement);
    });

    expect(clearFactsElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
