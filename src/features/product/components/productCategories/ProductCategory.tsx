import React, { useState } from "react";
import style from "./css/category.module.scss";
import { useAppDispatch } from "../../../../core/store/hooks";
import { setCategory } from "../productFilter/filterSlice";

const ProductCategory: React.FC = () => {
  const categories = ["все", "роллы", "суши", "сеты", "соус"];
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useAppDispatch();

  const handleGetByCategory = (i: number): void => {
    dispatch(setCategory(i));
    setActiveIndex(i);
    setActiveIndex(i);
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.category}>
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => handleGetByCategory(i)}
            className={activeIndex === i ? style.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductCategory;
