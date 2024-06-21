import { baseApi } from '../../../core/store/api';
import { IItem } from '../../../hooks/types/data';

const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query<IItem[], string>({
      query: queryParams => ({
        url: `/items?${queryParams}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;
