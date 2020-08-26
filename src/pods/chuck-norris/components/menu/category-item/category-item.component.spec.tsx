import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { CategoryItemComponent } from './category-item.component';

describe('Category Item menu component specs', () => {
  it('should display', () => {
    const props = {
      category: 'category',
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CategoryItemComponent {...props} />
      </ThemeProvider>,
    );
    const categoryItemElement = getByTestId(
      'category-item-component',
    ) as HTMLInputElement;

    expect(categoryItemElement).toBeInTheDocument();
    expect(categoryItemElement.innerHTML).toEqual(props.category);
  });
  it('should call onClick function when clicked', () => {
    const props = {
      category: 'category',
      onClick: jest.fn(),
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CategoryItemComponent {...props} />
      </ThemeProvider>,
    );
    const categoryItemElement = getByTestId(
      'category-item-component',
    ) as HTMLInputElement;

    fireEvent.click(categoryItemElement);

    expect(categoryItemElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});

afterEach(cleanup);
