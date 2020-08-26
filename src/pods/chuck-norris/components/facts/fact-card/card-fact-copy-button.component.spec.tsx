import * as React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { FactCardCopyButton } from './card-fact-copy-button.component';

describe('Fact Card Copy button component specs', () => {
  it('should display', () => {
    const props = {
      copied: false,
      copyToClipboard: jest.fn(),
      resetCopiedText: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FactCardCopyButton {...props} />
      </ThemeProvider>,
    );
    const copyElement = getByTestId('fact-copy-component') as HTMLInputElement;

    expect(copyElement).toBeInTheDocument();
  });
  it('should call copyToClipboard function when clicked', () => {
    const props = {
      copied: false,
      copyToClipboard: jest.fn(),
      resetCopiedText: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FactCardCopyButton {...props} />
      </ThemeProvider>,
    );
    const copyElement = getByTestId('fact-copy-component') as HTMLInputElement;
    act(() => {
      fireEvent.click(copyElement);
    });

    expect(copyElement).toBeInTheDocument();
    expect(props.copyToClipboard).toHaveBeenCalled();
  });
  it('should call resetCopiedText function when mouse leave', () => {
    const props = {
      copied: true,
      copyToClipboard: jest.fn(),
      resetCopiedText: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FactCardCopyButton {...props} />
      </ThemeProvider>,
    );
    const copyElement = getByTestId('fact-copy-component') as HTMLInputElement;
    act(() => {
      fireEvent.mouseLeave(copyElement);
    });


    expect(copyElement).toBeInTheDocument();
    expect(props.resetCopiedText).toHaveBeenCalled();
  });
});

afterEach(cleanup);
