import style from './scss/index.module.scss';
import { IItem } from '../../../hooks/types/data';
import cn from 'classnames';
import { RiScales2Line } from 'react-icons/ri';
import { GiChiliPepper } from 'react-icons/gi';
import ButtonAddToCart from './ButtonAddToCart';
import { createPortal } from 'react-dom';
// import DetailItem from '../../../pages/DetailItem';
import { useEffect } from 'react';

export const Product: React.FC<IItem> = props => {
  const { title, imageUrl, price, weight, consist, spicy, id } = props;

  // const handleClick = ()=>{
  // //  const newPage = window.open(`http://localhost:5173/Sushi_Shop/#/catalog/${id}`,'_blank') 
  //    const newPage = window.open(``,'_blank')
  //   //  newPage.document.write('<div id="productDetailContainer"></div>')

  //   newPage.onload = function() {
  //     if(newPage) newPage.document.write('<div id="productDetailContainer"></div>')
  //     // createPortal(<DetailItem />, newPage.document.body)
      
  //   }

  // }


  return (
    <div className={style.card}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={style.card__img}
        // onClick={handleClick}
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
    </div>
  );
};


