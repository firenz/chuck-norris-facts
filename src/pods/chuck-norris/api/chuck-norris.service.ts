import {
  categoriesUrl,
  generateCategoryFactUrl,
  randomFactUrl,
} from './routes';
import { CategoryApi, CategoriesApi, FactApi } from './model';

export const fetchRandomFact = (): Promise<FactApi> => {
  return fetch(randomFactUrl)
    .then((response) => response.json())
    .catch(() => <FactApi>{});
};

export const fetchCategoriesApi = (): Promise<CategoriesApi> => {
  return fetch(categoriesUrl)
    .then((response) => response.json())
    .catch(() => []);
};

export const fetchFactFromCategory = (
  category: CategoryApi,
): Promise<FactApi> => {
  return fetch(generateCategoryFactUrl(category))
    .then((response) => response.json())
    .catch(() => <FactApi>{});
};
