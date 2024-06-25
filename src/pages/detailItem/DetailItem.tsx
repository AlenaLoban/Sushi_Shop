import style from '../../core/scss/index.module.scss';
import { useGetProductQuery } from '../../features/product/itemApi';
import ButtonAddToCart from '../../features/product/view/ButtonAddToCart';
import { RiScales2Line } from 'react-icons/ri';
import cn from 'classnames';

type IdetailItem = {
  id: number;
};

const DetailItem: React.FC<IdetailItem> = ({ id }) => {
  const itemId = id.toString();

  const { data, isError } = useGetProductQuery(itemId);

  return (
    <div className={cn(style.detailItem)}>
      {isError ? (
        <h1>ServerError</h1>
      ) : (
        !!data && (
          <div className={style.detailItemInfo}>
            <div
              style={{ backgroundImage: `url(${data.imageUrl})` }}
              className={style.detailItemInfo__img}
            ></div>
            <div className={style.detailItemInfo__body}>
              <h1>{data.title}</h1>
              <p>Состав : {data.consist}</p>
              <p>
                Цена :{' '}
                {new Intl.NumberFormat('be-BY', {
                  style: 'currency',
                  currency: 'BYN',
                }).format(data.price)}
              </p>
              <p>
                Вес : <RiScales2Line /> {data.weight}
              </p>

              <ButtonAddToCart
                props={data}
                className={style.detailItemInfo__body__button}
              ></ButtonAddToCart>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DetailItem;
