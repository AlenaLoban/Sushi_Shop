import style from "./css/products.module.scss";
import { IItem } from "../../../../hooks/types/data";
import cn from "classnames";
import { RiScales2Line } from "react-icons/ri";
import { addItem } from "../../../cart/components/cartProducts/slice/cartSlice";
import { useAppDispatch } from "../../../../core/store/hooks";
import { useState } from "react";

const Product: React.FC<IItem> = (props) => {
  const { title, imageUrl, price, weight, consist } = props;
  const [isAddToCart, setIsAddToCart] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddtoCart = (props: IItem): void => {
    dispatch(addItem(props));
    setIsAddToCart(true);
  };

  return (
    <div className={style.card}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={style.card__img}
      ></div>
      <div className={cn(style.card__info, style.info)}>
        <div className={style.info__top}>
          <span>{title}</span>
          <p>{consist}</p>
        </div>
        <div className={style.info__bottom}>
          <p>
            {" "}
            <RiScales2Line /> {weight} гр.
          </p>
          <div className={style.box}>
            <b>
              {" "}
              {new Intl.NumberFormat("be-BY", {
                style: "currency",
                currency: "BYN",
              }).format(price)}
            </b>
            <div className={style.button}>
              <span onClick={() => handleAddtoCart(props)}>
                {isAddToCart ? "добавить ещё" : "в корзину"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
