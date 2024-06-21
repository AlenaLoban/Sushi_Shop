// import style from '../core/scss/index.module.scss';
// import { useParams } from 'react-router-dom';
// import { useGetProductQuery } from '../features/product/itemApi';
// import ButtonAddToCart from '../features/product/view/ButtonAddToCart';
// import { RiScales2Line } from 'react-icons/ri';
// import cn from 'classnames';
// import { useNavigate } from 'react-router-dom';
// import { createPortal } from 'react-dom';

// const DetailItem = () => {
//   const { id } = useParams();
//   const { data, isError } = useGetProductQuery(id);
//   const div = localStorage.getItem('page') || ''

//   return (
//     createPortal(<div className={cn(style.container, style.detailItem)}>

//       {isError ? (
//         <h1>ServerError</h1>
//       ) : (
//         !!data && (
//           <div className={style.detailItemInfo}>
//             <div
//               style={{ backgroundImage: `url(${data.imageUrl})` }}
//               className={style.detailItemInfo__img}
//             ></div>
//             <div className={style.detailItemInfo__body}>
//               <h1>{data.title}</h1>
//               <p>Состав : {data.consist}</p>
//               <p>
//                 Цена :{' '}
//                 {new Intl.NumberFormat('be-BY', {
//                   style: 'currency',
//                   currency: 'BYN',
//                 }).format(data.price)}
//               </p>
//               <p>
//                 Вес : <RiScales2Line /> {data.weight}
//               </p>

//               <ButtonAddToCart
//                 props={data}
//                 className={style.detailItemInfo__body__button}
//               ></ButtonAddToCart>
//             </div>
//           </div>
//               )
//       )}
//     </div>,document.getElementById('productDetailContainer') )
//   );
// };

// export default DetailItem;
