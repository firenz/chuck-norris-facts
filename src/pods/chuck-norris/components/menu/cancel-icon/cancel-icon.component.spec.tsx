import * as React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { CancelIconComponent } from './cancel-icon.component';

describe('Cancel Icon menu component specs', () => {
  it('should display', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CancelIconComponent {...props} />
      </ThemeProvider>,
    );
    const cancelElement = getByTestId(
      'cancel-icon-component',
    ) as HTMLInputElement;

    expect(cancelElement).toBeInTheDocument();
  });
  it('should call onClick function when clicked', () => {
    const props = {
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CancelIconComponent {...props} />
      </ThemeProvider>,
    );
    const cancelElement = getByTestId(
      'cancel-icon-component',
    ) as HTMLInputElement;

    act(() => {
      fireEvent.click(cancelElement);
    });

    expect(cancelElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
