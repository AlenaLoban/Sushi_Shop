import { SlBasket } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import style from "./css/header.module.scss";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectCart,
  clearCartItems,
} from "../../../features/cart/list/cartSlice";
import CartItems from "../../../features/cart/list/components/CartItems";
import CartTotal from "../../../features/cart/list/components/CartTotal";
import { useState } from "react";
import CartEmpty from "../../../features/cart/list/components/CartEmpty";

const HeaderCart = () => {
  const [open, setOpen] = useState(false);
  const { total, cartItems } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const totalCounter = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <div className={style.total} >
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
        <div className={style.total__popup}>
          <IoClose
            className={style.total__popup__close}
            onClick={() => setOpen(false)}
          />
          {cartItems.length > 0 ? (
            <>
              <div className={style.total__popup__clearCart}>
                <p onClick={() => dispatch(clearCartItems())}>очистить</p>
              </div>
              <div className={style.total__popup__prod}>
                <CartItems />{" "}
              </div>
              <div className={style.total__popup__total}>
                <CartTotal />
              </div>
            </>
          ) : (
            <div className={style.total__popup__empty}>
              <CartEmpty />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default HeaderCart;
