import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'core';
import { CategoriesContainer } from './categories.container';

describe('Categories menu container specs', () => {
  it('should display', () => {
    const props = {
      categories: ['category'],
    };

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <CategoriesContainer {...props} />
      </ThemeProvider>,
    );
    const categoryItemElements = getAllByTestId(
      'category-item-component',
    ) as HTMLElement[];

    expect(categoryItemElements[0]).toBeInTheDocument();
  });
  it('should render random category item', () => {
    const props = {
      categories: ['category'],
    };

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <CategoriesContainer {...props} />
      </ThemeProvider>,
    );
    const categoryItemElements = getAllByTestId(
      'category-item-component',
    ) as HTMLElement[];

    expect(categoryItemElements[0]).toBeInTheDocument();
    expect(categoryItemElements[0].innerHTML).toEqual('random');
  });
  it('should render random and given categories to category items', () => {
    const props = {
      categories: ['category'],
    };

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <CategoriesContainer {...props} />
      </ThemeProvider>,
    );
    const categoryItemElements = getAllByTestId(
      'category-item-component',
    ) as HTMLElement[];

    expect(categoryItemElements[0]).toBeInTheDocument();
    expect(categoryItemElements[0].innerHTML).toEqual('random');
    expect(categoryItemElements[1]).toBeInTheDocument();
    expect(categoryItemElements[1].innerHTML).toEqual(props.categories[0]);
    expect(categoryItemElements.length).toEqual(props.categories.length + 1);
  });
});

afterEach(cleanup);
