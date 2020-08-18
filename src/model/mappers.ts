import { CategoriesApi, FactApi, CategoriesVm, FactVm } from 'model';

export const mapperFactApiToVm = (factApi: FactApi): FactVm => {
  return factApi.value as FactVm;
}

export const mapperCategoriesApiToVm = (categoriesApi: CategoriesApi): CategoriesVm => {
  return categoriesApi as CategoriesVm;
}