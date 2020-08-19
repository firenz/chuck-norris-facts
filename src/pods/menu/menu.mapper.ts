import { CategoriesApi, CategoriesVm } from './menu.model';

export const mapperCategoriesApiToVm = (
  categoriesApi: CategoriesApi,
): CategoriesVm => {
  if (categoriesApi == null) return [];
  return categoriesApi as CategoriesVm;
};
