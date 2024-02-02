import { baseApi } from "../../../../../core/store/api";
import { IItem } from "../../../../../hooks/types/data";
import { SortType } from "../../productFilter/filterSlice";
interface filterParams {
  category: number | string;
  sort: SortType;
}

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IItem[], filterParams>({
      query: ({ category, sort }) =>
        `https://65ae38e71dfbae409a744853.mockapi.io/items?${
          category ? `category=${category}` : ""
        }${sort ? `&sortBy=${sort.sort}&order=${sort.order}` : ""}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
