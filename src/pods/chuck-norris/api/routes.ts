import { CategoryApi } from './model';
const baseUrl = `https://api.chucknorris.io/jokes/`;

export const randomFactUrl = `${baseUrl}random`;
export const categoriesUrl = `${baseUrl}categories`;
export const generateCategoryFactUrl = (category: CategoryApi): string =>
  `${baseUrl}random?category=${category}`;
