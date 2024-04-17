import React from 'react';
import style from './scss/category.module.scss';
import { useAppDispatch } from '../../core/store/hooks';
import { setCategory } from '../filterSlice';
import { selectCategory } from '../filterSlice';
import { useAppSelector } from '../../core/store/hooks';

const ProductCategory: React.FC = () => {
  const categories = ['все', 'роллы', 'суши', 'сеты', 'соус'];
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  const handleGetByCategory = (i: number): void => {
    dispatch(setCategory(i));
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.category}>
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => handleGetByCategory(i)}
            className={category === i ? style.active : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductCategory;
