import { FactApi } from './random-button.model';

const baseUrl = `https://api.chucknorris.io/jokes/`;

export const getRandomFact = (): Promise<FactApi> => {
  const fetchUrl = `${baseUrl}random`;
  return fetch(fetchUrl)
    .then((response) => response.json())
    .catch(() => null);
};
