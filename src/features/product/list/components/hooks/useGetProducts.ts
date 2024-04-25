import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useAppSelector,
  useAppDispatch,
} from '../../../../../core/store/hooks';
import {
  selectFilter,
  setCategory,
  setOnlySpicy,
  setSort,
} from '../../../../filterSlice';
import { useGetProductsQuery } from '../../productApi';
export function useGetProducts() {
  const [page, setPage] = useState(1);
  const limit = 12;
  const pageCount = 3;
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, sort, spicy } = useAppSelector(selectFilter);
  const {
    data = [],
    isError,
    isLoading,
  } = useGetProductsQuery({ category, sort, spicy, page, limit });
  const dispatch = useAppDispatch();

  const setSearchQuery = () => {
    if (page > pageCount) setPage(1);
    setSearchParams({
      page: page.toString(),
      category: category.toString(),
      sortBy: sort.sort.toString(),
      order: sort.order.toString(),
      spicy: spicy.toString(),
    });
  };

  const getSearchQuery = () => {
    const pageParams = searchParams.get('page');
    const categoryParams = searchParams.get('category');
    const sortByParams = searchParams.get('sortBy');
    const spicyParams = searchParams.get('spicy');

    if (pageParams) setPage(parseInt(pageParams));
    if (categoryParams) dispatch(setCategory(parseInt(categoryParams)));
    if (sortByParams)
      dispatch(
        setSort(
          sortByParams === 'price'
            ? { name: 'цене', sort: sortByParams, order: 'esc' }
            : { name: 'рейтингу', sort: sortByParams, order: 'desk' },
        ),
      );
    if (spicyParams === 'true') dispatch(setOnlySpicy(!!spicyParams));
  };

  return {
    data,
    isError,
    isLoading,
    page,
    setPage,
    pageCount,
    limit,
    setSearchQuery,
    getSearchQuery,
    category,
    sort,
    spicy,
  };
}
