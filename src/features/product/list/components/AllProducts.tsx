import React from 'react';
import Product from '../../view/Index';
import style from '../scss/products.module.scss';
import Skeleton from './Skeleton';
import { Pagination } from '@mui/material';
import { useGetProducts } from '../hooks/useGetProducts';

const AllProducts: React.FC = () => {
  const { data, isError, isLoading, page, setPage, pageQnt } = useGetProducts();

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
            count={pageQnt}
            page={page}
            shape="rounded"
            variant="outlined"
            onChange={(_, num) => setPage(num)}
            sx={{
              '.MuiPaginationItem-root': { color: 'white' },
              '.MuiPaginationItem-root.Mui-selected': {
                backgroundColor: '#e64d45',
              },
            }}
          />
        </div>
      )}
    </div>
  );
};
export default AllProducts;
