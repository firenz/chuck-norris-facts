import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
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
    const dotsElement = getByTestId(
      'get-category-fact-component',
    ) as HTMLInputElement;

    expect(dotsElement).toBeInTheDocument();
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
    const dotsElement = getByTestId(
      'get-category-fact-component',
    ) as HTMLInputElement;

    fireEvent.click(dotsElement);

    expect(dotsElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
