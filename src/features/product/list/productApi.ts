import { baseApi } from '../../../core/store/api';
import { IItem } from '../../../hooks/types/data';
import { SortType } from '../../filterSlice';

interface filterParams {
  search: string;
  category: number | string;
  sort: SortType;
  spicy: boolean;
  page: number;
  limit: number;
}

const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query<IItem[], filterParams>({
      query: ({ category, sort, spicy, page, limit, search }) =>
        `/items?${
          category ? `category=${category}` : ''
        }${search ? `&search=${search}` : ''}${sort ? `&sortBy=${sort.sort}&order=${sort.order}` : ''}${spicy ? `&spicy=${spicy}` : ''}${`&page=${page}`}${limit ? `&limit=${limit}` : ''}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
