import { FactApi, CategoriesApi } from './menu.model';

const baseUrl = `https://api.chucknorris.io/jokes/`;

export const getRandomFact = (): Promise<FactApi> => {
  const fetchUrl = `${baseUrl}random`;
  return fetch(fetchUrl)
    .then((response) => response.json())
    .catch(() => null);
};

export const getFactFromCategory = (category: string): Promise<FactApi> => {
  const fetchUrl = `${baseUrl}random?category=${category}`;
  return fetch(fetchUrl)
    .then(response => response.json())
    .catch(() => null);
};

export const getCategoriesApi = (): Promise<CategoriesApi> => {
  const fetchUrl = `${baseUrl}categories`;
  return fetch(fetchUrl)
    .then((response) => response.json())
    .catch(() => null);
};
