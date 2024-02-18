import style from "./css/catalog.module.scss";
import ProductCategory from "../../features/category/ProductCategory";
import ProductFilter from "../../features/product/list/components/ProductFilter";
import AllProducts from "../../features/product/list/components/AllProducts";
import ButtonUp from "./ButtonUp";
import cn from "classnames";
import React from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const Catalog: React.FC = () => {
  const isScrollingDown = useScrollDirection();

  return (
    <div className={cn(style.container, style.catalog)}>
      <div
        className={cn(
          style.page__filter,
          isScrollingDown ? style.page__filter_down : ""
        )}
      >
        <ProductCategory />
        <ProductFilter />
      </div>
      <AllProducts />
      <ButtonUp />
    </div>
  );
};
export default Catalog;
