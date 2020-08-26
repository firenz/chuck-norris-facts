import * as React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { GetCategoryFactComponent } from './get-category-fact.component';

describe('Get Category Facts button component specs', () => {
  it('should display', () => {
    const props = {
      onClick: jest.fn(),
      currentCategory: '',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <GetCategoryFactComponent {...props} />
      </ThemeProvider>,
    );
    const categoryFactsElement = getByTestId(
      'get-category-fact-component',
    ) as HTMLInputElement;

    expect(categoryFactsElement).toBeInTheDocument();
  });
  it('should call onClick function when clicked', () => {
    const props = {
      onClick: jest.fn(),
      currentCategory: '',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <GetCategoryFactComponent {...props} />
      </ThemeProvider>,
    );
    const categoryFactsElement = getByTestId(
      'get-category-fact-component',
    ) as HTMLInputElement;
    act(() => {
      fireEvent.click(categoryFactsElement);
    });

    expect(categoryFactsElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
