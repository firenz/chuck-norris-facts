import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { InitialComponent } from './initial.component';

describe('Initial button component specs', () => {
  it('should display', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InitialComponent {...props} />
      </ThemeProvider>,
    );
    const initialElement = getByTestId('initial-component') as HTMLInputElement;

    expect(initialElement).toBeInTheDocument();
  });
  it('should call onClick function when clicked', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InitialComponent {...props} />
      </ThemeProvider>,
    );
    const initialElement = getByTestId('initial-component') as HTMLInputElement;

    fireEvent.click(initialElement);

    expect(initialElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
