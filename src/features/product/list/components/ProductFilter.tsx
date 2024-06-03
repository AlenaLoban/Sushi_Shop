import React, { useState, useRef } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import {
  setSort,
  SortType,
  setOnlySpicy,
  selectFilter,
} from '../../../filterSlice';
import style from '../scss/products.module.scss';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from 'react-icons/md';
import { useClickOutSide } from '../../../../hooks/useClickOutside';

const ProductFilter: React.FC = () => {
  const sortList = [
    { name: 'рейтингу', sort: 'rating', order: 'desc' },
    { name: 'цене', sort: 'price', order: 'esc' },
  ];
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { sort, spicy } = useAppSelector(selectFilter);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (): void => {
    setOpen(false);
  };

  const handleClickInside = (obj: SortType): void => {
    dispatch(setSort(obj));
    setOpen(!open);
  };
  useClickOutSide(handleClickOutside, ref);

  return (
    <div className={style.sort} ref={ref}>
      <div className={style.sort__placeholder}>
        <div className={style.sort__placeholder__icon}>
          {open ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
        </div>
        <p onClick={() => setOpen(!open)}>сортировка по: {sort.name}</p>
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
      <div className={style.sort__checkBox}>
        <div
          onClick={() => dispatch(setOnlySpicy(!spicy))}
          className={style.sort__checkBox__icon}
        >
          {spicy ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        </div>
        <p>острые</p>
      </div>
    </div>
  );
};
export default ProductFilter;
