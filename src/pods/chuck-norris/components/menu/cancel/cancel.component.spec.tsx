import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { CancelComponent } from './cancel.component';

describe('Cancel menu component specs', () => {
  it('should display', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CancelComponent {...props} />
      </ThemeProvider>,
    );
    const cancelElement = getByTestId('cancel-component') as HTMLInputElement;

    expect(cancelElement).toBeInTheDocument();
  });
  it('should call onClick function when clicked', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CancelComponent {...props} />
      </ThemeProvider>,
    );
    const cancelElement = getByTestId('cancel-component') as HTMLInputElement;

    fireEvent.click(cancelElement);

    expect(cancelElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
