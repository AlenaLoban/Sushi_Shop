import React, { useState, useEffect, useRef } from 'react';
import Product from '../../view/Index';
import style from '../scss/products.module.scss';
import Skeleton from './Skeleton';
import { useGetProducts } from '../hooks/useGetProducts';
import { IItem } from '../../../../hooks/types/data';

const AllProducts: React.FC = () => {
  const { data, isError, isLoading, setPage } = useGetProducts();

  const [allProducts, setAllProducts] = useState<IItem[]>([]);

  useEffect(() => {
    if (data?.length) {
      setAllProducts(prev => [...prev, ...data]);
    }
  }, [data]);

  const ref = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  useEffect(() => {

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

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
export default AllProducts;
