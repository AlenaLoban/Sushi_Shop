import Product from "./Product";
import style from "./css/products.module.scss";
import { useAppSelector } from "../../../../core/store/hooks";
import { selectFilter } from "../productFilter/filterSlice";
import { useGetProductsQuery } from "./api/productApi";

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
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data.map((item) => <Product key={item.id} {...item} />)
      )}
    </div>
  );
};
export default AllProducts;
