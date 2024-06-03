import React, { useEffect, useRef } from 'react';
import { Product } from '../../';
import style from '../scss/products.module.scss';
import Skeleton from './Skeleton';
import { useGetProducts } from '../hooks/useGetProducts';
import { useAppDispatch } from '../../../../core/store/hooks';
import { setPage } from '../../../filterSlice';


export const AllProducts: React.FC = () => {

  const { isError, isLoading, allProducts } = useGetProducts();
  const dispatch = useAppDispatch();

  const ref = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (allProducts?.length >= 12) {
          dispatch(setPage());
        }
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [allProducts]);

  return (
    <div className={style.wrapper}>
      {isError ? (
        <h2>Server Error</h2>
      ) : (
        <>
          <div className={style.allproducts}>
            {' '}
            {isLoading
              ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
              : allProducts.map(item => <Product key={item.id} {...item} />)}
          </div>
          <div ref={ref} />
        </>
      )}
    </div>
  );
};
