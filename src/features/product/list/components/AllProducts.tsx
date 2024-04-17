import React, { useState, useEffect } from 'react';
import Product from '../../view/Index';
import style from '../scss/products.module.scss';
import { useAppSelector, useAppDispatch } from '../../../../core/store/hooks';
import {
  selectFilter,
  setCategory,
  setOnlySpicy,
  setSort,
} from '../../../filterSlice';
import { useGetProductsQuery } from '../productApi';
import Skeleton from './Skeleton';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const AllProducts: React.FC = () => {
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

  useEffect(() => {
    if (page > pageCount) setPage(1);
    setSearchParams({
      page: page.toString(),
      category: category.toString(),
      sortBy: sort.sort.toString(),
      order: sort.order.toString(),
      spicy: spicy.toString(),
    });
  }, [page, category, sort, spicy]);

  useEffect(() => {
    const pageParams = searchParams.get('page');
    const categoryParams = searchParams.get('category');
    const sortByParams = searchParams.get('sortBy');
    const orderParams = searchParams.get('order');
    const spicyParams = searchParams.get('spicy');

    if (
      !pageParams ||
      !categoryParams ||
      spicyParams === 'false' ||
      !sortByParams ||
      !orderParams
    ) {
      return;
    }
    setPage(parseInt(pageParams));
    dispatch(setCategory(parseInt(categoryParams)));
    dispatch(setOnlySpicy(!!spicyParams));
    dispatch(
      setSort({
        name: sortByParams === 'price' ? 'цене' : 'рейтингу',
        sort: sortByParams,
        order: orderParams,
      }),
    );
  }, []);

  return (
    <div className={style.wrapper}>
      {isError && <h2>Server Error</h2>}
      <div className={style.allproducts}>
        {' '}
        {isLoading
          ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
          : data.map(item => <Product key={item.id} {...item} />)}
      </div>

      {!isLoading && (
        <div className={style.pagination}>
          <Pagination
            count={3}
            page={page}
            shape="rounded"
            variant="outlined"
            onChange={(_, num) => setPage(num)}
            sx={{ button: { color: '#ffffff' } }}
          />
        </div>
      )}
    </div>
  );
};
export default AllProducts;
