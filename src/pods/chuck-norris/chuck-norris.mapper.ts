import { FactApi, CategoriesApi, CategoryApi } from './api';
import { FactVm, CategoriesVm, CategoryVm } from './chuck-norris.vm';

export const mapperFactApiToVm = (factApi: FactApi): FactVm => {
  return factApi.value as FactVm;
};

export const mapperCategoryApiToVm = (categoryApi: CategoryApi): CategoryVm => {
  if (categoryApi == null) return '';
  return categoryApi as CategoryVm;
};

export const mapperCategoryVmToApi = (categoryVm: CategoryVm): CategoryApi => {
  if (categoryVm == null) return '';
  return categoryVm as CategoryApi;
};

export const mapperCategoriesApiToVm = (
  categoriesApi: CategoriesApi,
): CategoriesVm => {
  if (categoriesApi == null) return [];
  return categoriesApi.map(mapperCategoryApiToVm);
};
