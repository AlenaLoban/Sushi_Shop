import CartProduct from "./CartProduct";
import style from "./css/cart.module.scss";
import { SlBasket } from "react-icons/sl";
import { clearCartItems, selectCart } from "./slice/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../../core/store/hooks";
import React from "react";
import CartTotal from "./CartTotal";

const FullCart: React.FC = () => {
  const { cartItems } = useAppSelector(selectCart);

  const dispatch = useAppDispatch();

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__box}>
        <div className={style.top}>
          <h2>
            <SlBasket /> Корзина{" "}
          </h2>
          <div onClick={() => dispatch(clearCartItems())}>Очистить</div>
        </div>
        <div className={style.cartProducts}>
          {cartItems.map((item) => (
            <CartProduct key={item.title} {...item} />
          ))}
        </div>
        <CartTotal />
      </div>
    </div>
  );
};
export default FullCart;
