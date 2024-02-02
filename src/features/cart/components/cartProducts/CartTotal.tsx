import style from "./css/cart.module.scss";
import { useAppSelector } from "../../../../core/store/hooks";
import { selectCart } from "./slice/cartSlice";

const CartTotal = () => {
  const { total } = useAppSelector(selectCart);
  return (
    <div className={style.total}>
      <p>
        Сумма заказа{" "}
        <span>
          {new Intl.NumberFormat("be-BY", {
            style: "currency",
            currency: "BYN",
          }).format(total)}
        </span>
      </p>
      <button>Оформить заказ</button>
    </div>
  );
};
export default CartTotal;
