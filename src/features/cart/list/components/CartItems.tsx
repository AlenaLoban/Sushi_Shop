import CartItem from './CartItem';
import style from '../scss/cart.module.scss';
import { selectCart } from '../cartSlice';
import { useAppSelector } from '../../../../core/store/hooks';
import React from 'react';

const CartItems: React.FC = () => {
  const { cartItems } = useAppSelector(selectCart);

  return (
    <div className={style.cartProducts}>
      {cartItems.map(item => (
        <CartItem key={item.title} {...item} />
      ))}
    </div>
  );
};
export default CartItems;
