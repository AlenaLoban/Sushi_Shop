import React from "react";
import { Link } from "react-router-dom";
import { selectCart } from "../features/cart/components/cartProducts/slice/cartSlice";
import { useAppSelector } from "../core/store/hooks";
import style from "../core/css/index.module.scss";
import FullCart from "../features/cart/components/cartProducts/FullCart";

const Cart: React.FC = () => {
  const { cartItems } = useAppSelector(selectCart);
  return (
    <div className={style.cartPage}>
      {cartItems.length > 0 ? (
        <FullCart />
      ) : (
        <div className={style.emptyCart}>
          <h2>В корзине пока ничего нет. </h2>
          <p>
            Перейдите в <Link to="/catalog">каталог</Link>, чтобы добавить
            товары в корзину.
          </p>
          <img src="1.webp" alt="пустая корзина" />
        </div>
      )}
    </div>
  );
};
export default Cart;
