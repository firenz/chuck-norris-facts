import { FactApi, FactVm } from "./random-button.model";

export const mapperFactApiToVm = (factApi: FactApi): FactVm => {
  return factApi.value as FactVm;
};
