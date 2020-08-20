import {
  categoriesUrl,
  generateCategoryFactUrl,
  randomFactUrl,
} from './routes';
import { CategoryApi, CategoriesApi, FactApi } from './model';

export const getRandomFact = (): Promise<FactApi> => {
  return fetch(randomFactUrl)
    .then((response) => response.json())
    .catch(() => null);
};

export const getCategoriesApi = (): Promise<CategoriesApi> => {
  return fetch(categoriesUrl)
    .then((response) => response.json())
    .catch(() => null);
};

export const getFactFromCategory = (
  category: CategoryApi,
): Promise<FactApi> => {
  return fetch(generateCategoryFactUrl(category))
    .then((response) => response.json())
    .catch(() => null);
};
