import React, { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "../../../../core/store/hooks";
import { setSort, SortType, selectSort } from "./filterSlice";
import style from "./css/filter.module.scss";

const ProductFilter: React.FC = () => {
  const sortList = [
    { name: "цене", sort: "price", order: "esc" },
    { name: "рейтингу", sort: "rating", order: "desc" },
  ];
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (): void => {
    setOpen(false);
  };

  const handleClickInside = (obj: SortType): void => {
    dispatch(setSort(obj));
    setOpen(!open);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={style.sort} ref={ref}>
      <div className={style.sort__placeholder}>
        {open ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
        <p>
          Сортировка по: <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </p>
      </div>
      {open && (
        <div className={style.popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li onClick={() => handleClickInside(obj)} key={i}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ProductFilter;
