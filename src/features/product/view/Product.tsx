import style from './scss/index.module.scss';
import { IItem } from '../../../hooks/types/data';
import cn from 'classnames';
import { RiScales2Line } from 'react-icons/ri';
import { GiChiliPepper } from 'react-icons/gi';
import ButtonAddToCart from './ButtonAddToCart';
import {  useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import NewItem from '../../../pages/NewItem';
import WrapperPortal from '../../../pages/WrapperPortal';
import DetailItem from '../../../pages/NewItem';



export const Product: React.FC<IItem> = props => {
  const { title, imageUrl, price, weight, consist, spicy, id } = props;
  const ref = useRef<null | Window>(null);
  const [open, setOpen] = useState(false)
  const [div, setDiv] = useState<any>(null);

  // const handleClick = ()=>{
  // //  const newPage = window.open(`http://localhost:5173/Sushi_Shop/#/catalog/${id}`,'_blank')
  //    const newPage = window.open(``,'_blank')
  //   //  const detailContainer = ref.current.document.createElement('div')
  //   //  createPortal(<DetailItem/>, detailContainer)
  //    ref.current = newPage
  //    if(ref.current){
  //     ref.current.document.write('<div id="productDetailContainer"></div>')
  //     // ref.current.document.createElement('<div id="productDetailContainer"></div>')

  //     const detailContainer = ref.current.document.getElementById('productDetailContainer')
  //     localStorage.setItem('divContainer', JSON.stringify(detailContainer))
  //     if(detailContainer) {
  //       createPortal(<DetailItem/>, detailContainer)
  //     console.log('f')}

  //   }
  //   //  const detailContainer = newPage.document.createElement('div')

  //   //  newPage.document.write('<div id="productDetailContainer"></div>')

  //   // newPage.onload = function() {
  //   //   if(newPage) newPage.document.write('<div id="productDetailContainer"></div>')
  //   //   // createPortal(<DetailItem />, newPage.document.body)

  //   // }

  // }
  const handleClick = () => {
    setOpen(prev=>!prev)

  };

  return (
    <div className={style.card}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={style.card__img}
        onClick={handleClick}
      ></div>
      <div className={cn(style.card__info, style.info)}>
        <div className={style.info__top}>
          <span>
            {title}{' '}
            {spicy && <GiChiliPepper className={style.card__spicy} size={23} />}
          </span>
          <p>{consist}</p>
        </div>

        <div className={style.info__bottom}>
          <p>
            {' '}
            <RiScales2Line /> {weight} гр.
          </p>
          <div className={style.box}>
            <b>
              {' '}
              {new Intl.NumberFormat('be-BY', {
                style: 'currency',
                currency: 'BYN',
              }).format(price)}
            </b>
            <ButtonAddToCart props={props} className={style.button} />
          </div>
        </div>
      </div>
      {open && <WrapperPortal id={id}/>}
    </div>
  );
};
