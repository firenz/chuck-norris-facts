export interface FactApi {
  categories: CategoriesApi;
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
export type CategoriesApi = string[];
