import {
  FactVm,
  CategoriesVm,
  mapperFactApiToVm,
  mapperCategoriesApiToVm,
} from 'model';

const baseUrl = `https://api.chucknorris.io/jokes/`;

export const getRandomFact = (): Promise<FactVm> => {
  const fetchUrl = `${baseUrl}random`;
  return fetch(fetchUrl)
    .then(response => response.json())
    .then(response => mapperFactApiToVm(response));
};

export const getCategoriesApi = (): Promise<CategoriesVm> => {
  const fetchUrl = `${baseUrl}categories`;
  return fetch(fetchUrl)
    .then(response => response.json())
    .then(response => mapperCategoriesApiToVm(response));
};

export const getFactFromCategory = (category: string): Promise<FactVm> => {
  const fetchUrl = `${baseUrl}random?category=${category}`;
  return fetch(fetchUrl)
    .then(response => response.json())
    .then(response => mapperFactApiToVm(response));
};
