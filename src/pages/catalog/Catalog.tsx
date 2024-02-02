import style from "./css/catalog.module.scss";
import ProductCategory from "../../features/product/components/productCategories/ProductCategory";
import ProductFilter from "../../features/product/components/productFilter/ProductFilter";
import AllProducts from "../../features/product/components/allProducts/AllProducts";
import ButtonUp from "./ButtonUp";
import cn from "classnames";
import React from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const Catalog: React.FC = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div className={cn(style.container, style.catalog)}>
      <div
        className={cn(
          style.page__filter,
          scrollDirection === "down" ? style.page__filter_down : ""
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
