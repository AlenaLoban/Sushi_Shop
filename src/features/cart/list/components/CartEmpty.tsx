import { Link } from "react-router-dom";
import style from "../../../../core/css/index.module.scss";
import emptyCart from "/1.webp"

const CartEmpty = () => {
  return (
    <div className={style.emptyCart}>
      <h2>В корзине пока ничего нет. </h2>
      <p>
        Перейдите в <Link to="/catalog">каталог</Link>, чтобы добавить товары в
        корзину.
      </p>
      <img src={emptyCart} alt="пустая корзина" />
    </div>
  );
};
export default CartEmpty;
