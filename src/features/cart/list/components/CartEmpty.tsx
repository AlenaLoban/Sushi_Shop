import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../../core/scss/index.module.scss';
import emptyCart from '/1.webp';

export const CartEmpty: React.FC = () => {
   
  return (
    <div className={style.emptyCart}>
      <h2>В корзине пока ничего нет. </h2>
      <p>
        Перейдите в <Link to="/catalog">каталог</Link>, чтобы добавить товары в
        корзину.
      </p>
      <img src={emptyCart} alt="пустая корзина" />
    </div>
  );
};

