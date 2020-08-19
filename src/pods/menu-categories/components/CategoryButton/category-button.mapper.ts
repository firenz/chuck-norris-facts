import { FactApi, FactVm } from './category-button.model';

export const mapperFactApiToVm = (factApi: FactApi): FactVm => {
  return factApi.value as FactVm;
};
