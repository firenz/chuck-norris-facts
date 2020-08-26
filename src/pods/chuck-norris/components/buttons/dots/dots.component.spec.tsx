import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { DotsComponent } from './dots.component';

describe('Dots button component specs', () => {
  it('should display', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DotsComponent {...props} />
      </ThemeProvider>,
    );
    const dotsElement = getByTestId('dots-component') as HTMLInputElement;

    expect(dotsElement).toBeInTheDocument();
  });
  it('should call onClick function when clicked', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DotsComponent {...props} />
      </ThemeProvider>,
    );
    const dotsElement = getByTestId('dots-component') as HTMLInputElement;

    fireEvent.click(dotsElement);

    expect(dotsElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
