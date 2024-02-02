import { SlBasket } from "react-icons/sl";
import style from "./css/header.module.scss";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectCart,
  clearCartItems,
} from "../../../features/cart/components/cartProducts/slice/cartSlice";
import CartProducts from "../../../features/cart/components/cartProducts/CartProducts";
import CartTotal from "../../../features/cart/components/cartProducts/CartTotal";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import cn from "classnames";

const HeaderCart = () => {
  const [open, setOpen] = useState(false);
  const { total, cartItems } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (): void => {
    setOpen(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  const totalCounter = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <div className={style.total} ref={ref}>
      <div className={style.total__box} onClick={() => setOpen(!open)}>
        <SlBasket style={{ width: "1.5em", height: "1.5em" }} />
        {totalCounter > 0 && <div>{totalCounter}</div>}
      </div>
      <div>
        {" "}
        {total > 0 &&
          new Intl.NumberFormat("be-BY", {
            style: "currency",
            currency: "BYN",
          }).format(total)}
      </div>
      {open && (
        <div className={cn(style.total__popup)}>
          {cartItems.length > 0 ? (
            <>
              <div className={style.total__popup__clearCart}>
                <span onClick={() => dispatch(clearCartItems())}>очистить</span>
              </div>
              <div className={style.total__popup__prod}>
                <CartProducts />{" "}
              </div>
              <div className={style.total__popup__total}>
                <CartTotal />
              </div>
            </>
          ) : (
            <div className={style.total__popup__empty}>
              <p>Корзина пустая.</p>
              <p>Добавьте товары.</p>
              <img src="1.webp" alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default HeaderCart;
