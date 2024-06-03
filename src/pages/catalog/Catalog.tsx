import style from './scss/catalog.module.scss';
import ProductCategory from '../../features/category/ProductCategory';
import ProductFilter from '../../features/product/list/components/ProductFilter';
import {AllProducts} from '../../features/product';
import cn from 'classnames';
import React from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useLocation } from 'react-router-dom';
import {SearchInput} from '../../features/product';

const Catalog: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isScrollingDown = useScrollDirection(currentPath);

  return (
    <div className={cn(style.container, style.catalog)}>
      <div
        className={cn(
          style.page__filter,
          isScrollingDown ? style.page__filter_down : '',
        )}
      >
        <ProductCategory />
        <SearchInput/>
        <ProductFilter />
      </div>
      <AllProducts />
    </div>
  );
};
export default Catalog;
