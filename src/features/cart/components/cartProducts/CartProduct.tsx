import style from "./css/cart.module.scss";
import cn from "classnames";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { addItem, minusCount, removeItem } from "./slice/cartSlice";
import { useAppDispatch } from "../../../../core/store/hooks";
import { IItem } from "../../../../hooks/types/data";
import React from "react";

const CartProduct: React.FC<IItem> = (props) => {
  const dispatch = useAppDispatch();
  const { id, title, price, imageUrl, count } = props;
  return (
    <div className={style.card}>
      <div
        className={style.card__img}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={cn(style.card__info, style.info)}>
        <div className={style.info__title}>{title}</div>
        <div className={style.info__parameters}>
          <div className={cn(style.info__parameters__box, style.box)}>
            <button
              className={style.box__button}
              type="button"
              onClick={() => dispatch(addItem(props))}
            >
              <LuPlus />
            </button>
            <p>{count}</p>
            <button
              className={style.box__button}
              type="button"
              disabled={count === 1}
              onClick={() => dispatch(minusCount(id))}
            >
              <LuMinus />
            </button>
          </div>
          <p>
            {new Intl.NumberFormat("be-BY", {
              style: "currency",
              currency: "BYN",
            }).format(price * count)}
          </p>
        </div>
      </div>
      <div onClick={() => dispatch(removeItem(id))}>
        <MdDeleteForever
          style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};
export default CartProduct;
