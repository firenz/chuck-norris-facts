import { CategoriesApi, CategoriesVm, FactApi, FactVm } from './menu.model';

export const mapperCategoriesApiToVm = (
  categoriesApi: CategoriesApi,
): CategoriesVm => {
  if (categoriesApi == null) return [];
  return categoriesApi as CategoriesVm;
};

export const mapperFactApiToVm = (factApi: FactApi): FactVm => {
  return factApi.value as FactVm;
};
