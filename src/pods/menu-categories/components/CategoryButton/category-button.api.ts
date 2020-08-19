import { FactApi, CategoriesApi } from './category-button.model';

const baseUrl = `https://api.chucknorris.io/jokes/`;

export const getFactFromCategory = (category: string): Promise<FactApi> => {
  const fetchUrl = `${baseUrl}random?category=${category}`;
  return fetch(fetchUrl)
    .then(response => response.json())
    .catch(() => null);
};
