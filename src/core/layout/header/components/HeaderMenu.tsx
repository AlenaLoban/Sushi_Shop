import React from 'react';
import style from '../scss/header.module.scss';
import { NavLink } from 'react-router-dom';

type IProps = {
  burger: boolean;
};

const HeaderMenu: React.FC<IProps> = ({ burger }) => {
  const setActive = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'rgb(187,187,189)' : '',
  });

  return (
    <div className={style.header__top__menulist}>
      <ul>
        <li>
          <NavLink to="/" style={setActive}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" style={setActive}>
            Каталог
          </NavLink>
        </li>
        {burger && (
          <li>
            <NavLink to="/cart" style={setActive}>
              Корзина
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
export default HeaderMenu;
