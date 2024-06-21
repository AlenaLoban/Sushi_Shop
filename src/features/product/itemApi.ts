import { baseApi } from '../../core/store/api';
import { IItem } from '../../hooks/types/data';

const itemApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProduct: build.query<IItem, string|undefined>({
      query: id => ({
        url: `/items/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductQuery } = itemApi;
