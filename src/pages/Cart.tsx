import React from 'react';
import { selectCart } from '../features/cart/list/cartSlice';
import { useAppSelector } from '../core/store/hooks';
import style from '../core/scss/index.module.scss';
import FullCart from '../features/cart/view/AllProducts';
import CartEmpty from '../features/cart/list/components/CartEmpty';

const Cart: React.FC = () => {
  const { cartItems } = useAppSelector(selectCart);

  return (
    <div className={style.cartPage}>
      {cartItems.length > 0 ? <FullCart /> : <CartEmpty />}
    </div>
  );
};
export default Cart;
