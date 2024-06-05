import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../core/store/hooks';
import {
  selectFilter,
  setCategory,
  setOnlySpicy,
  setSort,
} from '../../../filterSlice';
import { useGetProductsQuery } from '../productApi';

const limit = 12;

export function useGetProducts() {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, sort, spicy, search } = useAppSelector(selectFilter);
  const {
    data,
    isError,
    isLoading,
  } = useGetProductsQuery({ category, sort, spicy, page, limit, search });

  const dispatch = useAppDispatch();

  const setCategoryQuery = (categoryParams: string) => {
    if (!categoryParams) {
      return;
    }
    dispatch(setCategory(parseInt(categoryParams)));
  };

  const setSortQuery = (sortByParams: string) => {
    if (!sortByParams) {
      return;
    }
    dispatch(
      setSort(
        sortByParams === 'price'
          ? { name: 'цене', sort: sortByParams, order: 'esc' }
          : { name: 'рейтингу', sort: sortByParams, order: 'desk' },
      ),
    );
  };

  const setSpicyQuery = (spicyParams: string) => {
    if (spicyParams === 'true') dispatch(setOnlySpicy(!!spicyParams));
  };

  useEffect(() => {

    setSearchParams({
      category: category.toString(),
      sortBy: sort.sort.toString(),
      order: sort.order.toString(),
      spicy: spicy.toString(),
    });

  }, [page, category, sort, spicy]);

  useEffect(() => {

    const categoryParams = searchParams.get('category') || '';
    const sortByParams = searchParams.get('sortBy') || '';
    const spicyParams = searchParams.get('spicy') || '';

    setCategoryQuery(categoryParams);
    setSortQuery(sortByParams);
    setSpicyQuery(spicyParams);

  }, []);

  return {
    data,
    isError,
    isLoading,
    page,
    setPage,
    limit,
  };
}
