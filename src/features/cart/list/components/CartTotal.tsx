import style from "../css/cart.module.scss";
import { useAppSelector } from "../../../../core/store/hooks";
import { selectCart } from "../cartSlice";
import Button from "../../../../core/ui/Button";

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
      <Button>Оформить заказ</Button>
    </div>
  );
};
export default CartTotal;
