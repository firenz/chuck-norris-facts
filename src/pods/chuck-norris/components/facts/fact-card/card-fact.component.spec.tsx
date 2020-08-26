import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { FactCardComponent } from './card-fact.component';

describe('Fact Card component specs', () => {
  it('should display', () => {
    const props = {
      id: 0,
      category: 'category',
      fact: 'fact',
      copied: false,
      copyToClipboard: jest.fn(),
      resetCopiedText: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FactCardComponent {...props} />
      </ThemeProvider>,
    );
    const factElement = getByTestId('card-component') as HTMLElement;

    expect(factElement).toBeInTheDocument();
  });
  it('should render fact card header with given id and category', () => {
    const props = {
      id: 0,
      category: 'category',
      fact: 'fact',
      copied: false,
      copyToClipboard: jest.fn(),
      resetCopiedText: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FactCardComponent {...props} />
      </ThemeProvider>,
    );
    const factElement = getByTestId('card-component') as HTMLElement;
    const factHeaderElement = getByTestId(
      'fact-header-component',
    ) as HTMLElement;

    expect(factElement).toBeInTheDocument();
    expect(factHeaderElement.innerHTML).toEqual(
      `Fact # ${props.id} • ${props.category}`,
    );
  });
  it('should render fact card content with given fact', () => {
    const props = {
      id: 0,
      category: 'category',
      fact: 'fact',
      copied: false,
      copyToClipboard: jest.fn(),
      resetCopiedText: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FactCardComponent {...props} />
      </ThemeProvider>,
    );
    const factElement = getByTestId('card-component') as HTMLElement;
    const factContentElement = getByTestId(
      'fact-content-component',
    ) as HTMLElement;

    expect(factElement).toBeInTheDocument();
    expect(factContentElement.innerHTML).toEqual(props.fact);
  });
  it('should render fact card copy component', () => {
    const props = {
      id: 0,
      category: 'category',
      fact: 'fact',
      copied: false,
      copyToClipboard: jest.fn(),
      resetCopiedText: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FactCardComponent {...props} />
      </ThemeProvider>,
    );
    const factElement = getByTestId('card-component') as HTMLElement;
    const factCopyElement = getByTestId('fact-copy-component') as HTMLElement;

    expect(factElement).toBeInTheDocument();
    expect(factCopyElement).toBeInTheDocument();
  });
});

afterEach(cleanup);
