import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import style from '../core/scss/index.module.scss';
import { Link } from 'react-router-dom';
import bghome from '/homeBg.jpg';
import { createPortal } from 'react-dom';

const Home: React.FC = () => {
  const [div, setDiv] = useState<any>();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setDiv(ref.current);
      console.log(ref.current);
    }
  }, []);

  const Portal = () => {
    return (
      <div>
        <h1> Helloppp</h1>
      </div>
    );
  };

  return (
    <div className={style.home} style={{ backgroundImage: `url(${bghome})` }}>
      <div className={style.home__box} id="container" ref={ref}>
        <div className={style.home__body}>
          <p>Бесплатная доставка суши и роллов</p>
          <h1>Sushi Town</h1>
          <Link to={'/catalog'}>Меню</Link>
        </div>
      </div>
      {div && createPortal(<Portal />, div)}
    </div>
  );
};
export default Home;
