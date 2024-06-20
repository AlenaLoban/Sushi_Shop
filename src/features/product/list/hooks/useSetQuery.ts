import { useAppSelector, useAppDispatch } from '../../../../core/store/hooks';
import {
  selectPage,
  selectFilter,
  setCategory,
  setOnlySpicy,
  setSort,
} from '../../../filterSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export function useSetQuery() {
  const { category, sort, spicy, search } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = 12;
  const page = useAppSelector(selectPage);

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
    dispatch(setOnlySpicy(spicyParams === 'true' ? true : false));
  };

  useEffect(() => {
    setSearchParams({
      category: category ? category.toString() : '',
      sortBy: sort.sort.toString(),
      order: sort.order.toString(),
      spicy: spicy.toString(),
      page: page.toString(),
      limit: limit.toString(),
      title: search ? search.toString() : '',
    });
  }, [page, category, sort, spicy, search]);

  useEffect(() => {
    const categoryParams = searchParams.get('category') || '';
    const sortByParams = searchParams.get('sortBy') || '';
    const spicyParams = searchParams.get('spicy') || '';

    setCategoryQuery(categoryParams);
    setSortQuery(sortByParams);
    setSpicyQuery(spicyParams);
  }, []);

  return searchParams.toString();
}
