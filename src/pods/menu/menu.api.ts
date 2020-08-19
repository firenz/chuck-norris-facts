import { CategoriesApi } from './menu.model';

const baseUrl = `https://api.chucknorris.io/jokes/`;

export const getCategoriesApi = (): Promise<CategoriesApi> => {
  const fetchUrl = `${baseUrl}categories`;
  return fetch(fetchUrl)
    .then((response) => response.json())
    .catch(() => null);
};
