import style from "../css/cart.module.scss";
import { useAppSelector } from "../../../../core/store/hooks";
import { selectCart } from "../cartSlice";
import Button from "../../../../core/ui/Button";

const CartTotal = () => {
  const { total } = useAppSelector(selectCart);
  return (
    <div className={style.total}>
      <div className={style.total__text}>
       <p>Сумма заказа{" "}: </p> 
        <span>
          {new Intl.NumberFormat("be-BY", {
            style: "currency",
            currency: "BYN",
          }).format(total)}
        </span>
      </div>
      <Button>Оформить заказ</Button>
    </div>
  );
};
export default CartTotal;
