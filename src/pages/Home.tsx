import React from 'react';
import style from '../core/scss/index.module.scss';
import { Link } from 'react-router-dom';
import bghome from '/homeBg.jpg';

const Home: React.FC = () => {
   
  return (
    <div className={style.home} style={{ backgroundImage: `url(${bghome})` }}>
      <div className={style.home__box}>
        <div className={style.home__body}>
          <p>Бесплатная доставка суши и роллов</p>
          <h1>Sushi Town</h1>
          <Link to={'/catalog'}>Меню</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
