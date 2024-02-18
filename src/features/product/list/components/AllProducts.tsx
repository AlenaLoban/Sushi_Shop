import Product from "../../view/Index";
import style from "../css/products.module.scss";
import { useAppSelector } from "../../../../core/store/hooks";
import { selectFilter } from "../../../filterSlice";
import { useGetProductsQuery } from "../productApi";
import Skeleton from "./Skeleton";

const AllProducts: React.FC = () => {
  const { category, sort } = useAppSelector(selectFilter);
  const {
    data = [],
    isError,
    isLoading,
  } = useGetProductsQuery({ category, sort });

  return (
    <div className={style.allproducts}>
      {isError && <h2>Server Error</h2>}
      {isLoading
        ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
        : data.map((item) => <Product key={item.id} {...item} />)}
    </div>
  );
};
export default AllProducts;
