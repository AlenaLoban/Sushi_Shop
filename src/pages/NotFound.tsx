import style from '../core/scss/index.module.scss';
import image from '/404.png?url';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className={style.notFound}>
      <h2>Страница не найдена!</h2>
      <div style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
};
export default NotFound;
