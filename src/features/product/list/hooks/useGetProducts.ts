import { useGetProductsQuery } from '../productApi';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../core/store/hooks';
import { selectPage, selectCategory } from '../../../filterSlice';
import { IItem } from '../../../../hooks/types/data';
import { useSetQuery } from './useSetQuery';

export function useGetProducts() {
  const [allProducts, setAllProducts] = useState<IItem[]>([]);

  const queryParams = useSetQuery();

  const { data, isError, isLoading } = useGetProductsQuery(queryParams);

  const page = useAppSelector(selectPage);
  const category = useAppSelector(selectCategory);

  useEffect(() => {
    if (data?.length) {
      if (!category && page !== 1) {
        setAllProducts(prev => [...prev, ...data]);
      } else {
        setAllProducts(data);
      }
    }
  }, [data, category]);

  return {
    data,
    isError,
    isLoading,
    allProducts,
  };
}
