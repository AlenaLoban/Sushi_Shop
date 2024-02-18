import style from "./css/index.module.scss";
import { SlBasket } from "react-icons/sl";
import { clearCartItems } from "../list/cartSlice";
import { useAppDispatch } from "../../../core/store/hooks";
import React from "react";
import CartTotal from "../list/components/CartTotal";
import CartItems from "../list/components/CartItems";

const FullCart: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__box}>
        <div className={style.top}>
          <h2>
            <SlBasket /> Корзина{" "}
          </h2>
          <p onClick={() => dispatch(clearCartItems())}>Очистить</p>
        </div>
        <CartItems/>
        <CartTotal />
      </div>
    </div>
  );
};
export default FullCart;
