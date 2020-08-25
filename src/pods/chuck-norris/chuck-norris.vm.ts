export type CategoryVm = string;
export type CategoriesVm = CategoryVm[];

export interface FactVm {
  id: number;
  category: string;
  fact: string;
}
