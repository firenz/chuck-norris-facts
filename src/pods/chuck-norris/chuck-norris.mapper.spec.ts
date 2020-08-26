import { mapperCategoriesApiToVm } from 'pods/chuck-norris/chuck-norris.mapper';
import { FactApi, CategoryApi, CategoriesApi } from './api/model';
import { FactVm } from './chuck-norris.vm';
import {
  mapperFactApiToVm,
  mapperCategoryApiToVm,
} from './chuck-norris.mapper';

describe('Chuck Norris pod mappers specs', () => {
  describe('mapperFactApiToVm specs', () => {
    it('should return a not null or undefined factVm when given an factApi', () => {
      const factApi: FactApi = {
        categories: ['category'],
        created_at: '',
        icon_url: '',
        id: '',
        updated_at: '',
        url: '',
        value: 'value',
      };

      const result: FactVm = mapperFactApiToVm(factApi);

      expect(result).not.toBe(null);
      expect(result).not.toBe(undefined);
    });
    it('should return a factVm with a fact equal to a valid factApi value', () => {
      const factApi: FactApi = {
        categories: ['category'],
        created_at: '',
        icon_url: '',
        id: '',
        updated_at: '',
        url: '',
        value: 'value',
      };

      const result: FactVm = mapperFactApiToVm(factApi);

      expect(result).not.toBe(null);
      expect(result).not.toBe(undefined);
      expect(result.fact).toBe(factApi.value);
    });

    it('should return a factVm with an empty fact when given a empty factApi', () => {
      const result: FactVm = mapperFactApiToVm(<FactApi>{});

      expect(result).not.toBe(null);
      expect(result).not.toBe(undefined);
      expect(result.fact).toBe('');
    });
  });
  describe('mapperCategoryApiToVm specs', () => {
    it('should return a CategoryVm with the same value as a CategoryApi', () => {
      const categoryApi: CategoryApi = 'category';
      const result = mapperCategoryApiToVm(categoryApi);
      expect(result).toBe('category');
    });
  });
  describe('mapperCategoriesApiToVm', () => {
    it('should return an array of CategoryVm elements with the same values in the CategoriesApi', () => {
      const categoriesApi: CategoriesApi = ['category'];
      const result = mapperCategoriesApiToVm(categoriesApi);
      expect(result[0]).toBe('category');
    });
  });
});
