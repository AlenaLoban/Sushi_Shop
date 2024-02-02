import CartProduct from "./CartProduct";
import style from "./css/cart.module.scss";
import { selectCart } from "./slice/cartSlice";
import { useAppSelector } from "../../../../core/store/hooks";
import React from "react";
const CartProducts: React.FC = () => {
  const { cartItems } = useAppSelector(selectCart);

  return (
    <div className={style.cartProducts}>
      {cartItems.map((item) => (
        <CartProduct key={item.title} {...item} />
      ))}
    </div>
  );
};
export default CartProducts;
