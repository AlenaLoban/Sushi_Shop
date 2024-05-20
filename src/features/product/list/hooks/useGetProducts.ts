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

const productsDictionary = [
  { notspicy: 28, spicy: 9 },
  { notspicy: 13, spicy: 2 },
  { notspicy: 6, spicy: 2 },
  { notspicy: 5, spicy: 4 },
  { notspicy: 4, spicy: 1 },
];

export function useGetProducts() {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, sort, spicy } = useAppSelector(selectFilter);
  const {
    data = [],
    isError,
    isLoading,
  } = useGetProductsQuery({ category, sort, spicy, page, limit });

  const dispatch = useAppDispatch();

  const pageQnt = Math.ceil(
   productsDictionary[category][spicy ? 'spicy' : 'notspicy'] / limit,
  );

  const setPageQuery = (pageParams: string) => {
    if (!pageParams) {
      setPage(1);
      return;
    }
    setPage(parseInt(pageParams));
  };

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
    if (page > pageQnt) setPage(1);

    setSearchParams({
      page: page.toString(),
      category: category.toString(),
      sortBy: sort.sort.toString(),
      order: sort.order.toString(),
      spicy: spicy.toString(),
    });

  }, [page, category, sort, spicy]);

  useEffect(() => {
    const pageParams = searchParams.get('page') || '';
    const categoryParams = searchParams.get('category') || '';
    const sortByParams = searchParams.get('sortBy') || '';
    const spicyParams = searchParams.get('spicy') || '';

    setPageQuery(pageParams);
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
    pageQnt,
  };
}
