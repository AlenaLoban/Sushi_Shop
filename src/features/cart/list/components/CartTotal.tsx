import React from 'react';
import style from '../scss/cart.module.scss';
import { useAppSelector } from '../../../../core/store/hooks';
import { selectCart } from '../cartSlice';
import Button from '../../../../core/ui/Button';

export const CartTotal: React.FC = () => {
  const { total } = useAppSelector(selectCart);
  if(total>30) throw new Error('Count is too big')
  return (
    <div className={style.total}>
      <div className={style.total__text}>
        <p>Сумма заказа : </p>
        <span>
          {new Intl.NumberFormat('be-BY', {
            style: 'currency',
            currency: 'BYN',
          }).format(total)}
        </span>
      </div>
      <Button>Оформить заказ</Button>
    </div>
  );
};

